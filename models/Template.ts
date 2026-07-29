// A list block inside the "métier" descriptive section: a subtitle + its bullet items.
export interface MetierList {
  subtitle: string
  items: string[]
}

export interface Template {
  id: string
  name: string
  slug: string
  description: string
  speciality: string
  price: number
  image: string
  demo_url: string | null
  download_url: string
  features: string[]
  tags: string[]
  specialties: string[]
  badge: 'best-seller' | 'new' | null
  promo: number | null
  rating: number
  seo_title: string
  seo_description: string
  metier_title: string
  metier_text: string
  metier_lists: MetierList[]
  created_at: string
  updated_at: string
}

export interface TemplateCreate {
  name: string
  slug: string
  description: string
  speciality: string
  price: number
  image: string
  demo_url: string | null
  download_url: string
  features: string[]
  tags: string[]
  specialties: string[]
  badge: 'best-seller' | 'new' | null
  promo: number | null
  rating: number
  seo_title: string
  seo_description: string
  metier_title: string
  metier_text: string
  metier_lists: MetierList[]
}

export interface TemplateUpdate {
  name?: string
  slug?: string
  description?: string
  speciality?: string
  price?: number
  image?: string
  demo_url?: string | null
  download_url?: string
  features?: string[]
  tags?: string[]
  specialties?: string[]
  badge?: 'best-seller' | 'new' | null
  promo?: number | null
  rating?: number
  seo_title?: string
  seo_description?: string
  metier_title?: string
  metier_text?: string
  metier_lists?: MetierList[]
  updated_at?: string
}
