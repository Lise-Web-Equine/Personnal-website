<template>
  <NuxtLayout>
    <PageHeader 
      title="Mentions légales"
      description="Informations légales relatives au site Lise Web Equine"
    />

    <section class="py-12 sm:py-16 md:py-20">
        <div class="max-w-4xl mx-auto">
          <div v-if="loading" class="text-center py-20">
            <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
          </div>

          <div v-else-if="legalText" class="bg-white rounded-2xl border border-secondary-200 p-8 sm:p-12" v-motion-slide-visible-once-bottom>
            <div class="prose prose-lg max-w-none" v-html="legalText.content"></div>
          </div>

          <div v-else class="text-center py-20 text-secondary-600">
            Chargement des mentions légales...
          </div>
        </div>
    </section>
  </NuxtLayout>
</template>

<script setup lang="ts">
const supabase = useSupabaseClient()

// Texte légal chargé côté serveur (affiché immédiatement, lisible par Google)
// et mis en cache pour les navigations suivantes.
const { data: legalText, pending: loading } = useAsyncData(
  'legal-mentions-legales',
  async () => {
    const { data, error } = await supabase
      .from('legal_texts')
      .select('content')
      .eq('key', 'mentions-legales')
      .single()

    if (error) throw error
    return data as { content: string } | null
  },
  {
    default: () => null,
    getCachedData: (k, nuxtApp) => nuxtApp.payload.data[k] ?? nuxtApp.static.data[k]
  }
)

useHead({
  title: 'Mentions légales - Lise Web Equine',
  meta: [
    { name: 'description', content: 'Mentions légales du site Lise Web Equine. Informations sur l\'éditeur, l\'hébergement et la protection des données.' }
  ]
})
</script>
