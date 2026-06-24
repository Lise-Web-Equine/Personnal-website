// Social proof entry: combines a client testimonial with the realised website.
export type RealisationType = 'pack' | 'template'

export interface Realisation {
  id: string
  client_name: string
  client_profession: string
  client_photo: string | null
  site_url: string | null
  site_image: string
  quote: string
  rating: number | null
  type: RealisationType
  template_id: string | null
  featured: boolean
  display_order: number
  created_at: string
  updated_at: string
}

export interface RealisationCreate {
  client_name: string
  client_profession: string
  client_photo: string | null
  site_url: string | null
  site_image: string
  quote: string
  rating: number | null
  type: RealisationType
  template_id: string | null
  featured: boolean
  display_order: number
}

export interface RealisationUpdate {
  client_name?: string
  client_profession?: string
  client_photo?: string | null
  site_url?: string | null
  site_image?: string
  quote?: string
  rating?: number | null
  type?: RealisationType
  template_id?: string | null
  featured?: boolean
  display_order?: number
  updated_at?: string
}
