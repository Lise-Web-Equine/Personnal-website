// Migre les images stockées en base64 vers Supabase Storage, puis remplace chaque
// valeur par l'URL publique du fichier :
//   - templates.image                                  -> bucket « templates »
//   - realisations.site_image / realisations.client_photo -> bucket « realisations »
//
// Usage (depuis la racine du projet) :
//   node --env-file=.env scripts/migrate-template-images.mjs --dry-run          # simulation (lecture seule)
//   node --env-file=.env scripts/migrate-template-images.mjs                    # tout migrer
//   node --env-file=.env scripts/migrate-template-images.mjs realisations       # une seule table
//
// Authentification (les écritures sont réservées aux utilisateurs connectés) :
//   - soit SUPABASE_SERVICE_ROLE_KEY dans l'environnement,
//   - soit ADMIN_EMAIL et ADMIN_PASSWORD (compte admin du site) passés au lancement.
//
// Le script est rejouable : les valeurs déjà migrées (URL http) sont ignorées.

import { createClient } from '@supabase/supabase-js'

const TARGETS = [
  { table: 'templates', bucket: 'templates', label: 'name', fields: ['image'] },
  { table: 'realisations', bucket: 'realisations', label: 'client_name', fields: ['site_image', 'client_photo'] }
]

const args = process.argv.slice(2)
const dryRun = args.includes('--dry-run')
const onlyTables = args.filter(a => !a.startsWith('--'))
const targets = onlyTables.length ? TARGETS.filter(t => onlyTables.includes(t.table)) : TARGETS

const url = process.env.SUPABASE_URL
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY
const anonKey = process.env.SUPABASE_KEY

if (!url || !(serviceKey || anonKey)) {
  console.error('SUPABASE_URL et SUPABASE_KEY (ou SUPABASE_SERVICE_ROLE_KEY) sont requis.')
  process.exit(1)
}

const supabase = createClient(url, serviceKey || anonKey, { auth: { persistSession: false } })

if (!serviceKey && !dryRun) {
  const email = process.env.ADMIN_EMAIL
  const password = process.env.ADMIN_PASSWORD
  if (!email || !password) {
    console.error('Sans SUPABASE_SERVICE_ROLE_KEY, renseignez ADMIN_EMAIL et ADMIN_PASSWORD.')
    process.exit(1)
  }
  const { error } = await supabase.auth.signInWithPassword({ email, password })
  if (error) {
    console.error(`Connexion admin impossible : ${error.message}`)
    process.exit(1)
  }
}

const EXT = { 'image/jpeg': 'jpg', 'image/png': 'png', 'image/webp': 'webp', 'image/avif': 'avif', 'image/gif': 'gif' }

let migrated = 0, skipped = 0, failed = 0

for (const { table, bucket, label: labelCol, fields } of targets) {
  console.log(`\n— ${table} → bucket « ${bucket} »`)

  const { data: rows, error } = await supabase.from(table).select(['id', labelCol, ...fields].join(', '))
  if (error) {
    console.error(`Lecture de ${table} impossible : ${error.message}`)
    failed++
    continue
  }

  for (const row of rows) {
    for (const field of fields) {
      const match = /^data:([^;,]+);base64,(.+)$/s.exec(row[field] || '')
      if (!match) {
        skipped++
        continue
      }

      const [, mime, b64] = match
      const bytes = Buffer.from(b64, 'base64')
      const path = fields.length > 1 ? `${row.id}-${field}.${EXT[mime] || 'jpg'}` : `${row.id}.${EXT[mime] || 'jpg'}`
      const label = `${row[labelCol]} · ${field} (${(bytes.length / 1024).toFixed(0)} Ko, ${mime})`

      if (dryRun) {
        console.log(`[simulation] ${label} -> ${bucket}/${path}`)
        migrated++
        continue
      }

      const { error: upErr } = await supabase.storage
        .from(bucket)
        .upload(path, bytes, { contentType: mime, cacheControl: '31536000', upsert: true })
      if (upErr) {
        console.error(`✗ ${label} : envoi échoué (${upErr.message})`)
        failed++
        continue
      }

      const publicUrl = supabase.storage.from(bucket).getPublicUrl(path).data.publicUrl
      const { data: updated, error: dbErr } = await supabase
        .from(table)
        .update({ [field]: publicUrl })
        .eq('id', row.id)
        .select('id')
      if (dbErr || !updated?.length) {
        console.error(`✗ ${label} : mise à jour de la table échouée (${dbErr?.message || 'aucune ligne modifiée, vérifier les droits'})`)
        failed++
        continue
      }

      console.log(`✓ ${label} -> ${publicUrl}`)
      migrated++
    }
  }
}

console.log(`\n${dryRun ? 'Simulation' : 'Terminé'} : ${migrated} migré(s), ${skipped} déjà OK / vide(s), ${failed} échec(s).`)
process.exit(failed ? 1 : 0)
