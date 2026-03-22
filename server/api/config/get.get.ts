export default defineEventHandler(async (event) => {
  // Vérifier l'authentification via le header d'autorisation
  const authorization = getHeader(event, 'authorization')
  
  if (!authorization) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Authorization header required'
    })
  }
  
  // Utiliser process.env directement côté serveur
  return {
    supabaseUrl: process.env.SUPABASE_URL ? 'Present' : 'Not found',
    supabaseKey: process.env.SUPABASE_KEY ? 'Present' : 'Not found',
    resendApiKey: process.env.RESEND_API_KEY ? 'Present' : 'Not found',
    resendFromEmail: process.env.RESEND_FROM_EMAIL || 'Not found',
    resendAudienceId: process.env.RESEND_AUDIENCE_ID || 'Not found',
    resendConfirmationTemplateId: process.env.RESEND_CONFIRMATION_TEMPLATE_ID || 'Not found',
    stripeSecretKey: process.env.STRIPE_SECRET_KEY ? 'Present' : 'Not found',
    stripeWebhookSecret: process.env.STRIPE_WEBHOOK_SECRET ? 'Present' : 'Not found',
    stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY ? 'Present' : 'Not found',
    appUrl: process.env.NUXT_PUBLIC_APP_URL || 'Not found'
  }
})
