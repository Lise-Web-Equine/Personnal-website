<template>
  <NuxtLayout>
      <section class="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden bg-secondary text-white">
        <!-- Background decoration -->
        <div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-900/30 to-transparent rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-purple-900/30 to-transparent rounded-full blur-3xl"></div>
        
        <div class="relative container mx-auto px-6">
          <div class="max-w-3xl" v-motion-slide-visible-once-bottom>
            <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6"><span class="text-white">Le Studio de création</span></h1>
            <p class="text-base sm:text-lg md:text-xl text-secondary-300 leading-relaxed">
              Des sites web sur mesure qui racontent votre histoire.
            </p>
            <div class="mt-6">
              <Badge variant="primary" text="Une place disponible pour Septembre" />
            </div>
          </div>
        </div>
      </section>

      <!-- Description Section -->
      <section class="py-12 sm:py-16 md:py-20">
        <div class="container mx-auto px-6">
          <div class="max-w-5xl mx-auto" v-motion-slide-visible-once-bottom>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <!-- Texte principal -->
              <div>
                <p class="text-base sm:text-lg text-secondary-600 leading-relaxed mb-6 sm:mb-8">
                  Je conçois des sites vitrines élégants et performants pour les professionnels du monde équin. Un accompagnement de proximité pour transformer votre passion en une présence digitale remarquable.
                </p>
                <div class="space-y-4">
                  <div class="flex items-start space-x-3">
                    <div class="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div class="w-2 h-2 bg-primary-600 rounded-full"></div>
                    </div>
                    <p class="text-sm sm:text-base text-secondary-700">Design unique qui reflète votre expertise équine</p>
                  </div>
                  <div class="flex items-start space-x-3">
                    <div class="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div class="w-2 h-2 bg-primary-600 rounded-full"></div>
                    </div>
                    <p class="text-sm sm:text-base text-secondary-700">Performance optimale pour tous les écrans</p>
                  </div>
                  <div class="flex items-start space-x-3">
                    <div class="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div class="w-2 h-2 bg-primary-600 rounded-full"></div>
                    </div>
                    <p class="text-sm sm:text-base text-secondary-700">Accompagnement jusqu'à votre autonomie complète</p>
                  </div>
                </div>
              </div>
              
              <!-- Citation mise en avant -->
              <div class="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-6 sm:p-8 border border-primary-200">
                <blockquote class="text-sm sm:text-base text-secondary-800 leading-relaxed italic">
                  "Plus qu'un simple site web, je crée une véritable vitrine digitale qui reflète votre expertise et votre passion. Chaque projet est une opportunité de mettre en valeur votre savoir-faire unique dans le monde équin."
                </blockquote>
                <div class="mt-6 flex items-center space-x-3">
                  <div class="w-10 h-10 sm:w-12 sm:h-12 bg-primary-200 rounded-full flex items-center justify-center">
                    <span class="text-primary-700 font-bold text-base sm:text-lg">CE</span>
                  </div>
                  <div>
                    <p class="text-sm sm:text-base font-semibold text-secondary-900">Claire-Elise</p>
                    <p class="text-xs sm:text-sm text-secondary-600">Fondatrice du Studio</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeaturesSection
        title="L'IA pour un site qui vit et qui engage."
        subtitle="Pour que votre site ne soit pas juste une page statique, j'y intègre des fonctionnalités interactives intelligentes sans jamais perdre votre authenticité."
        :features="studioAIFeatures"
      />

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

        <div class="container mx-auto px-6">
          <div class="text-center mb-12 sm:mb-16" v-motion-slide-visible-once-bottom>
            <h2 class="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">On avance main dans la main</h2>
            <p class="text-base sm:text-lg text-secondary-600 max-w-3xl mx-auto">
              Pas de jargon compliqué, juste des étapes claires pour un projet zen.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            <!-- Étape 1 -->
            <div class="bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-shadow" v-motion-slide-visible-once-bottom>
              <div class="flex items-center mb-4 sm:mb-6">
                <div class="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                  <span class="text-primary-600 font-bold text-base sm:text-lg">1</span>
                </div>
                <h3 class="text-lg sm:text-xl font-bold">Analyse de votre projet</h3>
              </div>
              <p class="text-sm sm:text-base text-secondary-600 leading-relaxed">
                Une session en direct pour comprendre votre vision et valider la faisabilité technique.
              </p>
            </div>

            <!-- Étape 2 -->
            <div class="bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-shadow" v-motion-slide-visible-once-bottom :delay="100">
              <div class="flex items-center mb-4 sm:mb-6">
                <div class="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                  <span class="text-primary-600 font-bold text-base sm:text-lg">2</span>
                </div>
                <h3 class="text-lg sm:text-xl font-bold">Offre & Devis</h3>
              </div>
              <p class="text-sm sm:text-base text-secondary-600 leading-relaxed">
                Je vous présente une proposition chiffrée transparente, adaptée à vos besoins réels.
              </p>
            </div>

            <!-- Étape 3 -->
            <div class="bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-shadow" v-motion-slide-visible-once-bottom :delay="200">
              <div class="flex items-center mb-4 sm:mb-6">
                <div class="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                  <span class="text-primary-600 font-bold text-base sm:text-lg">3</span>
                </div>
                <h3 class="text-lg sm:text-xl font-bold">Cadrage de départ</h3>
              </div>
              <p class="text-sm sm:text-base text-secondary-600 leading-relaxed">
                Dès le devis signé, nous fixons les objectifs précis pour lancer le développement.
              </p>
            </div>

            <!-- Étape 4 -->
            <div class="bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-shadow" v-motion-slide-visible-once-bottom :delay="300">
              <div class="flex items-center mb-4 sm:mb-6">
                <div class="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                  <span class="text-primary-600 font-bold text-base sm:text-lg">4</span>
                </div>
                <h3 class="text-lg sm:text-xl font-bold">Développement</h3>
              </div>
              <p class="text-sm sm:text-base text-secondary-600 leading-relaxed">
                Phase de création pure où votre site prend vie, sous mon oeil expert.
              </p>
            </div>

            <!-- Étape 5 -->
            <div class="bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-shadow" v-motion-slide-visible-once-bottom :delay="400">
              <div class="flex items-center mb-4 sm:mb-6">
                <div class="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                  <span class="text-primary-600 font-bold text-base sm:text-lg">5</span>
                </div>
                <h3 class="text-lg sm:text-xl font-bold">Phase de test</h3>
              </div>
              <p class="text-sm sm:text-base text-secondary-600 leading-relaxed">
              On vérifie ensemble que tout fonctionne parfaitement sur tous les écrans avant le grand saut.
              </p>
            </div>

            <!-- Étape 6 -->
            <div class="bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-shadow" v-motion-slide-visible-once-bottom :delay="500">
              <div class="flex items-center mb-4 sm:mb-6">
                <div class="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                  <span class="text-primary-600 font-bold text-base sm:text-lg">6</span>
                </div>
                <h3 class="text-lg sm:text-xl font-bold">Mise en ligne</h3>
              </div>
              <p class="text-sm sm:text-base text-secondary-600 leading-relaxed">
               Votre site est officiellement accessible ! Je reste à vos côtés pour le lancement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Pricing Banner -->
      <section class="py-12 sm:py-16 md:py-20">
        <div class="container mx-auto px-6">
          <div class="max-w-3xl mx-auto">
            <div class="border-t border-b border-primary-200 py-8 sm:py-10">
              <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p class="text-sm sm:text-base text-secondary-600 mb-1">Tarif de base</p>
                  <p class="text-2xl sm:text-3xl font-bold text-secondary-900">À partir de 1500€</p>
                </div>
                <div class="text-center sm:text-right">
                  <p class="text-xs sm:text-sm text-secondary-500">Paiement en 3 fois possible</p>
                  <p class="text-xs sm:text-sm text-secondary-500">Devis personnalisé gratuit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section class="py-12 sm:py-16 md:py-20">
        <div class="container mx-auto px-6">
          <div class="max-w-4xl mx-auto">
            <div class="text-center mb-12 sm:mb-16" v-motion-slide-visible-once-bottom>
              <h2 class="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">On en discute ?</h2>
              <p class="text-base sm:text-lg text-secondary-600 leading-relaxed">
                Chaque projet est unique. Envoyez-moi un message pour une première analyse gratuite de votre projet.
              </p>
            </div>

            <div class="bg-white rounded-2xl p-6 sm:p-8 lg:p-12 shadow-sm border border-secondary-100" v-motion-slide-visible-once-bottom>
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
                      placeholder="Votre nom"
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
                      placeholder="votre@email.com"
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
                    <option value="studio">Création sur mesure (Studio)</option>
                    <option value="template">Modèle personnalisé</option>
                    <option value="consultation">Consultation</option>
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
                    placeholder="Décrivez-moi votre projet..."
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
        </div>
      </section>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { Code, ShoppingBag, Palette, Zap, Search, Smartphone, Database, Check, ArrowRight, Send, Heart, Sparkles, Target, MessageSquare } from 'lucide-vue-next'

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
</script>
