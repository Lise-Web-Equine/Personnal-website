<template>
  <NuxtLayout>
    <section v-if="loading" class="py-20">
      <div class="text-center">
        <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
      </div>
    </section>

    <section v-else-if="!template" class="py-20 text-center">
      <h1 class="text-3xl font-bold mb-4">Template Not Found</h1>
      <NuxtLink to="/template-site-internet-equestre" class="btn-primary">
        Back to Templates
      </NuxtLink>
    </section>

    <template v-else>
        <PageHeader :title="template.name" :description="template.description" />

        <section class="py-6 sm:py-8 md:py-12">
            <div class="mb-6">
              <NuxtLink to="/template-site-internet-equestre" class="inline-flex items-center text-gray-600 hover:text-black">
                <ArrowLeft :size="20" class="mr-2" />
                Voir tous les templates
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
                    <NuxtImg
                      :src="template.image"
                      :alt="`${template.name} site internet`"
                      class="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      loading="lazy"
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
                  <NuxtImg
                    v-else
                    :src="template.image"
                    :alt="`${template.name} site internet`"
                    class="w-full h-auto"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    loading="lazy"
                  />
                </div>
              </div>

              <div v-motion-slide-visible-once-right>

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

                <!-- Specialties -->
                <div v-if="template.specialties && template.specialties.length > 0" class="mb-6">
                  <h2 class="text-base text-gray-700 mb-3 leading-relaxed">
                    Pour les professionnels équestres du soin qui démarrent leur activité tels que
                  </h2>
                  <div class="flex flex-wrap gap-2">
                    <h3
                      v-for="specialty in template.specialties"
                      :key="specialty"
                      class="text-base font-semibold text-primary-700 bg-primary-50 border border-primary-200 rounded-lg px-3 py-1.5"
                    >
                      {{ specialty }}
                    </h3>
                  </div>
                </div>

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
                  <div class="flex items-center justify-center gap-3 mt-4 text-xs text-gray-500">
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
                    *Ce template est conçu avec l'outil
                    <a href="https://carrd.co" target="_blank" rel="noopener noreferrer" class="text-primary-600 hover:text-primary-700 underline">Carrd.co</a>.
                    Pour utiliser toutes les fonctionnalités, l'abonnement Pro Standard sur la plateforme sera nécessaire (à partir d'environ 1,50€/mois).
                  </p>
                </div>
            </div>
          </div>
        </section>

        <!-- Section descriptive du métier (titre + texte + listes) -->
        <section v-if="hasMetierContent" class="py-12 sm:py-16 md:py-20 relative overflow-hidden">
          <!-- Halos décoratifs en arrière-plan avec fondu vers le bas -->
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

          <div class="relative">
            <div class=" text-left">
              <h2 v-if="template.metier_title" class="mb-4">{{ template.metier_title }}</h2>
              <p
                v-if="template.metier_text"
                class="text-base sm:text-lg text-gray-600 leading-relaxed mb-8 whitespace-pre-line"
              >
                {{ template.metier_text }}
              </p>

              <div
                v-if="template.metier_lists && template.metier_lists.length > 0"
                class="space-y-6"
              >
                <ul
                  v-for="(list, index) in template.metier_lists"
                  :key="index"
                  class="list-disc list-inside space-y-1 text-base sm:text-lg text-gray-600 leading-relaxed"
                >
                  <li
                    v-for="(item, itemIndex) in list.items"
                    :key="itemIndex"
                    v-html="formatListItem(item)"
                  ></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <!-- Section : Personnalisation en un clic -->
        <section class="py-12 sm:py-16 md:py-20">
            <div>
              <div class="bg-secondary rounded-2xl shadow-xl overflow-hidden">
                <div class="grid md:grid-cols-2 md:items-stretch">
                  <!-- Démonstration vidéo de personnalisation des couleurs (colonne pleine) -->
                  <video
                    class="w-full h-full object-cover block"
                    src="/videos/demo-colors-template.mp4"
                    autoplay
                    loop
                    muted
                    playsinline
                    aria-label="Démonstration de la personnalisation des couleurs d'un template"
                  ></video>

                  <!-- Instructions -->
                  <div class="p-8 space-y-6">
                    <h3 class="text-2xl font-bold text-white mb-2">
                      Personnalisation en un clic
                    </h3>

                    <div class="flex items-start gap-4">
                      <div class="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg class="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 class="font-semibold text-white mb-1">Cliquez pour modifier</h4>
                        <p class="text-secondary-300 text-sm">Sur n'importe quel élément, un simple clic vous permet de changer le texte, les couleurs ou les images.</p>
                      </div>
                    </div>

                    <div class="flex items-start gap-4">
                      <div class="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg class="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 class="font-semibold text-white mb-1">Glissez-déposez</h4>
                        <p class="text-secondary-300 text-sm">Réorganisez les sections, ajoutez des images ou déplacez des éléments en un seul mouvement.</p>
                      </div>
                    </div>

                    <div class="flex items-start gap-4">
                      <div class="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg class="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 class="font-semibold text-white mb-1">Aperçu en temps réel</h4>
                        <p class="text-secondary-300 text-sm">Voyez instantanément les changements que vous apportez, sans avoir besoin de sauvegarder.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </section>

        <!-- Section Bonus Guide -->
        <FeaturesSection
          title="Votre guide stratégique de 30 pages offert"
          subtitle="Ne soyez plus jamais seul devant votre écran. Nous vous remettons un guide complet pour transformer votre template en un véritable outil de travail."
          :features="guideFeatures"
        >
          <template #cta>
            <GuidePreviewCatalog variant="light" label="Découvrir un extrait du guide" />
          </template>
        </FeaturesSection>

        <!-- Preuve sociale : réalisations clients -->
        <section v-if="realisations.length > 0" class="py-12 sm:py-16 md:py-20 bg-gray-50">
              <div class="text-center mb-10 md:mb-14">
                <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary-900 mb-3">
                  Ils ont lancé leur site avec un template équestre
                </h2>
                <p class="text-base sm:text-lg text-secondary-600 max-w-2xl mx-auto">
                  Des professionnels équestres comme vous, déjà en ligne et sereins.
                </p>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                <!-- Capture du site -->
                <component
                  :is="realisations[0].site_url ? 'a' : 'div'"
                  :href="realisations[0].site_url || undefined"
                  :target="realisations[0].site_url ? '_blank' : undefined"
                  :rel="realisations[0].site_url ? 'noopener noreferrer' : undefined"
                  class="block rounded-2xl overflow-hidden shadow-lg"
                >
                  <NuxtImg
                    :src="realisations[0].site_image"
                    :alt="`Site de ${realisations[0].client_name}, ${realisations[0].client_profession}`"
                    class="w-full h-auto object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="lazy"
                  />
                </component>

                <!-- Témoignage client -->
                <div class="space-y-6">
                  <span
                    class="inline-flex items-center text-xs font-semibold px-3 py-1 rounded-full"
                    :class="realisations[0].type === 'pack' ? 'bg-primary-100 text-primary-700' : 'bg-white text-secondary-700 border border-secondary-200'"
                  >
                    {{ realisations[0].type === 'pack' ? 'Offre clé en main' : 'Personnalisé en autonomie' }}
                  </span>

                  <blockquote class="text-xl sm:text-2xl font-medium text-secondary-900 leading-relaxed">
                    "{{ realisations[0].quote }}"
                  </blockquote>

                  <div class="flex items-center gap-4">
                    <NuxtImg
                      v-if="realisations[0].client_photo"
                      :src="realisations[0].client_photo"
                      :alt="realisations[0].client_name"
                      class="w-14 h-14 rounded-full object-cover flex-shrink-0"
                      loading="lazy"
                    />
                    <div
                      v-else
                      class="w-14 h-14 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold text-lg flex-shrink-0"
                    >
                      {{ realisations[0].client_name.split(' ').map(part => part.charAt(0)).slice(0, 2).join('').toUpperCase() }}
                    </div>
                    <div>
                      <p class="font-semibold text-secondary-900">{{ realisations[0].client_name }}</p>
                      <p class="text-secondary-600">{{ realisations[0].client_profession }}</p>
                    </div>
                  </div>

                  <div class="flex flex-col sm:flex-row items-start sm:items-center gap-x-6 gap-y-3">
                    <!-- Si le témoignage concerne un autre template, on invite à le découvrir -->
                    <NuxtLink
                      v-if="realisationTemplate"
                      :to="`/template-site-internet-equestre/${realisationTemplate.slug}`"
                      class="btn-primary inline-flex items-center"
                    >
                      <span>Voir le template</span>
                      <ArrowRight :size="20" class="ml-2" />
                    </NuxtLink>
                    <!-- Lien vers le site en ligne du client -->
                    <a
                      v-if="realisations[0].site_url"
                      :href="realisations[0].site_url"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-sm sm:text-base text-secondary-600 hover:text-primary-600 font-medium transition-colors duration-200 inline-flex items-center justify-center group"
                    >
                      <span>{{ realisations[0].site_url }}</span>
                      <ArrowRight :size="16" class="ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
        </section>

        <section id="modeles-similaires" class="py-10 sm:py-12 md:py-16">
            <h2 class="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Templates équestres similaires</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              <TemplateCardMockup
                v-for="relatedTemplate in relatedTemplates"
                :key="relatedTemplate.id"
                :template="relatedTemplate"
              />
            </div>
        </section>

        <!-- Section : questions fréquentes -->
        <section class="py-12 sm:py-16 md:py-20 bg-gray-50">
          <div>
            <div class="text-center mb-10 sm:mb-12" v-motion-slide-visible-once-bottom>
              <h2 class="mb-4 sm:mb-6">Questions fréquentes</h2>
              <p class="text-base sm:text-lg text-secondary-600">
                Tout ce qu'il faut savoir avant d'acheter votre template équestre.
              </p>
            </div>
            <Accordion :items="faqItems" />
          </div>
        </section>

                <!-- Section CTA avec image : achat du template ou découverte de l'offre clé en main -->
        <CtaSection
          title="Choisissez la façon d'avancer sur votre site internet"
          description="Créez votre site en autonomie avec le template ou laissez-nous nous occuper de tout."
          image="/images/Hestabien.jpg"
          image-alt="Création de site internet équestre clé en main"
        >
          <template #actions>
            <button
              @click="handleAddToCart"
              :disabled="isInCart"
              class="btn-primary inline-flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ShoppingCart :size="20" class="mr-2" />
              <span>{{ isInCart ? 'Déjà dans le panier' : 'Acheter le template' }}</span>
            </button>
            <NuxtLink
              to="/creation-site-internet-equestre/cle-en-main"
              class="text-sm sm:text-base text-gray-300 hover:text-primary-400 font-medium transition-colors duration-200 inline-flex items-center justify-center group"
            >
              <span>Découvrir l'offre clé en main</span>
              <ArrowRight :size="16" class="ml-2 group-hover:translate-x-1 transition-transform" />
            </NuxtLink>
          </template>
        </CtaSection>
    </template>

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
                Ne soyez plus jamais seul devant votre écran. Nous vous remettons un guide complet pour transformer votre template en un véritable outil de travail.
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
                    <p class="text-gray-600 text-sm">Instructions détaillées pour personnaliser chaque élément de votre template et le lancer professionnellement.</p>
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
import { ArrowLeft, ArrowRight, Star, Download, ShoppingCart, Check, X, BookOpen, Sparkles } from 'lucide-vue-next'
import { useCartStore } from '~/stores/cart'
import type { Template, Realisation } from '~/models'
import Badge from '~/components/Badge.vue'

// Informations minimales d'un template ciblé par un lien de témoignage.
type RealisationTemplateLink = Pick<Template, 'slug' | 'name'>

const route = useRoute()
const supabase = useSupabase()
const cartStore = useCartStore()
const { trackViewItem } = useEcommerceTracking()

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

// Récupération SSR : le template et ses données liées sont chargés côté serveur
// (meilleur LCP/SEO), et les requêtes indépendantes sont parallélisées au lieu
// de l'ancienne cascade de 5 requêtes séquentielles dans onMounted.
const { data: pageData, pending: loading } = await useAsyncData(
  () => `template-${route.params.slug}`,
  async () => {
    const { data: tmpl, error: templateError } = await supabase
      .from('templates')
      .select('*')
      .eq('slug', route.params.slug)
      .maybeSingle()

    if (templateError) throw templateError
    // Slug inexistant -> vraie 404 (bon SEO, évite les pages fantômes type ":slug").
    if (!tmpl) {
      throw createError({ statusCode: 404, statusMessage: 'Template introuvable' })
    }

    const currentTemplate = tmpl as Template

    // Requêtes indépendantes lancées en parallèle.
    const [linkedRealisationsRes, relatedRes] = await Promise.all([
      supabase
        .from('realisations')
        .select('*')
        .eq('template_id', currentTemplate.id)
        .order('display_order', { ascending: true }),
      supabase
        .from('templates')
        .select('*')
        .eq('speciality', currentTemplate.speciality)
        .neq('id', currentTemplate.id)
        .limit(3)
    ])

    // Réalisations liées, avec repli sur les réalisations mises en avant.
    let realisationsList = (linkedRealisationsRes.data as Realisation[]) || []
    if (realisationsList.length === 0) {
      const { data: featured } = await supabase
        .from('realisations')
        .select('*')
        .eq('featured', true)
        .order('display_order', { ascending: true })
        .limit(3)
      realisationsList = (featured as Realisation[]) || []
    }

    // Templates similaires, avec repli sur les premiers templates disponibles.
    let related = (relatedRes.data as Template[]) || []
    if (related.length === 0) {
      const { data: fallback } = await supabase
        .from('templates')
        .select('*')
        .neq('id', currentTemplate.id)
        .limit(3)
      related = (fallback as Template[]) || []
    }

    // Lien "Voir le template" si le témoignage mis en avant concerne un AUTRE template.
    let linkedTestimonialTemplate: RealisationTemplateLink | null = null
    const featuredRea = realisationsList[0]
    if (featuredRea?.template_id && featuredRea.template_id !== currentTemplate.id) {
      const { data: reaTemplate } = await supabase
        .from('templates')
        .select('slug, name')
        .eq('id', featuredRea.template_id)
        .maybeSingle()
      linkedTestimonialTemplate = (reaTemplate as RealisationTemplateLink | null) ?? null
    }

    return {
      template: currentTemplate,
      realisations: realisationsList,
      relatedTemplates: related,
      realisationTemplate: linkedTestimonialTemplate
    }
  }
)

// Vues dérivées de la donnée SSR (conservent la même API que les anciens refs).
const template = computed(() => pageData.value?.template ?? null)
const relatedTemplates = computed(() => pageData.value?.relatedTemplates ?? [])
const realisations = computed(() => pageData.value?.realisations ?? [])
const realisationTemplate = computed(() => pageData.value?.realisationTemplate ?? null)
const showGuideModal = ref(false)

// Contenu de la section "guide stratégique offert" (identique à la page liste des templates).
const guideFeatures = [
  {
    icon: BookOpen,
    iconColor: 'text-primary-600',
    title: 'Guide pas à pas',
    description: 'Instructions détaillées pour personnaliser chaque élément de votre template et le lancer professionnellement.'
  },
  {
    icon: Sparkles,
    iconColor: 'text-primary-400',
    title: 'Prompt IA exclusif',
    description: 'Générez une palette de couleur professionnelle grâce au prompt IA.'
  }
]

// Section "FAQ" : questions fréquentes affichées avant le CTA (rendu via le composant Accordion).
const defaultFaqItems = [
  {
    question: "Combien me coûte mon site web au total ?",
    answer: "**C'est la solution la moins chère du marché** pour un résultat professionnel :\n\n- **Le template** : Paiement unique (selon le template choisi)\n- **L'abonnement technique** : Pour activer toutes les fonctionnalités premium (votre propre nom de domaine, formulaires, etc.), il faudra souscrire à l'offre Carrd Pro Standard\n- **Le coût total** : Environ **19$ par an** (soit moins de **2€/mois**)\n\n**C'est imbattable** comparé aux 150€ ou 200€ demandés par d'autres plateformes !"
  },
  {
    question: "Comment fonctionne l'achat d'un template ?",
    answer: "Une fois votre achat effectué, vous recevez **immédiatement par email** un lien pour télécharger :\n\n- Le template complet\n- Votre guide stratégique de 30 pages\n- L'accès à notre support si besoin\n\n**Processus simple et instantané** pour commencer tout de suite !"
  },
  {
    question: "Le nom de domaine est-il inclus ?",
    answer: "**Un hébergement gratuit est inclus** via l'extension .carrd.co (ex: monactivite.carrd.co), ce qui vous permet de mettre votre site en ligne immédiatement.\n\n**Vous souhaitez un nom de domaine personnalisé** (ex: .fr ou .com) ? C'est tout à fait possible :\n- Le nom de domaine s'obtient auprès d'un registrar (à partir d'environ **10€/an**)\n- Sa connexion nécessite l'abonnement Carrd Pro Standard\n- Il suffit de [me contacter](/contact) pour que nous mettions cela en place ensemble une fois votre template acquis"
  }
]

// FAQ affichée : les questions personnalisées du template sont placées en tête,
// suivies des questions génériques communes à tous les templates.
const faqItems = computed(() => [
  ...(template.value?.faq_items ?? []),
  ...defaultFaqItems
])

// Applique le formatage inline (gras + liens) sur un item de liste,
// à l'identique du rendu des listes de la FAQ (composant Accordion).
const formatListItem = (text: string) => {
  return text
    // Gras pour les termes importants
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    // Liens
    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-primary-600 hover:text-primary-700 underline" target="_blank" rel="noopener noreferrer">$1</a>')
}

const siteUrl = 'https://lisewebequine.fr'

// Données structurées Schema.org "Product" pour la page de détail du template.
// Permet l'éligibilité aux résultats enrichis (prix, avis) dans les moteurs de recherche.
useStructuredData(() => {
  const t = template.value
  if (!t) return []

  const productUrl = `${siteUrl}/template-site-internet-equestre/${t.slug}`

  const schema: Record<string, any> = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: t.name,
    description: t.description,
    image: t.image,
    url: productUrl,
    category: 'Template de site internet équestre',
    brand: { '@type': 'Brand', name: 'Lise Web Equine' },
    offers: {
      '@type': 'Offer',
      price: t.price,
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
      url: productUrl,
      seller: { '@id': `${siteUrl}/#organization` }
    }
  }

  // N'ajoute l'évaluation que si une note réelle est disponible.
  if (t.rating && t.rating > 0) {
    schema.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: t.rating,
      bestRating: 5,
      ratingCount: 1
    }
  }

  return schema
})

// Métadonnées SEO : privilégie les champs dédiés, repli sur le nom/description du template.
useSeoMeta({
  title: () => template.value?.seo_title || (template.value ? `${template.value.name} – Template site internet équestre` : 'Template site internet équestre'),
  description: () => template.value?.seo_description || template.value?.description || ''
})

// Indique si la section descriptive du métier contient du contenu à afficher.
const hasMetierContent = computed(() => {
  const t = template.value
  if (!t) return false
  return !!(t.metier_title || t.metier_text || (t.metier_lists && t.metier_lists.length > 0))
})

const isInCart = computed(() => {
  if (!template.value) return false
  return cartStore.cartItems.some(item => item.template.id === template.value!.id)
})

const handleAddToCart = () => {
  if (template.value && !isInCart.value) {
    cartStore.addToCart(template.value)
  }
}

// Suivi e-commerce (GA4) : consultation d'un produit. Déclenché côté client dès
// que le template est disponible, et de nouveau si le slug change (navigation
// entre deux fiches sans démontage du composant). trackViewItem no-op en SSR.
watch(
  template,
  (value) => {
    if (value) trackViewItem(value)
  },
  { immediate: true }
)
</script>
