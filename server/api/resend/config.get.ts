export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  return {
    resendApiKey: config.resendApiKey ? 'Present' : 'Not found',
    resendApiKeyLength: config.resendApiKey?.length || 0,
    resendFromEmail: config.resendFromEmail || 'Not found',
    resendToEmail: config.resendToEmail || 'Not found',
    resendAudienceId: config.resendAudienceId || 'Not found',
    resendConfirmationTemplateId: config.resendConfirmationTemplateId || 'Not found'
  }
})
