import Stripe from 'stripe'
import { ResendService } from '~/server/services/resend.service'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    
    console.log('🚀 API Stripe create-session appelée')
    console.log('📦 Body reçu:', JSON.stringify(body, null, 2))
    
    if (!body.firstName || !body.email || !body.cartItems || body.cartItems.length === 0) {
      console.log('❌ Validation échouée:')
      console.log('- firstName:', !!body.firstName)
      console.log('- email:', !!body.email)
      console.log('- cartItems:', !!body.cartItems)
      console.log('- cartItems.length:', body.cartItems?.length)
      throw createError({
        statusCode: 400,
        statusMessage: 'FirstName, email, cart items and acceptNewsletter are required'
      })
    }

    console.log('✅ Validation OK, traitement en cours...')
    console.log('- acceptNewsletter:', body.acceptNewsletter)
    console.log('- firstName:', body.firstName)
    console.log('- email:', body.email)

    // Ajouter le contact à Resend si newsletter acceptée
    if (body.acceptNewsletter && process.env.RESEND_AUDIENCE_ID) {
      try {
        console.log('🔧 Vérification variables Resend:')
        console.log('- RESEND_AUDIENCE_ID:', process.env.RESEND_AUDIENCE_ID ? 'Présent' : 'Manquant')
        console.log('- RESEND_BUYERS_SEGMENT_ID:', process.env.RESEND_BUYERS_SEGMENT_ID ? 'Présent' : 'Manquant')
        
        // Ajouter le contact à l'audience principale
        await ResendService.addContact(body.email, process.env.RESEND_AUDIENCE_ID)
        console.log('✅ Contact ajouté à Resend:', body.email)
        
        // Ajouter le contact au segment "Acheteurs potentiels" si disponible
        if (process.env.RESEND_BUYERS_SEGMENT_ID) {
          console.log('🎯 Tentative ajout au segment:', process.env.RESEND_BUYERS_SEGMENT_ID)
          try {
            await ResendService.addContactToSegment(body.email, process.env.RESEND_BUYERS_SEGMENT_ID)
            console.log('✅ Contact ajouté au segment acheteurs:', body.email)
          } catch (segmentError) {
            console.error('⚠️ Erreur ajout segment acheteurs:', segmentError)
            console.error('⚠️ Détails erreur:', JSON.stringify(segmentError, null, 2))
            // Ne pas bloquer si l'ajout au segment échoue
          }
        } else {
          console.log('⚠️ RESEND_BUYERS_SEGMENT_ID non configuré, skip segment')
        }
      } catch (error) {
        console.error('⚠️ Erreur ajout contact Resend:', error)
        console.error('⚠️ Détails erreur:', JSON.stringify(error, null, 2))
        // Ne pas bloquer le paiement si Resend échoue
      }
    } else {
      console.log('ℹ️ Newsletter non acceptée ou RESEND_AUDIENCE_ID manquant')
      console.log('- acceptNewsletter:', body.acceptNewsletter)
      console.log('- RESEND_AUDIENCE_ID:', process.env.RESEND_AUDIENCE_ID ? 'Présent' : 'Manquant')
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
      success_url: `${process.env.NUXT_PUBLIC_APP_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NUXT_PUBLIC_APP_URL}/cart`,
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
    console.error('Erreur création session Stripe:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Error creating Stripe session'
    })
  }
})
