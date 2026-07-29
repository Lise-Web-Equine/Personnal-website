-- Add per-template custom FAQ items to templates table
ALTER TABLE templates
  -- Array of FAQ entries: [{ "question": string, "answer"?: string, "list"?: string[] }]
  ADD COLUMN IF NOT EXISTS faq_items jsonb DEFAULT '[]'::jsonb;
