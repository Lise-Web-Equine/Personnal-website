import { serverSupabaseClient } from '#supabase/server'

/**
 * Dynamic sitemap source for @nuxtjs/sitemap.
 * Returns the public template detail pages, generated from the Supabase
 * `templates` table so the sitemap stays in sync when templates are
 * added or removed via the admin dashboard.
 */
export default defineEventHandler(async (event) => {
  try {
    const supabase = await serverSupabaseClient(event)

    const { data, error } = await supabase
      .from('templates')
      .select('slug, updated_at')
      .returns<Array<{ slug: string; updated_at: string | null }>>()

    if (error) throw error

    return (data || [])
      .filter(template => !!template.slug)
      .map(template => ({
        loc: `/template-site-internet-equestre/${template.slug}`,
        lastmod: template.updated_at || undefined,
        changefreq: 'monthly',
        priority: 0.8
      }))
  } catch (err) {
    // En cas d'erreur, on renvoie une liste vide plutôt que de casser le sitemap.
    console.error('Erreur génération sitemap templates:', err)
    return []
  }
})
