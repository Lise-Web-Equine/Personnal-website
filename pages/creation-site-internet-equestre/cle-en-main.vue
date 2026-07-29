<template>
  <NuxtLayout>
    <PageHeader
      title="Création de site internet clé en main"
      description="Un site professionnel et abordable pour bien démarrer ton activité équestre."
    />

    <!-- Section : Introduction -->
    <IntroMediaSection
      title=" Une formule accessible pour lancer votre activité équestre"
      image-src="/images/cle-en-main.jpg"
      image-alt="Création de site internet équestre clé en main, rapide et pas cher."
      media-aspect-class="aspect-[4/5]"
    >
      <p class="text-base sm:text-lg text-secondary-600 leading-relaxed">La technique, les réglages, la mise en page...,  <strong class="text-secondary-900 font-bold text-lg sm:text-xl">Gardez votre énergie pour le terrain.</strong> On reprend votre template pour le personnaliser entièrement à votre image, afin que vous puissiez lancer votre activité sans vous prendre la tête.</p>

      <p class="text-base sm:text-lg text-secondary-600 leading-relaxed"> <strong class="text-secondary-900 font-bold text-lg sm:text-xl">On va même plus loin pour vous simplifier la vie : </strong> on réserve votre nom de domaine et on configure votre adresse mail pro. Et parce qu'il est essentiel que vous restiez maître de votre outil, on vous forme à l'utilisation de la plateforme pour que vous soyez 100 % autonome et serein dès le premier jour.
      </p>
    </IntroMediaSection>

    <!-- Section : Un site adapté à ton début d'activité -->
    <section class="py-12 sm:py-16 md:py-20 relative overflow-hidden">
        <!-- Halos décoratifs en arrière-plan avec fondu vers le bas -->
        <div class="absolute inset-0 -z-10" style="mask-image: linear-gradient(to bottom, black 0%, black 70%, transparent 100%); -webkit-mask-image: linear-gradient(to bottom, black 0%, black 70%, transparent 100%);">
          <div class="absolute inset-x-0 -top-20 sm:-top-40 transform-gpu overflow-hidden blur-2xl sm:blur-3xl" aria-hidden="true">
            <div
              class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[40rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff9a76] to-[#9089fc] opacity-30 sm:opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
            ></div>
          </div>
          <div class="absolute inset-x-0 top-[calc(50%-20rem)] transform-gpu overflow-hidden blur-2xl sm:blur-3xl sm:top-[calc(50%-30rem)]" aria-hidden="true">
            <div
              class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[40rem] -translate-x-1/2 bg-gradient-to-tr from-[#9089fc] to-[#ffb380] opacity-25 sm:opacity-15 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
            ></div>
          </div>
        </div>

        <div class="text-center mb-10 sm:mb-12" v-motion-slide-visible-once-bottom>
          <h2 class="mb-4 sm:mb-6">
            Un site adapté à ton début d'activité équestre
          </h2>
          <p class="text-base sm:text-lg text-secondary-600 max-w-3xl mx-auto">
            Cet accompagnement est-il fait pour toi ? 
          </p>
        </div>

        <!-- Quiz / Sondage interactif -->
        <div v-motion-slide-visible-once-bottom>
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
    </section>

    <!-- Section : Pourquoi nous choisir ? (fond sombre) -->
    <section class="py-12 sm:py-16 md:py-20 relative overflow-hidden bg-secondary">
      <div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-900/30 to-transparent rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-purple-900/30 to-transparent rounded-full blur-3xl"></div>
      <GradientAnimation />

      <div class="relative">
        <div>
          <div class="text-center mb-10 sm:mb-12" v-motion-slide-visible-once-bottom>
            <span class="inline-block text-primary-400 font-semibold text-sm sm:text-base mb-3">Pourquoi nous choisir ?</span>
            <h2 class="mb-4 sm:mb-6 text-white">
               Rassure tes futurs clients grâce à ton site internet
            </h2>
            <p class="text-base sm:text-lg text-secondary-300 max-w-3xl mx-auto">
Inutile de viser un site énorme : une page bien pensée suffit à convaincre.
            </p>
          </div>

          <!-- Points clés -->
          <div class="grid grid-cols-1 gap-y-8">
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
        <div class="text-center mb-12 sm:mb-16" v-motion-slide-visible-once-bottom>
          <h2 class="mb-4 sm:mb-6">L'offre site internet clé en main</h2>
          <p class="text-base sm:text-lg text-secondary-600 max-w-3xl mx-auto">
            Votre template personnalisée par notre agence pour un gain de temps et un rendu professionnel sans aucun doute.
          </p>
        </div>

        <div>
          <div class="bg-white rounded-2xl border-2 border-primary-200 shadow-lg overflow-hidden" v-motion-slide-visible-once-bottom>
            <div class="grid grid-cols-1 md:grid-cols-2">
              <!-- Prix -->
              <div class="bg-gradient-to-br from-primary-50 to-primary-100 p-6 sm:p-8 lg:p-10 flex flex-col justify-center border-b md:border-b-0 md:border-r border-primary-200">
                <span class="inline-block bg-primary-600 text-white text-xs font-semibold px-3 py-1 rounded-full w-max mb-4">Investissement unique</span>
                <p class="text-4xl sm:text-5xl font-bold text-secondary-900 mb-2">290€</p>
                <div class="mt-6 pt-6 border-t border-primary-200">
                  <p class="text-sm text-secondary-600 mb-1">Abonnement / Hébergement Carrd.co</p>
                  <p class="text-lg sm:text-xl font-bold text-secondary-900">19$ <span class="text-sm font-medium text-secondary-500">/ an (soit environ 1,50€/mois)</span></p>
                </div>
              </div>
              <!-- Inclus -->
              <div class="p-6 sm:p-8 lg:p-10">
                <p class="font-semibold text-secondary-900 mb-4">Ce qui est inclus :</p>
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

          <!-- Options supplémentaires -->
          <div class="mt-8 sm:mt-10">
            <p class="text-center text-sm sm:text-base text-secondary-500 mb-4">En option, si besoin :</p>
            <div class="border-t border-secondary-200" v-motion-slide-visible-once-bottom>
              <div class="flex items-center justify-between py-3 sm:py-4 border-b border-secondary-100">
                <a href="https://vitequide.fr/" target="_blank" rel="noopener noreferrer" class="text-sm text-secondary-700 hover:text-primary-600 hover:underline inline-flex items-center gap-1">
                  Configuration du module de prise de rendez-vous : ViteEquidé
                  <ExternalLink :size="12" />
                </a>
                <span class="text-sm font-medium text-secondary-900">30€</span>
              </div>
              <div class="flex items-center justify-between py-3 sm:py-4">
                <span class="text-sm text-secondary-700">Section supplémentaire sur-mesure</span>
                <span class="text-sm font-medium text-secondary-900">15€</span>
              </div>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 sm:mt-10" v-motion-slide-visible-once-bottom>
            <button
              data-cal-link="lisewebequine/site-cle-en-main"
              data-cal-namespace="site-cle-en-main"
              data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
              class="btn-primary"
            >
              <span>Lancer mon site internet</span>
            </button>
            <button
              data-cal-link="lisewebequine/echange-decouverte"
              data-cal-namespace="echange-decouverte"
              data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
              class="text-sm sm:text-base text-secondary-600 hover:text-primary-600 font-medium transition-colors duration-200 inline-flex items-center justify-center group"
            >
              <span>Discuter de mon projet ensemble</span>
              <ArrowRight :size="16" class="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
    </section>

    <!-- Section : Réalisations (preuve sociale, affichée seulement s'il y en a) -->
    <section v-if="realisations.length" class="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div class="text-center mb-12 sm:mb-16" v-motion-slide-visible-once-bottom>
          <h2 class="mb-4 sm:mb-6">Ils ont lancé leur site</h2>
          <p class="text-base sm:text-lg text-secondary-600 max-w-3xl mx-auto">
            Découvre des sites réalisés pour des professionnels équestres comme toi.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center" v-motion-slide-visible-once-bottom>
          <!-- Capture du site -->
          <component
            :is="realisations[0].site_url ? 'a' : 'div'"
            :href="realisations[0].site_url || undefined"
            :target="realisations[0].site_url ? '_blank' : undefined"
            :rel="realisations[0].site_url ? 'noopener noreferrer' : undefined"
            class="block rounded-2xl overflow-hidden shadow-lg"
          >
            <NuxtImg
              :src="realisations[0].site_image"
              :alt="`Site de ${realisations[0].client_name}, ${realisations[0].client_profession}`"
              class="w-full h-auto object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
            />
          </component>

          <!-- Témoignage client -->
          <div class="space-y-6">
            <span
              class="inline-flex items-center text-xs font-semibold px-3 py-1 rounded-full"
              :class="realisations[0].type === 'pack' ? 'bg-primary-100 text-primary-700' : 'bg-white text-secondary-700 border border-secondary-200'"
            >
              {{ realisations[0].type === 'pack' ? 'Offre clé en main' : 'Personnalisé en autonomie' }}
            </span>

            <blockquote class="text-xl sm:text-2xl font-medium text-secondary-900 leading-relaxed">
              "{{ realisations[0].quote }}"
            </blockquote>

            <div class="flex items-center gap-4">
              <NuxtImg
                v-if="realisations[0].client_photo"
                :src="realisations[0].client_photo"
                :alt="realisations[0].client_name"
                class="w-14 h-14 rounded-full object-cover flex-shrink-0"
                loading="lazy"
              />
              <div
                v-else
                class="w-14 h-14 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold text-lg flex-shrink-0"
              >
                {{ realisations[0].client_name.split(' ').map(part => part.charAt(0)).slice(0, 2).join('').toUpperCase() }}
              </div>
              <div>
                <p class="font-semibold text-secondary-900">{{ realisations[0].client_name }}</p>
                <p class="text-secondary-600">{{ realisations[0].client_profession }}</p>
              </div>
            </div>

            <div class="flex flex-col sm:flex-row items-start sm:items-center gap-x-6 gap-y-3">
              <!-- Si le témoignage est lié à un template, on invite à le découvrir -->
              <NuxtLink
                v-if="realisationTemplate"
                :to="`/template-site-internet-equestre/${realisationTemplate.slug}`"
                class="btn-primary inline-flex items-center"
              >
                <span>Voir le template</span>
                <ArrowRight :size="20" class="ml-2" />
              </NuxtLink>
              <!-- Lien vers le site en ligne du client -->
              <a
                v-if="realisations[0].site_url"
                :href="realisations[0].site_url"
                target="_blank"
                rel="noopener noreferrer"
                class="text-sm sm:text-base text-secondary-600 hover:text-primary-600 font-medium transition-colors duration-200 inline-flex items-center justify-center group"
              >
                <span>{{ realisations[0].site_url }}</span>
                <ArrowRight :size="16" class="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
    </section>

    <!-- Section : CTA final -->
    <CtaSection
      title="Des questions ou un projet en tête ?"
      description="Que l'on collabore ensemble ou non, c'est l'occasion de poser vos questions et d'obtenir des conseils pour faire avancer votre entreprise."
      image="/images/Hestabien.jpg"
      image-alt="Création de site internet pour les prestataires équestres"
    >
      <template #actions>
        <button
          data-cal-link="lisewebequine/echange-decouverte"
          data-cal-namespace="echange-decouverte"
          data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
          class="btn-primary inline-flex items-center"
        >
          <span>Discuter de mon projet ensemble</span>
          <ArrowRight :size="20" class="ml-2" />
        </button>
      </template>
    </CtaSection>

  </NuxtLayout>
</template>

<script setup lang="ts">
import { Calendar, Check, ExternalLink, Gift, Globe, LayoutGrid, Palette, Sparkles, X, Instagram, Target, Wallet, ArrowRight } from 'lucide-vue-next'
import type { Realisation, Template } from '~/models'

// Informations minimales d'un template ciblé par un lien de témoignage.
type RealisationTemplateLink = Pick<Template, 'slug' | 'name'>

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
  'Configuration de votre nom  de domaine',
  'Configuration de votre adresse mail professionnelle',
  'Personnalisation des images, textes et couleurs',
  'Formation à l\'interface',
  'Référencement de base sur Google'
]

// Réalisations (preuve sociale) : sites de type "template", repli sur les mises en avant
const realisations = ref<Realisation[]>([])
// Template concerné par le témoignage mis en avant (pour le bouton "Voir le template").
const realisationTemplate = ref<RealisationTemplateLink | null>(null)

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

    // Récupère le slug du template lié au témoignage mis en avant, s'il existe.
    const featuredRea = realisations.value[0]
    if (featuredRea?.template_id) {
      const { data: reaTemplate } = await supabase
        .from('templates')
        .select('slug, name')
        .eq('id', featuredRea.template_id)
        .maybeSingle()
      realisationTemplate.value = (reaTemplate as RealisationTemplateLink | null) ?? null
    } else {
      realisationTemplate.value = null
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
  title: 'Création de site internet équestres clé en main | Lise Web Equine',
  meta: [
    { name: 'description', content: "Site internet accessible pour lancer votre activité d'ostéopathie équine, masseur équin, shiatsu équin ou d'enseignant d'équitation." },
    { name: 'keywords', content: 'site internet équestre, création site web cheval, ostéopathe équin, soigneur équin, praticien bien-être équin, site web professionnel équestre' },
    { property: 'og:title', content: 'Création de site internet équestre clé en main pour professionnels du cheval' },
    { property: 'og:description', content: 'Un site clair et professionnel pour transformer ton audience Instagram en clients et décrocher des rendez-vous.' },
    { property: 'og:type', content: 'website' }
  ],
  // Script Cal.com pour la prise de rendez-vous (popup + element-click)
  script: [
    {
      innerHTML: `(function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.eu/embed/embed.js", "init"); Cal("init", "visio-decouverte", {origin:"https://app.cal.eu"}); Cal("init", "echange-decouverte", {origin:"https://app.cal.eu"}); Cal("init", "site-cle-en-main", {origin:"https://app.cal.eu"}); Cal.config = Cal.config || {}; Cal.config.forwardQueryParams = true; Cal.ns["visio-decouverte"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"}); Cal.ns["echange-decouverte"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"}); // Attributs data-cal-* du bouton "Lancer mon site internet" dans le template Cal.ns["site-cle-en-main"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});`,
      type: 'text/javascript',
      tagPosition: 'bodyClose'
    }
  ]
})

// Données structurées Schema.org : service de création de site avec template.
useStructuredData({
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Création de site internet clé en main',
  name: 'Création de site internet clé en main pour professionnels équestres',
  description:
    'Un site internet professionnel et abordable basé sur un template, pensé pour les praticiens du bien-être équin en début d\'activité.',
  url: 'https://lisewebequine.fr/creation-site-internet-equestre/cle-en-main',
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
