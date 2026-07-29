<template>
  <!-- -mt-20 annule le pt-20 global de <main> : le bandeau démarre tout en haut (derrière le header).
       Le padding-top compense la hauteur du header fixe pour que le titre ne passe pas sous le menu. -->
  <section class="-mt-20 pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 md:pb-20 lg:pt-44 lg:pb-24 relative overflow-hidden text-white text-center">
    <!-- Fond masqué : bg-secondary découpé en accolade (révèle la couleur de la section suivante) -->
    <div class="absolute inset-0 bg-secondary mask-brace-bottom">
      <!-- Background decoration -->
      <div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-900/30 to-transparent rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-purple-900/30 to-transparent rounded-full blur-3xl"></div>
    </div>

    <div class="relative">
      <div v-motion-slide-visible-once-bottom>
        <h1 class="mb-4 sm:mb-6 text-white block">{{ title }}</h1>
        <div v-if="badge" class="mt-6">
          <Badge variant="primary" :text="badge" />
        </div>
      </div>
    </div>

    <!-- Bordure décorative en forme d'accolade, pointe centrée vers le bas -->
    <CurlyBraceBorder
      class="text-white/70"
      height="2.5rem"
      :stroke-width="2"
    />
  </section>
</template>

<script setup lang="ts">
interface Props {
  title: string
  description: string
  badge?: string
}

defineProps<Props>()
</script>
