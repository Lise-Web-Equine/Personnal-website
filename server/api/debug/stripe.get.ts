export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  return {
    stripeSecretKey: config.stripeSecretKey ? 'Present' : 'Not found',
    stripeSecretKeyLength: config.stripeSecretKey?.length || 0,
    stripeSecretKeyStart: config.stripeSecretKey?.substring(0, 10) || 'N/A',
    allEnvKeys: Object.keys(process.env).filter(key => key.includes('STRIPE'))
  }
})
