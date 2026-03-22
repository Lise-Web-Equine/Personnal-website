export const useStripeKey = async () => {
  const { stripePublishableKey } = await $fetch('/api/stripe/publishable-key')
  
  if (!stripePublishableKey) {
    throw new Error('Stripe configuration missing')
  }
  
  return stripePublishableKey
}
