<template>
  <section class="py-12 sm:py-16 md:py-20 relative overflow-hidden bg-hero-dots">
    <div class="relative">
      <div class="text-left sm:text-center mb-10 sm:mb-12" v-motion-slide-visible-once-bottom>
        <span v-if="eyebrow" class="inline-block text-primary-300 font-semibold text-sm sm:text-base mb-3">{{ eyebrow }}</span>
        <h2 class="mb-4 sm:mb-6 text-white">
          {{ title }}
        </h2>
        <p v-if="subtitle" class="text-base sm:text-lg text-secondary-200 max-w-3xl mx-auto">
          {{ subtitle }}
        </p>
      </div>

      <div class="grid grid-cols-1 gap-x-8 gap-y-10" :class="gridClasses">
        <div
          v-for="(feature, index) in features"
          :key="index"
          v-motion-slide-visible-once-bottom
        >
          <div class="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-4">
            <component :is="feature.icon" :size="24" class="text-primary-300" />
          </div>
          <h3 class="text-lg sm:text-xl font-semibold text-white mb-2">
            {{ feature.title }}
          </h3>
          <p class="text-sm sm:text-base text-secondary-200 leading-relaxed">
            {{ feature.description }}
          </p>
        </div>
      </div>

      <!-- Emplacement CTA optionnel (ex: bouton d'aperçu du guide) -->
      <div v-if="$slots.cta" class="mt-10 sm:mt-12 flex justify-start sm:justify-center" v-motion-slide-visible-once-bottom>
        <slot name="cta" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Component } from 'vue'

interface Feature {
  icon: Component
  iconColor?: string
  title: string
  description: string
}

interface Props {
  title: string
  subtitle?: string
  eyebrow?: string
  features: Feature[]
}

const props = withDefaults(defineProps<Props>(), {
  subtitle: '',
  eyebrow: ''
})

// Nombre de colonnes adapté au nombre de points, pour éviter une carte orpheline sur tablette.
const gridClasses = computed(() => {
  switch (props.features.length) {
    case 2: return 'sm:grid-cols-2 max-w-4xl mx-auto'
    case 3: return 'md:grid-cols-3'
    case 4: return 'sm:grid-cols-2 lg:grid-cols-4'
    default: return 'sm:grid-cols-2 lg:grid-cols-3'
  }
})
</script>
