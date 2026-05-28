export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  return {
    resendApiKey: config.resendApiKey ? 'Present' : 'Not found',
    resendApiKeyLength: config.resendApiKey?.length || 0,
    resendApiKeyStart: config.resendApiKey?.substring(0, 10) || 'N/A',
    resendAudienceId: config.resendAudienceId ? 'Present' : 'Not found',
    resendAudienceIdValue: config.resendAudienceId || 'N/A',
    resendBuyersSegmentId: config.resendBuyersSegmentId ? 'Present' : 'Not found',
    resendBuyersSegmentIdValue: config.resendBuyersSegmentId || 'N/A',
    allEnvKeys: Object.keys(process.env).filter(key => key.includes('RESEND'))
  }
})
