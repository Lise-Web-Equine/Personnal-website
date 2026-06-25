<template>
  <NuxtLayout>
      <section class="relative py-12 sm:py-16 md:py-20 lg:py-32 overflow-hidden overflow-x-hidden">
        <!-- Image de fond + overlay sombre (s'étend derrière le header) -->
        <div class="absolute -top-20 left-0 right-0 bottom-0 z-0">
          <NuxtImg
            src="/images/Hestabien-27.jpg"
            alt="Agence web équestre"
            class="w-full h-full object-cover"
            sizes="100vw"
            preload
            loading="eager"
            fetchpriority="high"
          />
          <div class="absolute inset-0 bg-gradient-to-b from-secondary-900/90 via-secondary-900/80 to-secondary-900/90"></div>
        </div>

        <div class="relative z-10 container mx-auto px-6">
          <div class="max-w-7xl mx-auto">
            <div class="flex flex-col items-center justify-center gap-8 sm:gap-12 lg:gap-16 min-h-[60vh] sm:min-h-[70vh]">
              <!-- Text Content -->
              <div class="text-left sm:text-center w-full">

              <!--  <h3 class="mb-6 sm:mb-6 leading-tight text-lg sm:text-xl md:text-2xl lg:text-3xl font-sans text-secondary-500 font-light">
                  <span class="font-serif italic bg-gradient-to-r from-purple-600 via-violet-500 to-indigo-600 bg-clip-text text-transparent"> Abordable ou unique</span>
                </h3>-->
                
                <h1 class="mb-8 sm:mb-8 font-sans text-left sm:text-center">
                    <span class="text-white font-bold block text-5xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight">AGENCE WEB ÉQUESTRE</span>
                    <span class="text-gray-200 font-semibold block text-lg sm:text-xl md:text-2xl lg:text-3xl mt-2 sm:mt-3">Votre site internet sur-mesure ou template</span>
                </h1>
                <!-- <span class="font-serif italic bg-gradient-to-r from-purple-600 via-violet-500 to-indigo-600 bg-clip-text text-transparent px-2 text-lg sm:text-4xl md:text-5xl lg:text-6xl">{{ currentWord }}</span> de montrer
               <span class="font-bold border-b-2 border-transparent" style="border-image: linear-gradient(to right, #9333ea, #8b5cf6, #6366f1) 1;">-->
                
                <p class="text-sm sm:text-base md:text-lg text-gray-300 mb-6 sm:mb-8 leading-relaxed max-w-2xl sm:mx-auto">
                  <span>Un accompagnement sur-mesure, pensé par et pour les passionnés du monde équestre.</span>
                </p>
                
                <div class="flex flex-col items-start sm:items-center">
                  <div class="inline-flex flex-col items-stretch gap-3 sm:gap-4">
                    <NuxtLink to="/creation-site-internet-equestre" class="btn-primary group relative">
                      <span class="flex items-center justify-center">
                        <LayersIcon :size="20" color="white" class="mr-3" />
                        Création de site internet
                      </span>
                    </NuxtLink>

                    <NuxtLink to="/template-site-internet-equestre" class="text-sm sm:text-base text-gray-300 hover:text-primary-400 font-medium transition-colors duration-200 inline-flex items-center justify-center group">
                      <span>Ou découvrez nos templates équestres</span>
                      <ArrowRight :size="16" class="ml-2 group-hover:translate-x-1 transition-transform" />
                    </NuxtLink>
                  </div>
                </div>
              </div>

              <!-- Client Carousel - Full width band 
              <div class="relative -mx-6 sm:-mx-12 md:-mx-20 lg:-mx-32">
                <ClientCarousel />
              </div>-->
            </div>
          </div>
        </div>
      </section>

      <!-- Séparation -->
      <div class="border-b border-secondary-200"></div>

      <!-- Services Section -->
      <section class="py-4 sm:py-20 bg-gray-50">
        <div class="container mx-auto px-6">
          <div class="text-center mb-16" v-motion-slide-visible-once-bottom>
            <h2 class="mb-4 text-2xl sm:text-3xl md:text-4xl">Mes Services</h2>
            <p class="text-sm sm:text-base md:text-lg text-secondary-600 max-w-2xl mx-auto">
              Découvrez nos solutions web pour les professionnels du secteur équestre.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
            <!-- Le Studio : création sur-mesure (haut de gamme) -->
            <ServiceCard
              variant="primary"
              title="Création et refonte de site internet équestre"
              description="Pour les structures équestres établies qui veulent un site internet évolutif, performant et administrable en toute simplicité."
              badge-text="Sur mesure"
              badge-variant="primary"
              price="À partir de 1500€"
              cta-text="En savoir plus"
              cta-link="/creation-site-internet-equestre"
              motion-direction="left"
              featured
            />

            <!-- Le Pack Sérénité : clé en main, offre mise en avant (done-for-you) -->
            <ServiceCard
              variant="default"
              title="Création de site internet à partir d'un template équestre"
              description="Pour les professionnels équestres qui démarrent leur activité, manquent de temps et veulent un site professionnel rapidement."
              badge-text="Clé en main"
              badge-variant="primary"
              price="À partir de 290€"
              cta-text="Découvrir l'offre template"
              cta-link="/creation-template-site-internet-equestre"
              motion-direction="right"
            />
          </div>
        </div>
      </section>
      
      <FeaturesSection
        title="Un site internet équestre rapide, visible et facile à gérer"
        subtitle="Grâce à l'IA, je m'occupe de la technique pour me concentrer sur l'essentiel : un site qui attire vos clients, vous fait gagner du temps et que vous gérez en toute autonomie."
        :features="aiFeatures"
      />

      <!-- A propos Section -->
      <section class="py-20">
        <div class="container mx-auto px-6">
          <div class="max-w-6xl mx-auto">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <!-- Text Content -->
              <div v-motion-slide-visible-once-left>
                <div class="mb-6">

                </div>
                
                <h2 class="mb-6 leading-tight text-2xl sm:text-3xl md:text-4xl">
                 Où la passion équestre rencontre l'innovation digitale
                </h2>
                
                <div class="space-y-6 mb-8">
                  <p class="text-sm sm:text-base md:text-lg text-secondary-700 leading-relaxed">
                    On se comprend mieux quand on partage la même passion. Cavalière dans l'âme, je sais que votre métier est une <span class="font-semibold">vocation de chaque instant</span>, souvent rythmée par les imprévus du vivant. C'est parce que je connais votre quotidien que j'ai choisi d'allier mon expertise web de 5 ans à des solutions d'intelligence artificielle.
                  </p>
                  
                  <p class="text-sm sm:text-base md:text-lg text-secondary-700 leading-relaxed">
                    Je crée pour vous des sites web qui vous ressemblent, pensés pour <span class="font-semibold text-secondary-800">simplifier votre gestion et vous redonner de l'air</span>.
                  </p>

                  <!-- Testimonial -->
                  <div class="border-l-2 border-secondary-300 pl-6">
                    <p class="text-sm sm:text-base text-secondary-700 leading-relaxed">
                      "Mon approche est celle d'une alliée bienveillante : je m'occupe du digital pour que votre énergie reste entière pour vos chevaux et votre savoir-faire."
                    </p>
                  </div>
                </div>

                <div class="flex flex-col sm:flex-row gap-4">
                  <NuxtLink to="/contact" class="btn-primary inline-flex items-center">
                    <span>Discutons ensemble</span>
                    <MessageSquare :size="20" class="ml-2" />
                  </NuxtLink>
                </div>
              </div>

              <!-- Visual Content -->
              <div v-motion-slide-visible-once-right class="relative">
                <div class="relative">
                  <div 
                    class="aspect-square rounded-2xl p-12 flex flex-col items-center justify-end overflow-hidden relative group bg-secondary-200"
                  >
                    <NuxtImg
                      src="/images/lise-profile.jpg"
                      alt="Claire-Elise, fondatrice de Lise Web Equine"
                      class="absolute inset-0 w-full h-full object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      loading="lazy"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                    <div class="text-center relative z-10">
                      <h3 class="text-xl sm:text-2xl font-semibold text-white mb-1">Claire-Elise</h3>
                      <p class="text-secondary-200 mb-4 text-xs sm:text-sm">Fondatrice & Développeuse</p>
                      
                      <div class="inline-flex items-center px-3 py-1 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-xs text-white">
                        +5 ans d'expérience web
                      </div>
                   </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Boutique de templates : option "faites-le vous-même" (DIY, en fin de page) -->
      <section class="py-16 sm:py-20 bg-gray-50">
        <div class="container mx-auto px-6">
          <div class="flex justify-between items-end mb-12" v-motion-slide-visible-once-bottom>
            <div>
              <h2 class="mb-4 text-2xl sm:text-3xl md:text-4xl">La boutique de template équestre</h2>
              <p class="section-subtitle text-left max-w-none text-sm sm:text-base md:text-lg">
                Personnalisez l'un de nos templates équestres en toute autonomie, accompagné de notre guide stratégique pas à pas.
              </p>
            </div>
            <NuxtLink to="/template-site-internet-equestre" class="hidden md:inline-flex items-center text-secondary-900 font-semibold hover:gap-2 transition-all">
              Voir tous
              <ArrowRight :size="20" class="ml-1" />
            </NuxtLink>
          </div>

          <div v-if="loading" class="text-center py-20">
            <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
          </div>

          <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TemplateCardMockup
              v-for="template in featuredTemplates"
              :key="template.id"
              :template="template"
            />
          </div>

          <div class="text-center mt-12 md:hidden">
            <NuxtLink to="/template-site-internet-equestre" class="btn-primary inline-flex items-center">
              Voir tous les templates
              <ArrowRight :size="20" class="ml-2" />
            </NuxtLink>
          </div>
        </div>
      </section>

      <CtaSection
        title="Créez votre site internet équestre professionnel"
        description="Créons ensemble le site web pour votre structure équestre qui reflète votre expertise."
        image="/images/Hestabien.jpg"
        image-alt="Création de site internet pour les prestataires équestres"
        align="responsive"
        size="large"
      >
        <template #actions>
          <NuxtLink to="/creation-site-internet-equestre" class="btn-primary group relative w-auto">
            <span class="flex items-center justify-start sm:justify-center">
              <LayersIcon :size="20" color="white" class="mr-3" />
              Créer mon site équestre
            </span>
          </NuxtLink>
          <NuxtLink to="/contact" class="btn-secondary-dark inline-flex items-center justify-start sm:justify-center">
            <span>Me contacter</span>
          </NuxtLink>
        </template>
      </CtaSection>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { Code, Palette, Zap, MessageSquare, ArrowRight, PenTool, Image, Search, Sparkles, ShieldCheck } from 'lucide-vue-next'
import LayersIcon from '~/components/icons/LayersIcon.vue'
import type { Template } from '~/models'
import type { Database } from '~/types/database.types'

const supabase = useSupabaseClient<Database>()
const loading = ref(true)
const featuredTemplates = ref<Template[]>([])

const words = ['fière', 'heureuse', 'confiante']
const currentWordIndex = ref(0)
const currentWord = ref(words[0])

// Animation de rotation des mots optimisée
onMounted(() => {
  // Pause l'animation quand la page n'est pas visible pour économiser les ressources
  const interval = setInterval(() => {
    if (!document.hidden) {
      currentWordIndex.value = (currentWordIndex.value + 1) % words.length
      currentWord.value = words[currentWordIndex.value]
    }
  }, 3000) // Change de mot toutes les 3 secondes (plus lent)

  // Nettoyage lors du démontage du composant
  onUnmounted(() => {
    clearInterval(interval)
  })
})

// Prestations incluses dans le Pack Sérénité (carte Services)
const packFeatures = [
  { title: 'Installation clé en main' },
  { title: 'Visio de lancement (30 min)' },
  { title: 'Mise en place de votre contenu' },
  { title: 'Support 1 mois inclus' }
]

const aiFeatures = [
  {
    icon: Zap,
    iconColor: 'text-primary-600',
    title: 'Plus rapide, moins cher',
    description: 'L\'IA m\'aide à aller plus vite sur la partie technique. Concrètement pour vous : votre site est prêt plus tôt et coûte moins cher qu\'avec une agence classique.'
  },
  {
    icon: PenTool,
    iconColor: 'text-primary-500',
    title: 'Autonome sur votre site',
    description: 'Une interface simple vous rend totalement autonome : mettez à jour vous-même vos prestations, vos photos ou vos actualités équestres, sans dépendre de personne ni payer à chaque modification.'
  },
  {
    icon: Search,
    iconColor: 'text-primary-400',
    title: 'Bien visible sur Google',
    description: 'J\'organise soigneusement le contenu de votre site pour que vos futurs clients vous trouvent facilement quand ils cherchent sur Google.'
  },
  {
    icon: Sparkles,
    iconColor: 'text-primary-300',
    title: 'Des idées sans limites',
    description: 'Une réservation en ligne, un assistant qui répond à vos visiteurs, une tâche répétitive automatisée... Si vous en rêvez, l\'IA me permet de le rendre possible.'
  }
]

onMounted(async () => {
  try {
    const { data, error } = await supabase
      .from('templates')
      .select('*')
      .order('rating', { ascending: false })
      .limit(3)

    if (error) throw error
    featuredTemplates.value = data || []
  } catch (error) {
    console.error('Error fetching templates:', error)
  } finally {
    loading.value = false
  }
})

useHead({
  title: 'Sites web pour professionnels équestres | Lise Web Equine',
  meta: [
    { name: 'description', content: 'Notre agence web équestre vous accompagne pour créer votre site internet sur-mesure ou avec une template.' },
    { property: 'og:title', content: 'Sites web pour professionnels équestres | Lise Web Equine' },
    { property: 'og:description', content: 'Notre agence web équestre vous accompagne pour créer votre site internet sur-mesure ou avec une template.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:title', content: 'Sites web pour professionnels équestres | Lise Web Equine' },
    { name: 'twitter:description', content: 'Notre agence web équestre vous accompagne pour créer votre site internet sur-mesure ou avec une template.' }
  ]
})
</script>

<style scoped>
.hero-gradient-text {
  background: linear-gradient(135deg, #ff9a76 0%, #9089fc 50%, #ffb380 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  display: inline-block;
}

@keyframes blob {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

.animation-delay-1000 {
  animation-delay: 1s;
}

.animation-delay-500 {
  animation-delay: 0.5s;
}

.animate-shimmer {
  animation: shimmer 3s infinite;
}

.gradient-figure-start-with-us {
    z-index: 999;
    background: linear-gradient(166deg, #ff5c00 20%, #745bd8);
    opacity: 0.2;
    filter: blur(60px);
    transform-style: preserve-3d;
    border-radius: 200px;
    width: 700px;
    height: 400px;
    position: absolute;
    inset: 0 auto auto 0;
    transform: skew(38deg, 7deg) rotateX(31deg) rotateY(0) rotateZ(34deg) translate(0);
    animation: gradientMove 8s ease-in-out infinite alternate;
    pointer-events: none;
}

@keyframes gradientMove {
    0% {
        transform: skew(38deg, 7deg) rotateX(31deg) rotateY(0) rotateZ(34deg) translate(0) scale(1);
        background: linear-gradient(166deg, #ff5c00 20%, #745bd8);
    }
    50% {
        transform: skew(42deg, 12deg) rotateX(25deg) rotateY(15deg) rotateZ(40deg) translate(20px, -10px) scale(1.1);
        background: linear-gradient(200deg, #ff5c00 30%, #745bd8);
    }
    100% {
        transform: skew(35deg, 5deg) rotateX(35deg) rotateY(-10deg) rotateZ(30deg) translate(-10px, 5px) scale(0.95);
        background: linear-gradient(140deg, #ff5c00 15%, #745bd8);
    }
}
</style>
