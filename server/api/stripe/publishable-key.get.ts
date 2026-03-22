export default defineEventHandler(async (event) => {
  // Utiliser process.env directement côté serveur
  return {
    stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY || 'Not found'
  }
})
