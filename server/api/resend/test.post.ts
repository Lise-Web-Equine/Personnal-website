import { ResendService } from '~/server/services/resend.service'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    
    if (!body.to) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Email destinataire requis'
      })
    }

    // Test simple d'envoi d'email
    const result = await ResendService.sendTransactionalEmail(
      body.to,
      'Test Email - Lise Web Equine',
      `
        <h1>Test d'envoi d'email</h1>
        <p>Ceci est un email de test pour vérifier que Resend fonctionne correctement.</p>
        <p>Si vous recevez cet email, tout est OK !</p>
        <p>Merci,<br>Lise Web Equine</p>
      `
    )

    return {
      success: true,
      result: result,
      message: 'Email de test envoyé avec succès'
    }
  } catch (error) {
    console.error('Erreur test email:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Erreur lors de l\'envoi de l\'email de test'
    })
  }
})
