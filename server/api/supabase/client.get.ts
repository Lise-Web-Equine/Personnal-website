export default defineEventHandler(async (event) => {
  // Utiliser process.env directement côté serveur
  return {
    supabaseUrl: process.env.SUPABASE_URL || 'Not found',
    supabaseKey: process.env.SUPABASE_KEY || 'Not found'
  }
})
