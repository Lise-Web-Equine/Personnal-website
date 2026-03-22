import { ResendService } from '~/server/services/resend.service'

export default defineEventHandler(async (event) => {
  console.log('📧 API Simple Email appelée')
  
  try {
    const body = await readBody(event)
    console.log('📧 Body reçu:', body)
    
    if (!body.email) {
      console.log('❌ Email manquant')
      throw createError({
        statusCode: 400,
        statusMessage: 'Email required'
      })
    }

    console.log('📤 Envoi email simple en cours...')
    
    // Envoyer un email simple sans dépendre de Stripe
    await ResendService.sendTransactionalEmail(
      body.email,
      'Test Email Simple - Lise Web Equine',
      `
        <h1>Email de test simple</h1>
        <p>Bonjour,</p>
        <p>Ceci est un email de test pour vérifier que Resend fonctionne.</p>
        <p>Email envoyé à: ${body.email}</p>
        <p>Timestamp: ${new Date().toISOString()}</p>
        
        <p>Merci,<br>Lise Web Equine</p>
      `
    )
    
    console.log('✅ Email simple envoyé à:', body.email)
    
    return {
      success: true,
      message: 'Simple email sent successfully'
    }
  } catch (error) {
    console.error('❌ Erreur envoi email simple:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Error sending simple email'
    })
  }
})
