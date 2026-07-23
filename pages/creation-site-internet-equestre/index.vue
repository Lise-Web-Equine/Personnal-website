<template>
  <NuxtLayout>
    <PageHeader
      title="Création et refonte de site internet pour les prestataires équestres"
    />

    <!-- Section : Introduction -->
    <section class="py-12 sm:py-16 md:py-20">
      <div class="site-container">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div class="space-y-6" v-motion-slide-visible-once-bottom>
            <h2 class="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold"> Vous êtes professionnel de la filière équine</h2>
            <p class="text-base sm:text-lg text-secondary-600 leading-relaxed">
              Chaque jour, vous accompagnez vos clients sur le terrain avec sérieux. Pourtant, votre présence en ligne ne reflète pas encore cette expertise. 
            </p>
             <p class="text-base sm:text-lg text-secondary-600 leading-relaxed">
              Vous savez qu'il est temps d'avoir un site internet dont vous êtes fier, pour poser des bases solides et inspirer confiance dès le premier coup d'œil.
             </p>
            <p class="text-base sm:text-lg text-secondary-600 leading-relaxed">
              Que vous lanciez tout juste votre activité ou que votre structure équestre passe à l'étape supérieure, construisons ensemble l'outil qui vous ressemble et qui porte votre voix.
            </p>
          </div>
          <div v-motion-slide-visible-once-bottom>
            <NuxtImg
              src="/images/desk-girl.jpg"
              alt="Création de site internet pour les professionnels équestres"
              class="w-full h-full object-cover rounded-2xl shadow-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Section : Pour qui ? -->
    <section class="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div class="site-container">
        <div class="text-center mb-12 sm:mb-16" v-motion-slide-visible-once-bottom>
          <h2 class="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Un site adapté à votre métier équestre</h2>
          <p class="text-base sm:text-lg text-secondary-600">
            Quelle que soit votre activité dans le monde du cheval, votre site est pensé pour vous rendre visible, crédible et autonome. Trouvez votre profil ci-dessous.
          </p>
        </div>

        <div class="space-y-4">
          <ProfileCard
            v-for="(profile, index) in profiles"
            :key="index"
            v-motion-slide-visible-once-bottom
            :title="profile.title"
            :examples="profile.examples"
            :objective="profile.objective"
            :icon="profile.icon"
            :image="profile.image"
            :is-open="openProfile === index"
            @toggle="toggleProfile(index)"
          />
        </div>
      </div>
    </section>

    <!-- Section : Formulaire dynamique de recommandation d'offre -->
    <section class="py-12 sm:py-16 md:py-20 relative overflow-hidden">
      <!-- Halo backgrounds with fade mask -->
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

      <div class="site-container">
        <div class="text-center mb-10 sm:mb-12" v-motion-slide-visible-once-bottom>
          <h2 class="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Quel site web pour votre structure équestre ?</h2>
          <p class="text-base sm:text-lg text-secondary-600">
            Répondez à quelques questions pour découvrir l'offre la plus adaptée à votre profil.
          </p>
        </div>

        <div v-motion-slide-visible-once-bottom class="max-w-3xl mx-auto">
          <Transition name="fade" mode="out-in">
            <!-- Étape 1 : type de profil -->
            <div v-if="formStep === 0" key="profile">
              <h3 class="text-xl sm:text-2xl font-bold text-secondary-900 text-center mb-8">Vous êtes :</h3>
              <div class="space-y-3">
                <button
                  v-for="option in profileOptions"
                  :key="option.key"
                  @click="selectProfile(option.key)"
                  class="w-full flex items-center gap-4 px-5 py-4 rounded-xl border-2 border-secondary-200 bg-white text-left hover:border-primary-400 hover:bg-primary-50 transition-colors"
                >
                  <div class="w-11 h-11 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <component :is="option.icon" :size="22" class="text-primary-600" />
                  </div>
                  <span class="text-sm sm:text-base font-semibold text-secondary-900">{{ option.label }}</span>
                </button>
              </div>
            </div>

            <!-- Étape 2 : question de suivi -->
            <div v-else-if="formStep === 1 && followUp" key="follow-up">
              <h3 class="text-xl sm:text-2xl font-bold text-secondary-900 text-center mb-8">{{ followUp.question }}</h3>
              <div class="space-y-3">
                <button
                  v-for="(opt, i) in followUp.options"
                  :key="i"
                  @click="selectOption(i)"
                  class="w-full px-5 py-4 rounded-xl border-2 border-secondary-200 bg-white text-left text-sm sm:text-base text-secondary-700 hover:border-primary-400 hover:bg-primary-50 transition-colors"
                >
                  {{ opt }}
                </button>
              </div>
              <div class="mt-6 flex justify-start">
                <button @click="resetForm" class="text-sm text-secondary-500 hover:text-secondary-700 transition-colors inline-flex items-center gap-1">
                  <ChevronLeft :size="16" /> Précédent
                </button>
              </div>
            </div>

            <!-- Étape 3 : offre recommandée (carte mise en valeur) -->
            <div v-else-if="formStep === 2 && recommendation" key="result">
              <div class="rounded-2xl border-2 border-primary-500 ring-4 ring-primary-100 shadow-lg overflow-hidden">
                <div class="bg-primary-50 px-5 sm:px-6 py-3 flex items-center gap-2 border-b border-primary-100">
                  <Sparkles :size="18" class="text-primary-600" />
                  <span class="text-sm font-semibold text-primary-700">Recommandé pour votre profil</span>
                </div>
                <div class="p-6 sm:p-8">
                  <h3 class="text-xl sm:text-2xl font-bold text-secondary-900 mb-3">{{ recommendation.title }}</h3>
                  <p class="text-sm sm:text-base text-secondary-600 leading-relaxed mb-6">{{ recommendation.description }}</p>
                  <NuxtLink :to="recommendation.link" class="btn-primary inline-flex items-center">
                    <span>{{ recommendation.cta }}</span>
                    <ArrowRight :size="20" class="ml-2" />
                  </NuxtLink>
                </div>
              </div>
              <div class="text-center mt-6">
                <button @click="resetForm" class="text-sm text-secondary-500 hover:text-secondary-700 transition-colors inline-flex items-center gap-1">
                  <RotateCcw :size="14" /> Recommencer
                </button>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </section>

    <!-- Section : Pourquoi travailler ensemble ? (style sombre) -->
    <section class="py-12 sm:py-16 md:py-20 relative overflow-hidden bg-secondary">
      <div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-900/30 to-transparent rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-purple-900/30 to-transparent rounded-full blur-3xl"></div>
      <GradientAnimation />

      <div class="relative site-container">
        <div>
          <div class="text-center mb-10 sm:mb-12" v-motion-slide-visible-once-bottom>
            <h2 class="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">Pourquoi travailler ensemble ?</h2>
          </div>

          <!-- Items en accordéon, le premier ouvert par défaut -->
          <div class="space-y-4">
            <div
              v-for="(item, i) in collaborationReasons"
              :key="i"
              class="border rounded-2xl overflow-hidden bg-white/5 backdrop-blur-xs transition-colors"
              :class="openCollaboration === i ? 'border-primary-400/50' : 'border-white/10 hover:border-white/20'"
              v-motion-slide-visible-once-bottom
            >
              <button
                @click="toggleCollaboration(i)"
                class="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left gap-4"
              >
                <div class="flex items-center gap-3 sm:gap-4">
                  <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                    <component :is="item.icon" :size="22" class="text-primary-400" />
                  </div>
                  <h3 class="text-base sm:text-lg font-semibold text-white">{{ item.title }}</h3>
                </div>
                <ChevronDown
                  :size="20"
                  class="text-secondary-400 transition-transform duration-200 flex-shrink-0"
                  :class="openCollaboration === i ? 'rotate-180' : ''"
                />
              </button>
              <div v-show="openCollaboration === i" class="px-5 sm:px-6 pb-5 sm:pb-6 space-y-3">
                <p
                  v-for="(paragraph, j) in item.paragraphs"
                  :key="j"
                  class="text-sm sm:text-base text-secondary-300 leading-relaxed"
                >
                  {{ paragraph }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section : Offres -->
    <section class="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div class="site-container">
        <div class="text-center mb-12 sm:mb-16" v-motion-slide-visible-once-bottom>
          <h2 class="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Des offres de sites internet adaptées à votre budget</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          <ServiceCard
            v-for="(offer, i) in offers"
            :key="i"
            :variant="offer.featured ? 'primary' : 'default'"
            :title="offer.title"
            :description="offer.description"
            :badge-text="offer.badge"
            badge-variant="primary"
            :price="offer.price"
            cta-text="En savoir plus"
            :cta-link="offer.link"
            :featured="offer.featured"
            motion-direction="bottom"
          />
        </div>
      </div>
    </section>

    <!-- Section : Prise de rendez-vous (Cal.com inline) -->
    <section class="py-12 sm:py-16 md:py-20">
      <div class="site-container">
        <div class="text-center mb-10 sm:mb-12" v-motion-slide-visible-once-bottom>
          <h2 class="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Validons la faisabilité de votre projet</h2>
          <p class="text-base sm:text-lg text-secondary-600 leading-relaxed">
            Chaque projet équestre a ses spécificités. Cet échange permet d'apprendre à vous connaître pour aborder sereinement vos contraintes, répondre à vos interrogations techniques ou budgétaires et vous conseiller au mieux — que vous choisissiez de continuer avec nous ou non.
          </p>
        </div>

        <div v-motion-slide-visible-once-bottom>
          <!-- Cal.com inline embed : rendez-vous "visio-découverte" -->
          <div
            id="my-cal-inline-visio-decouverte"
            class="w-full h-[600px] sm:h-[720px] overflow-scroll"
          ></div>
        </div>
      </div>
    </section>

    <!-- Section : FAQ -->
    <section class="py-12 sm:py-16 md:py-20 relative overflow-hidden">
      <div class="absolute inset-0 -z-10">
        <NuxtImg
          src="/images/desk-girl.jpg"
          alt=""
          class="w-full h-full object-cover"
          aria-hidden="true"
          loading="lazy"
        />
        <div class="absolute inset-0 bg-secondary-900/80"></div>
      </div>

      <div class="relative z-10 site-container">
        <div>
          <div class="text-center mb-10 sm:mb-12" v-motion-slide-visible-once-bottom>
            <h2 class="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">Questions fréquentes</h2>
          </div>
          <Accordion :items="faqItems" />
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ChevronDown, ChevronLeft, HeartPulse, Home, Award, Briefcase, Rocket, Building2, Megaphone, Sparkles, ArrowRight, RotateCcw, Code, Handshake, Users } from 'lucide-vue-next'

// Section "Pour qui ?" : profils de prestataires équestres
const profiles = [
  {
    icon: HeartPulse,
    title: 'Professionnel du bien-être équin et animal',
    image: '/images/veterinarian.png',
    examples: 'Ostéopathe, shiatsu et masseur équin, cabinet vétérinaire ...',
    objective: 'Pour développer votre visibilité locale et être immédiatement trouvable par les clients de votre région sur Google.'
  },
  {
    icon: Home,
    title: 'Écuries de propriétaires, centres équestres et enseignant d\'équitation',
    image: '/images/stable.png',
    examples: 'Pension pour chevaux, poney-club, enseignant indépendant (BPJEPS/DEJEPS), coach de compétition, écurie de commerce...',
    objective: 'Présentez vos infrastructures et votre pédagogie, attirez les cavaliers idéaux de votre secteur et simplifiez votre quotidien. Un site web clair pour valoriser vos formules (pensions, cours, stages), clarifier vos plannings et publier facilement vos actualités.'
  },
  {
    icon: Award,
    title: 'Haras, élevages, étalonniers et écuries de valorisation',
    image: '/images/breeding.png',
    examples: 'Elevage de chevaux de sport, station de monte, valorisation...',
    objective: 'Pour affirmer le prestige de votre structure à travers un catalogue exclusif valorisant la génétique, la qualité de votre élevage ou les performances de vos chevaux de sport.'
  },
  {
    icon: Briefcase,
    title: 'Agence de communication, conseil et stratégie équestre',
    image: '/images/agency.png',
    examples: 'Agence de marketing, community management, études de marché de la filière équine...',
    objective: 'Passez un cap et ciblez des clients plus exigeants. Transformez vos projets réussis en études de cas pour faire de votre site web le meilleur ambassadeur de votre agence.'
  },
  {
    icon: Rocket,
    image: '/images/data.png',
    title: 'Startup, Innovation & Technologie équine',
    examples: 'application & suivi connecté du cheval, santé & bien-être équin, nutrition intelligente, data équestre...',
    objective: 'Crédibilisez votre innovation et validez votre concept. Nous concevons des plateformes et landing pages modernes, pensées pour séduire vos premiers utilisateurs (B2C/B2B) et convaincre les investisseurs.'
  }
]

const openProfile = ref(0)
const toggleProfile = (index: number) => {
  openProfile.value = openProfile.value === index ? -1 : index
}

// Section "Pourquoi travailler ensemble ?" : accordéon (premier item ouvert par défaut)
const openCollaboration = ref(0)
const toggleCollaboration = (index: number) => {
  openCollaboration.value = openCollaboration.value === index ? -1 : index
}

// Section "Pourquoi travailler ensemble ?" : arguments clés (style sombre)
const collaborationReasons = [
  {
    icon: Code,
    title: 'Le savoir-faire technique',
    paragraphs: [
      'Développeuse web diplômée d\'un Master MIAGE (BAC +5) à Bordeaux en 2020, je cumule plus de 6 ans d\'expérience en entreprise. Spécialisée exclusivement dans la création de sites internet, j\'allie le développement sur-mesure au webdesign pour concevoir des plateformes aussi solides techniquement qu\'agréables à naviguer.',
      'Concevoir un site web ne s\'arrête pas à aligner du code : il faut structurer l\'information pour rendre votre offre lisible, valorisante et surtout convaincante. Je crée des sites fluides, rapides et pensés pour convertir vos visiteurs en clients.'
    ]
  },
  {
    icon: Handshake,
    title: 'La relation humaine',
    paragraphs: [
      'Je crois en une approche humaine et transparente : il existe une solution pour chaque budget, à condition de définir clairement ce dont vous avez réellement besoin aujourd\'hui.',
      'On pose des bases solides maintenant, et on fait évoluer votre site au rythme de votre activité. Pas de superflu, pas de fonctionnalités inutiles : mon rôle est de vous conseiller avec justesse pour investir intelligemment.',
      'Et si votre projet nécessite encore un temps de réflexion ou de maturation, je vous oriente en toute franchise et on se retrouve plus tard, quand vous aurez le budget ou que vous serez prêt.'
    ]
  },
  {
    icon: Users,
    title: 'La force du collectif',
    paragraphs: [
      'J\'ai fait le choix de me consacrer exclusivement à la création de sites internet pour vous délivrer de la qualité : c\'est mon véritable cœur d\'expertise.',
      'Pour autant, un site web s\'inscrit toujours dans une stratégie plus globale. C\'est pourquoi je collabore avec d\'autres professionnels spécialisés de la filière équine (stratégie, community management, réseaux sociaux...). Je vous oriente avec plaisir vers eux, car chacun d\'entre nous a une vision unique pour développer votre projet.'
    ]
  }
]

// Formulaire dynamique : recommandation d'offre selon le profil
type ProfileKey = 'praticien' | 'structure' | 'agence'

interface FollowUp {
  question: string
  options: string[]
}

interface Recommendation {
  title: string
  description: string
  link: string
  cta: string
}

const SUR_MESURE = '/creation-site-internet-equestre/sur-mesure'
const CLE_EN_MAIN = '/creation-site-internet-equestre/cle-en-main'

const profileOptions = [
  { key: 'praticien' as ProfileKey, label: 'Praticien & Thérapeute (masseur, enseignant, ostéopathe…)', icon: HeartPulse },
  { key: 'structure' as ProfileKey, label: 'Structure & Centre (haras, élevage, écuries, centres équestres)', icon: Building2 },
  { key: 'agence' as ProfileKey, label: 'Marque & Agence', icon: Megaphone }
]

// Questions de suivi par profil (le profil "agence" n'en a pas et va directement au résultat)
const followUpQuestions: Partial<Record<ProfileKey, FollowUp>> = {
  praticien: {
    question: 'Où en est ton activité aujourd\'hui ?',
    options: [
      'Je me lance (ou j\'ai moins de 2 ans d\'activité) et je veux poser de bonnes bases rapidement. Je veux une vitrine simple et pro sans me ruiner.',
      'Je suis déjà bien installé(e) et je veux moderniser / élever mon image de marque, mais mon image ne reflète pas mon niveau d\'expertise.'
    ]
  },
  structure: {
    question: 'Quelle est la priorité pour votre structure aujourd\'hui ?',
    options: [
      'Attirer de nouveaux cavaliers ou propriétaires de ma région.',
      'Mettre en valeur mes infrastructures et mes chevaux à la vente / saillies.'
    ]
  }
}

const formStep = ref(0)
const selectedProfile = ref<ProfileKey | null>(null)
const selectedOption = ref<number | null>(null)

const followUp = computed<FollowUp | null>(() =>
  selectedProfile.value ? followUpQuestions[selectedProfile.value] ?? null : null
)

const selectProfile = (key: ProfileKey) => {
  selectedProfile.value = key
  selectedOption.value = null
  // "Marque & Agence" n'a pas de question de suivi : on affiche directement la recommandation
  formStep.value = followUpQuestions[key] ? 1 : 2
}

const selectOption = (index: number) => {
  selectedOption.value = index
  formStep.value = 2
}

const resetForm = () => {
  formStep.value = 0
  selectedProfile.value = null
  selectedOption.value = null
}

// Détermine l'offre recommandée selon le profil et la réponse de suivi
const recommendation = computed<Recommendation | null>(() => {
  const profile = selectedProfile.value
  const option = selectedOption.value

  if (profile === 'praticien') {
    if (option === 0) {
      return {
        title: 'Notre recommandation : l\'offre Clé en main',
        description: 'Une vitrine simple, professionnelle et abordable pour poser de bonnes bases rapidement et lancer votre activité sans vous ruiner.',
        link: CLE_EN_MAIN,
        cta: 'Découvrir l\'offre clé en main'
      }
    }
    return {
      title: 'Notre recommandation : la création Sur-Mesure',
      description: 'Un site sur-mesure et évolutif pour moderniser votre image de marque et la mettre enfin à la hauteur de votre niveau d\'expertise.',
      link: SUR_MESURE,
      cta: 'Découvrir la création sur-mesure'
    }
  }

  if (profile === 'structure') {
    if (option === 0) {
      return {
        title: 'Notre recommandation : la création Sur-Mesure',
        description: 'Un site pensé pour attirer des clients locaux, couplé à une interface d\'administration simple et rapide. Vous gardez la main pour modifier vos tarifs et publier vos actualités (stages, concours, événements) avec un lien dédié à partager directement à vos cavaliers et propriétaires.',
        link: SUR_MESURE,
        cta: 'Découvrir la création sur-mesure'
      }
    }
    return {
      title: 'Notre recommandation : la création Sur-Mesure',
      description: 'Un site pensé pour mettre en avant l\'histoire de votre élevage ou haras et refléter votre éthique et votre savoir-faire. Côté gestion, grâce à l\'interface administrable, vous restez 100 % autonome pour ajouter, modifier ou retirer vos fiches de vente et de saillies de manière simple et rapide.',
      link: SUR_MESURE,
      cta: 'Découvrir la création sur-mesure'
    }
  }

  if (profile === 'agence') {
    return {
      title: 'Notre recommandation : la création Sur-Mesure',
      description: 'Un site sur-mesure qui transforme vos projets réussis en études de cas et devient le meilleur ambassadeur de votre agence pour convaincre des clients plus exigeants.',
      link: SUR_MESURE,
      cta: 'Découvrir la création sur-mesure'
    }
  }

  return null
})

// Section "Offres" : les différentes formules de création de site
const offers = [
  {
    title: 'Site internet sur-mesure',
    badge: 'Sur mesure',
    description: 'Un site évolutif, performant et administrable en toute autonomie, conçu pour valoriser votre expertise et grandir au rythme de votre structure équestre.',
    price: 'À partir de 1500€',
    link: SUR_MESURE,
    featured: true
  },
  {
    title: 'Site internet clé en main',
    badge: 'Clé en main',
    description: 'Rassurez vos premiers clients avec un site web simple, pro et soigné pour démarrer sereinement votre activité équestre, sans y passer des heures.',
    price: 'À partir de 290€',
    link: CLE_EN_MAIN,
    featured: false
  }
]

// Initialisation de l'embed Cal.com inline (rendez-vous visio-découverte)
onMounted(() => {
  const w = window as any
  ;(function (C: any, A: string, L: string) {
    const p = function (a: any, ar: any) { a.q.push(ar) }
    const d = C.document
    C.Cal = C.Cal || function () {
      const cal = C.Cal
      const ar = arguments
      if (!cal.loaded) {
        cal.ns = {}
        cal.q = cal.q || []
        d.head.appendChild(d.createElement('script')).src = A
        cal.loaded = true
      }
      if (ar[0] === L) {
        const api = function () { p(api, arguments) }
        const namespace = ar[1]
        api.q = api.q || []
        if (typeof namespace === 'string') {
          cal.ns[namespace] = cal.ns[namespace] || api
          p(cal.ns[namespace], ar)
          p(cal, ['initNamespace', namespace])
        } else {
          p(cal, ar)
        }
        return
      }
      p(cal, ar)
    }
  })(w, 'https://app.cal.eu/embed/embed.js', 'init')

  const Cal = w.Cal
  Cal('init', 'visio-decouverte', { origin: 'https://app.cal.eu' })
  Cal.config = Cal.config || {}
  Cal.config.forwardQueryParams = true
  Cal.ns['visio-decouverte']('inline', {
    elementOrSelector: '#my-cal-inline-visio-decouverte',
    config: { layout: 'month_view', useSlotsViewOnSmallScreen: 'true' },
    calLink: 'lisewebequine/visio-decouverte'
  })
  Cal.ns['visio-decouverte']('ui', { hideEventTypeDetails: false, layout: 'month_view' })
})

// Section "FAQ" : questions fréquentes (rendu via le composant générique Accordion)
const faqItems = [
  {
    question: 'Existe-t-il des templates de site internet adaptés aux prestataires équestres ?',
    answer: 'Oui, il existe des templates et formules clés en main conçus spécifiquement pour les prestataires équestres (moniteurs indépendants, coaches, ostéopathes équins, masseurs équins, enseignants d\'équitation, shiatsu équin…). Ils permettent de présenter vos prestations, d\'afficher vos tarifs et d\'intégrer la prise de rendez-vous en ligne rapidement.'
  },
  {
    question: 'Quel est le meilleur outil pour créer son site internet équestre ?',
    answer: 'Le meilleur outil dépend de vos compétences techniques, de votre temps et de vos objectifs. Si Wix ou Squarespace permettent de concevoir une vitrine simple, ils demandent de nombreuses heures de prise en main. C\'est pourquoi il existe des sites clé en main et templates conçus spécifiquement pour les prestataires équestres (moniteurs, coachs, ostéopathes, masseurs équins, enseignants d\'équitation, praticiens en shiatsu…). Ils permettent d\'obtenir un site professionnel sans perdre de temps avec la technique.'
  },
  {
    question: 'Comment vendre ses poulains au bon prix grâce à son site web ?',
    answer: 'Vendre un poulain à sa juste valeur ne repose pas sur de simples petites annonces éphémères : il faut transmettre la réalité de votre travail d\'éleveur. Un site internet soigné met en lumière l\'histoire de votre haras, votre éthique et votre savoir-faire au quotidien. Votre site web crée un véritable coup de cœur chez l\'acheteur tout en légitimant le prix de votre travail d\'élevage.'
  },
  {
    question: 'Comment développer une entreprise dans le monde du cheval grâce à son site internet ?',
    answer: 'Dans la filière équine, un site internet efficace sert à attirer des clients qualifiés, crédibiliser votre savoir-faire et automatiser la prise de contact ou de réservation.\n\n**Les 4 leviers clés :**',
    list: [
      '**Référencement ciblé (SEO)** : Attirer les cavaliers et professionnels de votre secteur grâce aux recherches géolocalisées ou spécialisées.',
      '**Preuve sociale** : Rassurer avec des photos des installations, des avis clients ou des études de cas.',
      '**Clarté des offres** : Présenter vos tarifs et prestations pour qualifier les demandes et gagner du temps.',
      '**Action directe** : Faciliter la prise de rendez-vous, la demande de devis ou la réservation en ligne.'
    ]
  }
]

useHead({
  title: 'Création de site internet équestre | Lise Web Equine',
  meta: [
    { name: 'description', content: 'Création de site internet pour les professionnels équestres : sur-mesure ou avec template.' },
    { property: 'og:title', content: 'Création de site internet équestre' },
    { property: 'og:type', content: 'website' }
  ]
})

// Données structurées Schema.org : page parente du service de création de sites web équestres.
useStructuredData({
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Création de site internet',
  name: 'Création de site internet pour professionnels équestres',
  description:
    'Création de site internet pour les professionnels du cheval : offre sur-mesure ou avec template.',
  url: 'https://lisewebequine.fr/creation-site-internet-equestre',
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
