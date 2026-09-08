import type { Realisation } from '~/models'

// Note agrégée d'un template, calculée à partir des avis clients associés.
export interface TemplateRating {
  average: number
  count: number
}

type RatingRow = Pick<Realisation, 'template_id' | 'rating'>

/**
 * Récupère les notes des avis clients (réalisations) qui possèdent une note et
 * sont rattachés à un template, puis les agrège par template (moyenne + nombre).
 * Le résultat est mis en cache via useAsyncData (clé partagée) afin d'être
 * chargé une seule fois même lorsque de nombreuses cartes l'utilisent.
 */
export const useTemplateRatings = () => {
  const supabase = useSupabaseClient()

  const { data: ratings } = useAsyncData(
    'template-ratings',
    async () => {
      const { data, error } = await supabase
        .from('realisations')
        .select('template_id, rating')
        .not('template_id', 'is', null)
        .not('rating', 'is', null)

      if (error) throw error

      // Agrégation : total + nombre d'avis par template.
      const totals: Record<string, { total: number; count: number }> = {}
      for (const row of (data as RatingRow[]) || []) {
        if (!row.template_id || row.rating == null) continue
        const entry = (totals[row.template_id] ??= { total: 0, count: 0 })
        entry.total += row.rating
        entry.count += 1
      }

      const result: Record<string, TemplateRating> = {}
      for (const [id, { total, count }] of Object.entries(totals)) {
        result[id] = { average: Math.round((total / count) * 10) / 10, count }
      }
      return result
    },
    { default: () => ({} as Record<string, TemplateRating>) }
  )

  // Retourne la note agrégée d'un template, ou null s'il n'a aucun avis noté.
  const getRating = (templateId: string): TemplateRating | null =>
    ratings.value?.[templateId] ?? null

  return { getRating }
}
