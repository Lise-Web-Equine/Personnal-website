export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  return {
    supabaseUrl: config.supabaseUrl || 'Not found',
    supabaseKey: config.supabaseKey || 'Not found'
  }
})
