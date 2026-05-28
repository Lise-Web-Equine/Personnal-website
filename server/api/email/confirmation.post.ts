import Stripe from 'stripe'
import { ResendService } from '~/server/services/resend.service'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()

  try {
    const body = await readBody(event)

    if (!body.email || !body.sessionId) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Email and sessionId required'
      })
    }

    const stripe = new Stripe(config.stripeSecretKey)
    const session = await stripe.checkout.sessions.retrieve(body.sessionId)

    let item = null
    try {
      if (session.metadata?.cart_items) {
        const items = JSON.parse(session.metadata.cart_items)
        item = items[0] || null
      }
    } catch (error) {
      // Ignore parse error
    }

    if (config.resendConfirmationTemplateId) {
      await ResendService.sendTemplateEmail(
        body.email,
        config.resendConfirmationTemplateId,
        {
          CUSTOMER_NAME: session.metadata?.first_name || session.customer_details?.name || 'Client',
          PRODUCT_NAME: item?.template?.name || 'Modèle',
          PRODUCT_DESCRIPTION: item?.template?.description || 'Description',
          DOWNLOAD_URL: item?.template?.download_url || '#',
          SESSION_ID: session.id
        }
      )
    } else {
      await ResendService.sendTransactionalEmail(
        body.email,
        'Merci pour votre achat - Lise Web Equine',
        `
          <h1>Merci pour votre achat !</h1>
          <p>Bonjour ${session.customer_details?.name || 'Client'},</p>
          <p>Votre paiement a été traité avec succès.</p>
          <p><strong>Numéro de session :</strong> ${session.id}</p>
          <p><strong>Email :</strong> ${body.email}</p>

          <h2>Vos modèles</h2>
          <p>Vous allez recevoir vos liens de téléchargement dans un prochain email.</p>

          <p>Merci,<br>Lise Web Equine</p>
        `
      )
    }

    return {
      success: true,
      message: 'Email sent successfully',
      usedTemplate: !!config.resendConfirmationTemplateId
    }
  } catch (error: any) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Error sending email'
    })
  }
})
