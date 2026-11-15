<script setup lang="ts">
import type { Realisation } from '~/models'

// Section « Ils ont lancé leur site » : grille d'avis clients (capture du site + note + témoignage).
// Données : table « realisations » (gérée depuis l'admin), rendues côté serveur.
// Partagée entre la page des modèles et la page clé en main ; masquée s'il n'y a aucun avis.
const props = withDefaults(defineProps<{ title?: string }>(), {
  title: 'Ils ont lancé leur site'
})

const supabase = useSupabaseClient()

// lazy + cache : n'empêche pas la page de s'ouvrir, et réutilise les avis déjà chargés.
const { data: realisations } = useAsyncData(
  'realisations-reviews',
  async () => {
    const { data, error } = await supabase
      .from('realisations')
      .select(REALISATION_COLUMNS)
      .order('display_order', { ascending: true })

    if (error) throw error
    // URLs Supabase Storage (jamais de base64 dans le HTML) : voir utils/media.ts
    return withRealisationImages(supabase, (data || []) as unknown as Realisation[])
  },
  {
    default: () => [] as Realisation[],
    lazy: true,
    getCachedData: (key, nuxtApp) => nuxtApp.payload.data[key] ?? nuxtApp.static.data[key]
  }
)
</script>

<template>
  <section v-if="realisations.length" class="py-12 sm:py-16 md:py-20 bg-gray-50">
    <div class="text-center mb-10 sm:mb-12" v-motion-slide-visible-once-bottom>
      <span class="inline-block text-primary-600 font-semibold text-sm sm:text-base mb-3">Réalisations</span>
      <h2 class="mb-4 sm:mb-6">{{ props.title }}</h2>
      <p class="text-base sm:text-lg text-secondary-600 leading-relaxed">
        Des professionnels équins déjà en ligne, à partir de mes modèles.
      </p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" v-motion-slide-visible-once-bottom>
      <RealisationCard
        v-for="realisation in realisations"
        :key="realisation.id"
        :realisation="realisation"
      />
    </div>
  </section>
</template>
