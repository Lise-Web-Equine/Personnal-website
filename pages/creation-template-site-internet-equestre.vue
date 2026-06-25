<template>
  <NuxtLayout>
    <PageHeader
      title="Création de site internet avec template"
      description="Un site professionnel et abordable pour bien démarrer ton activité équestre."
    />

    <!-- Section : Un site adapté à ton début d'activité -->
    <section class="py-12 sm:py-16 md:py-20">
      <div class="container mx-auto px-6">
        <div class="text-center mb-10 sm:mb-12" v-motion-slide-visible-once-bottom>
          <h2 class="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            Un site adapté à ton début d'activité équestre
          </h2>
          <p class="text-base sm:text-lg text-secondary-600 max-w-3xl mx-auto">
            Cet accompagnement est-il fait pour toi ? 
          </p>
        </div>

        <!-- Quiz / Sondage interactif -->
        <div class="max-w-2xl mx-auto" v-motion-slide-visible-once-bottom>
          <div class="bg-white rounded-2xl border border-secondary-200 shadow-lg p-6 sm:p-8 lg:p-10">
            <!-- Barre de progression -->
            <div v-if="!showResult" class="mb-8">
              <div class="flex items-center justify-between text-sm text-secondary-500 mb-2">
                <span>Question {{ currentQuestion + 1 }} sur {{ questions.length }}</span>
                <span>{{ Math.round(((currentQuestion) / questions.length) * 100) }}%</span>
              </div>
              <div class="w-full h-2 bg-secondary-100 rounded-full overflow-hidden">
                <div
                  class="h-full bg-primary-500 rounded-full transition-all duration-300"
                  :style="{ width: `${(currentQuestion / questions.length) * 100}%` }"
                ></div>
              </div>
            </div>

            <!-- Question en cours -->
            <Transition name="fade" mode="out-in">
              <div v-if="!showResult" :key="currentQuestion">
                <h3 class="text-xl sm:text-2xl font-bold text-secondary-900 text-center mb-8 min-h-[3.5rem] flex items-center justify-center">
                  {{ questions[currentQuestion] }}
                </h3>
                <div class="grid grid-cols-2 gap-4">
                  <button
                    @click="answer(true)"
                    class="flex items-center justify-center gap-2 px-6 py-4 rounded-xl border-2 border-primary-200 bg-primary-50 text-primary-700 font-semibold hover:border-primary-400 hover:bg-primary-100 transition-colors"
                  >
                    <Check :size="20" />
                    Oui
                  </button>
                  <button
                    @click="answer(false)"
                    class="flex items-center justify-center gap-2 px-6 py-4 rounded-xl border-2 border-secondary-200 bg-white text-secondary-600 font-semibold hover:border-secondary-300 hover:bg-secondary-50 transition-colors"
                  >
                    <X :size="20" />
                    Non
                  </button>
                </div>
              </div>

              <!-- Résultat positif + capture email -->
              <div v-else key="result" class="text-center">
                <div class="w-16 h-16 mx-auto rounded-full bg-primary-100 flex items-center justify-center mb-6">
                  <Sparkles :size="32" class="text-primary-600" />
                </div>
                <h3 class="text-xl sm:text-2xl font-bold text-secondary-900 mb-3">
                  Cet accompagnement est fait pour toi !
                </h3>
                <p class="text-secondary-600 mb-2">
                  Laisse-moi ton adresse mail pour qu'on échange sur ton projet.
                </p>
                <p class="text-sm text-primary-600 font-semibold mb-8">
                  En bonus pour bien commencer : reçois le guide gratuit pour créer ton identité visuelle comme un pro.
                </p>

                <form v-if="!emailSubmitted" @submit.prevent="handleEmailSubmit" class="space-y-4">
                  <input
                    v-model="email"
                    type="email"
                    required
                    placeholder="ton.email@exemple.com"
                    class="w-full px-4 py-3 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none text-center"
                  />
                  <button type="submit" class="btn-primary w-full justify-center">
                    <Gift :size="20" class="mr-2" />
                    Recevoir mon guide gratuit
                  </button>
                  <button
                    type="button"
                    @click="resetQuiz"
                    class="text-sm text-secondary-500 hover:text-secondary-700 transition-colors"
                  >
                    Refaire le test
                  </button>
                </form>

                <div v-else class="bg-primary-50 border border-primary-200 rounded-xl p-6">
                  <p class="text-primary-700 font-semibold">
                    Merci ! Ton guide arrive dans ta boîte mail et je te recontacte très vite.
                  </p>
                </div>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </section>

    <!-- Section : Pourquoi nous choisir ? (fond sombre) -->
    <section class="py-12 sm:py-16 md:py-20 relative overflow-hidden bg-secondary">
      <div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-900/30 to-transparent rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-purple-900/30 to-transparent rounded-full blur-3xl"></div>
      <GradientAnimation />

      <div class="relative container mx-auto px-6">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-10 sm:mb-12" v-motion-slide-visible-once-bottom>
            <span class="inline-block text-primary-400 font-semibold text-sm sm:text-base mb-3">Pourquoi nous choisir ?</span>
            <h2 class="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
               Rassure tes futurs clients grâce à ton site internet
            </h2>
            <p class="text-base sm:text-lg text-secondary-300 max-w-3xl mx-auto">
Inutile de viser un site énorme : une page bien pensée suffit à convaincre.
            </p>
          </div>

          <!-- Points clés -->
          <div class="grid grid-cols-1 gap-y-8 max-w-3xl mx-auto">
            <div
              v-for="(item, i) in reasons"
              :key="i"
              class="bg-white/5 backdrop-blur-xs rounded-xl p-6 border border-white/5"
              v-motion-slide-visible-once-bottom
              :style="{ 'animation-delay': `${i * 100}ms` }"
            >
              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center bg-white/5">
                  <component :is="item.icon" :size="24" class="text-primary-400" />
                </div>
                <div>
                  <h3 class="text-base sm:text-lg md:text-xl font-semibold text-white mb-2">{{ item.title }}</h3>
                  <p class="text-sm sm:text-base text-secondary-300 leading-relaxed">{{ item.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section : L'offre template clé en main -->
    <section class="py-12 sm:py-16 md:py-20">
      <div class="container mx-auto px-6">
        <div class="text-center mb-12 sm:mb-16" v-motion-slide-visible-once-bottom>
          <h2 class="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">L'offre template clé en main</h2>
          <p class="text-base sm:text-lg text-secondary-600 max-w-3xl mx-auto">
            Votre template personnalisée par notre agence pour un gain de temps et un rendu professionnel sans aucun doute.
          </p>
        </div>

        <div class="max-w-3xl mx-auto">
          <div class="bg-white rounded-2xl border-2 border-primary-200 shadow-lg overflow-hidden" v-motion-slide-visible-once-bottom>
            <div class="grid grid-cols-1 md:grid-cols-2">
              <!-- Prix -->
              <div class="bg-gradient-to-br from-primary-50 to-primary-100 p-6 sm:p-8 lg:p-10 flex flex-col justify-center border-b md:border-b-0 md:border-r border-primary-200">
                <span class="inline-block bg-primary-600 text-white text-xs font-semibold px-3 py-1 rounded-full w-max mb-4">Clé en main</span>
                <p class="text-4xl sm:text-5xl font-bold text-secondary-900 mb-2">290€</p>
                <p class="text-sm sm:text-base text-secondary-600">Paiement en plusieurs fois possible · Devis gratuit</p>
              </div>
              <!-- Inclus -->
              <div class="p-6 sm:p-8 lg:p-10">
                <p class="font-semibold text-secondary-900 mb-4">Tout est inclus :</p>
                <div class="space-y-3">
                  <div v-for="(item, i) in packFeatures" :key="i" class="flex items-start gap-3">
                    <div class="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check :size="14" class="text-primary-600" />
                    </div>
                    <p class="text-sm sm:text-base text-secondary-700">{{ item }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="text-center mt-8" v-motion-slide-visible-once-bottom>
            <button
              data-cal-link="lisewebequine/pack-serenite"
              data-cal-namespace="pack-serenite"
              data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"false"}'
              class="btn-primary inline-flex items-center"
            >
              <span>Réserver un créneau</span>
              <ArrowRight :size="20" class="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Section : Réalisations (preuve sociale, affichée seulement s'il y en a) -->
    <section v-if="realisations.length" class="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div class="container mx-auto px-6">
        <div class="text-center mb-12 sm:mb-16" v-motion-slide-visible-once-bottom>
          <h2 class="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Ils ont lancé leur site avec un template</h2>
          <p class="text-base sm:text-lg text-secondary-600 max-w-3xl mx-auto">
            Découvre des sites réalisés pour des professionnels équestres comme toi.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <RealisationCard
            v-for="realisation in realisations"
            :key="realisation.id"
            :realisation="realisation"
            v-motion-slide-visible-once-bottom
          />
        </div>
      </div>
    </section>

    <!-- Section : CTA final -->
    <section class="relative py-16 md:py-20 lg:py-24 overflow-hidden text-white">
      <!-- Image de fond + overlay sombre -->
      <div class="absolute inset-0 -z-10">
        <NuxtImg
          src="/images/Hestabien.jpg"
          alt="Création de site internet pour les prestataires équestres"
          class="w-full h-full object-cover"
          sizes="100vw"
          loading="lazy"
        />
        <div class="absolute inset-0 bg-gradient-to-b from-secondary-900/90 via-secondary-900/80 to-secondary-900/90"></div>
      </div>

      <div class="relative container mx-auto px-6">
        <div class="max-w-3xl mx-auto text-center" v-motion-slide-visible-once-bottom>
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
            Prêt à lancer votre site équestre ?
          </h2>
          <p class="text-lg text-secondary-200 max-w-2xl mx-auto mb-8 leading-relaxed">
            Réservez votre rendez-vous découverte gratuit. En 30 minutes, nous faisons le point sur votre activité et nous vous expliquons comment votre site peut vous amener plus de clients.
          </p>
          <button
            data-cal-link="lisewebequine/pack-serenite"
            data-cal-namespace="pack-serenite"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"false"}'
            class="btn-primary inline-flex items-center"
          >
            <span>Réserver votre rendez-vous gratuit</span>
            <ArrowRight :size="20" class="ml-2" />
          </button>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { Check, X, Sparkles, Gift, Instagram, Target, Wallet, ArrowRight } from 'lucide-vue-next'
import type { Realisation } from '~/models'

const supabase = useSupabase()

// Questions du sondage de qualification (une après l'autre)
const questions = [
  'Tu es praticien du bien-être animalier ?',
  'Ton entreprise a moins de 2 ans ?',
  'Tu veux un site internet abordable mais qui te rapporte des clients ?',
  'Tu veux être accompagné pour un résultat professionnel ?'
]

const currentQuestion = ref(0)
const answers = ref<boolean[]>([])
const showResult = ref(false)

// Enregistre la réponse et passe à la question suivante (ou au résultat)
const answer = (value: boolean) => {
  answers.value.push(value)
  if (currentQuestion.value < questions.length - 1) {
    currentQuestion.value++
  } else {
    showResult.value = true
  }
}

// Réinitialise le quiz
const resetQuiz = () => {
  currentQuestion.value = 0
  answers.value = []
  showResult.value = false
  email.value = ''
  emailSubmitted.value = false
}

// Capture email + lead magnet
const email = ref('')
const emailSubmitted = ref(false)
const handleEmailSubmit = () => {
  emailSubmitted.value = true
}

// Prestations incluses dans l'offre template clé en main
const packFeatures = [
  'Installation clé en main',
  'Visio de lancement (30 min)',
  'Mise en place de votre contenu',
  'Support 1 mois inclus'
]

// Réalisations (preuve sociale) : sites de type "template", repli sur les mises en avant
const realisations = ref<Realisation[]>([])

onMounted(async () => {
  try {
    const { data: templateRealisations } = await supabase
      .from('realisations')
      .select('*')
      .eq('type', 'template')
      .order('display_order', { ascending: true })

    if (templateRealisations && templateRealisations.length > 0) {
      realisations.value = templateRealisations as Realisation[]
    } else {
      const { data: featured } = await supabase
        .from('realisations')
        .select('*')
        .eq('featured', true)
        .order('display_order', { ascending: true })
        .limit(3)

      realisations.value = (featured as Realisation[]) || []
    }
  } catch (error) {
    console.error('Erreur lors du chargement des réalisations:', error)
  }
})

// Section "Pourquoi nous choisir ?" : arguments clés
const reasons = [
  {
    icon: Instagram,
    title: 'Le prolongement de ton Instagram',
    description: 'Ta page rassure ceux qui te découvrent sur les réseaux et leur donne envie de te contacter.'
  },
  {
    icon: Target,
    title: 'Pensée pour décrocher des rendez-vous',
    description: 'Un message simple et un bouton "prendre rendez-vous" bien visible : les visiteurs passent à l\'action.'
  },
  {
    icon: Wallet,
    title: 'Un prix abordable pour bien démarrer',
    description: 'Un budget maîtrisé, parfait quand on lance son activité équestre, sans options inutiles.'
  }
]

useHead({
  title: 'Création de site internet équestre pour praticiens du cheval | Lise Web Equine',
  meta: [
    { name: 'description', content: 'Site internet professionnel et abordable pour ostéopathes équins, soigneurs et coachs : attire tes premiers clients et reçois des demandes de rendez-vous. Devis gratuit.' },
    { name: 'keywords', content: 'site internet équestre, création site web cheval, ostéopathe équin, soigneur équin, praticien bien-être équin, site web professionnel équestre' },
    { property: 'og:title', content: 'Création de site internet équestre pour praticiens du cheval' },
    { property: 'og:description', content: 'Un site clair et professionnel pour transformer ton audience Instagram en clients et décrocher des rendez-vous.' },
    { property: 'og:type', content: 'website' }
  ],
  // Script Cal.com pour la prise de rendez-vous (popup "Réserver un créneau")
  script: [
    {
      innerHTML: `(function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.eu/embed/embed.js", "init"); Cal("init", "pack-serenite", {origin:"https://app.cal.eu"}); Cal.ns["pack-serenite"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});`,
      type: 'text/javascript',
      tagPosition: 'bodyClose'
    }
  ]
})

// Données structurées Schema.org : service de création de site avec template.
useStructuredData({
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Création de site internet avec template',
  name: 'Création de site internet avec template pour professionnels équestres',
  description:
    'Un site internet professionnel et abordable basé sur un template, pensé pour les praticiens du bien-être équin en début d\'activité.',
  url: 'https://lisewebequine.fr/creation-template-site-internet-equestre',
  areaServed: 'FR',
  provider: { '@id': 'https://lisewebequine.fr/#organization' }
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(8px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
