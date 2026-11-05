<template>
  <NuxtLayout>
      <!-- HERO : Trame de points.
           -mt-20 annule le pt-20 global de <main> pour que le hero démarre tout en haut (derrière le header). -->
      <section class="hero -mt-20 bg-hero-dots">
        <div class="hero__content">
          <p class="mb-4 text-center text-sm sm:text-base font-semibold uppercase tracking-widest text-primary-300">Agence web équestre</p>
          <h1 class="mb-8 sm:mb-10 text-center text-white">Votre site internet<br>sur-mesure ou clé en main</h1>
          <div class="mx-auto flex w-full max-w-sm flex-col items-stretch justify-center gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <NuxtLink to="/creation-site-internet-equestre/sur-mesure" class="btn-secondary w-full sm:w-auto border-white text-[#642F95]">
              <LayersIcon :size="20" color="#642F95" class="mr-3" />
              Création de site internet
            </NuxtLink>
            <NuxtLink to="/template-site-internet-equestre" class="btn-secondary-dark group w-full sm:w-auto px-4 sm:px-6 text-sm sm:text-base text-center bg-transparent border-white/70 hover:bg-white/10 hover:border-white">
              Ou découvrez nos templates équestres
              <ArrowRight :size="16" class="ml-2 group-hover:translate-x-1 transition-transform" />
            </NuxtLink>
          </div>
        </div>
      </section>

      <!-- Services Section -->
      <OffersSection />
      
      <FeaturesSection
        eyebrow="Ce que ça change pour vous"
        title="Un site internet équestre rapide, visible et facile à gérer"
        subtitle="Grâce à l'IA, je m'occupe de la technique pour me concentrer sur l'essentiel : un site qui attire vos clients, vous fait gagner du temps et que vous gérez en toute autonomie."
        :features="aiFeatures"
      />

      <!-- A propos Section -->
      <section class="py-20">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <!-- Text Content -->
              <div v-motion-slide-visible-once-left>
                <div class="mb-6">

                </div>
                
                <h2 class="mb-6 leading-tight">
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
                      class="absolute inset-0 w-full h-full min-w-full min-h-full object-cover"
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
      </section>

      <!-- Boutique de templates : option "faites-le vous-même" (DIY, en fin de page) -->
      <section class="py-16 sm:py-20 bg-gray-50">
          <div class="flex justify-between items-end mb-12" v-motion-slide-visible-once-bottom>
            <div>
              <h2 class="mb-4">La boutique de template équestre</h2>
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
          <NuxtLink to="/creation-site-internet-equestre/sur-mesure" class="btn-primary group relative w-auto">
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
    // Texte complet d'origine : 'L\'IA m\'aide à aller plus vite sur la partie technique. Concrètement pour vous : votre site est prêt plus tôt et coûte moins cher qu\'avec une agence classique.'
    description: 'L\'IA m\'aide sur la technique : votre site est prêt plus tôt et coûte moins cher qu\'avec une agence classique.'
  },
  {
    icon: PenTool,
    iconColor: 'text-primary-500',
    title: 'Autonome sur votre site',
    // Texte complet d'origine : 'Une interface simple vous rend totalement autonome : mettez à jour vous-même vos prestations, vos photos ou vos actualités équestres, sans dépendre de personne ni payer à chaque modification.'
    description: 'Une interface simple pour mettre à jour vos prestations, photos et actualités, sans dépendre de personne.'
  },
  {
    icon: Search,
    iconColor: 'text-primary-400',
    title: 'Bien visible sur Google',
    // Texte complet d'origine : 'J\'organise soigneusement le contenu de votre site pour que vos futurs clients vous trouvent facilement quand ils cherchent sur Google.'
    description: 'J\'organise le contenu de votre site pour que vos futurs clients vous trouvent facilement sur Google.'
  },
  {
    icon: Sparkles,
    iconColor: 'text-primary-300',
    title: 'Des idées sans limites',
    // Texte complet d'origine : 'Une réservation en ligne, un assistant qui répond à vos visiteurs, une tâche répétitive automatisée... Si vous en rêvez, l\'IA me permet de le rendre possible.'
    description: 'Réservation en ligne, assistant pour vos visiteurs, tâches automatisées… Si vous en rêvez, l\'IA me permet de le rendre possible.'
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
.hero {
  position: relative;
  overflow: hidden;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 120px 24px 80px;
  text-align: center;
}

.hero__content { position: relative; max-width: 960px; }

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
