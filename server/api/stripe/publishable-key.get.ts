export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  return {
    stripePublishableKey: config.stripePublishableKey || 'Not found'
  }
})
