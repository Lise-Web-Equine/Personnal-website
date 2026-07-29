<script setup lang="ts">
import { ref, computed } from 'vue'
import { Eye, X, ChevronLeft, ChevronRight } from 'lucide-vue-next'

interface GuidePage {
  label: string
  file: string
}

// Pages du guide disponibles dans le dossier public/pdf.
const pages: GuidePage[] = [
  { label: 'Introduction', file: 'Guide etape par etape 1.pdf' },
  { label: 'Étape clé', file: 'Guide etape par etape p8.pdf' },
  { label: 'Pages 10 & 11', file: 'Guide etape par etape p10-11.pdf' },
]

interface Props {
  // 'primary' : bouton violet (fonds clairs) — 'light' : bouton blanc (fonds sombres)
  variant?: 'primary' | 'light'
  label?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  label: 'Feuilleter un extrait du guide',
})

// Styles du bouton selon la variante (clair/sombre).
const buttonClasses = computed(() =>
  props.variant === 'light'
    ? 'bg-white text-secondary-900 shadow-lg shadow-black/20 hover:bg-secondary-100'
    : 'bg-primary-500 text-white shadow-lg shadow-primary-500/30 hover:bg-primary-600',
)

const isOpen = ref(false)
const current = ref(0)

// URL du PDF courant (rendu via la visionneuse vue-pdf-embed, sans option de téléchargement).
const currentUrl = computed(() => `/pdf/${encodeURIComponent(pages[current.value].file)}`)

const open = () => {
  current.value = 0
  isOpen.value = true
}

const next = () => {
  current.value = (current.value + 1) % pages.length
}

const prev = () => {
  current.value = (current.value - 1 + pages.length) % pages.length
}
</script>

<template>
  <div>
    <!-- Bouton de réassurance : ouvre un aperçu du guide -->
    <button
      type="button"
      @click="open"
      :class="buttonClasses"
      class="inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-semibold transition-all hover:-translate-y-0.5 hover:shadow-xl"
    >
      <Eye class="h-5 w-5" />
      {{ label }}
    </button>

    <!-- Modale d'aperçu PDF -->
    <Teleport to="body">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 flex items-center justify-center p-4"
        @click.self="isOpen = false"
      >
        <div class="absolute inset-0 bg-secondary-900/70 backdrop-blur-sm"></div>

        <div class="relative flex w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
          <!-- En-tête -->
          <div class="flex items-center justify-between border-b border-secondary-100 px-5 py-3">
            <div class="flex items-center gap-2">
              <span class="font-semibold text-secondary-900">Aperçu du guide</span>

            </div>
            <button
              type="button"
              @click="isOpen = false"
              class="rounded-lg p-2 text-secondary-500 transition-colors hover:bg-secondary-100 hover:text-secondary-900"
              aria-label="Fermer l'aperçu"
            >
              <X class="h-5 w-5" />
            </button>
          </div>

          <!-- Aperçu PDF (rendu canvas via vue-pdf-embed : non téléchargeable) -->
          <div
            class="relative max-h-[65vh] w-full overflow-y-auto bg-secondary-100"
            @contextmenu.prevent
          >
            <ClientOnly>
              <VuePdfEmbed :source="currentUrl" class="select-none" />
              <template #fallback>
                <div class="flex h-64 items-center justify-center text-sm text-secondary-500">
                  Chargement de l'aperçu…
                </div>
              </template>
            </ClientOnly>
          </div>

          <!-- Navigation entre les pages -->
          <div class="flex items-center justify-between border-t border-secondary-100 px-5 py-3">
            <button
              type="button"
              @click="prev"
              class="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-secondary-700 transition-colors hover:bg-secondary-100"
            >
              <ChevronLeft class="h-4 w-4" />
              Précédent
            </button>
            <span class="text-sm text-secondary-500">{{ current + 1 }} / {{ pages.length }}</span>
            <button
              type="button"
              @click="next"
              class="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-secondary-700 transition-colors hover:bg-secondary-100"
            >
              Suivant
              <ChevronRight class="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>
