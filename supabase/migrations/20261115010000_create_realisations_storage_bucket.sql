-- Bucket public pour les images des réalisations (captures de sites et photos clients).
-- Lecture publique ; écriture réservée aux utilisateurs connectés (même règle que la table realisations).

-- La policy « Public read access to realisations » existe, mais le droit de lecture du rôle
-- anon n'avait jamais été accordé (il n'apparaissait qu'en commentaire dans la migration
-- d'origine) : les visiteurs non connectés ne pouvaient pas lire la table.
GRANT SELECT ON realisations TO anon;

INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'realisations',
  'realisations',
  true,
  5242880, -- 5 Mo
  ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/avif', 'image/gif']
)
ON CONFLICT (id) DO UPDATE
  SET public = EXCLUDED.public,
      file_size_limit = EXCLUDED.file_size_limit,
      allowed_mime_types = EXCLUDED.allowed_mime_types;

DROP POLICY IF EXISTS "Public read realisations images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated upload realisations images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated update realisations images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated delete realisations images" ON storage.objects;

CREATE POLICY "Public read realisations images"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'realisations');

CREATE POLICY "Authenticated upload realisations images"
  ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'realisations');

CREATE POLICY "Authenticated update realisations images"
  ON storage.objects FOR UPDATE
  TO authenticated
  USING (bucket_id = 'realisations');

CREATE POLICY "Authenticated delete realisations images"
  ON storage.objects FOR DELETE
  TO authenticated
  USING (bucket_id = 'realisations');
