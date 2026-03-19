import Stripe from 'stripe'
import { Resend } from 'resend'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)
const resend = new Resend(process.env.RESEND_API_KEY!)

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
    await resend.contacts.create({
      email: email,
      audienceId: process.env.RESEND_AUDIENCE_ID! // ID de l'audience "clients"
    })
    
    console.log('Contact ajouté à Resend:', email)
  } catch (error) {
    console.error('Erreur ajout contact Resend:', error)
  }
}

async function sendConfirmationEmail(email: string, session: Stripe.Checkout.Session) {
  try {
    const cartItems = JSON.parse(session.metadata?.cart_items || '[]')
    
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to: [email],
      subject: '🎉 Vos modèles sont prêts !',
      html: generateConfirmationEmailHTML(cartItems, session.id!)
    })
    
    console.log('Email de confirmation envoyé à:', email)
  } catch (error) {
    console.error('Erreur email confirmation:', error)
  }
}

function generateConfirmationEmailHTML(cartItems: any[], sessionId: string) {
  const itemsHTML = cartItems.map(item => `
    <div style="border-bottom: 1px solid #eee; padding: 15px 0;">
      <h3 style="margin: 0 0 5px 0; color: #333;">${item.template_id}</h3>
      <p style="margin: 0; color: #666; font-size: 14px;">Quantité: ${item.quantity} | Prix: ${(item.price * item.quantity).toFixed(2)}€</p>
    </div>
  `).join('')

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Vos modèles Lise Web Équine</title>
    </head>
    <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px; text-align: center; margin-bottom: 30px;">
        <h1 style="color: white; margin: 0; font-size: 28px;">🎉 Merci pour votre achat !</h1>
        <p style="color: white; margin: 10px 0 0 0; opacity: 0.9;">Vos modèles sont maintenant disponibles</p>
      </div>
      
      <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
        <h2 style="color: #333; margin: 0 0 20px 0;">Récapitulatif de votre commande</h2>
        ${itemsHTML}
        
        <div style="margin-top: 30px; padding: 20px; background: #f8f9fa; border-radius: 8px;">
          <h3 style="margin: 0 0 15px 0; color: #333;">📚 Guides inclus</h3>
          <p style="margin: 0; color: #666; line-height: 1.6;">
            Chaque modèle inclut un guide détaillé pour vous aider à l'utiliser efficacement. 
            Vous trouverez tous les guides dans votre espace de téléchargement.
          </p>
        </div>
        
        <div style="margin-top: 30px; text-align: center;">
          <a href="${process.env.NUXT_PUBLIC_APP_URL}/download?session=${sessionId}" 
             style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 15px 30px; text-decoration: none; border-radius: 25px; font-weight: bold; display: inline-block;">
            Accéder à mes téléchargements
          </a>
        </div>
      </div>
      
      <div style="text-align: center; margin-top: 30px; color: #666; font-size: 12px;">
        <p>Vous avez des questions ? Contactez-nous à support@lisewebequine.com</p>
        <p style="margin-top: 10px;">Lise Web Équine - Vos partenaires en communication équine</p>
      </div>
    </body>
    </html>
  `
}
