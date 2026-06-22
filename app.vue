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

// Données structurées Schema.org globales (présentes sur toutes les pages).
// Décrit l'organisation et le site afin d'aider les moteurs de recherche.
useStructuredData([
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteUrl}/#organization`,
    name: 'Lise Web Equine',
    url: siteUrl,
    logo: `${siteUrl}/favicon.svg`,
    image: `${siteUrl}/images/lise-profile.jpg`,
    description:
      "Agence web spécialisée dans la création de sites internet sur mesure et de templates pour les prestataires équestres.",
    areaServed: 'FR',
    knowsLanguage: 'fr',
    sameAs: []
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    name: 'Lise Web Equine',
    url: siteUrl,
    inLanguage: 'fr-FR',
    publisher: { '@id': `${siteUrl}/#organization` }
  }
])
</script>
