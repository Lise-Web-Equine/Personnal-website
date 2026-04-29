export default defineEventHandler(async (event) => {
  return {
    resendApiKey: process.env.RESEND_API_KEY ? 'Present' : 'Not found',
    resendApiKeyLength: process.env.RESEND_API_KEY?.length || 0,
    resendApiKeyStart: process.env.RESEND_API_KEY?.substring(0, 10) || 'N/A',
    resendAudienceId: process.env.RESEND_AUDIENCE_ID ? 'Present' : 'Not found',
    resendAudienceIdValue: process.env.RESEND_AUDIENCE_ID || 'N/A',
    resendBuyersSegmentId: process.env.RESEND_BUYERS_SEGMENT_ID ? 'Present' : 'Not found',
    resendBuyersSegmentIdValue: process.env.RESEND_BUYERS_SEGMENT_ID || 'N/A',
    allEnvKeys: Object.keys(process.env).filter(key => key.includes('RESEND'))
  }
})
