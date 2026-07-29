/**
 * Generic GA4 event tracking composable for engagement / conversion events
 * (quiz funnel, CTA clicks, lead generation, etc.).
 *
 * Unlike useEcommerceTracking (which sends standard e-commerce events), this
 * helper sends arbitrary custom events so we can measure how well marketing
 * pages convert. Events are visible in GA4 under Rapports > Engagement >
 * Événements, and can be marked as "Événements clés" (conversions).
 *
 * Safely no-ops on the server or when gtag is unavailable (e.g. ad-blockers).
 */
export const useAnalytics = () => {
  const trackEvent = (name: string, params: Record<string, unknown> = {}) => {
    if (typeof window === 'undefined') return
    const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag
    if (typeof gtag !== 'function') return
    gtag('event', name, params)
  }

  return { trackEvent }
}
