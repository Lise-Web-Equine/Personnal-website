import { ResendService } from '~/server/services/resend.service'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const { email, subject, htmlContent, audienceType } = body
    
    let recipients: string[] = []
    
    if (audienceType === 'all') {
      // Envoyer à tous les contacts
      const audiences = await ResendService.listAudiences()
      // Logique pour récupérer tous les contacts des audiences
      recipients = [email] // Pour l'instant, juste l'email fourni
    } else {
      recipients = [email]
    }
    
    const result = await ResendService.sendNewsletter(
      recipients,
      subject,
      htmlContent
    )
    
    return {
      success: true,
      messageId: result.id,
      recipients: recipients.length
    }
  } catch (error) {
    console.error('Erreur envoi newsletter:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Erreur lors de l\'envoi de la newsletter'
    })
  }
})
