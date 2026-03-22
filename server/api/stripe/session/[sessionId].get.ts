import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export default defineEventHandler(async (event) => {
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
    console.error('Error retrieving Stripe session:', error)
    throw createError({
      statusCode: 404,
      statusMessage: 'Session not found'
    })
  }
})
