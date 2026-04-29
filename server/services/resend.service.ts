import { Resend } from 'resend'

// Vérifier que la clé API existe
if (!process.env.RESEND_API_KEY) {
  throw new Error('RESEND_API_KEY is required in .env file')
}

const resend = new Resend(process.env.RESEND_API_KEY)

export class ResendService {
  
  // Ajouter un contact à une audience
  static async addContact(email: string, audienceId: string) {
    try {
      const result = await resend.contacts.create({
        email,
        audienceId
      })
      
      return result
    } catch (error) {
      console.error('Erreur ajout contact:', error)
      throw error
    }
  }
  
  // Ajouter un contact à un segment
  static async addContactToSegment(email: string, segmentId: string) {
    try {
      const result = await resend.contacts.create({
        email,
        audienceId: segmentId
      })
      
      return result
    } catch (error) {
      console.error('Erreur ajout contact segment:', error)
      throw error
    }
  }
  
  // Envoyer un email de newsletter
  static async sendNewsletter(to: string[], subject: string, htmlContent: string) {
    try {
      const result = await resend.emails.send({
        from: `Lise Web Equine <${process.env.RESEND_FROM_EMAIL!}>`,
        to,
        subject,
        html: htmlContent
      })
      
      return result
    } catch (error) {
      console.error('Erreur envoi newsletter:', error)
      throw error
    }
  }
  
  // Envoyer un email transactionnel
  static async sendTransactionalEmail(to: string, subject: string, htmlContent: string) {
    try {
      const result = await resend.emails.send({
        from: `Lise Web Equine <${process.env.RESEND_FROM_EMAIL!}>`,
        to: [to],
        subject,
        html: htmlContent
      })
      
      return result
    } catch (error) {
      console.error('Erreur email transactionnel:', error)
      throw error
    }
  }
  
  // Envoyer un email avec template Resend
  static async sendTemplateEmail(to: string, templateId: string, variables: Record<string, any>) {
    try {
      const result = await resend.emails.send({
        from: `Lise Web Equine <${process.env.RESEND_FROM_EMAIL!}>`,
        to: [to],
        template: {
          id: templateId,
          variables
        }
      })
      
      return result
    } catch (error) {
      console.error('Erreur email template:', error)
      throw error
    }
  }
  
  // Créer une audience
  static async createAudience(name: string) {
    try {
      const audience = await resend.audiences.create({
        name
      })
      
      return audience
    } catch (error) {
      console.error('Erreur création audience:', error)
      throw error
    }
  }
  
  // Lister les audiences
  static async listAudiences() {
    try {
      const audiences = await resend.audiences.list()
      return audiences.data
    } catch (error) {
      console.error('Erreur listage audiences:', error)
      throw error
    }
  }
  
  // Nouvelle méthode pour obtenir la configuration (côté client)
  static async getConfig() {
    return {
      resendFromEmail: process.env.RESEND_FROM_EMAIL,
      resendAudienceId: process.env.RESEND_AUDIENCE_ID,
      resendConfirmationTemplateId: process.env.RESEND_CONFIRMATION_TEMPLATE_ID
    }
  }
}
