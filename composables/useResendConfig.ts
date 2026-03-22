export const useResendConfig = async () => {
  const { resendFromEmail, resendAudienceId, resendConfirmationTemplateId } = await $fetch('/api/resend/config')
  
  if (!resendFromEmail || !resendAudienceId || !resendConfirmationTemplateId) {
    throw new Error('Resend configuration missing')
  }
  
  return {
    resendFromEmail,
    resendAudienceId,
    resendConfirmationTemplateId
  }
}
