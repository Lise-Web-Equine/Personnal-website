export default defineEventHandler(async (event) => {
  return {
    stripeSecretKey: process.env.STRIPE_SECRET_KEY ? 'Present' : 'Not found',
    stripeSecretKeyLength: process.env.STRIPE_SECRET_KEY?.length || 0,
    stripeSecretKeyStart: process.env.STRIPE_SECRET_KEY?.substring(0, 10) || 'N/A',
    allEnvKeys: Object.keys(process.env).filter(key => key.includes('STRIPE'))
  }
})
