// A list block inside the "métier" descriptive section: a simple bullet list
// (same format as a FAQ item's "list" field, markdown bold/links supported).
export interface MetierList {
  items: string[]
}

// A custom FAQ entry shown on the template detail page: a question with an
// optional markdown answer and/or an optional bullet list.
export interface FaqItem {
  question: string
  answer?: string
  list?: string[]
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
  faq_items: FaqItem[]
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
  faq_items: FaqItem[]
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
  faq_items?: FaqItem[]
  updated_at?: string
}
