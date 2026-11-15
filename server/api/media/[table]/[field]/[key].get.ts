import { createClient } from '@supabase/supabase-js'

// Sert une image stockée en base64 dans Supabase comme un vrai fichier binaire.
// URL : /api/media/<table>/<champ>/<id>[.<version>] (voir utils/media.ts).
// - Réponse mise en cache par le CDN Vercel : la base n'est interrogée qu'une fois par image.
// - Utilisable comme source par NuxtImg (provider Vercel) qui la convertit en AVIF/WebP redimensionné.

// Seules ces colonnes peuvent être exposées.
const ALLOWED: Record<string, string[]> = {
  templates: ['image'],
  realisations: ['site_image', 'client_photo']
}

export default defineEventHandler(async (event) => {
  const table = getRouterParam(event, 'table') || ''
  const field = getRouterParam(event, 'field') || ''
  const key = getRouterParam(event, 'key') || ''

  if (!ALLOWED[table]?.includes(field)) {
    throw createError({ statusCode: 404, statusMessage: 'Image introuvable' })
  }

  // La version (date de mise à jour) ne sert qu'à changer l'URL quand l'image change.
  const [id, version] = key.split('.')
  if (!id || !/^[\w-]+$/.test(id)) {
    throw createError({ statusCode: 404, statusMessage: 'Image introuvable' })
  }

  // Client anonyme sans session : aucun cookie, pour que la réponse reste cacheable.
  const { url, key: anonKey } = useRuntimeConfig(event).public.supabase as { url: string; key: string }
  const supabase = createClient(url, anonKey, { auth: { persistSession: false } })

  const { data, error } = await supabase.from(table).select(field).eq('id', id).maybeSingle()
  const value = (data as Record<string, string | null> | null)?.[field]

  if (error || !value) {
    throw createError({ statusCode: 404, statusMessage: 'Image introuvable' })
  }

  // URL versionnée : contenu figé -> cache d'un an. Sans version : cache court.
  setHeader(
    event,
    'Cache-Control',
    version
      ? 'public, max-age=31536000, s-maxage=31536000, immutable'
      : 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800'
  )

  // Image hébergée dans Supabase Storage (ou autre URL publique) : on relaie le fichier
  // plutôt que de rediriger, pour que le CDN Vercel et NuxtImg le traitent comme avant.
  if (/^https?:\/\//.test(value)) {
    const res = await fetch(value)
    if (!res.ok) {
      throw createError({ statusCode: 404, statusMessage: 'Image introuvable' })
    }
    setHeader(event, 'Content-Type', res.headers.get('content-type') || 'application/octet-stream')
    return Buffer.from(await res.arrayBuffer())
  }

  const match = /^data:([^;,]+);base64,(.+)$/s.exec(value)
  if (!match) {
    throw createError({ statusCode: 404, statusMessage: 'Image introuvable' })
  }

  setHeader(event, 'Content-Type', match[1])
  return Buffer.from(match[2], 'base64')
})
