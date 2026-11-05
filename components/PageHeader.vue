<template>
  <!-- -mt-20 annule le pt-20 global de <main> : le bandeau démarre tout en haut (derrière le header).
       Le padding-top compense la hauteur du header fixe pour que le titre ne passe pas sous le menu. -->
  <!-- bg-hero-dots : même fond que le hero de l'accueil (violet + trame de points, voir main.css) -->
  <section class="-mt-20 pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 md:pb-20 lg:pt-44 lg:pb-24 relative overflow-hidden text-white text-center bg-hero-dots">
    <div class="relative">
      <div v-motion-slide-visible-once-bottom>
        <h1 class="mb-4 sm:mb-6 text-white block">{{ title }}</h1>
        <div v-if="badge" class="mt-6">
          <Badge variant="primary" :text="badge" />
        </div>
      </div>
    </div>
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
