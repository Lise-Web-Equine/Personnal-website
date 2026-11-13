<script setup lang="ts">
import { ExternalLink } from 'lucide-vue-next'
import { latestRealisation as realisation } from '~/utils/realisations'

// Réalisation client mise en avant (maquette ordinateur + mobile + légende).
// Deux variantes :
// - 'hero'    : page d'accueil, la maquette est à cheval sur le bord bas du hero
//               (marge négative synchronisée avec le padding-bottom de .hero dans pages/index.vue) ;
// - 'section' : section autonome avec en-tête standard (sur-titre + h2 + texte),
//               à insérer telle quelle dans n'importe quelle page.
interface Props {
  variant?: 'hero' | 'section'
  title?: string
  subtitle?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'section',
  title: 'Ma dernière réalisation',
  subtitle: 'Un site internet conçu sur mesure et mis en ligne pour une agence de marketing et communication en Bretagne.'
})
</script>

<template>
  <!-- Variante 'hero' : la maquette est à cheval sur le bord net du hero (moitié
       haute sur le violet). Marge négative à garder égale à la réserve du
       padding-bottom du hero (.hero dans pages/index.vue). -->
  <section
    :class="props.variant === 'hero'
      ? 'relative z-10 -mt-20 sm:-mt-36 lg:-mt-56 pb-12 sm:pb-16 md:pb-20'
      : 'py-12 sm:py-16 md:py-20'"
  >
    <!-- Variante 'section' : en-tête au style standard des sections du site -->
    <div v-if="props.variant === 'section'" class="text-center mb-10 sm:mb-12" v-motion-slide-visible-once-bottom>
      <span class="inline-block text-primary-600 font-semibold text-sm sm:text-base mb-3">Réalisation</span>
      <h2 class="mb-4 sm:mb-6">{{ props.title }}</h2>
      <p v-if="props.subtitle" class="text-base sm:text-lg text-secondary-600 leading-relaxed">
        {{ props.subtitle }}
      </p>
    </div>

    <div v-motion-slide-visible-once-bottom class="flex flex-col items-center">
      <RealisationMockup />

      <!-- Légende : identifie clairement la maquette comme une réalisation client.
           Sur-titre au style des sur-titres du site (hero / FeaturesSection). -->
      <div class="mt-12 sm:mt-16 flex flex-col items-center text-center">
        <!-- Sur-titre uniquement en variante 'hero' (en 'section', il est déjà dans l'en-tête) -->
        <p v-if="props.variant === 'hero'" class="mb-2 text-center text-sm font-semibold uppercase tracking-widest text-primary-600">Réalisation sur mesure</p>
        <p class="text-center text-xl sm:text-2xl font-semibold tracking-tight text-secondary-900">
          {{ realisation.client }}
        </p>
        <p class="mt-1 text-center text-sm sm:text-base text-secondary-500">
          {{ realisation.activity }}
        </p>
        <a
          :href="realisation.url"
          target="_blank"
          rel="noopener noreferrer"
          class="mt-4 inline-flex items-center gap-1.5 border-b border-secondary-300 pb-0.5 text-sm font-medium text-secondary-800 hover:border-secondary-900 hover:text-secondary-900 transition-colors"
        >
          Voir le site
          <ExternalLink :size="14" />
        </a>
      </div>
    </div>
  </section>
</template>
