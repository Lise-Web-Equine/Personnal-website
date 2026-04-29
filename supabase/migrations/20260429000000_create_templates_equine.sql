-- Create templates table matching Template.ts model
CREATE TABLE IF NOT EXISTS templates (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  speciality text NOT NULL,
  price numeric(10, 2) NOT NULL DEFAULT 0,
  image text NOT NULL,
  demo_url text,
  download_url text NOT NULL,
  features text[] DEFAULT ARRAY[]::text[],
  tags text[] DEFAULT ARRAY[]::text[],
  badge text,
  promo integer,
  rating numeric(3, 2) DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE templates ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can view templates
CREATE POLICY "Anyone can view templates"
  ON templates
  FOR SELECT
  USING (true);

-- Policy: Authenticated users can insert templates
CREATE POLICY "Authenticated users can insert templates"
  ON templates
  FOR INSERT
  WITH CHECK (auth.role() = 'authenticated');

-- Policy: Authenticated users can update templates
CREATE POLICY "Authenticated users can update templates"
  ON templates
  FOR UPDATE
  USING (auth.role() = 'authenticated');

-- Policy: Authenticated users can delete templates
CREATE POLICY "Authenticated users can delete templates"
  ON templates
  FOR DELETE
  USING (auth.role() = 'authenticated');

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_templates_speciality ON templates(speciality);
CREATE INDEX IF NOT EXISTS idx_templates_badge ON templates(badge) WHERE badge IS NOT NULL;
CREATE INDEX IF NOT EXISTS idx_templates_created ON templates(created_at DESC);

-- Insert sample data for equine templates
INSERT INTO templates (name, description, speciality, price, image, demo_url, download_url, features, tags, badge, promo, rating) VALUES
  (
    'Horizon',
    'Un modèle élégant et professionnel avec des couleurs apaisantes et une navigation intuitive. Idéal pour les praticiens qui souhaitent mettre en valeur leur expertise.',
    'Équin',
    40.00,
    'https://images.unsplash.com/photo-1559826264-d554356bf5d6?w=800&h=600&fit=crop',
    'https://horizon-demo.carrd.co',
    'https://carrd.co/build?template=horizon',
    ARRAY['Prestations phares & tarifs', 'Expérience terrain', 'Focus prestation technique', 'Formulaire de contact', 'Témoignages'],
    ARRAY['equine', 'professionnel', 'bleu', 'confiance', 'technique'],
    'best-seller',
    NULL,
    4.8
  ),
  (
    'Ancrage',
    'Design chaleureux et authentique qui met en avant votre approche personnalisée. Parfait pour créer une connexion émotionnelle avec vos clients.',
    'Équin',
    40.00,
    'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=800&h=600&fit=crop',
    'https://ancrage-demo.carrd.co',
    'https://carrd.co/build?template=ancrage',
    ARRAY['Approche personnalisée', 'Galerie photos', 'Tarifs transparents', 'Zone d''intervention', 'Contact direct'],
    ARRAY['equine', 'chaleureux', 'authentique', 'personnel', 'orange'],
    'new',
    NULL,
    4.7
  ),
  (
    'Élan',
    'Modèle dynamique et moderne qui reflète le mouvement et l''énergie. Idéal pour les professionnels actifs et innovants.',
    'Équin',
    40.00,
    'https://images.unsplash.com/photo-1551884831-bbf3cdc6469e?w=800&h=600&fit=crop',
    'https://elan-demo.carrd.co',
    'https://carrd.co/build?template=elan',
    ARRAY['Design moderne', 'Animations fluides', 'Portfolio visuel', 'Réservation en ligne', 'Blog intégré'],
    ARRAY['equine', 'moderne', 'dynamique', 'vert', 'innovation'],
    NULL,
    20,
    4.6
  );
