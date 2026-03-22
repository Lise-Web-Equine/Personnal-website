export interface Template {
  id: string
  name: string
  description: string
  speciality: string
  price: number
  image: string
  demo_url: string | null
  download_url: string
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
  speciality: string
  price: number
  image: string
  demo_url: string | null
  download_url: string
  features: string[]
  tags: string[]
  badge: 'best-seller' | 'new' | null
  promo: number | null
  rating: number
}

export interface TemplateUpdate {
  name?: string
  description?: string
  speciality?: string
  price?: number
  image?: string
  demo_url?: string | null
  download_url?: string
  features?: string[]
  tags?: string[]
  badge?: 'best-seller' | 'new' | null
  promo?: number | null
  rating?: number
  updated_at?: string
}
