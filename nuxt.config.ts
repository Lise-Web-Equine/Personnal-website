// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },

  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vueuse/motion/nuxt',
    '@vercel/speed-insights/nuxt',
    ['@nuxtjs/supabase', {
      redirect: false
    }]
  ],

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      title: 'Lise Web Equine - Création de sites web pour le secteur équin',
      meta: [
        { name: 'description', content: 'Agence web spécialisée dans la création de sites sur mesure et de template personnalisable pour les professionnels du monde équin (ostéopathes, maréchaux-ferrants, centres équestres, marketing digital).' },
        { name: 'keywords', content: 'site web équin, création site web, ostéopathe équin, maréchal-ferrant, centre équestre, site vitrine, templates web, site sur mesure, site web équestre, template cheval, template équin, template pour site web équestre, template pour site internet équin' },
        { property: 'og:title', content: 'Lise Web Equine - Création de sites internet pour le secteur équin' },
        { property: 'og:description', content: 'Agence web spécialisée dans la création de sites sur mesure et de template personnalisable pour les professionnels du monde équin.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'fr_FR' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Lise Web Equine - Création de sites internet pour le secteur équin' },
        { name: 'twitter:description', content: 'Agence web spécialisée dans la création de sites sur mesure et de template personnalisable pour les professionnels du monde équin.' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap' }
      ]
    }
  },

  nitro: {
    routeRules: {
      '/images/**': { headers: { 'Cache-Control': 'public, max-age=31536000, immutable' } },
      '/fonts/**': { headers: { 'Cache-Control': 'public, max-age=31536000, immutable' } }
    }
  }
})
