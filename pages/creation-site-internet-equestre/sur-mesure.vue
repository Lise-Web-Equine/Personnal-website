<template>
  <NuxtLayout>
      <PageHeader
        title="Site internet sur-mesure pour les prestataires équestres"
      />
      
    <!-- Section : Introduction -->
    <section class="py-12 sm:py-16 md:py-20">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div class="space-y-6" v-motion-slide-visible-once-bottom>
            <h2 class="mb-4 sm:mb-6"> À l'écoute des enjeux de votre filière</h2>

            <p class="text-base sm:text-lg text-secondary-600 leading-relaxed">À l'ère de l'IA et des incertitudes,  <strong class="text-secondary-900 font-bold text-lg sm:text-xl">je mise avant tout sur l'humain</strong> : mettre en avant vos forces, votre histoire et votre professionnalisme pour toucher vos clients ou acheteurs idéaux, sans jamais oublier votre authenticité.</p>
             
              <p class="text-base sm:text-lg text-secondary-600 leading-relaxed"> Pour autant, je ne rejette pas la technologie : j'intègre l'IA à certaines étapes de mon processus. Mais <strong class="text-secondary-900 font-bold text-lg sm:text-xl">l'écoute, le conseil et la compréhension de votre projet</strong> restent — et resteront toujours — un échange humain entre vous et moi.
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
    </section>

      <!-- Section : Pourquoi nous choisir ? -->
      <section class="py-12 sm:py-16 md:py-20 relative overflow-hidden bg-secondary">
        <div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-900/30 to-transparent rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-purple-900/30 to-transparent rounded-full blur-3xl"></div>
        <GradientAnimation />

        <div class="relative">
          <div class="max-w-6xl mx-auto">
            <div class="text-center mb-10 sm:mb-12" v-motion-slide-visible-once-bottom>
              <span class="inline-block text-primary-400 font-semibold text-sm sm:text-base mb-3">Pourquoi nous choisir ?</span>
              <h2 class="mb-4 sm:mb-6 text-white">Restez autonome sur votre site internet</h2>
              <p class="text-base sm:text-lg text-secondary-300 max-w-3xl mx-auto">
                L'interface administrable : la solution web équestre pour gérer votre contenu vous-même, sans dépendre de personne.
              </p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <!-- Vidéo démo : ajout d'une étude de cas -->
              <div v-motion-slide-visible-once-left>
                <figure>
                  <div class="aspect-video rounded-2xl overflow-hidden shadow-lg bg-secondary relative">
                    <video
                      ref="videoEl"
                      class="w-full h-full object-contain"
                      src="/videos/demo-portfolios.mp4"
                      muted
                      :controls="isPlaying"
                      loop
                      playsinline
                      preload="auto"
                      aria-label="Ajout d'une étude de cas pour une agence de marketing et communication équestre"
                      @play="isPlaying = true"
                      @pause="isPlaying = false"
                    ></video>
                    <div
                      v-if="!isPlaying"
                      class="absolute inset-0 bg-secondary-900/40 flex items-center justify-center cursor-pointer"
                      @click="playVideo"
                    >
                      <button
                        type="button"
                        class="relative inline-flex items-center gap-3 px-6 py-3 bg-secondary text-white font-semibold rounded-full shadow-2xl border border-white/20 hover:bg-secondary-700 hover:scale-105 transition-all duration-200"
                        aria-label="Voir la démo"
                      >
                        <span class="absolute -inset-1 rounded-full bg-white/30 animate-ping"></span>
                        <span class="relative inline-flex items-center gap-3">
                          <Play :size="20" />
                          <span>Voir la démo</span>
                        </span>
                      </button>
                    </div>
                  </div>
                  <figcaption class="mt-3 text-sm text-secondary-300">
                    Ajout d'une étude de cas pour une agence de marketing et communication équestre
                  </figcaption>
                </figure>
              </div>

              <!-- Description -->
              <div v-motion-slide-visible-once-right>
                <p class="text-base sm:text-lg text-secondary-300 leading-relaxed mb-6">
                  Votre entreprise évolue, votre site aussi. Grâce à l'outil Sanity, configuré spécialement pour votre projet équestre, mettez à jour votre contenu en toute simplicité, sans aucune compétence technique.
                </p>
                <p class="text-sm font-semibold text-secondary-400 uppercase tracking-wide mb-4">Par exemple</p>
                <div class="flex flex-wrap gap-2 sm:gap-3">
                  <span
                    v-for="(item, i) in adminFeatures"
                    :key="i"
                    class="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm sm:text-base text-secondary-200 font-medium"
                  >
                    {{ item }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section : La formule -->
      <section class="py-12 sm:py-16 md:py-20">
          <div class="text-center mb-12 sm:mb-16" v-motion-slide-visible-once-bottom>
            <h2 class="mb-4 sm:mb-6">La formule équestre</h2>
            <p class="text-base sm:text-lg text-secondary-600 max-w-3xl mx-auto">
              Un socle complet pour lancer votre présence en ligne, 
              que vous faites évoluer à votre rythme.
            </p>
          </div>

          <div class="max-w-5xl mx-auto">
            <!-- Le socle -->
            <div class="bg-white rounded-2xl border-2 border-primary-200 shadow-lg overflow-hidden" v-motion-slide-visible-once-bottom>
              <div class="grid grid-cols-1 md:grid-cols-2">
                <!-- Prix -->
                <div class="bg-gradient-to-br from-primary-50 to-primary-100 p-6 sm:p-8 lg:p-10 flex flex-col justify-center border-b md:border-b-0 md:border-r border-primary-200">
                  <span class="inline-block bg-primary-600 text-white text-xs font-semibold px-3 py-1 rounded-full w-max mb-4">Le socle</span>
                  <p class="text-4xl sm:text-5xl font-bold text-secondary-900 mb-2">1 500€</p>
                  <p class="text-sm sm:text-base text-secondary-600">Paiement en 3 fois possible · Devis gratuit</p>
                  <div class="mt-6 pt-6 border-t border-primary-200">
                    <p class="text-sm text-secondary-600 mb-1">Hébergement annuel</p>
                    <p class="text-lg sm:text-xl font-bold text-secondary-900">à partir de 108€ <span class="text-sm font-medium text-secondary-500">/ an (soit 9€/mois)</span></p>
                  </div>
                </div>
                <!-- Inclus -->
                <div class="p-6 sm:p-8 lg:p-10">
                  <p class="font-semibold text-secondary-900 mb-4">Tout est inclus :</p>
                  <div class="space-y-3">
                    <div v-for="(item, i) in socleIncludes" :key="i" class="flex items-start gap-3">
                      <div class="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check :size="14" class="text-primary-600" />
                      </div>
                      <div>
                        <p class="text-sm sm:text-base text-secondary-700">{{ item.label }}</p>
                        <p v-if="item.example" class="text-xs text-secondary-500 mt-0.5">{{ item.example }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Options -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 sm:mt-8">
              <div class="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-secondary-100" v-motion-slide-visible-once-bottom>
                <div class="flex items-center gap-3 mb-3">
                  <FileText :size="22" class="text-primary-600" />
                  <h3 class="text-lg font-bold">Page supplémentaire</h3>
                </div>
                <p class="text-2xl font-bold text-secondary-900 mb-2">à partir de 200€</p>
                <p class="text-sm sm:text-base text-secondary-600">Blog, réalisations, galerie, catalogue de chevaux...</p>
              </div>
              <div class="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-secondary-100" v-motion-slide-visible-once-bottom :delay="100">
                <div class="flex items-center gap-3 mb-3">
                  <Puzzle :size="22" class="text-primary-600" />
                  <h3 class="text-lg font-bold">Module supplémentaire</h3>
                </div>
                <p class="text-2xl font-bold text-secondary-900 mb-2">à partir de 150€</p>
                <p class="text-sm sm:text-base text-secondary-600">Newsletter, site multilingue...</p>
              </div>
            </div>

            <!-- CTA sur-mesure -->
            <div class="text-center mt-8 sm:mt-10">
              <p class="text-secondary-600 mb-4">Besoin d'une page ou d'un module sur-mesure ?</p>
              <a href="#contact" class="btn-primary inline-flex items-center">
                <span>Demander un devis</span>
                <ArrowRight :size="20" class="ml-2" />
              </a>
            </div>
          </div>
      </section>

      <!-- Étapes Section -->
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

          <div class="text-center mb-12 sm:mb-16" v-motion-slide-visible-once-bottom>
            <h2 class="mb-4 sm:mb-6">Les étapes de création de votre site équestre</h2>
            <p class="text-base sm:text-lg text-secondary-600 max-w-3xl mx-auto">
              De la première discussion à la mise en ligne, on avance main dans la main : un accompagnement clair, sans jargon technique, pour un projet serein.
            </p>
          </div>

          <div class="max-w-3xl mx-auto space-y-4">
            <div
              v-for="(step, index) in steps"
              :key="index"
              class="border border-secondary-200 rounded-2xl overflow-hidden bg-white transition-colors"
              :class="openStep === index ? 'border-primary-300 shadow-md' : 'hover:border-secondary-300'"
              v-motion-slide-visible-once-bottom
            >
              <button
                @click="toggleStep(index)"
                class="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left gap-4"
              >
                <div class="flex items-center gap-3 sm:gap-4">
                  <div class="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span class="text-primary-600 font-bold text-base sm:text-lg">{{ index + 1 }}</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-bold text-secondary-900">{{ step.title }}</h3>
                </div>
                <ChevronDown
                  :size="20"
                  class="text-secondary-500 transition-transform duration-200 flex-shrink-0"
                  :class="openStep === index ? 'rotate-180' : ''"
                />
              </button>
              <div v-show="openStep === index" class="px-5 sm:px-6 pb-5 sm:pb-6 pl-[4.25rem] sm:pl-[5.5rem]">
                <p class="text-sm sm:text-base text-secondary-600 leading-relaxed">
                  {{ step.description }}
                </p>
              </div>
            </div>
          </div>
      </section>

      <!-- FAQ Section -->
      <section class="py-12 sm:py-16 md:py-20 bg-gray-50">
          <div class="max-w-3xl mx-auto">
            <div class="text-center mb-10 sm:mb-12" v-motion-slide-visible-once-bottom>
              <h2 class="mb-4 sm:mb-6">Questions fréquentes</h2>
              <p class="text-base sm:text-lg text-secondary-600">
                Tout ce qu'il faut savoir avant de lancer votre projet équestre.
              </p>
            </div>
            <Accordion :items="faqItems" />
          </div>
      </section>

      <!-- Contact Section -->
      <section id="contact" class="relative py-12 sm:py-16 md:py-20 overflow-hidden">
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

          <div class="max-w-4xl mx-auto">
            <div class="text-center mb-12 sm:mb-16" v-motion-slide-visible-once-bottom>
              <h2 class="mb-4 sm:mb-6 text-white">On en discute ?</h2>
              <p class="text-base sm:text-lg text-secondary-200 leading-relaxed">
                Chaque projet est unique. Envoyez-moi un message pour une première analyse gratuite de votre projet.
              </p>
            </div>

            <div class="bg-white rounded-2xl p-6 sm:p-8 lg:p-12 shadow-xl border border-secondary-100" v-motion-slide-visible-once-bottom>
              <form @submit.prevent="handleSubmit" class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label for="name" class="block text-sm font-semibold mb-2">Nom *</label>
                    <input
                      v-model="form.name"
                      type="text"
                      id="name"
                      required
                      class="w-full px-4 py-3 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                      placeholder="Ex : Claire Martin"
                    />
                  </div>
                  <div>
                    <label for="email" class="block text-sm font-semibold mb-2">Email *</label>
                    <input
                      v-model="form.email"
                      type="email"
                      id="email"
                      required
                      class="w-full px-4 py-3 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                      placeholder="Ex : claire.martin@gmail.com"
                    />
                  </div>
                </div>

                <div>
                  <label for="project-type" class="block text-sm font-semibold mb-2">Type de projet</label>
                  <select
                    v-model="form.projectType"
                    id="project-type"
                    disabled
                    class="w-full px-4 py-3 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none bg-white bg-secondary-100 cursor-not-allowed"
                  >
                    <option value="studio">Création de site internet sur-mesure</option>
                  </select>
                </div>

                <div>
                  <label for="message" class="block text-sm font-semibold mb-2">Message *</label>
                  <textarea
                    v-model="form.message"
                    id="message"
                    rows="6"
                    required
                    class="w-full px-4 py-3 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none resize-none"
                    placeholder="Ex : Je suis ostéopathe équin près de Lyon et je souhaite un site pour être trouvée sur Google. J'aimerais une page prestations et un blog..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  :disabled="submitting"
                  class="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send :size="20" class="mr-2" />
                  {{ submitting ? 'Envoi en cours...' : 'Envoyer le message' }}
                </button>

                <p v-if="submitMessage" class="text-center" :class="submitSuccess ? 'text-green-600' : 'text-red-600'">
                  {{ submitMessage }}
                </p>
              </form>
            </div>
          </div>
      </section>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { Code, Zap, Check, ArrowRight, Send, Target, ChevronDown, FileText, Play, Puzzle, HeartPulse, Home, Award, Camera, Briefcase, Rocket } from 'lucide-vue-next'

// Section "Pour qui ?" : profils de prestataires équestres
const profiles = [
  {
    icon: HeartPulse,
    title: 'Praticien du bien-être équin et animal',
    examples: 'ostéopathe équin, masseur équin, équicoach, communication animale...',
    objective: 'Pour développer votre visibilité locale et être immédiatement trouvable par les clients de votre région sur Google.'
  },
  {
    icon: Home,
    title: 'Écuries de propriétaires et centres équestres',
    examples: 'pension pour chevaux, enseignement, écurie active...',
    objective: 'Pour présenter clairement vos infrastructures et cibler les clients idéaux de votre région.'
  },
  {
    icon: Award,
    title: 'Haras, élevages, étalonniers et écuries de valorisation',
    examples: 'élevage de chevaux de sport, station de monte, valorisation...',
    objective: 'Pour affirmer le prestige de votre structure à travers un catalogue exclusif valorisant la génétique, la qualité de votre élevage ou les performances de vos chevaux de sport.'
  },
  {
    icon: Camera,
    title: 'Tourisme équestre, médias et photographes équins',
    examples: 'centre de tourisme équestre, photographe, magazine, blog équin...',
    objective: 'Pour donner envie de réserver et de vous suivre grâce à un portfolio immersif qui valorise vos images.'
  },
  {
    icon: Briefcase,
    title: 'Services B2B du secteur équin',
    examples: 'agence de communication équestre, avocat équin, conseil...',
    objective: 'Pour affirmer votre expertise à travers vos réalisations pour inspirer confiance à vos clients professionnels.'
  },
  {
    icon: Rocket,
    title: 'Startups et solutions équitech',
    examples: 'plateforme, application, innovation pour le secteur équin...',
    objective: 'Pour crédibiliser votre innovation auprès des utilisateurs et des investisseurs.'
  }
]

const openProfile = ref(0)
const toggleProfile = (index: number) => {
  openProfile.value = openProfile.value === index ? -1 : index
}

// Section "On avance main dans la main" : étapes du projet
const steps = [
  { title: 'Analyse de votre projet', description: 'Une session en direct pour comprendre votre vision et valider la faisabilité technique.' },
  { title: 'Offre & Devis', description: 'Je vous présente une proposition chiffrée transparente, adaptée à vos besoins réels.' },
  { title: 'Cadrage de départ', description: 'Dès le devis signé, nous fixons les objectifs précis pour lancer le développement.' },
  { title: 'Développement', description: 'Phase de création pure, où votre site prend vie, que vous pouvez suivre en temps réel.' },
  { title: 'Phase de test', description: 'On vérifie ensemble que tout fonctionne parfaitement sur tous les écrans avant le grand saut.' },
  { title: 'Mise en ligne', description: 'Votre site est officiellement accessible ! Je reste à vos côtés pour le lancement.' }
]

const openStep = ref(0)
const toggleStep = (index: number) => {
  openStep.value = openStep.value === index ? -1 : index
}

// Lecteur vidéo démo
const isPlaying = ref(false)
const videoEl = ref<HTMLVideoElement | null>(null)

const playVideo = async () => {
  if (!videoEl.value) return
  try {
    await videoEl.value.play()
  } catch (err) {
    console.error('Erreur lecture vidéo:', err)
  }
}

// Section "Pourquoi nous choisir ?" : contenus modifiables en autonomie
const adminFeatures = [
  'Articles de blog',
  'Projets et réalisations clients',
  'Fiches équidés',
  'Prestations et tarifs',
  'Galerie'
]

// Section "La formule" : éléments inclus dans le socle
const socleIncludes = [
  { label: '5 pages', example: 'Par exemple : accueil, prestations, contact, à propos, pages légales' },
  { label: 'Référencement sur Google' },
  { label: 'Création du nom de domaine' },
  { label: 'Création de l\'adresse mail professionnel' },
  { label: 'Configuration de l\'interface d\'administration' }
]

// FAQ
const faqItems = [
  {
    question: 'Combien de temps faut-il pour créer mon site ?',
    answer: 'Cela dépend du nombre de pages et de modules, mais comptez généralement quelques semaines après le cadrage. Je vous donne un délai précis dès le devis.'
  },
  {
    question: 'Puis-je modifier mon contenu moi-même après la mise en ligne ?',
    answer: 'Oui ! C\'est tout l\'intérêt de l\'**interface d\'administration** incluse : vous mettez à jour vos articles, prestations, fiches équidés et projets en toute autonomie, sans aucune compétence technique.'
  },
  {
    question: 'Que comprend l\'abonnement annuel de 108€ ?',
    answer: 'L\'**Hébergement Essentiel** est un abonnement annuel (12 mois) qui inclut :\n\n- **Hébergement & Rapidité** : maintien du site sur serveurs haute performance.\n- **Maintenance & Sécurité** : mises à jour techniques pour éviter les bugs (2 fois par an).\n- **Gestion du contenu** : accès illimité à votre interface de modification (Sanity).\n- **Suivi SEO** : vérification de votre bon référencement sur Google (2 fois par an).\n- **Assistance** : intervention en cas de problème technique sur l\'affichage.'
  },
  {
    question: 'Puis-je ajouter des pages ou des modules plus tard ?',
    answer: 'Absolument. Votre site évolue avec votre activité : page supplémentaire à partir de **200€**, module à partir de **150€**. On peut aussi imaginer du **sur-mesure**.'
  }
]

const studioAIFeatures = [
  {
    icon: Zap,
    iconColor: 'text-primary-600',
    title: 'Animations interactives',
    description: 'Des animations dynamiques qui réagissent aux interactions des visiteurs pour créer une expérience immersive et mémorable.'
  },
  {
    icon: Code,
    iconColor: 'text-primary-500',
    title: 'Sur mesure',
    description: 'Chaque fonctionnalité IA est adaptée à votre activité et à vos valeurs pour un accompagnement qui vous ressemble vraiment.'
  }
]

// Formulaire de contact
const form = ref({
  name: '',
  email: '',
  projectType: 'studio',
  message: ''
})

const submitting = ref(false)
const submitMessage = ref('')
const submitSuccess = ref(false)

const handleSubmit = async () => {
  submitting.value = true
  submitMessage.value = ''
  
  try {
    // Simuler l'envoi du formulaire
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Ici vous pourriez ajouter l'envoi réel vers un service comme Supabase, EmailJS, etc.
    console.log('Formulaire soumis:', form.value)
    
    submitMessage.value = 'Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.'
    submitSuccess.value = true
    
    // Réinitialiser le formulaire
    form.value = {
      name: '',
      email: '',
      projectType: 'studio',
      message: ''
    }
  } catch (error) {
    console.error('Erreur lors de l\'envoi:', error)
    submitMessage.value = 'Une erreur est survenue. Veuillez réessayer.'
    submitSuccess.value = false
  } finally {
    submitting.value = false
  }
}

useHead({
  title: 'Création et refonte de site internet équestre sur-mesure | Lise Web Equine',
  meta: [
    { name: 'description', content: 'Création de sites internet sur-mesure pour ostéopathes, éleveurs, centres équestres et professionnels du cheval. Accompagnement personnalisé.' },
    { property: 'og:title', content: 'Site internet sur-mesure pour les prestataires équestres' },
    { property: 'og:description', content: 'Création de sites internet sur-mesure pour ostéopathes, éleveurs, centres équestres et professionnels du cheval.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:title', content: 'Site internet sur-mesure pour les prestataires équestres' },
    { name: 'twitter:description', content: 'Création de sites internet sur-mesure pour ostéopathes, éleveurs, centres équestres et professionnels du cheval.' }
  ]
})

// Données structurées Schema.org : service de création de sites web équestres sur-mesure.
useStructuredData({
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Création et refonte de site internet sur-mesure',
  name: 'Création de site internet sur-mesure pour professionnels équestres',
  description:
    'Création de sites internet sur-mesure pour ostéopathes, éleveurs, centres équestres et professionnels du cheval, avec un accompagnement personnalisé.',
  url: 'https://lisewebequine.fr/creation-site-internet-equestre/sur-mesure',
  areaServed: 'FR',
  provider: { '@id': 'https://lisewebequine.fr/#organization' }
})
</script>
