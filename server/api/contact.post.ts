import nodemailer from 'nodemailer'

const contactServices: Record<string, string> = {
  'sur-mesure': 'Site internet sur mesure',
  'template-cle-en-main': 'Template clé en main',
  'template-diy': 'Template à personnaliser soi-même',
  'visio-decouverte': 'Visio découverte',
  'autre': 'Autre demande'
}

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)

    if (!body.email || !body.name || !body.message || !body.service) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Missing required fields'
      })
    }

    const config = useRuntimeConfig()
    const host = config.smtpHost
    const port = Number(config.smtpPort)
    const user = config.smtpUser
    const pass = config.smtpPass
    const toEmail = config.smtpTo || user

    if (!host || !port || !user || !pass) {
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

    const serviceLabel = contactServices[body.service] || body.service

    const info = await transporter.sendMail({
      from: `"Formulaire de contact — Lise Web Equine" <${user}>`,
      to: toEmail,
      replyTo: `"${body.name}" <${body.email}>`,
      subject: `${body.name} — ${serviceLabel}`,
      text: `Nouveau message depuis le formulaire de contact\n\nNom : ${body.name}\nEmail : ${body.email}\nService souhaité : ${serviceLabel}\n\nMessage :\n${body.message}\n\nEnvoyé le ${new Date().toLocaleString('fr-FR')}`,
      html: `
        <h1>Nouveau message depuis le formulaire de contact</h1>
        <p><strong>Nom :</strong> ${body.name}</p>
        <p><strong>Email :</strong> ${body.email}</p>
        <p><strong>Service souhaité :</strong> ${serviceLabel}</p>
        <h2>Message :</h2>
        <p>${body.message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><em>Envoyé le ${new Date().toLocaleString('fr-FR')}</em></p>
      `
    })

    return {
      success: true,
      message: 'Contact email sent successfully'
    }
  } catch (error: any) {
    throw createError({
      statusCode: 500,
      statusMessage: error.message || 'Error sending contact email'
    })
  }
})
