import { ResendService } from '~/server/services/resend.service'

export default defineEventHandler(async (event) => {
  console.log('📧 API Contact appelée')
  
  try {
    const body = await readBody(event)
    console.log('📧 Body reçu:', body)
    
    if (!body.email || !body.name || !body.message) {
      console.log('❌ Champs manquants')
      throw createError({
        statusCode: 400,
        statusMessage: 'Missing required fields'
      })
    }

    console.log('📤 Envoi email contact en cours...')
    
    // Envoyer l'email à l'administrateur
    await ResendService.sendTransactionalEmail(
      process.env.RESEND_FROM_EMAIL!,
      `Nouveau message de ${body.name} - Lise Web Equine`,
      `
        <h1>Nouveau message depuis le formulaire de contact</h1>
        
        <p><strong>Nom:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Service souhaité:</strong> ${body.service || 'Non spécifié'}</p>
        
        <h2>Message:</h2>
        <p>${body.message}</p>
        
        <hr>
        <p><em>Envoyé le ${new Date().toLocaleString('fr-FR')}</em></p>
      `
    )
    
    console.log('✅ Email contact envoyé à:', process.env.RESEND_FROM_EMAIL)
    
    return {
      success: true,
      message: 'Contact email sent successfully'
    }
  } catch (error) {
    console.error('❌ Erreur envoi email contact:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Error sending contact email'
    })
  }
})
