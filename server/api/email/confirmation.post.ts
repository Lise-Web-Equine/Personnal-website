import Stripe from 'stripe'
import { ResendService } from '~/server/services/resend.service'

export default defineEventHandler(async (event) => {
  console.log('📧 API Email Confirmation appelée')
  
  try {
    const body = await readBody(event)
    console.log('📧 Body reçu:', body)
    
    if (!body.email || !body.sessionId) {
      console.log('❌ Données manquantes - email:', body.email, 'sessionId:', body.sessionId)
      throw createError({
        statusCode: 400,
        statusMessage: 'Email and sessionId required'
      })
    }

    console.log('🔍 Récupération session Stripe:', body.sessionId)
    
    // Récupérer les détails de la session Stripe
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)
    console.log('🔑 Stripe initialisé avec clé:', process.env.STRIPE_SECRET_KEY ? 'Présente' : 'Manquante')
    
    const session = await stripe.checkout.sessions.retrieve(body.sessionId)
    console.log('✅ Session Stripe récupérée, email:', session.customer_details?.email)
    
    // Parser les items du panier depuis les metadata (un seul produit)
    let item = null
    try {
      if (session.metadata?.cart_items) {
        console.log('📦 Cart items bruts:', session.metadata.cart_items)
        const items = JSON.parse(session.metadata.cart_items)
        item = items[0] || null // Prendre le premier (et seul) item
        console.log('📦 Item unique:', item)
      } else {
        console.log('⚠️ Aucun cart_items dans les metadata')
      }
    } catch (error) {
      console.log('⚠️ Impossible de parser les items du panier:', error)
    }
    
    // Envoyer l'email avec template Resend
    console.log('📤 Envoi email avec template Resend...')
    
    const templateId = process.env.RESEND_CONFIRMATION_TEMPLATE_ID
    console.log('📋 Template ID:', templateId ? 'Présent' : 'Manquant')
    
    if (templateId) {
      // Utiliser le template Resend avec les bonnes variables (un seul produit)
      console.log('🔄 Appel ResendService.sendTemplateEmail...')
      await ResendService.sendTemplateEmail(
        body.email,
        templateId,
        {
          CUSTOMER_NAME: session.customer_details?.name || 'Client',
          PRODUCT_NAME: item?.template?.name || 'Modèle',
          PRODUCT_DESCRIPTION: item?.template?.description || 'Description',
          DOWNLOAD_URL: item?.template?.download_url || '#',
          SESSION_ID: session.id
        }
      )
      console.log('✅ Email avec template envoyé à:', body.email)
    } else {
      console.log('⚠️ Pas de template ID, utilisation du fallback')
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
  } catch (error: any) {
    console.error('❌ Erreur envoi email confirmation:', error)
    console.error('❌ Stack trace:', error.stack)
    throw createError({
      statusCode: 500,
      statusMessage: 'Error sending email'
    })
  }
})
