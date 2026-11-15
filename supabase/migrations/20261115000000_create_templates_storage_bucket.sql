-- Bucket public pour les images des templates (captures uploadées depuis l'admin).
-- Lecture publique ; écriture réservée aux utilisateurs connectés (même règle que la table templates).

INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'templates',
  'templates',
  true,
  5242880, -- 5 Mo
  ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/avif', 'image/gif']
)
ON CONFLICT (id) DO UPDATE
  SET public = EXCLUDED.public,
      file_size_limit = EXCLUDED.file_size_limit,
      allowed_mime_types = EXCLUDED.allowed_mime_types;

DROP POLICY IF EXISTS "Public read templates images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated upload templates images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated update templates images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated delete templates images" ON storage.objects;

CREATE POLICY "Public read templates images"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'templates');

CREATE POLICY "Authenticated upload templates images"
  ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'templates');

CREATE POLICY "Authenticated update templates images"
  ON storage.objects FOR UPDATE
  TO authenticated
  USING (bucket_id = 'templates');

CREATE POLICY "Authenticated delete templates images"
  ON storage.objects FOR DELETE
  TO authenticated
  USING (bucket_id = 'templates');
