export default defineNuxtRouteMiddleware(async (to, from) => {
  const supabase = useSupabase()
  
  const { data: { user } } = await supabase.auth.getUser()
  
  // If user is not authenticated, redirect to login
  if (!user) {
    return navigateTo('/login')
  }
})
