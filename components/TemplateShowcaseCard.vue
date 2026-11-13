<script setup lang="ts">
import { ExternalLink, Star } from 'lucide-vue-next'
import type { Template } from '~/models'

// Carte vitrine d'un modèle : pas de prix ni de panier.
// Le modèle sert de point de départ au site clé en main : l'action principale
// mène à l'offre clé en main, la démo permet de se projeter.
const props = defineProps<{
  template: Template
}>()

const { trackEvent } = useAnalytics()

// Note moyenne issue des avis clients rattachés à ce modèle (null si aucun avis noté).
const { getRating } = useTemplateRatings()
const rating = computed(() => getRating(props.template.id))

const bookingLink = '/creation-site-internet-equestre/cle-en-main#offre'

const onBookClick = () => {
  trackEvent('template_showcase_book_click', { template: props.template.slug })
}

const onDemoClick = () => {
  trackEvent('template_showcase_demo_click', { template: props.template.slug })
}

// Recadrage uniforme : toutes les cartes prennent le format de l'image la moins haute.
// Chaque carte mesure son image (hauteur / largeur) au chargement et met à jour le
// ratio minimal partagé ; les images plus hautes sont recadrées depuis le haut.
const minImageRatio = useState<number | null>('template-card-min-image-ratio', () => null)
const imageRef = ref<{ $el?: HTMLImageElement } | null>(null)

const registerImageRatio = (img?: HTMLImageElement | null) => {
  if (!img?.naturalWidth || !img.naturalHeight) return
  const ratio = img.naturalHeight / img.naturalWidth
  if (minImageRatio.value === null || ratio < minImageRatio.value) {
    minImageRatio.value = ratio
  }
}

// Image déjà en cache avant l'hydratation : l'événement load a pu être manqué.
onMounted(() => {
  const img = imageRef.value?.$el
  if (img?.complete) registerImageRatio(img)
})

const imageFrameStyle = computed(() =>
  minImageRatio.value ? { aspectRatio: `1 / ${minImageRatio.value}` } : undefined
)
</script>

<template>
  <article class="flex flex-col bg-white rounded-xl overflow-hidden border border-secondary-200 shadow-sm hover:shadow-xl transition-shadow duration-300" v-motion-slide-visible-once-bottom>
    <!-- Capture du modèle, bord à bord, recadrée au format de la moins haute (cliquable vers la démo si elle existe) -->
    <component
      :is="template.demo_url ? 'a' : 'div'"
      :href="template.demo_url || undefined"
      :target="template.demo_url ? '_blank' : undefined"
      :rel="template.demo_url ? 'noopener noreferrer' : undefined"
      :aria-label="template.demo_url ? `Voir la démo du modèle ${template.name} (nouvel onglet)` : undefined"
      class="group relative block overflow-hidden border-b border-secondary-100"
      :style="imageFrameStyle"
      @click="template.demo_url && onDemoClick()"
    >
      <NuxtImg
        ref="imageRef"
        :src="template.image"
        :alt="`Modèle de site internet pour ${template.speciality || template.name}`"
        class="block w-full"
        :class="imageFrameStyle ? 'h-full object-cover object-top' : 'h-auto'"
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        loading="lazy"
        @load="registerImageRatio($event.target as HTMLImageElement)"
      />
    </component>

    <div class="flex flex-col flex-1 p-5 sm:p-6">
      <h3 class="text-lg font-bold text-secondary-900 leading-tight mb-2">{{ template.name }}</h3>

      <!-- Étoiles : note moyenne des avis clients sur ce modèle -->
      <div v-if="rating" class="flex items-center gap-1.5 mb-3" :aria-label="`Noté ${rating.average} sur 5 (${rating.count} avis)`">
        <div class="flex items-center text-yellow-500">
          <Star v-for="n in 5" :key="n" :size="16" :fill="n <= Math.round(rating.average) ? 'currentColor' : 'none'" />
        </div>
        <span class="text-sm font-semibold text-secondary-900">{{ rating.average }}</span>
        <span class="text-sm text-secondary-500">({{ rating.count }} avis)</span>
      </div>
      <!-- Pas encore d'avis : étoiles vides grisées + « 0 avis » -->
      <div v-else class="flex items-center gap-1.5 mb-3" aria-label="Aucun avis pour le moment">
        <div class="flex items-center text-secondary-300">
          <Star v-for="n in 5" :key="n" :size="16" fill="none" />
        </div>
        <span class="text-sm text-secondary-500">(0 avis)</span>
      </div>
      <div v-if="template.tags?.length" class="flex flex-wrap gap-1.5 mb-5">
        <span
          v-for="tag in template.tags.slice(0, 3)"
          :key="tag"
          class="text-xs font-semibold text-secondary-600 bg-secondary-100 px-2 py-0.5 rounded"
        >
          {{ tag }}
        </span>
      </div>

      <!-- Actions : « Voir la démo » en principal, « En savoir plus » (offre clé en main) en secondaire.
           Sans démo, « En savoir plus » devient le bouton principal pleine largeur. -->
      <div class="mt-auto grid gap-3" :class="template.demo_url ? 'grid-cols-2' : 'grid-cols-1'">
        <a
          v-if="template.demo_url"
          :href="template.demo_url"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-primary w-full !px-3 text-sm"
          @click="onDemoClick"
        >
          Voir la démo
          <ExternalLink :size="16" class="ml-2 shrink-0" />
        </a>
        <NuxtLink
          :to="bookingLink"
          class="w-full !px-3 text-sm"
          :class="template.demo_url ? 'btn-secondary' : 'btn-primary'"
          @click="onBookClick"
        >
          En savoir plus
        </NuxtLink>
      </div>
    </div>
  </article>
</template>
