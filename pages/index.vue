<template>
  <NuxtLayout>
    <div class="relative">
      <section class="relative py-12 sm:py-16 md:py-20 lg:py-32 overflow-hidden">
        
        <div class="relative container mx-auto px-6">
          <div class="max-w-7xl mx-auto">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <!-- Left: Text Content -->
              <div v-motion-slide-visible-once-left>
                <div class="mb-6 text-center sm:text-left">
                  <span class="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-primary-100 to-primary-200 border border-primary-300 rounded-full text-xs sm:text-sm font-medium text-primary-800">
                    Votre partenaire web pour passionnés équins
                  </span>
                </div>
                
                <h1 class="mb-6 sm:mb-8 leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center sm:text-left font-sans">
                  <span class="block">Création de site web pour le secteur équin</span>
                </h1>
                
                <p class="text-base sm:text-lg text-gray-700 mb-8 sm:mb-12 leading-relaxed text-center sm:text-left">
                  De l'architecture technique au design final, je crée le site web qui propulsera votre activité, que vous choisissiez un modèle clé en main ou une création sur-mesure.
                </p>
                
                <div class="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
                  <NuxtLink to="/templates" class="btn-primary group relative w-full sm:w-auto">
                    <span class="flex items-center justify-center">
                      <ShoppingBag :size="20" class="mr-3" />
                      La boutique de modèles
                    </span>
                  </NuxtLink>
                  
                  <NuxtLink to="/services" class="group px-6 py-3 sm:px-8 sm:py-4 bg-white text-slate-800 font-semibold rounded-xl border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg w-full sm:w-auto">
                    <span class="flex items-center justify-center">
                      <Sparkles :size="20" class="mr-3" />
                      Découvrir le studio
                    </span>
                  </NuxtLink>
                </div>
              </div>
              
              <!-- Right: Hero Animation -->
              <div v-motion-slide-visible-once-right class="relative">
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
      <section class="py-24 relative overflow-hidden">
        <!-- Background decoration -->
        <div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-amber-100/50 to-transparent rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-100/50 to-transparent rounded-full blur-3xl"></div>
        
        <div class="relative container mx-auto px-6">
          <div class="max-w-6xl mx-auto">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <!-- Text Content -->
              <div v-motion-slide-visible-once-left>
                <div class="mb-6">

                </div>
                
                <h2 class="mb-6 leading-tight">
                  <span class="block text-slate-800">Où la passion équine rencontre l'innovation digitale</span>
                </h2>
                
                <div class="space-y-6 mb-8">
                  <p class="text-lg text-gray-700 leading-relaxed">
                    On se comprend mieux quand on partage la même passion. Cavalière dans l'âme, je sais que votre métier est une <span class="font-semibold">vocation de chaque instant</span>, souvent rythmée par les imprévus du vivant. C'est parce que je connais votre quotidien que j'ai choisi d'allier mon expertise web de 5 ans à des solutions d'intelligence artificielle.
                  </p>
                  
                  <p class="text-lg text-gray-700 leading-relaxed">
                    Je crée pour vous des sites web qui vous ressemblent, pensés pour <span class="font-semibold text-slate-800">simplifier votre gestion et vous redonner de l'air</span>.
                  </p>
 
                  <!-- Testimonial -->
                  <div class="border-l-2 border-gray-300 pl-6">
                    <p class="text-gray-700 leading-relaxed">
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
                    class="aspect-square rounded-2xl p-12 flex flex-col items-center justify-end overflow-hidden relative group bg-gray-200"
                    style="background-image: url('/images/lise-profile.jpg'); background-size: cover; background-position: center;"
                  >
                    
                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                    <div class="text-center relative z-10">
                      <h3 class="text-2xl font-semibold text-white mb-1">Claire-Elise</h3>
                      <p class="text-gray-200 mb-4 text-sm">Fondatrice & Développeuse</p>
                      
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

      <!-- Services Segmentés Section -->
      <section class="py-24">
        <div class="container mx-auto px-6">
          <div class="text-center mb-20" v-motion-slide-visible-once-bottom>
            <h2 class="mb-6">
              <span class="block">Choisissez votre chemin</span>
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Que vous soyez un établi ou un débutant, j'ai la solution parfaite pour propulser votre présence en ligne
            </p>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <!-- Le Studio - Premium -->
            <div 
              class="relative group"
              v-motion-slide-visible-once-left
            >
              <div class="relative p-10 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-50 rounded-3xl border border-amber-200 hover:border-amber-300 transition-all duration-300 hover:shadow-2xl">
                <!-- Badge Premium -->
                <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white text-sm font-semibold rounded-full shadow-lg">
                    Service Premium
                  </span>
                </div>
                
                <!-- Icon -->
                <div class="flex justify-center mb-6 mt-4">
                  <div class="w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Palette :size="40" class="text-white" />
                  </div>
                </div>
                
                <!-- Content -->
                <h3 class="text-3xl font-bold text-center mb-4 text-slate-800">
                  Le Studio
                </h3>
                
                <p class="text-lg text-gray-700 text-center mb-8 leading-relaxed">
                  Service de création premium pour une présence digitale unique et sur mesure
                </p>
                
                <!-- Features -->
                <div class="space-y-4 mb-8">
                  <div class="flex items-start space-x-3">
                    <div class="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span class="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <h4 class="font-semibold text-slate-800 mb-1">Design Exclusif</h4>
                      <p class="text-gray-600 text-sm">Une identité visuelle unique qui reflète votre prestige équestre</p>
                    </div>
                  </div>
                  
                  <div class="flex items-start space-x-3">
                    <div class="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span class="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <h4 class="font-semibold text-slate-800 mb-1">Stratégie SEO Spécifique</h4>
                      <p class="text-gray-600 text-sm">Positionnement avancé dans le secteur équin avec l'IA</p>
                    </div>
                  </div>
                  
                  <div class="flex items-start space-x-3">
                    <div class="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span class="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <h4 class="font-semibold text-slate-800 mb-1">Accompagnement Personnalisé</h4>
                      <p class="text-gray-600 text-sm">De la stratégie à la formation complète</p>
                    </div>
                  </div>
                </div>
                
                <!-- CTA -->
                <NuxtLink to="/services" class="btn-primary w-full inline-flex items-center justify-center">
                  <span>En savoir plus</span>
                  <ArrowRight :size="20" class="ml-2" />
                </NuxtLink>
              </div>
            </div>

            <!-- La Boutique - Abordable -->
            <div 
              class="relative group"
              v-motion-slide-visible-once-right
            >
              <div class="relative p-10 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-50 rounded-3xl border border-blue-200 hover:border-blue-300 transition-all duration-300 hover:shadow-2xl">
                <!-- Badge Abordable -->
                <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-semibold rounded-full shadow-lg">
                    Solutions Abordables
                  </span>
                </div>
                
                <!-- Icon -->
                <div class="flex justify-center mb-6 mt-4">
                  <div class="w-20 h-20 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <ShoppingBag :size="40" class="text-white" />
                  </div>
                </div>
                
                <!-- Content -->
                <h3 class="text-3xl font-bold text-center mb-4 text-slate-800">
                  La Boutique
                </h3>
                
                <p class="text-lg text-gray-700 text-center mb-8 leading-relaxed">
                  Des modèles de sites web <span class="font-bold text-blue-600">abordables</span> et optimisés pour ceux qui se lancent
                </p>
                
                <!-- Features -->
                <div class="space-y-4 mb-8">
                  <div class="flex items-start space-x-3">
                    <div class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span class="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <h4 class="font-semibold text-slate-800 mb-1">Prêt à l'emploi</h4>
                      <p class="text-gray-600 text-sm">Installez, personnalisez et lancez votre activité en quelques heures</p>
                    </div>
                  </div>
                  
                  <div class="flex items-start space-x-3">
                    <div class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span class="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <h4 class="font-semibold text-slate-800 mb-1">Guides de Personnalisation Inclus</h4>
                      <p class="text-gray-600 text-sm">Tutoriels détaillés pour adapter le modèle à votre image</p>
                    </div>
                  </div>
                  
                  <div class="flex items-start space-x-3">
                    <div class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span class="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <h4 class="font-semibold text-slate-800 mb-1">Optimisé SEO</h4>
                      <p class="text-gray-600 text-sm">Base technique solide pour démarrer votre référencement</p>
                    </div>
                  </div>
                </div>
                
                <!-- CTA -->
                <NuxtLink to="/templates" class="btn-primary w-full inline-flex items-center justify-center">
                  <span>Explorer les modèles</span>
                  <ArrowRight :size="20" class="ml-2" />
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Expertise IA Section -->
      <section class="py-24 bg-gradient-to-br from-slate-900 via-black to-slate-900 relative overflow-hidden">
        <!-- Background Tech Elements -->
        <div class="absolute inset-0">
          <div class="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5"></div>
          <div class="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        </div>
        
        <div class="relative container mx-auto px-6">
          <div class="max-w-7xl mx-auto">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              <!-- Left: Photo -->
              <div v-motion-slide-visible-once-left class="relative">
                <div class="relative">
                  <!-- Main Image -->
                  <div class="aspect-[4/5] bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-700">
                    <div class="w-full h-full flex items-center justify-center">
                      <!-- Placeholder for black and white horse image -->
                      <div class="text-center">
                        <div class="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mb-4">
                          <span class="text-slate-300 font-bold text-xl">C</span>
                        </div>
                        <div class="text-slate-400 text-sm">Image cheval noir & blanc</div>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Floating Tech Elements -->
                  <div class="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg animate-bounce">
                    <span class="text-white font-bold text-xl">I</span>
                  </div>
                  <div class="absolute -bottom-6 -left-6 w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg animate-pulse">
                    <span class="text-white font-bold">T</span>
                  </div>
                  
                  <!-- Code Pattern Overlay -->
                  <div class="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent rounded-3xl pointer-events-none"></div>
                </div>
              </div>

              <!-- Right: Content -->
              <div v-motion-slide-visible-once-right class="space-y-8">
                <!-- Pre-title -->
                <div class="mb-4">
                  <span class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-sm font-medium text-blue-300">
                    Le futur du web équin
                  </span>
                </div>
                
                <!-- Title -->
                <h2 class="mb-6 leading-tight">
                  <span class="block">Créé avec l'IA,</span>
                  <span class="block text-white">raffiné par l'humain</span>
                </h2>
                
                <!-- Description -->
                <div class="space-y-6">
                  <p class="text-lg text-gray-300 leading-relaxed">
                    Chez Lise Web Equine, nous utilisons les technologies d'intelligence artificielle les plus avancées pour accélérer le développement, optimiser vos contenus textuels et générer des visuels équestres époustouflants.
                  </p>
                  
                  <!-- Features -->
                  <div class="space-y-6">
                    <div class="flex items-start space-x-4">
                      <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Zap :size="24" class="text-white" />
                      </div>
                      <div>
                        <h4 class="text-xl font-semibold text-white mb-2">Rapidité d'exécution</h4>
                        <p class="text-gray-400 leading-relaxed">
                          Réduisez le temps de création de 50% sans compromis sur la qualité.
                        </p>
                      </div>
                    </div>
                    
                    <div class="flex items-start space-x-4">
                      <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <PenTool :size="24" class="text-white" />
                      </div>
                      <div>
                        <h4 class="text-xl font-semibold text-white mb-2">Copywriting Intelligent</h4>
                        <p class="text-gray-400 leading-relaxed">
                          Des textes optimisés pour convaincre vos futurs clients.
                        </p>
                      </div>
                    </div>
                    
                    <div class="flex items-start space-x-4">
                      <div class="w-12 h-12 bg-gradient-to-br from-pink-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Image :size="24" class="text-white" />
                      </div>
                      <div>
                        <h4 class="text-xl font-semibold text-white mb-2">Visuels Uniques</h4>
                        <p class="text-gray-400 leading-relaxed">
                          Génération d'images équestres personnalisées et exclusives.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <!-- CTA -->
                <div class="pt-6">
                  <NuxtLink to="/services" class="btn-primary inline-flex items-center">
                    <span>Découvrir notre technologie</span>
                    <ArrowRight :size="20" class="ml-3" />
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-20">
        <div class="container mx-auto px-6">
          <div class="flex justify-between items-end mb-12" v-motion-slide-visible-once-bottom>
            <div>
              <h2 class="mb-4">Featured Templates</h2>
              <p class="section-subtitle text-left max-w-none">
                Ready-to-use, professionally designed templates
              </p>
            </div>
            <NuxtLink to="/templates" class="hidden md:inline-flex items-center text-black font-semibold hover:gap-2 transition-all">
              View All
              <ArrowRight :size="20" class="ml-1" />
            </NuxtLink>
          </div>

          <div v-if="loading" class="text-center py-20">
            <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
          </div>

          <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TemplateCard
              v-for="template in featuredTemplates"
              :key="template.id"
              :template="template"
            />
          </div>

          <div class="text-center mt-12 md:hidden">
            <NuxtLink to="/templates" class="btn-primary inline-flex items-center">
              View All Templates
              <ArrowRight :size="20" class="ml-2" />
            </NuxtLink>
          </div>
        </div>
      </section>

      <section class="py-20 bg-primary-500 text-white relative overflow-hidden">
        <div class="gradient-figure-start-with-us"></div>
        <div class="container mx-auto px-6 relative z-[1000]">
          <div class="max-w-4xl mx-auto text-center" v-motion-slide-visible-once-bottom>
            <h2 class="mb-6">Prêt à faire galoper votre projet ?</h2>
            <p class="text-xl text-gray-300 mb-10">
              Whether you need a custom solution or a ready-made template, we're here to help.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <NuxtLink to="/contact" class="btn-primary">
                Get Started
              </NuxtLink>
              <NuxtLink to="/templates" class="btn-secondary text-white border-white hover:bg-white/10">
                Explore Templates
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { Code, Palette, Zap, ShoppingBag, MessageSquare, ArrowRight, Sparkles, PenTool, Image } from 'lucide-vue-next'
import type { Template } from '~/stores/cart'

const supabase = useSupabase()
const loading = ref(true)
const featuredTemplates = ref<Template[]>([])

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
      .eq('is_featured', true)
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
