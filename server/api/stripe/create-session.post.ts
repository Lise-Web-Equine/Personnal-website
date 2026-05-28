import Stripe from 'stripe'
import { ResendService } from '~/server/services/resend.service'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const stripe = new Stripe(config.stripeSecretKey)

  try {
    const body = await readBody(event)

    if (!body.firstName || !body.email || !body.cartItems || body.cartItems.length === 0) {
      throw createError({
        statusCode: 400,
        statusMessage: 'FirstName, email, cart items and acceptNewsletter are required'
      })
    }

    // Ajouter le contact à Resend si newsletter acceptée
    if (body.acceptNewsletter && config.resendAudienceId) {
      try {
        await ResendService.addContact(body.email, config.resendAudienceId)

        if (config.resendBuyersSegmentId) {
          try {
            await ResendService.addContactToSegment(body.email, config.resendBuyersSegmentId)
          } catch (segmentError) {
            // Ne pas bloquer si l'ajout au segment échoue
          }
        }
      } catch (error) {
        // Ne pas bloquer le paiement si Resend échoue
      }
    }

    // Limiter à un seul produit
    const firstItem = body.cartItems[0]
    
    // Créer les line items pour Stripe
    const lineItems = [
      {
        price_data: {
          currency: 'eur',
          product_data: {
            name: firstItem.template.name,
            description: firstItem.template.description,
            images: firstItem.template.image_url ? [firstItem.template.image_url] : []
          },
          unit_amount: Math.round(firstItem.template.price * 100)
        },
        quantity: firstItem.quantity || 1
      }
    ]

    // Créer la session de paiement
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${config.appUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${config.appUrl}/cart`,
      customer_email: body.email,
      locale: 'fr', // Interface en français
      metadata: {
        cart_items: JSON.stringify(body.cartItems.map((item: any) => ({
          template: {
            id: item.template.id,
            name: item.template.name,
            price: item.template.price,
            description: item.template.description,
            download_url: item.template.download_url
          },
          quantity: item.quantity || 1
        }))),
        accept_newsletter: body.acceptNewsletter.toString(),
        first_name: body.firstName
      }
    })

    return {
      sessionId: session.id,
      url: session.url
    }
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Error creating Stripe session'
    })
  }
})
