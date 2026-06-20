-- Add specialties column to templates table
ALTER TABLE templates
ADD COLUMN IF NOT EXISTS specialties text[] DEFAULT ARRAY[]::text[];
