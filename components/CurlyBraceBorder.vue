<template>
  <!--
    Bordure décorative en forme d'accolade (curly brace).
    - SVG fluide (preserveAspectRatio="none") étiré sur toute la largeur.
    - Uniquement le trait : fill="none" + stroke.
    - vector-effect="non-scaling-stroke" garde une épaisseur constante malgré
      l'étirement non uniforme du SVG (responsive mobile/desktop).
    - La pointe de l'accolade est centrée et orientée vers le bas.
  -->
  <div
    class="pointer-events-none absolute inset-x-0 z-20 hidden sm:block"
    :class="position === 'top' ? 'top-0' : 'bottom-0'"
    aria-hidden="true"
  >
    <svg
      class="block w-full"
      :style="{ height: height }"
      viewBox="0 0 1200 100"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        :d="bracePath"
        fill="none"
        :stroke="stroke"
        :stroke-width="strokeWidth"
        stroke-linecap="round"
        stroke-linejoin="round"
        vector-effect="non-scaling-stroke"
      />
    </svg>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  // Couleur du trait (accepte currentColor pour hériter la couleur du parent)
  stroke?: string
  // Épaisseur du trait en pixels (constante grâce à non-scaling-stroke)
  strokeWidth?: number
  // Hauteur visuelle de la bordure (ex: '2rem', '48px')
  height?: string
  // Position verticale : accolade en bas (défaut) ou en haut
  position?: 'top' | 'bottom'
}

const props = withDefaults(defineProps<Props>(), {
  stroke: 'currentColor',
  strokeWidth: 2,
  height: '2.5rem',
  position: 'bottom',
})

// Tracé de l'accolade horizontale dont la pointe centrale descend vers le bas.
// Pour une position 'top', on inverse verticalement le tracé (pointe vers le haut).
const bracePath = computed(() => {
  return props.position === 'top'
    ? 'M0,90 C250,90 250,55 400,55 C520,55 540,50 600,10 C660,50 680,55 800,55 C950,55 950,90 1200,90'
    : 'M0,10 C250,10 250,45 400,45 C520,45 540,50 600,90 C660,50 680,45 800,45 C950,45 950,10 1200,10'
})
</script>
