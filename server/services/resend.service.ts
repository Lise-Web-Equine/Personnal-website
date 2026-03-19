import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY!)

export class ResendService {
  
  // Ajouter un contact à une audience
  static async addContact(email: string, audienceId: string, firstName?: string) {
    try {
      const contact = await resend.contacts.create({
        email,
        audienceId,
        firstName
      })
      
      console.log(`Contact ${email} ajouté à l'audience ${audienceId}`)
      return contact
    } catch (error) {
      console.error('Erreur ajout contact:', error)
      throw error
    }
  }
  
  // Envoyer un email de newsletter
  static async sendNewsletter(to: string[], subject: string, htmlContent: string) {
    try {
      const result = await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL!,
        to,
        subject,
        html: htmlContent
      })
      
      console.log(`Newsletter envoyée à ${to.length} contacts`)
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
        from: process.env.RESEND_FROM_EMAIL!,
        to: [to],
        subject,
        html: htmlContent
      })
      
      console.log(`Email transactionnel envoyé à ${to}`)
      return result
    } catch (error) {
      console.error('Erreur email transactionnel:', error)
      throw error
    }
  }
  
  // Créer une audience
  static async createAudience(name: string) {
    try {
      const audience = await resend.audiences.create({
        name
      })
      
      console.log(`Audience "${name}" créée avec l'ID: ${audience.id}`)
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
}
