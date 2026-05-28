import Stripe from 'stripe'
import { ResendService } from '~/server/services/resend.service'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const stripe = new Stripe(config.stripeSecretKey)
  const body = await readBody(event)
  const signature = getHeader(event, 'stripe-signature')

  if (!signature) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Signature Stripe manquante'
    })
  }

  try {
    const webhookEvent = stripe.webhooks.constructEvent(
      body,
      signature,
      config.stripeWebhookSecret
    )

    switch (webhookEvent.type) {
      case 'checkout.session.completed': {
        const session = webhookEvent.data.object as Stripe.Checkout.Session
        await handleSuccessfulPayment(session, config)
        break
      }

      case 'checkout.session.expired': {
        break
      }

      default:
        break
    }

    return { received: true }
  } catch (err) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Erreur webhook'
    })
  }
})

async function handleSuccessfulPayment(session: Stripe.Checkout.Session, config: ReturnType<typeof useRuntimeConfig>) {
  try {
    const customerEmail = session.customer_details?.email
    if (!customerEmail) {
      throw new Error('Email client manquant')
    }

    await addContactToResend(customerEmail, config)
    await sendConfirmationEmail(customerEmail, session, config)
  } catch (error) {
    // Silently log error
  }
}

async function addContactToResend(email: string, config: ReturnType<typeof useRuntimeConfig>) {
  try {
    await ResendService.addContact(email, config.resendAudienceId)
  } catch (error) {
    // Silently log error
  }
}

async function sendConfirmationEmail(email: string, session: Stripe.Checkout.Session, config: ReturnType<typeof useRuntimeConfig>) {
  try {
    const cartItems = JSON.parse(session.metadata?.cart_items || '[]')
    const item = cartItems[0] || null

    await ResendService.sendTemplateEmail(
      email,
      config.resendConfirmationTemplateId,
      {
        CUSTOMER_NAME: session.customer_details?.name || 'Client',
        PRODUCT_NAME: item?.template?.name || 'Modèle',
        PRODUCT_DESCRIPTION: item?.template?.description || 'Description',
        DOWNLOAD_URL: item?.template?.download_url || '#',
        SESSION_ID: session.id
      }
    )
  } catch (error) {
    // Silently log error
  }
}

