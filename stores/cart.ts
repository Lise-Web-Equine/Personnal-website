import { defineStore } from 'pinia'
import type { Template } from '~/models'

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

    // Total à payer : le prix promo est appliqué lorsqu'un template est en promotion.
    totalPrice: (state) => state.items.reduce((total, item) => {
      return total + (getFinalPrice(item.template) * item.quantity)
    }, 0),

    // Total sans promotion, utilisé pour afficher le montant barré.
    originalTotalPrice: (state) => state.items.reduce((total, item) => {
      return total + (item.template.price * item.quantity)
    }, 0),

    // Montant total économisé grâce aux promotions du panier.
    totalSavings: (state) => state.items.reduce((total, item) => {
      return total + (getSavings(item.template) * item.quantity)
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

      // Suivi e-commerce : ajout au panier (GA4).
      useEcommerceTracking().trackAddToCart(template)
    },

    removeFromCart(templateId: string) {
      const index = this.items.findIndex(item => item.template.id === templateId)
      if (index > -1) {
        const [removed] = this.items.splice(index, 1)
        this.saveToLocalStorage()

        // Suivi e-commerce : retrait du panier (GA4).
        if (removed) {
          useEcommerceTracking().trackRemoveFromCart(removed.template, removed.quantity)
        }
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
