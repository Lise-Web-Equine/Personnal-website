export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  return {
    stripeWebhookSecret: config.stripeWebhookSecret ? 'Present' : 'Not found',
    stripeWebhookSecretLength: config.stripeWebhookSecret?.length || 0,
    resendConfirmationTemplateId: config.resendConfirmationTemplateId ? 'Present' : 'Not found',
    resendConfirmationTemplateIdLength: config.resendConfirmationTemplateId?.length || 0,
    resendAudienceId: config.resendAudienceId ? 'Present' : 'Not found',
    allEnvKeys: Object.keys(process.env).filter(key => key.includes('WEBHOOK') || key.includes('TEMPLATE'))
  }
})
