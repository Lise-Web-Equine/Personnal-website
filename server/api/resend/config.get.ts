export default defineEventHandler(async (event) => {
  // Utiliser process.env directement côté serveur
  return {
    resendApiKey: process.env.RESEND_API_KEY ? 'Present' : 'Not found',
    resendApiKeyLength: process.env.RESEND_API_KEY?.length || 0,
    resendFromEmail: process.env.RESEND_FROM_EMAIL || 'Not found',
    resendAudienceId: process.env.RESEND_AUDIENCE_ID || 'Not found',
    resendConfirmationTemplateId: process.env.RESEND_CONFIRMATION_TEMPLATE_ID || 'Not found'
  }
})
