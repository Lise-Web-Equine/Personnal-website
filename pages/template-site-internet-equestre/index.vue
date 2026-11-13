<template>
  <NuxtLayout>
    <!-- Vitrine des modèles (plus de vente de templates) :
         message = « il existe un modèle pour votre activité, réservez votre site clé en main ». -->
    <PageHeader
      title="Un modèle pour votre activité équestre"
      description="Choisissez votre modèle : je crée votre site d'une page pour vous, clé en main."
    />

    <!-- Grille des modèles -->
    <section id="grille-templates" class="py-12 sm:py-16 md:py-20">
      <div class="text-center mb-10 sm:mb-12" v-motion-slide-visible-once-bottom>
        <h2 class="mb-4 sm:mb-6">Trouvez le modèle fait pour votre métier</h2>
        <p class="text-base sm:text-lg text-secondary-600 leading-relaxed">
          J'ai conçu ces modèles d'une page pour les professionnels du cheval. Je ne repars pas de zéro : c'est ce qui me permet de vous proposer un site professionnel, rapide et accessible.
        </p>
      </div>

      <div v-if="loading" class="text-center py-20">
        <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
      </div>

      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <TemplateShowcaseCard
          v-for="template in templates"
          :key="template.id"
          :template="template"
        />

        <!-- Métier absent de la liste -->
        <div class="flex flex-col justify-center items-center text-center rounded-xl bg-hero-dots relative overflow-hidden p-8 min-h-[320px]" v-motion-slide-visible-once-bottom>
          <div class="relative">
            <h3 class="text-xl font-bold text-white mb-3">Votre métier n'est pas dans la liste ?</h3>
            <p class="text-center text-secondary-200 mb-6 text-sm sm:text-base">
              Ostéopathe, maréchal-ferrant, pensions … Je pars du modèle le plus proche et je l'adapte à votre activité.
            </p>
            <NuxtLink to="/contact?service=template" class="btn-primary inline-flex items-center text-sm">
              Écrivez-moi
              <MessageSquare :size="16" class="ml-2" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Comment ça se passe : fond violet (comme les autres sections sombres), 3 temps, une phrase chacun -->
    <section class="py-12 sm:py-16 md:py-20 relative overflow-hidden bg-hero-dots">
      <div class="relative">
        <div class="text-left sm:text-center mb-10 sm:mb-14" v-motion-slide-visible-once-bottom>
          <span class="inline-bloElles ont lancé leur sitet-semibold text-sm sm:text-base mb-3">Comment ça se passe ?</span>
          <h2 class="mb-4 sm:mb-6 text-white">Votre site, sans y passer vos soirées</h2>
        </div>

        <ol class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10" v-motion-slide-visible-once-bottom>
          <li v-for="(step, index) in steps" :key="step.title" class="flex items-start gap-4 md:flex-col md:items-center">
            <span class="shrink-0 w-11 h-11 md:mx-auto md:mb-4 rounded-full flex items-center justify-center font-bold bg-primary-500/20 text-primary-200">
              {{ index + 1 }}
            </span>
            <div class="pt-2 md:pt-0">
              <h3 class="mb-1 md:mb-2 text-left md:text-center text-lg sm:text-xl font-bold text-white">{{ step.title }}</h3>
              <p class="text-left md:text-center text-sm sm:text-base text-secondary-300 leading-relaxed md:max-w-xs md:mx-auto">{{ step.description }}</p>
            </div>
          </li>
        </ol>
      </div>
    </section>

    <!-- Réalisations : avis clients (capture du site + note + témoignage), affichée seulement s'il y en a -->
    <RealisationsReviewsSection />

    <!-- CTA final vers l'offre clé en main -->
    <CtaSection
      title="Réservez votre site clé en main"
      description="Un site d'une page, personnalisé à votre image à partir de votre modèle, pour 290 €."
      image="/images/Hestabien.jpg"
      image-alt="Création de site internet clé en main pour les praticiens équestres"
    >
      <template #actions>
        <NuxtLink
          to="/creation-site-internet-equestre/cle-en-main#offre"
          class="btn-primary inline-flex items-center"
          @click="trackEvent('template_showcase_book_click', { template: 'cta-final' })"
        >
          <span>Découvrir l'offre clé en main</span>
          <ArrowRight :size="20" class="ml-2" />
        </NuxtLink>
      </template>
    </CtaSection>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { MessageSquare, ArrowRight } from 'lucide-vue-next'
import type { Template } from '~/models'

const { trackEvent } = useAnalytics()

useHead({
  title: 'Modèles de sites internet équestres | Site clé en main',
  meta: [
    { name: 'description', content: 'Ostéopathes, masseurs, nutritionnistes équins… Choisissez votre modèle de site d\'une page : je le personnalise pour vous, clé en main.' },
    { property: 'og:title', content: 'Modèles de sites internet équestres | Site clé en main' },
    { property: 'og:description', content: 'Choisissez votre modèle de site d\'une page : je le personnalise pour vous, clé en main.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:title', content: 'Modèles de sites internet équestres | Site clé en main' },
    { name: 'twitter:description', content: 'Choisissez votre modèle de site d\'une page : je le personnalise pour vous, clé en main.' }
  ]
})

const supabase = useSupabaseClient()

// Récupération SSR de la liste des modèles (meilleur LCP et SEO).
const { data: templates, pending: loading } = await useAsyncData(
  'templates-list',
  async () => {
    const { data, error } = await supabase
      .from('templates')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) throw error
    return (data || []) as Template[]
  },
  { default: () => [] as Template[] }
)

// Reprend les engagements de l'offre clé en main (personnalisation, nom de domaine,
// adresse mail pro, formation à la plateforme).
const steps = [
  { title: 'Vous choisissez votre modèle', description: 'Celui qui correspond à votre métier et à votre style.' },
  { title: 'Je le personnalise pour vous', description: 'Vos textes, vos photos, vos couleurs : votre site vous ressemble.' },
  { title: 'Votre site est en ligne', description: 'Nom de domaine et adresse mail pro inclus, et je vous forme pour être autonome.' }
]

const siteUrl = 'https://lisewebequine.fr'

// Données structurées Schema.org : liste des modèles.
useStructuredData(() => [
  {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Modèles de sites internet pour professionnels équestres',
    itemListElement: templates.value.map((t, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `${siteUrl}/template-site-internet-equestre/${t.slug}`,
      name: t.name
    }))
  }
])
</script>
