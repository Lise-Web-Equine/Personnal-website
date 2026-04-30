<template>
  <NuxtLayout>
      <section class="relative py-12 sm:py-16 md:py-20 lg:py-32 overflow-hidden">
        <div class="relative container mx-auto px-6">
          <div class="max-w-7xl mx-auto">
            <div class="flex flex-col gap-12 lg:gap-16">
              <!-- Text Content -->
              <div v-motion-slide-visible-once-left class="text-center">
                
                <h1 class="mb-6 sm:mb-8 leading-none text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-sans">
                  <span class="text-secondary-900 font-bold">
                    <span class="block sm:inline">Abordable</span>
                    <span class="block sm:inline"> ou <span class="font-serif italic bg-gradient-to-r from-purple-600 via-violet-500 to-indigo-600 bg-clip-text text-transparent">unique</span></span>
                  </span>
                </h1>
                
                <p class="text-sm sm:text-base md:text-lg text-secondary-700 mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto">
De la conception au design, une création de site web adaptée à votre histoire, que vous choisissiez la simplicité du clé en main ou l'audace du sur-mesure.                </p>
                
                <div class="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                  <NuxtLink to="/studio" class="btn-primary group relative w-full sm:w-auto">
                    <span class="flex items-center justify-center">
                      <LayersIcon :size="20" color="white" class="mr-3" />
                      Découvrir le studio
                    </span>
                  </NuxtLink>
                  
                  <NuxtLink to="/templates" class="btn-secondary group relative w-full sm:w-auto">
                    <span class="flex items-center justify-center">
                      <ShopIcon :size="20" class="mr-3" />
                      La boutique de modèles
                    </span>
                  </NuxtLink>
                </div>
              </div>
              
              <!-- Hero Animation -->
              <div v-motion-slide-visible-once-bottom class="relative">
                <!-- Desktop Version -->
                <div class="hidden lg:block">
                  <HeroAnimation />
                </div>
                <!-- Mobile Version -->
                <div class="lg:hidden">
                  <HeroAnimationMobile />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                 Où la passion équine rencontre l'innovation digitale
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

      <!-- Services Section -->
      <section class="py-20">
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

            <!-- La Boutique -->
            <ServiceCard
              variant="secondary"
              title="La Boutique"
              description="Des modèles de sites web abordables et optimisés pour ceux qui se lancent."
              :icon="ShopIcon"
              badge-text="Clé en main"
              badge-variant="secondary"
              :features="boutiqueFeatures"
              cta-text="Explorer les modèles"
              cta-link="/templates"
              motion-direction="right"
            />
          </div>
        </div>
      </section>

      <FeaturesSection
        title="Une expertise IA pensée pour vos projets web"
        subtitle="Je mets l'intelligence artificielle au service de votre passion pour créer des sites web performants et agréables à utiliser."
        :features="aiFeatures"
      />

      <section class="py-20">
        <div class="container mx-auto px-6">
          <div class="flex justify-between items-end mb-12" v-motion-slide-visible-once-bottom>
            <div>
              <h2 class="mb-4 text-2xl sm:text-3xl md:text-4xl">Modèles en vedette</h2>
              <p class="section-subtitle text-left max-w-none text-sm sm:text-base md:text-lg">
                Prêts à l'emploi pour les professionnels équins qui veulent créer eux-mêmes leur site web.
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
              Voir tous les modèles
              <ArrowRight :size="20" class="ml-2" />
            </NuxtLink>
          </div>
        </div>
      </section>

      <section class="py-12 sm:py-16 md:py-20 lg:py-24 bg-secondary text-white relative overflow-hidden">
        <!-- Background decoration -->
        <div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary-900/30 to-transparent rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-primary-900/30 to-transparent rounded-full blur-3xl"></div>
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
                <NuxtLink to="/contact" class="btn-secondary text-white">
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

const boutiqueFeatures = [
  {
    title: 'Prêt à l\'emploi',
    description: 'Installez et lancez votre activité en quelques heures'
  },
  {
    title: 'Guides de personnalisation inclus',
    description: 'Tutoriels détaillés pour adapter le modèle'
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
    description: 'Positionnement avancé dans le secteur équin'
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

const services = [
  {
    icon: Code,
    title: 'Bespoke Development',
    description: 'Custom web applications built from scratch to match your unique requirements and brand identity.'
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces designed with your users in mind, ensuring optimal engagement.'
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Lightning-fast websites optimized for speed, SEO, and conversion rates.'
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
