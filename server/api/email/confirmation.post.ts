import Stripe from 'stripe'
import { ResendService } from '~/server/services/resend.service'

export default defineEventHandler(async (event) => {
  console.log('📧 API Email Confirmation appelée')
  
  try {
    const body = await readBody(event)
    console.log('📧 Body reçu:', body)
    
    if (!body.email || !body.sessionId) {
      console.log('❌ Données manquantes')
      throw createError({
        statusCode: 400,
        statusMessage: 'Email and sessionId required'
      })
    }

    console.log('🔍 Récupération session Stripe:', body.sessionId)
    
    // Récupérer les détails de la session Stripe
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)
    const session = await stripe.checkout.sessions.retrieve(body.sessionId)
    
    console.log('✅ Session Stripe récupérée, email:', session.customer_details?.email)
    
    // Parser les items du panier depuis les metadata
    let items = []
    try {
      if (session.metadata?.cart_items) {
        items = JSON.parse(session.metadata.cart_items)
      }
    } catch (error) {
      console.log('⚠️ Impossible de parser les items du panier')
    }
    
    // Envoyer l'email avec template Resend
    console.log('📤 Envoi email avec template Resend...')
    
    const templateId = process.env.RESEND_CONFIRMATION_TEMPLATE_ID
    if (templateId) {
      // Utiliser le template Resend
      await ResendService.sendTemplateEmail(
        body.email,
        templateId,
        {
          customer_name: session.customer_details?.name || 'Client',
          items: items,
          session_id: session.id
        }
      )
      console.log('✅ Email avec template envoyé à:', body.email)
    } else {
      // Fallback vers email simple si pas de template
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
      console.log('✅ Email simple envoyé à:', body.email)
    }
    
    return {
      success: true,
      message: 'Email sent successfully',
      usedTemplate: !!templateId
    }
  } catch (error) {
    console.error('❌ Erreur envoi email confirmation:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Error sending email'
    })
  }
})
