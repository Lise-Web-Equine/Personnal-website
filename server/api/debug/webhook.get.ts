export default defineEventHandler(async (event) => {
  return {
    stripeWebhookSecret: process.env.STRIPE_WEBHOOK_SECRET ? 'Present' : 'Not found',
    stripeWebhookSecretLength: process.env.STRIPE_WEBHOOK_SECRET?.length || 0,
    resendConfirmationTemplateId: process.env.RESEND_CONFIRMATION_TEMPLATE_ID ? 'Present' : 'Not found',
    resendConfirmationTemplateIdLength: process.env.RESEND_CONFIRMATION_TEMPLATE_ID?.length || 0,
    resendAudienceId: process.env.RESEND_AUDIENCE_ID ? 'Present' : 'Not found',
    allEnvKeys: Object.keys(process.env).filter(key => key.includes('WEBHOOK') || key.includes('TEMPLATE'))
  }
})
