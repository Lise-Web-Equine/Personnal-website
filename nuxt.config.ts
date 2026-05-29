// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },

  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@vueuse/motion/nuxt', '@vercel/speed-insights/nuxt','@vercel/analytics', ['@nuxtjs/supabase', {
    redirect: false
  }]],

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      htmlAttrs: {
        lang: 'fr'
      },
      title: 'Lise Web Equine - Création de sites web pour le secteur équestre',
      meta: [
        { name: 'description', content: 'Agence web spécialisée dans la création de sites sur mesure et de template personnalisable pour les professionnels équestres(ostéopathes, maréchaux-ferrants, centres équestres, marketing digital).' },
        { name: 'keywords', content: 'site web équestre, création site web, ostéopathe équin, maréchal-ferrant, centre équestre, site vitrine, templates web, site sur mesure, site web équestre, template cheval, template équin, template pour site web équestre, template pour site internet équestre' },
        { property: 'og:title', content: 'Lise Web Equine - Création de sites internet pour le secteur équestre' },
        { property: 'og:description', content: 'Agence web spécialisée dans la création de sites sur mesure et de template personnalisable pour les professionnels équestres.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'fr_FR' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Lise Web Equine - Création de sites internet pour le secteur équestre' },
        { name: 'twitter:description', content: 'Agence web spécialisée dans la création de sites sur mesure et de template personnalisable pour les professionnels équestres.' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap' }
      ],
      script: [
        { src: 'https://www.googletagmanager.com/gtag/js?id=G-THH7659RXF', async: true },
        {
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-THH7659RXF');
          `
        }
      ]
    }
  },

  nitro: {
    routeRules: {
      '/images/**': { headers: { 'Cache-Control': 'public, max-age=31536000, immutable' } },
      '/fonts/**': { headers: { 'Cache-Control': 'public, max-age=31536000, immutable' } }
    }
  },

  runtimeConfig: {
    smtpHost: process.env.SMTP_HOST || 'ssl0.ovh.net',
    smtpPort: process.env.SMTP_PORT || '465',
    smtpUser: process.env.SMTP_USER,
    smtpPass: process.env.SMTP_PASS,
    smtpTo: process.env.SMTP_TO,
    stripeSecretKey: process.env.STRIPE_SECRET_KEY,
    stripeWebhookSecret: process.env.STRIPE_WEBHOOK_SECRET,
    stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    resendApiKey: process.env.RESEND_API_KEY,
    resendFromEmail: process.env.RESEND_FROM_EMAIL,
    resendToEmail: process.env.RESEND_TO_EMAIL,
    resendAudienceId: process.env.RESEND_AUDIENCE_ID,
    resendConfirmationTemplateId: process.env.RESEND_CONFIRMATION_TEMPLATE_ID,
    resendBuyersSegmentId: process.env.RESEND_BUYERS_SEGMENT_ID,
    supabaseUrl: process.env.SUPABASE_URL,
    supabaseKey: process.env.SUPABASE_KEY,
    appUrl: process.env.APP_URL,
    public: {
      // On la met dans "public" pour que le middleware du navigateur puisse la lire
      maintenanceMode: process.env.MAINTENANCE_MODE === 'true'
    }
  },

  site: {
    url: 'https://lisewebequine.fr'
  },

  sitemap: {
    urls: [
      { loc: '/', changefreq: 'weekly', priority: 1.0 },
      { loc: '/studio', changefreq: 'monthly', priority: 0.9 },
      { loc: '/templates', changefreq: 'weekly', priority: 0.9 },
      { loc: '/contact', changefreq: 'monthly', priority: 0.8 },
      { loc: '/templates/osteopathe-equin', changefreq: 'monthly', priority: 0.8 },
      { loc: '/templates/shiatsu-equin', changefreq: 'monthly', priority: 0.8 },
      { loc: '/templates/cart', changefreq: 'never', priority: 0.3 },
      { loc: '/mentions-legales', changefreq: 'yearly', priority: 0.3 },
      { loc: '/cgu', changefreq: 'yearly', priority: 0.3 },
      { loc: '/cgv', changefreq: 'yearly', priority: 0.3 },
      { loc: '/politique-confidentialite', changefreq: 'yearly', priority: 0.3 }
    ]
  }
})