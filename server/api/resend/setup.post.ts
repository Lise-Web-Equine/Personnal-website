import { ResendService } from '~/server/services/resend.service'

export default defineEventHandler(async (event) => {
  try {
    // Créer les audiences nécessaires
    const clientsAudience = await ResendService.createAudience('Clients Acheteurs')
    const prospectsAudience = await ResendService.createAudience('Newsletter Prospects')
    
    return {
      success: true,
      audiences: {
        clients: clientsAudience,
        prospects: prospectsAudience
      }
    }
  } catch (error) {
    console.error('Erreur setup audiences:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Erreur lors de la création des audiences'
    })
  }
})
