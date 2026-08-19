import nodemailer from 'nodemailer'
import { ResendService } from '~/server/services/resend.service'

const contactServices: Record<string, string> = {
  'sur-mesure': 'Site internet sur mesure',
  'template-cle-en-main': 'Template clé en main',
  'template-diy': 'Template à personnaliser soi-même',
  'visio-decouverte': 'Visio découverte',
  'autre': 'Autre demande'
}

// Remove CR/LF and trim to prevent email header injection / malformed headers
const sanitizeHeader = (value: string) => value.replace(/[\r\n]+/g, ' ').trim()

const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)

    if (!body.email || !body.name || !body.message || !body.service) {
      console.warn('[contact] Rejected submission (missing fields):', {
        hasEmail: !!body.email,
        hasName: !!body.name,
        hasMessage: !!body.message,
        hasService: !!body.service
      })
      throw createError({
        statusCode: 400,
        statusMessage: 'Missing required fields'
      })
    }

    const name = sanitizeHeader(String(body.name))
    const email = sanitizeHeader(String(body.email))

    if (!isValidEmail(email)) {
      console.warn('[contact] Rejected submission (invalid email):', email)
      throw createError({
        statusCode: 400,
        statusMessage: 'Invalid email address'
      })
    }

    const config = useRuntimeConfig()
    // Owner mailbox that receives the contact-form notifications
    const toEmail = config.resendToEmail || config.smtpTo || config.smtpUser

    if (!toEmail) {
      console.error('[contact] No recipient address configured (resendToEmail / smtpTo / smtpUser)')
      throw createError({
        statusCode: 500,
        statusMessage: 'Server configuration error'
      })
    }

    const serviceLabel = contactServices[body.service] || sanitizeHeader(String(body.service))
    const subject = sanitizeHeader(`${name} — ${serviceLabel}`)
    const replyTo = `"${name}" <${email}>`
    const sentAt = new Date().toLocaleString('fr-FR')

    const textContent = `Nouveau message depuis le formulaire de contact\n\nNom : ${name}\nEmail : ${email}\nService souhaité : ${serviceLabel}\n\nMessage :\n${body.message}\n\nEnvoyé le ${sentAt}`
    const htmlContent = `
        <h1>Nouveau message depuis le formulaire de contact</h1>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Service souhaité :</strong> ${serviceLabel}</p>
        <h2>Message :</h2>
        <p>${String(body.message).replace(/\n/g, '<br>')}</p>
        <hr>
        <p><em>Envoyé le ${sentAt}</em></p>
      `

    console.info(`[contact] New message from "${name}" <${email}> to ${toEmail} (service: ${serviceLabel})`)

    // Primary channel: Resend (reliable deliverability, traceable in dashboard)
    if (config.resendApiKey) {
      try {
        const result = await ResendService.sendContactNotification({
          to: toEmail,
          subject,
          htmlContent,
          textContent,
          replyTo
        })

        if (result.error) {
          throw new Error(result.error.message || 'Resend returned an error')
        }

        console.info('[contact] Message sent via Resend:', result.data?.id)
        return { success: true, message: 'Contact email sent successfully' }
      } catch (resendError: any) {
        // Do not fail yet: fall back to SMTP below
        console.error('[contact] Resend failed, falling back to SMTP:', resendError?.message)
      }
    }

    // Fallback channel: SMTP (OVH)
    const host = config.smtpHost
    const port = Number(config.smtpPort)
    const user = config.smtpUser
    const pass = config.smtpPass

    if (!host || !port || !user || !pass) {
      console.error('[contact] SMTP fallback unavailable: missing SMTP configuration')
      throw createError({
        statusCode: 500,
        statusMessage: 'Server configuration error'
      })
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
      tls: port === 587 ? { rejectUnauthorized: false } : undefined
    })

    const info = await transporter.sendMail({
      from: `"Formulaire de contact — Lise Web Equine" <${user}>`,
      to: toEmail,
      replyTo,
      subject,
      text: textContent,
      html: htmlContent
    })

    // Log the SMTP acceptance details so undelivered messages can be traced afterwards
    console.info('[contact] Message accepted by SMTP server (fallback):', {
      messageId: info.messageId,
      accepted: info.accepted,
      rejected: info.rejected,
      response: info.response
    })

    if (info.rejected && info.rejected.length > 0) {
      console.error('[contact] SMTP server rejected recipients:', info.rejected)
    }

    return {
      success: true,
      message: 'Contact email sent successfully'
    }
  } catch (error: any) {
    console.error('[contact] Failed to send contact email:', error?.message, error)
    throw createError({
      statusCode: 500,
      statusMessage: error.message || 'Error sending contact email'
    })
  }
})
