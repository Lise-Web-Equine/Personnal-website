import type { MaybeRefOrGetter } from 'vue'

type Schema = Record<string, any>

/**
 * Injects a Schema.org JSON-LD structured data block into the document head.
 * Helps search engines understand the page content and enables rich results.
 *
 * Accepts a static object/array or a reactive ref/getter, so pages can build
 * their schema from data loaded asynchronously (e.g. a template fetched from Supabase).
 *
 * @param data - A Schema.org object, an array of objects, or a ref/getter returning either.
 */
export const useStructuredData = (data: MaybeRefOrGetter<Schema | Schema[]>) => {
  // Recompute the serialized JSON-LD whenever the source data changes.
  const json = computed(() => {
    const value = toValue(data)
    const schemas = Array.isArray(value) ? value : [value]
    return JSON.stringify(schemas.length === 1 ? schemas[0] : schemas)
  })

  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: json
      }
    ]
  })
}
