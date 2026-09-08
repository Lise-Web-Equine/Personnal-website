import type { Template } from '~/models'
import type { CartItem } from '~/stores/cart'

// GA4 recommended e-commerce item shape.
interface Ga4Item {
  item_id: string
  item_name: string
  item_brand?: string
  item_category?: string
  price?: number
  quantity?: number
}

// Maps a Template product to the GA4 e-commerce item format.
// The reported price is the final (promo-aware) price actually paid.
const toGa4Item = (template: Template, quantity = 1): Ga4Item => ({
  item_id: template.id,
  item_name: template.name,
  item_brand: 'Lise Web Equine',
  item_category: template.speciality,
  price: getFinalPrice(template),
  quantity
})

// Pushes an event to GA4 via the global gtag function loaded in nuxt.config.
// Safely no-ops on the server or when gtag is unavailable (e.g. ad-blockers).
const track = (event: string, params: Record<string, unknown>) => {
  if (typeof window === 'undefined') return
  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag
  if (typeof gtag !== 'function') return
  gtag('event', event, params)
}

/**
 * Composable exposing GA4 e-commerce tracking helpers for the product/purchase
 * funnel. Each method sends a standard GA4 recommended event so that Analytics
 * (or a future GTM container) can report on the product sales funnel.
 */
export const useEcommerceTracking = () => {
  // A visitor views a product detail page.
  const trackViewItem = (template: Template) => {
    track('view_item', {
      currency: 'EUR',
      value: getFinalPrice(template),
      items: [toGa4Item(template)]
    })
  }

  // A product is added to the cart.
  const trackAddToCart = (template: Template, quantity = 1) => {
    track('add_to_cart', {
      currency: 'EUR',
      value: getFinalPrice(template) * quantity,
      items: [toGa4Item(template, quantity)]
    })
  }

  // A product is removed from the cart.
  const trackRemoveFromCart = (template: Template, quantity = 1) => {
    track('remove_from_cart', {
      currency: 'EUR',
      value: getFinalPrice(template) * quantity,
      items: [toGa4Item(template, quantity)]
    })
  }

  // The cart page is viewed.
  const trackViewCart = (items: CartItem[], total: number) => {
    track('view_cart', {
      currency: 'EUR',
      value: total,
      items: items.map(item => toGa4Item(item.template, item.quantity))
    })
  }

  // The checkout process starts (payment modal opened / redirect to Stripe).
  const trackBeginCheckout = (items: CartItem[], total: number) => {
    track('begin_checkout', {
      currency: 'EUR',
      value: total,
      items: items.map(item => toGa4Item(item.template, item.quantity))
    })
  }

  // A purchase is completed (success page after Stripe payment).
  const trackPurchase = (options: {
    transactionId: string
    value: number
    items: Ga4Item[]
  }) => {
    track('purchase', {
      transaction_id: options.transactionId,
      currency: 'EUR',
      value: options.value,
      items: options.items
    })
  }

  return {
    trackViewItem,
    trackAddToCart,
    trackRemoveFromCart,
    trackViewCart,
    trackBeginCheckout,
    trackPurchase
  }
}
