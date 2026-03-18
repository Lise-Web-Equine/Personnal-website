export interface Template {
  id: string
  name: string
  description: string
  specialty: string
  price: number
  image_url: string
  demo_url: string | null
  features: string[]
  tags: string[]
  badge: 'best-seller' | 'new' | null
  promo: number | null
  rating: number
  created_at: string
  updated_at: string
}

export interface TemplateCreate {
  name: string
  description: string
  specialty: string
  price: number
  image_url: string
  demo_url: string | null
  features: string[]
  tags: string[]
  badge: 'best-seller' | 'new' | null
  promo: number | null
  rating: number
}

export interface TemplateUpdate {
  name?: string
  description?: string
  specialty?: string
  price?: number
  image_url?: string
  demo_url?: string | null
  features?: string[]
  tags?: string[]
  badge?: 'best-seller' | 'new' | null
  promo?: number | null
  rating?: number
  updated_at?: string
}
