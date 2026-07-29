-- Add SEO fields and "métier" descriptive section to templates table
ALTER TABLE templates
  ADD COLUMN IF NOT EXISTS seo_title text DEFAULT '',
  ADD COLUMN IF NOT EXISTS seo_description text DEFAULT '',
  ADD COLUMN IF NOT EXISTS metier_title text DEFAULT '',
  ADD COLUMN IF NOT EXISTS metier_text text DEFAULT '',
  -- Array of list blocks: [{ "subtitle": string, "items": string[] }]
  ADD COLUMN IF NOT EXISTS metier_lists jsonb DEFAULT '[]'::jsonb;
