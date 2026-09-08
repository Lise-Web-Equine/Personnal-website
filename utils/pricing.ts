import type { Template } from '~/models'

// Minimal shape needed to compute a template's price with its promotion.
type PricedTemplate = Pick<Template, 'price' | 'promo'>

// A template is on promotion when it has a strictly positive promo percentage.
export const hasPromo = (template: PricedTemplate): boolean =>
  typeof template.promo === 'number' && template.promo > 0

// Rounds a monetary amount to 2 decimals to avoid floating point artefacts.
const roundPrice = (value: number): number => Math.round(value * 100) / 100

// Final price the customer actually pays, once the promo percentage is applied.
export const getFinalPrice = (template: PricedTemplate): number =>
  hasPromo(template)
    ? roundPrice(template.price * (1 - (template.promo as number) / 100))
    : template.price

// Amount saved thanks to the promotion (0 when there is no promo).
export const getSavings = (template: PricedTemplate): number =>
  hasPromo(template) ? roundPrice(template.price - getFinalPrice(template)) : 0

// Formats a price in euros with the French convention (comma, no trailing zeros
// forced), e.g. 49 -> "49€", 44.1 -> "44,10€".
export const formatPrice = (value: number): string =>
  `${value.toFixed(2).replace('.', ',')}€`
