export default defineNuxtRouteMiddleware((to) => {
  const config = useRuntimeConfig()

  // If maintenance mode is disabled, allow normal navigation
  if (config.maintenanceMode !== 'true') {
    return
  }

  // Allow access to the maintenance page itself to avoid infinite redirects
  if (to.path === '/maintenance') {
    return
  }

  // Redirect all other routes to the maintenance page
  return navigateTo('/maintenance', { replace: true })
})
