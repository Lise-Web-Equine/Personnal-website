export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      templates: {
        Row: {
          id: string
          name: string
          description: string
          category: string
          price: number
          image_url: string
          demo_url: string | null
          features: string[]
          tags: string[]
          is_featured: boolean
          downloads: number
          rating: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          name: string
          description: string
          category: string
          price: number
          image_url: string
          demo_url: string | null
          features: string[]
          tags: string[]
          is_featured: boolean
          downloads: number
          rating: number
          created_at: string
          updated_at: string
        }
        Update: {
          id: string
          name: string
          description: string
          category: string
          price: number
          image_url: string
          demo_url: string | null
          features: string[]
          tags: string[]
          is_featured: boolean
          downloads: number
          rating: number
          created_at: string
          updated_at: string
        }
      }
      legal_texts: {
        Row: {
          id: string
          key: string
          title: string
          content: string
          updated_at: string
        }
        Insert: {
          id: string
          key: string
          title: string
          content: string
          updated_at: string
        }
        Update: {
          id: string
          key: string
          title: string
          content: string
          updated_at: string
        }
      }
    }
    Views: {
      [_in: never]: never
    }
    Functions: {
      [_in: never]: never
    }
    Enums: {
      [_in: never]: never
    }
    CompositeTypes: {
      [_in: never]: never
    }
  }
}
