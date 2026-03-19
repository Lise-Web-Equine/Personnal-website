export default defineEventHandler(async (event) => {
  const templateId = getRouterParam(event, 'id')
  
  if (!templateId) {
    throw createError({
      statusCode: 400,
      statusMessage: 'ID de template manquant'
    })
  }

  try {
    // Utiliser le client Supabase serveur
    const supabase = serverSupabaseClient(event)
    
    // Récupérer le template depuis Supabase
    const { data: template, error } = await supabase
      .from('templates')
      .select('image')
      .eq('id', templateId)
      .single()

    if (error || !template) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Template non trouvé'
      })
    }

    // Si l'image est une URL Supabase Storage, la servir directement
    if (template.image) {
      // Supabase Storage URLs sont déjà publiques et courtes
      console.log('URL Supabase Storage:', template.image)
      
      // Rediriger vers l'image Supabase (URL déjà courte)
      return sendRedirect(event, template.image)
    }

    // Image par défaut si aucune image
    return sendRedirect(event, 'https://picsum.photos/400/300?random=1')
  } catch (error) {
    console.error('Erreur récupération image:', error)
    
    // Image par défaut en cas d'erreur
    return sendRedirect(event, 'https://picsum.photos/400/300?random=1')
  }
})
