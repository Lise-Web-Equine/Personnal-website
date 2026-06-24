/*
  # Create Realisations Table for Social Proof (Case Studies + Testimonials)

  1. New Table
    - `realisations`
      - `id` (uuid, primary key) - Unique identifier
      - `client_name` (text) - Client first name or full name
      - `client_profession` (text) - Equine profession (e.g. Ostéopathe équin)
      - `client_photo` (text, nullable) - Optional client photo (data URL or external URL)
      - `site_url` (text, nullable) - Link to the live client website
      - `site_image` (text) - Screenshot of the client website
      - `quote` (text) - Client testimonial
      - `rating` (numeric, nullable) - Optional rating out of 5
      - `type` (text) - 'pack' (done-for-you) or 'template' (self-service)
      - `template_id` (uuid, nullable) - Optional link to a specific template
      - `featured` (boolean) - Highlight this realisation
      - `display_order` (integer) - Manual ordering
      - `created_at` (timestamptz) - Creation timestamp
      - `updated_at` (timestamptz) - Last update timestamp

  2. Security
    - Enable RLS on `realisations` table
    - Public read access (anyone can view realisations)
    - Admin write access (authenticated users can insert/update/delete)

  3. IMPORTANT - Permission Fix
    If you encounter "permission denied for table realisations" error, run:
    ```sql
    GRANT ALL ON realisations TO authenticated;
    GRANT SELECT ON realisations TO anon;
    GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO authenticated;
    ```
*/

CREATE TABLE IF NOT EXISTS realisations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_name text NOT NULL,
  client_profession text NOT NULL,
  client_photo text,
  site_url text,
  site_image text NOT NULL,
  quote text NOT NULL,
  rating numeric,
  type text NOT NULL DEFAULT 'pack' CHECK (type IN ('pack', 'template')),
  template_id uuid REFERENCES templates(id) ON DELETE SET NULL,
  featured boolean NOT NULL DEFAULT false,
  display_order integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Index to speed up lookups by linked template
CREATE INDEX IF NOT EXISTS realisations_template_id_idx ON realisations (template_id);

ALTER TABLE realisations ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Public read access to realisations" ON realisations;
DROP POLICY IF EXISTS "Authenticated users can insert realisations" ON realisations;
DROP POLICY IF EXISTS "Authenticated users can update realisations" ON realisations;
DROP POLICY IF EXISTS "Authenticated users can delete realisations" ON realisations;

-- Public can read, authenticated (admin) can write
CREATE POLICY "Public read access to realisations"
  ON realisations
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Authenticated users can insert realisations"
  ON realisations
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update realisations"
  ON realisations
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete realisations"
  ON realisations
  FOR DELETE
  TO authenticated
  USING (true);
