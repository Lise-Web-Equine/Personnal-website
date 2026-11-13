import type { Template } from '~/models'

// Champs utiles aux cartes vitrines (évite de charger les longs contenus des fiches :
// textes métier, FAQ, listes…).
const TEMPLATE_CARD_FIELDS = 'id, name, slug, image, demo_url, tags, speciality, rating, created_at'

/**
 * Liste des modèles pour les cartes vitrines (accueil + page des modèles).
 * - Clé partagée : chargée une seule fois, réutilisée d'une page à l'autre.
 * - getCachedData : en navigation (ex. clic « Voir tous les modèles » depuis l'accueil),
 *   la liste déjà chargée est réutilisée instantanément au lieu d'être redemandée.
 * - lazy : la navigation n'attend pas la requête (le rendu serveur la charge toujours, pour le SEO).
 */
export const useTemplatesList = () => {
  const supabase = useSupabaseClient()

  return useAsyncData(
    'templates-list',
    async () => {
      const { data, error } = await supabase
        .from('templates')
        .select(TEMPLATE_CARD_FIELDS)
        .order('created_at', { ascending: false })

      if (error) throw error
      return (data || []) as unknown as Template[]
    },
    {
      default: () => [] as Template[],
      lazy: true,
      getCachedData: (key, nuxtApp) => nuxtApp.payload.data[key] ?? nuxtApp.static.data[key]
    }
  )
}
