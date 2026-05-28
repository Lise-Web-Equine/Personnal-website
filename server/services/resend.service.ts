import { Resend } from 'resend'

let resendInstance: Resend | null = null

function getResendClient() {
  if (!resendInstance) {
    const config = useRuntimeConfig()
    if (!config.resendApiKey) {
      throw new Error('RESEND_API_KEY is required')
    }
    resendInstance = new Resend(config.resendApiKey)
  }
  return resendInstance
}

export class ResendService {

  static async addContact(email: string, audienceId: string) {
    const resend = getResendClient()
    return await resend.contacts.create({ email, audienceId })
  }

  static async addContactToSegment(email: string, segmentId: string) {
    const resend = getResendClient()
    return await resend.contacts.create({ email, audienceId: segmentId })
  }

  static async sendNewsletter(to: string[], subject: string, htmlContent: string) {
    const config = useRuntimeConfig()
    const resend = getResendClient()
    return await resend.emails.send({
      from: `Lise Web Equine <${config.resendFromEmail}>`,
      to,
      subject,
      html: htmlContent
    })
  }

  static async sendTransactionalEmail(to: string, subject: string, htmlContent: string) {
    const config = useRuntimeConfig()
    const resend = getResendClient()
    return await resend.emails.send({
      from: `Lise Web Equine <${config.resendFromEmail}>`,
      to: [to],
      subject,
      html: htmlContent
    })
  }

  static async sendTemplateEmail(to: string, templateId: string, variables: Record<string, any>) {
    const config = useRuntimeConfig()
    const resend = getResendClient()
    return await resend.emails.send({
      from: `Lise Web Equine <${config.resendFromEmail}>`,
      to: [to],
      template: {
        id: templateId,
        variables
      }
    })
  }

  static async createAudience(name: string) {
    const resend = getResendClient()
    return await resend.audiences.create({ name })
  }

  static async listAudiences() {
    const resend = getResendClient()
    const audiences = await resend.audiences.list()
    return audiences.data
  }

  static async getConfig() {
    const config = useRuntimeConfig()
    return {
      resendFromEmail: config.resendFromEmail,
      resendAudienceId: config.resendAudienceId,
      resendConfirmationTemplateId: config.resendConfirmationTemplateId
    }
  }
}
