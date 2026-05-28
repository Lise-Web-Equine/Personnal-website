import Stripe from 'stripe'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const stripe = new Stripe(config.stripeSecretKey)

  try {
    const body = await readBody(event)

    if (!body.sessionId) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Session ID required'
      })
    }

    const session = await stripe.checkout.sessions.retrieve(body.sessionId)

    if (!session.payment_status) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Session not paid'
      })
    }

    const sessionTime = new Date(session.created * 1000)
    const now = new Date()
    const hoursDiff = (now.getTime() - sessionTime.getTime()) / (1000 * 60 * 60)

    if (hoursDiff > 24) {
      throw createError({
        statusCode: 410,
        statusMessage: 'Session expired (24h limit)'
      })
    }

    return {
      success: true,
      session: {
        id: session.id,
        customer_email: session.customer_details?.email,
        customer_name: session.customer_details?.name,
        payment_status: session.payment_status,
        created: session.created,
        amount_total: session.amount_total
      }
    }
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Error verifying session'
    })
  }
})
