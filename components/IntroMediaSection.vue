<template>
  <!-- Section d'introduction : colonne texte + colonne média (vidéo ou image) -->
  <section class="py-12 sm:py-16 md:py-20">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
      <!-- Colonne texte : titre + contenu libre via slot -->
      <div class="space-y-6" v-motion-slide-visible-once-bottom>
        <h2 class="mb-4 sm:mb-6">{{ title }}</h2>
        <slot />
      </div>

      <!-- Colonne média : vidéo si une source vidéo est fournie, sinon image -->
      <div v-motion-slide-visible-once-bottom>
        <video
          v-if="videoSrc"
          :src="videoSrc"
          :class="mediaClasses"
          autoplay
          muted
          loop
          playsinline
        ></video>
        <NuxtImg
          v-else-if="imageSrc"
          :src="imageSrc"
          :alt="imageAlt"
          :class="mediaClasses"
          sizes="(max-width: 768px) 100vw, 50vw"
          loading="lazy"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  // Titre de la section (rendu en h2, hérite du style global)
  title: string
  // Source de la vidéo : prioritaire sur l'image si renseignée
  videoSrc?: string
  // Source de l'image : utilisée si aucune vidéo n'est fournie
  imageSrc?: string
  // Texte alternatif de l'image (accessibilité / SEO)
  imageAlt?: string
  // Classe de ratio d'aspect du média (ex: 'aspect-video', 'aspect-[862/1081]')
  mediaAspectClass?: string
}

const props = withDefaults(defineProps<Props>(), {
  videoSrc: '',
  imageSrc: '',
  imageAlt: '',
  mediaAspectClass: 'aspect-video'
})

// Classes communes appliquées au média (vidéo ou image)
const mediaClasses = computed(
  () => `w-full ${props.mediaAspectClass} object-cover rounded-2xl shadow-lg`
)
</script>
