export default defineEventHandler(async (event) => {
  // Vérifier l'authentification via le header d'autorisation
  const authorization = getHeader(event, 'authorization')

  if (!authorization) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Authorization header required'
    })
  }

  const config = useRuntimeConfig()
  return {
    supabaseUrl: config.supabaseUrl ? 'Present' : 'Not found',
    supabaseKey: config.supabaseKey ? 'Present' : 'Not found',
    resendApiKey: config.resendApiKey ? 'Present' : 'Not found',
    resendFromEmail: config.resendFromEmail || 'Not found',
    resendAudienceId: config.resendAudienceId || 'Not found',
    resendConfirmationTemplateId: config.resendConfirmationTemplateId || 'Not found',
    stripeSecretKey: config.stripeSecretKey ? 'Present' : 'Not found',
    stripeWebhookSecret: config.stripeWebhookSecret ? 'Present' : 'Not found',
    stripePublishableKey: config.stripePublishableKey ? 'Present' : 'Not found',
    appUrl: config.appUrl || 'Not found'
  }
})
