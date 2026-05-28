import Stripe from 'stripe'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const stripe = new Stripe(config.stripeSecretKey)
  const sessionId = getRouterParam(event, 'sessionId')

  if (!sessionId) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Session ID required'
    })
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId)
    return session
  } catch (error) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Session not found'
    })
  }
})
