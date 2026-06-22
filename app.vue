<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
// URL de production du site
const siteUrl = 'https://lisewebequine.fr'
const route = useRoute()

// Génère automatiquement l'URL canonique de chaque page à partir de son chemin
// (on retire la barre oblique finale, sauf pour la page d'accueil)
const canonicalUrl = computed(() => {
  const path = route.path === '/' ? '/' : route.path.replace(/\/$/, '')
  return `${siteUrl}${path}`
})

useHead({
  // Par défaut, les pages sont indexables. Les pages techniques/privées
  // surchargent cette valeur avec un robots 'noindex' (voir definePageMeta).
  meta: [
    { name: 'robots', content: 'index, follow' }
  ],
  link: [
    { rel: 'canonical', href: canonicalUrl }
  ]
})
</script>
