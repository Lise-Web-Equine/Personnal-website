import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    
    // Log pour debugging
    console.log('Cart items reçus:', JSON.stringify(body.cartItems, null, 2))
    
    if (!body.cartItems || body.cartItems.length === 0) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Le panier est vide'
      })
    }

    // Créer les line items pour Stripe
    const lineItems = body.cartItems.map((item: any) => {
      // Log pour chaque item
      console.log('Item template:', JSON.stringify(item.template, null, 2))
      
      // Utiliser directement le nom du template
      const templateName = item.template?.name?.substring(0, 100) || 'Modèle'
      
      // Couper la description, ajouter trois points et sauter une ligne
      const shortDescription = item.template?.description?.substring(0, 120) || ''
      const descriptionWithDots = shortDescription ? shortDescription + '...' : ''
      const guideInfo = '✅ Le guide : Autonome et Serein'
      const finalDescription = descriptionWithDots + (descriptionWithDots ? '\n\n' : '') + guideInfo
      
      return {
        price_data: {
          currency: 'eur',
          product_data: {
            name: templateName,
            description: finalDescription
          },
          unit_amount: Math.round((item.template?.price || 0) * 100)
        },
        quantity: item.quantity || 1
      }
    })

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
        })))
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
      statusMessage: 'Erreur lors de la création de la session de paiement'
    })
  }
})
