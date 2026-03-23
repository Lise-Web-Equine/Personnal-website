import Stripe from 'stripe'
import { ResendService } from '~/server/services/resend.service'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const signature = getHeader(event, 'stripe-signature')

  if (!signature) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Signature Stripe manquante'
    })
  }

  try {
    // Vérifier le webhook
    const webhookEvent = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    )

    // Traiter les événements
    switch (webhookEvent.type) {
      case 'checkout.session.completed': {
        const session = webhookEvent.data.object as Stripe.Checkout.Session
        await handleSuccessfulPayment(session)
        break
      }
      
      case 'checkout.session.expired': {
        console.log('Session de paiement expirée:', webhookEvent.data.object.id)
        break
      }
      
      default:
        console.log(`Événement non traité: ${webhookEvent.type}`)
    }

    return { received: true }
  } catch (err) {
    console.error('Erreur webhook Stripe:', err)
    throw createError({
      statusCode: 400,
      statusMessage: 'Erreur webhook'
    })
  }
})

async function handleSuccessfulPayment(session: Stripe.Checkout.Session) {
  try {
    const customerEmail = session.customer_details?.email
    if (!customerEmail) {
      throw new Error('Email client manquant')
    }

    // Ajouter le client à l'audience Resend
    await addContactToResend(customerEmail)
    
    // Envoyer l'email de confirmation
    await sendConfirmationEmail(customerEmail, session)
    
    console.log('Paiement traité avec succès pour:', customerEmail)
  } catch (error) {
    console.error('Erreur traitement paiement:', error)
  }
}

async function addContactToResend(email: string) {
  try {
    await ResendService.addContact(email, process.env.RESEND_AUDIENCE_ID!)
    
    console.log('Contact ajouté à Resend:', email)
  } catch (error) {
    console.error('Erreur ajout contact Resend:', error)
  }
}

async function sendConfirmationEmail(email: string, session: Stripe.Checkout.Session) {
  try {
    const cartItems = JSON.parse(session.metadata?.cart_items || '[]')
    const item = cartItems[0] || null // Prendre le premier (et seul) item
    
    await ResendService.sendTemplateEmail(
      email,
      process.env.RESEND_CONFIRMATION_TEMPLATE_ID!,
      {
        CUSTOMER_NAME: session.customer_details?.name || 'Client',
        PRODUCT_NAME: item?.template?.name || 'Modèle',
        PRODUCT_DESCRIPTION: item?.template?.description || 'Description',
        DOWNLOAD_URL: item?.template?.download_url || '#',
        SESSION_ID: session.id
      }
    )
    
    console.log('Email de confirmation envoyé à:', email)
  } catch (error) {
    console.error('Erreur email confirmation:', error)
  }
}

