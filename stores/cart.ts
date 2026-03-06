import { defineStore } from 'pinia'

export interface Template {
  id: string
  name: string
  description: string
  category: string
  price: number
  image_url: string
  demo_url: string
  features: string[]
  tags: string[]
  is_featured: boolean
  downloads: number
  rating: number
}

export interface CartItem {
  template: Template
  quantity: number
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as CartItem[],
  }),

  getters: {
    itemCount: (state) => state.items.reduce((count, item) => count + item.quantity, 0),

    totalPrice: (state) => state.items.reduce((total, item) => {
      return total + (item.template.price * item.quantity)
    }, 0),

    cartItems: (state) => state.items,
  },

  actions: {
    addToCart(template: Template) {
      const existingItem = this.items.find(item => item.template.id === template.id)

      if (existingItem) {
        existingItem.quantity++
      } else {
        this.items.push({
          template,
          quantity: 1
        })
      }

      this.saveToLocalStorage()
    },

    removeFromCart(templateId: string) {
      const index = this.items.findIndex(item => item.template.id === templateId)
      if (index > -1) {
        this.items.splice(index, 1)
        this.saveToLocalStorage()
      }
    },

    updateQuantity(templateId: string, quantity: number) {
      const item = this.items.find(item => item.template.id === templateId)
      if (item) {
        if (quantity <= 0) {
          this.removeFromCart(templateId)
        } else {
          item.quantity = quantity
          this.saveToLocalStorage()
        }
      }
    },

    clearCart() {
      this.items = []
      this.saveToLocalStorage()
    },

    saveToLocalStorage() {
      if (typeof window !== 'undefined') {
        localStorage.setItem('cart', JSON.stringify(this.items))
      }
    },

    loadFromLocalStorage() {
      if (typeof window !== 'undefined') {
        const saved = localStorage.getItem('cart')
        if (saved) {
          try {
            this.items = JSON.parse(saved)
          } catch (e) {
            console.error('Failed to load cart from localStorage', e)
          }
        }
      }
    }
  }
})
