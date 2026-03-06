/*
  # Create Templates Table for Digital Marketplace

  1. New Tables
    - `templates`
      - `id` (uuid, primary key) - Unique identifier for each template
      - `name` (text) - Template name/title
      - `description` (text) - Detailed description of the template
      - `category` (text) - Template category (e.g., 'business', 'ecommerce', 'portfolio', 'blog')
      - `price` (numeric) - Template price in USD
      - `image_url` (text) - URL to template preview image
      - `demo_url` (text) - URL to live demo
      - `features` (jsonb) - Array of template features
      - `tags` (text[]) - Array of search tags
      - `is_featured` (boolean) - Whether template is featured on homepage
      - `downloads` (integer) - Number of downloads/purchases
      - `rating` (numeric) - Average rating (0-5)
      - `created_at` (timestamptz) - When template was added
      - `updated_at` (timestamptz) - Last update timestamp

  2. Security
    - Enable RLS on `templates` table
    - Add policy for public read access (anyone can view templates)
    - Future: Add policies for admin management

  3. Indexes
    - Index on category for filtering
    - Index on is_featured for homepage queries
*/

CREATE TABLE IF NOT EXISTS templates (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  category text NOT NULL,
  price numeric(10, 2) NOT NULL DEFAULT 0,
  image_url text NOT NULL,
  demo_url text,
  features jsonb DEFAULT '[]'::jsonb,
  tags text[] DEFAULT ARRAY[]::text[],
  is_featured boolean DEFAULT false,
  downloads integer DEFAULT 0,
  rating numeric(3, 2) DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE templates ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view templates"
  ON templates
  FOR SELECT
  USING (true);

CREATE INDEX IF NOT EXISTS idx_templates_category ON templates(category);
CREATE INDEX IF NOT EXISTS idx_templates_featured ON templates(is_featured) WHERE is_featured = true;
CREATE INDEX IF NOT EXISTS idx_templates_created ON templates(created_at DESC);

INSERT INTO templates (name, description, category, price, image_url, demo_url, features, tags, is_featured, downloads, rating) VALUES
  (
    'Modern Business Pro',
    'A sleek and professional business template with a modern design aesthetic. Perfect for agencies, consultants, and corporate websites.',
    'business',
    79.00,
    'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
    '#',
    '["Responsive Design", "Contact Forms", "SEO Optimized", "Fast Loading", "Modern UI"]'::jsonb,
    ARRAY['business', 'corporate', 'professional', 'agency'],
    true,
    342,
    4.8
  ),
  (
    'E-Commerce Luxe',
    'Premium e-commerce template with advanced product filtering, shopping cart, and checkout flow. Optimized for high conversion rates.',
    'ecommerce',
    129.00,
    'https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
    '#',
    '["Shopping Cart", "Product Filters", "Payment Integration", "Inventory Management", "Mobile Optimized"]'::jsonb,
    ARRAY['ecommerce', 'shop', 'store', 'retail'],
    true,
    256,
    4.9
  ),
  (
    'Creative Portfolio',
    'Stunning portfolio template for designers, photographers, and creative professionals. Showcase your work in style.',
    'portfolio',
    49.00,
    'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=800',
    '#',
    '["Gallery Grid", "Lightbox", "Project Pages", "Smooth Animations", "Contact Form"]'::jsonb,
    ARRAY['portfolio', 'creative', 'photography', 'design'],
    true,
    489,
    4.7
  ),
  (
    'Blog Minimal',
    'Clean and minimal blog template focused on typography and readability. Perfect for writers and content creators.',
    'blog',
    39.00,
    'https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=800',
    '#',
    '["Post Categories", "Search Function", "Social Sharing", "Comment System", "Newsletter"]'::jsonb,
    ARRAY['blog', 'writing', 'content', 'minimal'],
    false,
    178,
    4.6
  ),
  (
    'SaaS Landing Pro',
    'High-converting landing page template for SaaS products. Includes pricing tables, feature sections, and testimonials.',
    'saas',
    89.00,
    'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
    '#',
    '["Pricing Tables", "Feature Sections", "Testimonials", "CTA Buttons", "Analytics Ready"]'::jsonb,
    ARRAY['saas', 'landing', 'startup', 'tech'],
    false,
    312,
    4.8
  ),
  (
    'Restaurant Deluxe',
    'Beautiful restaurant template with online menu, reservations, and location map. Perfect for cafes and dining establishments.',
    'restaurant',
    69.00,
    'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800',
    '#',
    '["Online Menu", "Reservation System", "Location Map", "Gallery", "Mobile Friendly"]'::jsonb,
    ARRAY['restaurant', 'food', 'cafe', 'dining'],
    false,
    134,
    4.5
  ),
  (
    'Fitness Studio',
    'Dynamic fitness and gym template with class schedules, trainer profiles, and membership plans.',
    'fitness',
    59.00,
    'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800',
    '#',
    '["Class Schedules", "Trainer Profiles", "Membership Plans", "Video Backgrounds", "Booking System"]'::jsonb,
    ARRAY['fitness', 'gym', 'health', 'sports'],
    false,
    89,
    4.4
  ),
  (
    'Real Estate Prime',
    'Professional real estate template with property listings, search filters, and virtual tour support.',
    'realestate',
    99.00,
    'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=800',
    '#',
    '["Property Listings", "Advanced Search", "Virtual Tours", "Agent Profiles", "Map Integration"]'::jsonb,
    ARRAY['realestate', 'property', 'housing', 'estate'],
    false,
    201,
    4.7
  )
;