<template>
  <NuxtLayout>
      <section class="relative py-12 sm:py-16 md:py-20 lg:py-32 overflow-hidden overflow-x-hidden">
        <!-- Halo backgrounds with fade mask -->
        <div class="absolute inset-0 -z-10" style="mask-image: linear-gradient(to bottom, black 0%, black 70%, transparent 100%); -webkit-mask-image: linear-gradient(to bottom, black 0%, black 70%, transparent 100%);">
          <div class="absolute inset-x-0 -top-20 sm:-top-40 transform-gpu overflow-hidden blur-2xl sm:blur-3xl" aria-hidden="true">
            <div
              class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[40rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff9a76] to-[#9089fc] opacity-50 sm:opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
            ></div>
          </div>
          <div class="absolute inset-x-0 top-[calc(50%-20rem)] transform-gpu overflow-hidden blur-2xl sm:blur-3xl sm:top-[calc(50%-30rem)]" aria-hidden="true">
            <div
              class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[40rem] -translate-x-1/2 bg-gradient-to-tr from-[#9089fc] to-[#ffb380] opacity-35 sm:opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
            ></div>
          </div>
        </div>

        <div class="relative container mx-auto px-6">
          <div class="max-w-7xl mx-auto">
            <div class="flex flex-col items-center justify-center gap-8 sm:gap-12 lg:gap-16 min-h-[60vh] sm:min-h-[70vh]">
              <!-- Text Content -->
              <div class="text-center w-full">

              <!--  <h3 class="mb-6 sm:mb-6 leading-tight text-lg sm:text-xl md:text-2xl lg:text-3xl font-sans text-secondary-500 font-light">
                  <span class="font-serif italic bg-gradient-to-r from-purple-600 via-violet-500 to-indigo-600 bg-clip-text text-transparent"> Abordable ou unique</span>
                </h3>-->
                
                <h1 class="mb-8 sm:mb-8 leading-tight text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-sans">
                    <span class="text-secondary-900 font-bold block">
                      Le Site Web Equestre
                    </span>
                    <span class="text-secondary-900 font-bold block text-base sm:text-3xl md:text-4xl lg:text-5xl">
                      que vous serez enfin <span class="font-serif italic bg-gradient-to-r from-purple-600 via-violet-500 to-indigo-600 bg-clip-text text-transparent px-2 text-lg sm:text-4xl md:text-5xl lg:text-6xl">{{ currentWord }}</span> de montrer
                    </span>
                </h1>
                <!--<span class="font-bold border-b-2 border-transparent" style="border-image: linear-gradient(to right, #9333ea, #8b5cf6, #6366f1) 1;">-->
                
                <p class="hidden sm:block text-sm sm:text-base md:text-lg text-secondary-700 mb-10 sm:mb-12 leading-relaxed max-w-3xl mx-auto">
                  <span>Valorisez votre <span class="font-bold">activité équestre</span> avec une image professionnelle et authentique.</span>
                </p>
                
                <div class="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                  <NuxtLink to="/studio" class="btn-primary group relative w-full sm:w-auto">
                    <span class="flex items-center justify-center">
                      <LayersIcon :size="20" color="white" class="mr-3" />
                      Le studio sur-mesure
                    </span>
                  </NuxtLink>
                  
                  <NuxtLink to="/templates" class="btn-secondary group relative w-full sm:w-auto">
                    <span class="flex items-center justify-center">
                      <ShopIcon :size="20" class="mr-3" />
                      Explorer les templates
                    </span>
                  </NuxtLink>
                </div>
                <p class="mt-1 text-xs sm:text-sm text-secondary-500 block sm:hidden">Gagnez du temps avec des sites déjà conçus et optimisés</p>
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
              Des solutions adaptées à vos besoins pour développer votre présence en ligne
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Le Studio -->
            <ServiceCard
              variant="primary"
              title="Le Studio"
              description="Service de création premium pour une présence digitale unique et sur mesure."
              :icon="LayersIcon"
              badge-text="Sur mesure"
              badge-variant="primary"
              :features="studioFeatures"
              cta-text="En savoir plus"
              cta-link="/studio"
              featured
              motion-direction="left"
            />

            <!-- Templates -->
            <ServiceCard
              variant="secondary"
              title="Les templates"
              description="Des templates de sites web abordables et optimisés pour ceux qui se lancent."
              :icon="ShopIcon"
              badge-text="Clé en main"
              badge-variant="secondary"
              :features="templatesFeatures"
              cta-text="Explorer les templates"
              cta-link="/templates"
              motion-direction="right"
            />
          </div>
        </div>
      </section>
      
      <section class="py-20">
        <div class="container mx-auto px-6">
          <div class="flex justify-between items-end mb-12" v-motion-slide-visible-once-bottom>
            <div>
              <h2 class="mb-4 text-2xl sm:text-3xl md:text-4xl">Templates en vedette</h2>
              <p class="section-subtitle text-left max-w-none text-sm sm:text-base md:text-lg">
                Prêts à l'emploi pour les professionnels équestres qui veulent créer eux-mêmes leur site web.
              </p>
            </div>
            <NuxtLink to="/templates" class="hidden md:inline-flex items-center text-black font-semibold hover:gap-2 transition-all">
              Voir tous
              <ArrowRight :size="20" class="ml-1" />
            </NuxtLink>
          </div>

          <div v-if="loading" class="text-center py-20">
            <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
          </div>

          <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TemplateCardMockup
              v-for="template in featuredTemplates"
              :key="template.id"
              :template="template"
            />
          </div>

          <div class="text-center mt-12 md:hidden">
            <NuxtLink to="/templates" class="btn-primary inline-flex items-center">
              Voir tous les templates
              <ArrowRight :size="20" class="ml-2" />
            </NuxtLink>
          </div>
        </div>
      </section>

      <FeaturesSection
        title="Une expertise IA pensée pour vos projets web"
        subtitle="Je mets l'intelligence artificielle au service de votre passion pour créer des sites web performants et agréables à utiliser."
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
                    style="background-image: url('/images/lise-profile.jpg'); background-size: cover; background-position: center;"
                  >
                    
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

      <section class="py-12 sm:py-16 md:py-20 lg:py-24 bg-secondary text-white relative overflow-hidden">
        <GradientAnimation />
        
        <div class="relative container mx-auto px-6">
          <div class="max-w-7xl mx-auto">
            <div class="text-center" v-motion-slide-visible-once-bottom>
              <h2 class="mb-4 sm:mb-6 text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Prêt à montrer votre professionnalisme ?</h2>
              <p class="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-10">
                Créons ensemble un site web unique qui reflète votre expertise.
              </p>
              <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <NuxtLink to="/studio" class="btn-primary group relative w-full sm:w-auto">
                    <span class="flex items-center justify-center">
                      <LayersIcon :size="20" color="white" class="mr-3" />
                      Découvrir le studio
                    </span>
                  </NuxtLink>
                <NuxtLink to="/contact" class="btn-secondary-dark">
                  Me contacter
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </section>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { Code, Palette, Zap, MessageSquare, ArrowRight, PenTool, Image, Search, Sparkles } from 'lucide-vue-next'
import LayersIcon from '~/components/icons/LayersIcon.vue'
import ShopIcon from '~/components/icons/ShopIcon.vue'
import type { Template } from '~/models'
import type { Database } from '~/types/database.types'

const supabase = useSupabaseClient<Database>()
const loading = ref(true)
const featuredTemplates = ref<Template[]>([])

// Animation des mots
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

const templatesFeatures = [
  {
    title: 'Prêt à l\'emploi',
    description: 'Installez et lancez votre activité en quelques heures'
  },
  {
    title: 'Guides de personnalisation inclus',
    description: 'Tutoriels détaillés pour adapter le template'
  },
  {
    title: 'Pensé pour convertir',
    description: 'Optimisé pour transformer vos visiteurs en clients'
  }
]

const studioFeatures = [
  {
    title: 'Design exclusif',
    description: 'Une identité visuelle unique qui reflète votre prestige'
  },
  {
    title: 'Stratégie SEO spécifique',
    description: 'Positionnement avancé dans le secteur équestre'
  },
  {
    title: 'Accompagnement personnalisé',
    description: 'De la stratégie à la formation complète'
  }
]

const aiFeatures = [
  {
    icon: Zap,
    iconColor: 'text-primary-600',
    title: 'Vitesse & Coûts réduits',
    description: 'J\'utilise l\'IA pour accélérer ma production technique. Résultat : des délais divisés par deux et des tarifs plus compétitifs qu\'un projet traditionnel.'
  },
  {
    icon: Code,
    iconColor: 'text-primary-500',
    title: 'Zéro CMS, 100% Propriétaire',
    description: 'Fini les lourdeurs de WordPress ou Wix. Je vous livre un code qui vous appartient totalement, sans abonnement caché ni dépendance technique.'
  },
  {
    icon: Search,
    iconColor: 'text-primary-400',
    title: 'SEO de Haute Précision',
    description: 'Je m\'appuie sur l\'IA pour structurer vos données et optimiser la sémantique, garantissant une visibilité maximale sur Google.'
  },
  {
    icon: Sparkles,
    iconColor: 'text-primary-300',
    title: 'Possibilités Infinies',
    description: 'L\'IA me permet d\'intégrer des fonctionnalités complexes (chatbots, analyse, automatisation) sans aucune limite créative.'
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
