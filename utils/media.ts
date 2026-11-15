import type { Realisation, Template } from '~/models'
import type { SupabaseClient } from '@supabase/supabase-js'

// Les images (captures des templates, sites et photos des réalisations) sont stockées
// dans Supabase Storage : les colonnes `image`, `site_image` et `client_photo` contiennent
// une URL publique courte, utilisée telle quelle. Le navigateur (via NuxtImg / Vercel)
// la récupère directement, sans passer par le serveur Nuxt : pas de « Fast Origin Transfer ».
//
// Filet de sécurité : une ancienne valeur encore en base64 n'est jamais injectée dans le
// HTML (plusieurs Mo par page) ; elle est remplacée par /api/media/..., qui la sert en fichier.

// Colonnes des cartes vitrines.
export const TEMPLATE_CARD_COLUMNS = 'id, name, slug, image, demo_url, tags, speciality, rating, created_at, updated_at'

// Colonnes de la fiche template.
export const TEMPLATE_COLUMNS =
  'id, name, slug, image, description, speciality, price, demo_url, download_url, features, tags, specialties, badge, promo, rating, seo_title, seo_description, metier_title, metier_text, metier_lists, faq_items, created_at, updated_at'

// Colonnes des réalisations.
export const REALISATION_COLUMNS =
  'id, client_name, client_profession, client_photo, site_url, site_image, quote, rating, type, template_id, featured, display_order, created_at, updated_at'

/**
 * URL servant une image restée en base64 en base.
 * La date de mise à jour est intégrée au chemin : une image modifiée depuis l'admin
 * change d'URL, ce qui permet un cache « immutable » sans risque d'image périmée.
 */
export const mediaUrl = (table: 'templates' | 'realisations', field: string, id: string, updatedAt?: string | null) => {
  const version = updatedAt ? Date.parse(updatedAt) : NaN
  return `/api/media/${table}/${field}/${id}${Number.isFinite(version) ? `.${version}` : ''}`
}

// URL Storage (ou lien externe) : telle quelle. Base64 : via /api/media. Vide : null.
const resolveImage = (
  value: string | null | undefined,
  table: 'templates' | 'realisations',
  field: string,
  id: string,
  updatedAt?: string | null
): string | null => {
  if (!value) return null
  if (value.startsWith('data:')) return mediaUrl(table, field, id, updatedAt)
  return value
}

export const withTemplateImage = <T extends { id: string; image?: string | null; updated_at?: string | null }>(template: T) => ({
  ...template,
  image: resolveImage(template.image, 'templates', 'image', template.id, template.updated_at) || ''
}) as unknown as Template

// Garde une signature asynchrone pour les appelants existants.
export const withRealisationImages = async (
  _supabase: SupabaseClient<any>,
  rows: Partial<Realisation>[]
): Promise<Realisation[]> =>
  rows.map(r => ({
    ...r,
    site_image: resolveImage(r.site_image, 'realisations', 'site_image', r.id as string, r.updated_at) || '',
    client_photo: resolveImage(r.client_photo, 'realisations', 'client_photo', r.id as string, r.updated_at)
  })) as Realisation[]
