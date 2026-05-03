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
        <NuxtLink to="/boutique" class="btn-primary">
          Back to Templates
        </NuxtLink>
      </div>

      <div v-else>
        <section class="py-6 sm:py-8 md:py-12">
          <div class="container mx-auto px-4 sm:px-6">
            <div class="mb-6">
              <NuxtLink to="/boutique" class="inline-flex items-center text-gray-600 hover:text-black">
                <ArrowLeft :size="20" class="mr-2" />
                Voir tous les modèles
              </NuxtLink>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
              <div v-motion-slide-visible-once-left>
                <div class="relative rounded-2xl overflow-hidden shadow-2xl group">
                  <a
                    v-if="template.demo_url"
                    :href="template.demo_url"
                    target="_blank"
                    class="block"
                  >
                    <img
                      :src="template.image"
                      :alt="template.name"
                      class="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                    />
                    <!-- Overlay with CTA - always visible -->
                    <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition-opacity duration-300 flex items-end justify-center pb-6 sm:pb-8">
                      <div class="flex items-center gap-2 text-white font-semibold text-sm sm:text-base">
                        <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span>Voir la démo</span>
                      </div>
                    </div>
                    <!-- Template badge -->
                    <div v-if="template.badge" class="flex absolute top-3 right-3 sm:top-4 sm:right-4">
                      <Badge
                        variant="minimal"
                        :text="template.badge === 'best-seller' ? 'Best-seller' : 'Nouveau'"
                        class="shadow-md"
                      />
                    </div>
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
                <h1 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">{{ template.name }}</h1>

                <div v-if="template.rating > 0" class="flex items-center space-x-6 mb-4">
                  <div class="flex items-center space-x-2">
                    <div class="flex items-center text-yellow-500">
                      <Star :size="20" fill="currentColor" />
                      <span class="ml-1 text-lg font-semibold text-gray-900">{{ template.rating }}</span>
                    </div>
                  </div>
                </div>

                <div v-else class="flex flex-wrap gap-2 mb-4">
                  <Badge
                    v-for="tag in template.tags"
                    :key="tag"
                    variant="tag-outline"
                    :text="tag"
                    icon="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                  />
                </div>

                <p class="text-base sm:text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
                  {{ template.description }}
                </p>

                <!-- Sections du site -->
                <div class="mb-6">
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
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

                <!-- Guide bonus section -->
                <div class="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-6">
                  <div class="flex items-center gap-3 mb-3 sm:mb-0">
                    <div class="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg class="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/>
                      </svg>
                    </div>
                    <div class="min-w-0 flex-1">
                      <div class="font-semibold text-gray-900 text-sm">Guide stratégique offert</div>
                      <div class="text-xs text-gray-600">30 pages pour personnaliser votre site</div>
                    </div>
                    <button
                      @click="showGuideModal = true"
                      class="hidden sm:inline-flex items-center gap-1 text-primary-600 hover:text-primary-700 text-sm font-medium transition-colors flex-shrink-0"
                    >
                      En savoir plus
                      <span aria-hidden="true">→</span>
                    </button>
                  </div>
                  <button
                    @click="showGuideModal = true"
                    class="sm:hidden w-full flex items-center justify-center gap-1 bg-white border border-primary-200 text-primary-600 hover:bg-primary-50 text-sm font-medium py-2 px-4 rounded-lg transition-colors"
                  >
                    En savoir plus
                    <span aria-hidden="true">→</span>
                  </button>
                </div>

                <!-- Price and CTA section -->
                <div class="border-t border-gray-200 pt-6">
                  <button
                    @click="handleAddToCart"
                    :disabled="isInCart"
                    class="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-between px-6 py-4"
                  >
                    <div class="flex items-center">
                      <ShoppingCart :size="20" class="mr-2" />
                      <span>{{ isInCart ? 'Déjà dans le panier' : 'Ajouter au panier' }}</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <span class="text-2xl font-bold">{{ template.price }}€</span>
                      <span class="text-xs opacity-80">TTC</span>
                    </div>
                  </button>
                  <div class="flex items-center justify-center gap-3 mt-2 text-xs text-gray-500">
                    <span class="flex items-center gap-1">
                      <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                      </svg>
                      Paiement sécurisé
                    </span>
                    <span class="w-1 h-1 bg-gray-300 rounded-full"></span>
                    <span>Accès immédiat</span>
                  </div>
                  <p class="mt-4 text-xs text-gray-500 leading-relaxed">
                    *Ce modèle est conçu avec l'outil
                    <a href="https://carrd.co" target="_blank" rel="noopener noreferrer" class="text-primary-600 hover:text-primary-700 underline">Carrd.co</a>.
                    Pour utiliser toutes les fonctionnalités, l'abonnement Pro Standard sur la plateforme sera nécessaire (à partir d'environ 1,50€/mois).
                  </p>
                </div>
            </div>
          </div>
        </div>
        </section>

        <!-- Accompagnement Pack Sérénité -->
        <section class="py-20 sm:py-24 md:py-32 relative overflow-hidden">
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
              <div class="relative">
                <!-- Badge on the border -->
                <div class="absolute -top-3 right-4 sm:right-6 z-10">
                  <Badge variant="primary" text="Le Pack Sérénité" />
                </div>
                <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
                  <div class="grid grid-cols-1 lg:grid-cols-3">
                    <!-- Partie gauche - Bénéfices en 2 colonnes -->
                    <div class="lg:col-span-2 p-6 md:p-10 lg:p-16 bg-white">
                      <div class="mb-8 md:mb-12">
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
                      <div class="text-4xl md:text-5xl font-bold mb-2">290€</div>
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

                    <button
                      data-cal-link="lisewebequine/pack-serenite"
                      data-cal-namespace="pack-serenite"
                      data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"false"}'
                      class="w-full bg-white text-secondary-900 font-bold py-3 md:py-4 px-4 md:px-6 rounded-xl hover:bg-gray-100 transition-colors shadow-lg text-sm md:text-base"
                    >
                      Réserver un créneau
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>

        <section id="modeles-similaires" class="py-10 sm:py-12 md:py-16">
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

    <!-- Guide Modal -->
    <teleport to="body">
      <transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="showGuideModal"
          class="fixed inset-0 z-50 flex items-center justify-center p-4"
          @click.self="showGuideModal = false"
        >
          <div class="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
          <div class="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <div class="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <h3 class="text-xl font-bold text-secondary-900">Votre guide stratégique de 30 pages</h3>
              <button
                @click="showGuideModal = false"
                class="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Fermer"
              >
                <X :size="20" />
              </button>
            </div>
            <div class="p-6">
              <p class="text-gray-600 mb-6">
                Ne soyez plus jamais seul devant votre écran. Nous vous remettons un guide complet pour transformer votre modèle en un véritable outil de travail.
              </p>
              <div class="space-y-4">
                <div class="flex items-start">
                  <div class="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mr-3">
                    <svg class="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-bold text-gray-900 mb-1">Guide pas à pas</h4>
                    <p class="text-gray-600 text-sm">Instructions détaillées pour personnaliser chaque élément de votre modèle et le lancer professionnellement.</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <div class="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mr-3">
                    <svg class="w-5 h-5 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-bold text-gray-900 mb-1">Un site web clair</h4>
                    <p class="text-gray-600 text-sm">Un tableau d'auto-évaluation pour te poser les bonnes questions.</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <div class="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mr-3">
                    <svg class="w-5 h-5 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-bold text-gray-900 mb-1">Prompt IA exclusif</h4>
                    <p class="text-gray-600 text-sm">Générez une palette de couleur professionnelle grâce au prompt IA.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </teleport>

    </NuxtLayout>
</template>

<script setup lang="ts">
import { ArrowLeft, Star, Download, ShoppingCart, ExternalLink, Check, X } from 'lucide-vue-next'
import { useCartStore } from '~/stores/cart'
import type { Template } from '~/models'
import Badge from '~/components/Badge.vue'

const route = useRoute()
const supabase = useSupabase()
const cartStore = useCartStore()

// Load Calendly script
useHead({
  script: [
    {
      innerHTML: `(function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.eu/embed/embed.js", "init"); Cal("init", "pack-serenite", {origin:"https://app.cal.eu"}); Cal.ns["pack-serenite"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});`,
      type: 'text/javascript',
      tagPosition: 'bodyClose'
    }
  ]
})

const loading = ref(true)
const template = ref<Template | null>(null)
const relatedTemplates = ref<Template[]>([])
const showGuideModal = ref(false)

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
