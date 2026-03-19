<template>
  <NuxtLayout>
    <div class="min-h-screen">
      <div v-if="loading" class="container mx-auto px-6 py-20">
        <div class="text-center">
          <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
        </div>
      </div>

      <div v-else-if="!template" class="container mx-auto px-6 py-20 text-center">
        <h1 class="text-3xl font-bold mb-4">Template Not Found</h1>
        <NuxtLink to="/templates" class="btn-primary">
          Back to Templates
        </NuxtLink>
      </div>

      <div v-else>
        <section class="py-8 md:py-12">
          <div class="container mx-auto px-4 sm:px-6">
            <div class="mb-6">
              <NuxtLink to="#modeles-similaires" class="inline-flex items-center text-gray-600 hover:text-black">
                <ArrowLeft :size="20" class="mr-2" />
                Voir tous les modèles
              </NuxtLink>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
              <div v-motion-slide-visible-once-left>
                <div class="rounded-2xl overflow-hidden shadow-xl">
                  <a
                    v-if="template.demo_url"
                    :href="template.demo_url"
                    target="_blank"
                    class="block group"
                  >
                    <img
                      :src="template.image"
                      :alt="template.name"
                      class="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                    />
                  </a>
                  <img
                    v-else
                    :src="template.image"
                    :alt="template.name"
                    class="w-full h-auto"
                  />
                </div>
              </div>

              <div v-motion-slide-visible-once-right>
                <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">{{ template.name }}</h1>

                <div v-if="template.rating > 0" class="flex items-center space-x-6 mb-6">
                  <div class="flex items-center space-x-2">
                    <div class="flex items-center text-yellow-500">
                      <Star :size="20" fill="currentColor" />
                      <span class="ml-1 text-lg font-semibold text-gray-900">{{ template.rating }}</span>
                    </div>
                  </div>
                </div>

                <div v-else class="flex flex-wrap gap-2 mt-4">
                  <Badge
                    v-for="tag in template.tags"
                    :key="tag"
                    variant="tag"
                    :text="tag"
                  />
                </div>

                <p class="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                  {{ template.description }}
                </p>

                <!-- Sections du site -->
                <div class="mb-8">
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div
                      v-for="(feature, index) in template.features"
                      :key="index"
                      class="flex items-start"
                    >
                      <Check :size="20" class="mr-3 mt-0.5 text-green-600 flex-shrink-0" />
                      <span class="text-gray-700">{{ feature }}</span>
                    </div>
                  </div>
                </div>

                <div class="bg-gray-50 rounded-xl p-6 mb-8">
                  <div class="text-4xl font-bold text-secondary-900 mb-2">{{ template.price }}€</div>
                  <p class="text-gray-600 text-sm mb-4">🔒 Paiement 100% sécurisé • Accès immédiat</p>
                  
                  <!-- Guide bonus mis en avant -->
                  <div class="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div class="flex items-center justify-between">
                      <div class="flex items-center text-green-700 font-bold">
                        <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                        </svg>
                        <div>
                          Guide bonus : Autonomie et Sérénité
                          <div class="text-xs font-normal text-green-600 mt-1">30 pages pour un site web professionnel</div>
                        </div>
                      </div>
                      <div class="text-right">
                        <div class="text-green-600 line-through text-sm">49€</div>
                        <div class="text-green-700 font-bold">OFFERT</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="flex gap-4 mb-8">
                  <button
                    @click="handleAddToCart"
                    :disabled="isInCart"
                    class="flex-1 btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ShoppingCart :size="20" class="mr-2" />
                    {{ isInCart ? 'Déjà dans le panier' : 'Ajouter au panier' }}
                  </button>
                  <a
                    v-if="template.demo_url"
                    :href="template.demo_url"
                    target="_blank"
                    class="px-6 py-3 bg-white text-secondary-800 font-semibold rounded-xl border-2 border-secondary-200 hover:border-secondary-300 hover:bg-secondary-50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center"
                  >
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                    </svg>
                    Démo
                  </a>
                </div>

                </div>
            </div>
          </div>
        </section>

        <!-- Accompagnement Pack Sérénité -->
        <section class="py-12 md:py-16">
          <div class="container mx-auto px-4 sm:px-6">
            <div class="max-w-6xl mx-auto">
              <!-- En-tête de la section -->
              <div class="text-center mb-12 md:mb-16">
                <h2 class="text-xl md:text-2xl lg:text-3xl font-bold text-secondary-900 mb-4">Tu as besoin d'un site qui reflète ton professionnalisme sans attendre ?</h2>
                <p class="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                  Je personnalise ton site web.
                </p>
              </div>

<!-- Carte principale -->
              <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div class="grid grid-cols-1 lg:grid-cols-3">
                  <!-- Partie gauche - Bénéfices en 2 colonnes -->
                  <div class="lg:col-span-2 p-6 md:p-10 lg:p-16 bg-white">
                    <div class="mb-8 md:mb-12">
                      <div class="inline-block bg-primary-100 text-primary-700 px-3 py-1.5 md:px-4 py-2 rounded-full text-xs md:text-sm font-semibold mb-3">
                        Le Pack Sérénité
                      </div>
                      <h3 class="text-xl md:text-2xl font-bold text-secondary-900">
                        L'expertise pro, la rapidité en plus.
                      </h3>
                    </div>
                    
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                      <!-- Gagnez du temps -->
                      <div class="flex items-start">
                        <div class="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-3 md:mr-4">
                          <svg class="w-5 h-5 md:w-6 md:h-6 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path>
                          </svg>
                        </div>
                        <div>
                          <h4 class="font-bold text-gray-900 text-base md:text-lg mb-2">Gagnez du temps</h4>
                          <p class="text-gray-600 text-xs md:text-sm">Je gère toute la technique. Pendant ce temps, tu gères ton business.</p>
                        </div>
                      </div>

                      <!-- Rendu Professionnel -->
                      <div class="flex items-start">
                        <div class="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-3 md:mr-4">
                          <svg class="w-5 h-5 md:w-6 md:h-6 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                          </svg>
                        </div>
                        <div>
                          <h4 class="font-bold text-gray-900 text-base md:text-lg mb-2">Rendu Professionnel</h4>
                          <p class="text-gray-600 text-xs md:text-sm">Un design moderne et élégant qui inspire confiance à tes clients dès la première seconde.</p>
                        </div>
                      </div>

                      <!-- Livraison Rapide -->
                      <div class="flex items-start">
                        <div class="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-3 md:mr-4">
                          <svg class="w-5 h-5 md:w-6 md:h-6 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"></path>
                            <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z"></path>
                          </svg>
                        </div>
                        <div>
                          <h4 class="font-bold text-gray-900 text-base md:text-lg mb-2">Livraison Rapide</h4>
                          <p class="text-gray-600 text-xs md:text-sm">Ta présence en ligne est opérationnelle en un temps record, sans erreurs.</p>
                        </div>
                      </div>

                      <!-- Zéro Stress Technique -->
                      <div class="flex items-start">
                        <div class="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-3 md:mr-4">
                          <svg class="w-5 h-5 md:w-6 md:h-6 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                          </svg>
                        </div>
                        <div>
                          <h4 class="font-bold text-gray-900 text-base md:text-lg mb-2">Zéro Stress Technique</h4>
                          <p class="text-gray-600 text-xs md:text-sm">Hébergement, sécurité, mises à jour... Je m'occupe de la face cachée du web.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Partie droite - Prix et services (fond sombre) -->
                  <div class="lg:col-span-1 p-6 md:p-8 lg:p-10 bg-secondary text-white flex flex-col justify-center">
                    <div class="mb-6 md:mb-8">
                      <div class="text-gray-400 text-xs md:text-sm font-medium mb-2">CLÉ EN MAIN</div>
                      <div class="text-4xl md:text-5xl font-bold mb-2">169€</div>
                      <div class="text-amber-300 font-medium text-sm md:text-base">Investissement unique</div>
                    </div>

                    <div class="bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-6 mb-6 md:mb-8 border border-white/10">
                      <h4 class="font-bold text-base md:text-lg mb-4">Ce qui est inclus :</h4>
                      <div class="space-y-3">
                        <div class="flex items-center">
                          <svg class="w-5 h-5 mr-3 flex-shrink-0 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                          </svg>
                          <span>Installation clé en main</span>
                        </div>
                        <div class="flex items-center">
                          <svg class="w-5 h-5 mr-3 flex-shrink-0 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                          </svg>
                          <span>Visio de lancement (30min)</span>
                        </div>
                        <div class="flex items-center">
                          <svg class="w-5 h-5 mr-3 flex-shrink-0 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                          </svg>
                          <span>Mise en place de ton contenu</span>
                        </div>
                        <div class="flex items-center">
                          <svg class="w-5 h-5 mr-3 flex-shrink-0 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                          </svg>
                          <span>Support 1 mois</span>
                        </div>
                      </div>
                    </div>

                    <button class="w-full bg-white text-secondary-900 font-bold py-3 md:py-4 px-4 md:px-6 rounded-xl hover:bg-gray-100 transition-colors shadow-lg text-sm md:text-base">
                      Commander maintenant
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="modeles-similaires" class="py-12 md:py-16">
          <div class="container mx-auto px-4 sm:px-6">
            <h2 class="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Modèles similaires</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              <TemplateCardMockup
                v-for="relatedTemplate in relatedTemplates"
                :key="relatedTemplate.id"
                :template="relatedTemplate"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ArrowLeft, Star, Download, ShoppingCart, ExternalLink, Check } from 'lucide-vue-next'
import { useCartStore } from '~/stores/cart'
import type { Template } from '~/models'

const route = useRoute()
const supabase = useSupabase()
const cartStore = useCartStore()

const loading = ref(true)
const template = ref<Template | null>(null)
const relatedTemplates = ref<Template[]>([])

const isInCart = computed(() => {
  if (!template.value) return false
  return cartStore.cartItems.some(item => item.template.id === template.value!.id)
})

const handleAddToCart = () => {
  if (template.value && !isInCart.value) {
    cartStore.addToCart(template.value)
  }
}

onMounted(async () => {
  try {
    const { data, error } = await supabase
      .from('templates')
      .select('*')
      .eq('id', route.params.id)
      .maybeSingle()

    if (error) throw error
    template.value = data

    if (data) {
      // Essayer de récupérer des modèles de la même spécialité
      const { data: related } = await supabase
        .from('templates')
        .select('*')
        .eq('speciality', (data as Template).speciality)
        .neq('id', (data as Template).id)
        .limit(3)

      if (related && related.length > 0) {
        relatedTemplates.value = related
      } else {
        // Si pas de modèles de la même spécialité, récupérer les 3 premiers modèles (sauf celui actuel)
        const { data: fallback } = await supabase
          .from('templates')
          .select('*')
          .neq('id', (data as Template).id)
          .limit(3)

        relatedTemplates.value = fallback || []
      }
    }
  } catch (error) {
    console.error('Error fetching template:', error)
  } finally {
    loading.value = false
  }
})
</script>
