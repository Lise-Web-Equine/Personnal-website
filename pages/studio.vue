<template>
  <NuxtLayout>
    <div class="bg-secondary-50">
      <section class="py-20 relative overflow-hidden bg-secondary text-white">
        <!-- Background decoration -->
        <div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-900/30 to-transparent rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-purple-900/30 to-transparent rounded-full blur-3xl"></div>
        
        <div class="relative container mx-auto px-6">
          <div class="max-w-3xl" v-motion-slide-visible-once-bottom>
            <h1 class="text-5xl md:text-6xl font-bold mb-6"><span class="text-white">Le Studio de création</span></h1>
            <p class="text-xl text-secondary-300 leading-relaxed">
              Des sites web sur mesure qui racontent votre histoire.
            </p>
            <div class="mt-6">
              <Badge variant="primary" text="Une place disponible pour Septembre" />
            </div>
          </div>
        </div>
      </section>

      <!-- Description Section -->
      <section class="py-20">
        <div class="container mx-auto px-6">
          <div class="max-w-5xl mx-auto" v-motion-slide-visible-once-bottom>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <!-- Texte principal -->
              <div>
                <p class="text-lg text-secondary-600 leading-relaxed mb-8">
                  Je conçois des sites vitrines élégants et performants pour les professionnels du monde équin. Un accompagnement de proximité pour transformer votre passion en une présence digitale remarquable.
                </p>
                <div class="space-y-4">
                  <div class="flex items-start space-x-3">
                    <div class="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div class="w-2 h-2 bg-primary-600 rounded-full"></div>
                    </div>
                    <p class="text-secondary-700">Design unique qui reflète votre expertise équine</p>
                  </div>
                  <div class="flex items-start space-x-3">
                    <div class="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div class="w-2 h-2 bg-primary-600 rounded-full"></div>
                    </div>
                    <p class="text-secondary-700">Performance optimale pour tous les écrans</p>
                  </div>
                  <div class="flex items-start space-x-3">
                    <div class="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div class="w-2 h-2 bg-primary-600 rounded-full"></div>
                    </div>
                    <p class="text-secondary-700">Accompagnement jusqu'à votre autonomie complète</p>
                  </div>
                </div>
              </div>
              
              <!-- Citation mise en avant -->
              <div class="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 border border-primary-200">
                <blockquote class="text-lg text-secondary-800 leading-relaxed italic">
                  "Plus qu'un simple site web, je crée une véritable vitrine digitale qui reflète votre expertise et votre passion. Chaque projet est une opportunité de mettre en valeur votre savoir-faire unique dans le monde équin."
                </blockquote>
                <div class="mt-6 flex items-center space-x-3">
                  <div class="w-12 h-12 bg-primary-200 rounded-full flex items-center justify-center">
                    <span class="text-primary-700 font-bold text-lg">CE</span>
                  </div>
                  <div>
                    <p class="font-semibold text-secondary-900">Claire-Elise</p>
                    <p class="text-sm text-secondary-600">Fondatrice du Studio</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Expertise IA Section -->
      <section class="py-20 relative overflow-hidden bg-secondary">
        <!-- Background decoration -->
        <div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-900/30 to-transparent rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-purple-900/30 to-transparent rounded-full blur-3xl"></div>
        <GradientAnimation />
        
        <div class="relative container mx-auto px-6">
          <div class="max-w-7xl mx-auto">
            <!-- Section Header -->
            <div class="text-center mb-16" v-motion-slide-visible-once-bottom>
              <h2 class="mb-6 text-4xl md:text-5xl font-bold text-white">L'IA pour un site qui vit et qui engage.</h2>
              <p class="text-lg text-secondary-300 max-w-3xl mx-auto">
                Pour que votre site ne soit pas juste une page statique, j'y intègre des fonctionnalités interactives intelligentes. Ces outils captent l'attention de vos visiteurs et leur offrent une expérience personnalisée, sans jamais perdre votre authenticité.
              </p>
            </div>

            <!-- 2x2 Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 max-w-5xl mx-auto">
              <!-- Item 1 -->
              <div class="bg-white/5 backdrop-blur-xs rounded-xl p-6 border border-white/5" v-motion-slide-visible-once-bottom>
                <div class="flex items-start space-x-4">
                  <div class="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center bg-white/5">
                    <Zap :size="24" class="text-primary-600" />
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold text-white mb-2">Animations interactives</h3>
                    <p class="text-gray-300 leading-relaxed">
                      Des animations dynamiques qui réagissent aux interactions des visiteurs pour créer une expérience immersive et mémorable.</p>
                  </div>
                </div>
              </div>

              <!-- Item 2 -->
              <div class="bg-white/5 backdrop-blur-xs rounded-xl p-6 border border-white/5" v-motion-slide-visible-once-bottom style="animation-delay: 100ms">
                <div class="flex items-start space-x-4">
                  <div class="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center bg-white/5">
                    <Code :size="24" class="text-primary-500" />
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold text-white mb-2">Sur mesure</h3>
                    <p class="text-gray-300 leading-relaxed">
                      Chaque fonctionnalité IA est adaptée à votre activité et à vos valeurs pour un accompagnement qui vous ressemble vraiment.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Étapes Section -->
      <section class="py-20 bg-secondary-50">
        <div class="container mx-auto px-6">
          <div class="text-center mb-16" v-motion-slide-visible-once-bottom>
            <h2 class="mb-6 text-4xl md:text-5xl font-bold">On avance main dans la main</h2>
            <p class="text-lg text-secondary-600 max-w-3xl mx-auto">
              Pas de jargon compliqué, juste des étapes claires pour un projet zen.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <!-- Étape 1 -->
            <div class="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow" v-motion-slide-visible-once-bottom>
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <span class="text-primary-600 font-bold text-lg">1</span>
                </div>
                <h3 class="text-xl font-bold">Analyse de votre projet</h3>
              </div>
              <p class="text-secondary-600 leading-relaxed">
                Une session en direct pour comprendre votre vision et valider la faisabilité technique.
              </p>
            </div>

            <!-- Étape 2 -->
            <div class="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow" v-motion-slide-visible-once-bottom :delay="100">
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <span class="text-primary-600 font-bold text-lg">2</span>
                </div>
                <h3 class="text-xl font-bold">Offre & Devis</h3>
              </div>
              <p class="text-secondary-600 leading-relaxed">
                Je vous présente une proposition chiffrée transparente, adaptée à vos besoins réels.
              </p>
            </div>

            <!-- Étape 3 -->
            <div class="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow" v-motion-slide-visible-once-bottom :delay="200">
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <span class="text-primary-600 font-bold text-lg">3</span>
                </div>
                <h3 class="text-xl font-bold">Cadrage de départ</h3>
              </div>
              <p class="text-secondary-600 leading-relaxed">
                Dès le devis signé, nous fixons les objectifs précis pour lancer le développement.
              </p>
            </div>

            <!-- Étape 4 -->
            <div class="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow" v-motion-slide-visible-once-bottom :delay="300">
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <span class="text-primary-600 font-bold text-lg">4</span>
                </div>
                <h3 class="text-xl font-bold">Développement</h3>
              </div>
              <p class="text-secondary-600 leading-relaxed">
                Phase de création pure où votre site prend vie, sous mon oeil expert.
              </p>
            </div>

            <!-- Étape 5 -->
            <div class="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow" v-motion-slide-visible-once-bottom :delay="400">
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <span class="text-primary-600 font-bold text-lg">5</span>
                </div>
                <h3 class="text-xl font-bold">Phase de test</h3>
              </div>
              <p class="text-secondary-600 leading-relaxed">
              On vérifie ensemble que tout fonctionne parfaitement sur tous les écrans avant le grand saut.
              </p>
            </div>

            <!-- Étape 6 -->
            <div class="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow" v-motion-slide-visible-once-bottom :delay="500">
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <span class="text-primary-600 font-bold text-lg">6</span>
                </div>
                <h3 class="text-xl font-bold">Mise en ligne</h3>
              </div>
              <p class="text-secondary-600 leading-relaxed">
               Votre site est officiellement accessible ! Je reste à vos côtés pour le lancement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section class="py-20 bg-white">
        <div class="container mx-auto px-6">
          <div class="max-w-4xl mx-auto">
            <div class="text-center mb-16" v-motion-slide-visible-once-bottom>
              <h2 class="mb-6 text-4xl md:text-5xl font-bold">On en discute ?</h2>
              <p class="text-lg text-secondary-600 leading-relaxed">
                Chaque projet est unique. Envoyez-moi un message pour une première analyse gratuite de votre projet.
              </p>
            </div>

            <div class="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-secondary-100" v-motion-slide-visible-once-bottom>
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
                    class="w-full px-4 py-3 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none bg-white"
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
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { Code, ShoppingBag, Palette, Zap, Search, Smartphone, Database, Check, ArrowRight, Send, Heart, Sparkles, Target } from 'lucide-vue-next'

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
