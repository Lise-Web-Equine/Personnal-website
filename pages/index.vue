<template>
  <NuxtLayout>
    <div class="relative">
      <section class="relative bg-gradient-to-br from-amber-50 via-white to-slate-50 py-20 md:py-32 overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-r from-amber-100/20 via-transparent to-blue-100/20"></div>
        
        <!-- AI + Horse Visual Elements -->
        <div class="absolute top-10 left-10 w-32 h-32 opacity-10">
          <div class="text-8xl animate-pulse">🤖</div>
        </div>
        <div class="absolute top-20 right-20 w-40 h-40 opacity-10">
          <div class="text-9xl animate-pulse animation-delay-1000">🐴</div>
        </div>
        
        <!-- Floating Elements -->
        <div class="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-br from-amber-200 to-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div class="absolute top-1/3 right-1/4 w-72 h-72 bg-gradient-to-br from-blue-200 to-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div class="absolute bottom-1/4 left-1/3 w-56 h-56 bg-gradient-to-br from-purple-200 to-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        
        <div class="relative container mx-auto px-6">
          <div class="max-w-5xl mx-auto text-center" v-motion-slide-visible-once-bottom>
            <div class="mb-6">
              <span class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 border border-amber-200 rounded-full text-sm font-medium text-amber-800">
                <span class="mr-2">✨</span>
                L'IA rencontre l'expertise équine
              </span>
            </div>
            
            <h1 class="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-tight">
              <span class="block bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 bg-clip-text text-transparent">
                Création de site web
              </span>
              <span class="block bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 bg-clip-text text-transparent">
                pour le secteur équin
              </span>
            </h1>
            
            <p class="text-xl md:text-2xl lg:text-3xl text-gray-700 mb-12 leading-relaxed font-medium">
              Propulsez votre entreprise équestre dans une nouvelle dimension.
            </p>
            
            <div class="flex flex-col sm:flex-row gap-6 justify-center">
              <NuxtLink to="/templates" class="group relative px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-xl hover:from-amber-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                <span class="flex items-center">
                  <ShoppingBag :size="20" class="mr-3" />
                  La boutique de modèles
                  <ArrowRight :size="20" class="ml-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </NuxtLink>
              
              <NuxtLink to="/services" class="group px-8 py-4 bg-white text-slate-800 font-semibold rounded-xl border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                <span class="flex items-center">
                  <Sparkles :size="20" class="mr-3" />
                  Découvrir le studio
                  <ArrowRight :size="20" class="ml-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>

      <!-- L'Experte Section -->
      <section class="py-24 bg-gradient-to-br from-white via-amber-50/30 to-white relative overflow-hidden">
        <!-- Background decoration -->
        <div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-amber-100/50 to-transparent rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-100/50 to-transparent rounded-full blur-3xl"></div>
        
        <div class="relative container mx-auto px-6">
          <div class="max-w-6xl mx-auto">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <!-- Text Content -->
              <div v-motion-slide-visible-once-left>
                <div class="mb-6">
                  <span class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 border border-amber-200 rounded-full text-sm font-medium text-amber-800">
                    <span class="mr-2">👋</span>
                    L'Experte derrière Lise Web Equine
                  </span>
                </div>
                
                <h2 class="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  <span class="block bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-2">
                    Lise
                  </span>
                  <span class="block text-slate-800">
                    Où la passion équine rencontre l'innovation digitale
                  </span>
                </h2>
                
                <div class="space-y-6 mb-8">
                  <p class="text-lg text-gray-700 leading-relaxed">
                    Mon approche unique combine une <span class="font-semibold text-amber-600">double expertise</span> : une passion profonde pour le monde équin et une maîtrise pointue des technologies web modernes. Cette dualité me permet de créer des solutions digitales qui parlent véritablement votre langage.
                  </p>
                  
                  <p class="text-lg text-gray-700 leading-relaxed">
                    Je ne crée pas seulement des sites web. Je conçois des <span class="font-semibold text-slate-800">expériences digitales</span> qui capturent l'essence de votre univers équestre, en intégrant intelligemment l'IA pour amplifier votre impact tout en préservant l'authenticité qui vous caractérise.
                  </p>
                </div>

                <!-- Values -->
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                  <div class="text-center">
                    <div class="text-3xl mb-2">🐴</div>
                    <h4 class="font-semibold text-slate-800 mb-1">Passion Équine</h4>
                    <p class="text-sm text-gray-600">Une compréhension profonde de votre secteur</p>
                  </div>
                  <div class="text-center">
                    <div class="text-3xl mb-2">🤖</div>
                    <h4 class="font-semibold text-slate-800 mb-1">Innovation IA</h4>
                    <p class="text-sm text-gray-600">Les technologies les plus avancées à votre service</p>
                  </div>
                  <div class="text-center">
                    <div class="text-3xl mb-2">💫</div>
                    <h4 class="font-semibold text-slate-800 mb-1">Excellence</h4>
                    <p class="text-sm text-gray-600">Un engagement sans compromis sur la qualité</p>
                  </div>
                </div>

                <div class="flex flex-col sm:flex-row gap-4">
                  <NuxtLink to="/about" class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-lg hover:from-amber-600 hover:to-orange-700 transition-all duration-300">
                    <span>Mon histoire</span>
                    <ArrowRight :size="20" class="ml-2" />
                  </NuxtLink>
                  <NuxtLink to="/contact" class="inline-flex items-center px-6 py-3 text-slate-700 font-semibold rounded-lg border border-slate-300 hover:bg-slate-50 transition-all duration-300">
                    <span>Discutons ensemble</span>
                    <MessageSquare :size="20" class="ml-2" />
                  </NuxtLink>
                </div>
              </div>

              <!-- Visual Content -->
              <div v-motion-slide-visible-once-right class="relative">
                <div class="relative">
                  <!-- Main image placeholder -->
                  <div class="aspect-square bg-gradient-to-br from-amber-100 via-orange-50 to-amber-100 rounded-3xl overflow-hidden shadow-2xl">
                    <div class="w-full h-full flex items-center justify-center">
                      <div class="text-center">
                        <div class="text-6xl mb-4">👩‍💻</div>
                        <div class="text-2xl font-bold text-amber-700 mb-2">Lise</div>
                        <div class="text-amber-600">Fondatrice & Développeuse</div>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Floating elements -->
                  <div class="absolute -top-4 -right-4 w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center animate-bounce">
                    <span class="text-2xl">🏆</span>
                  </div>
                  <div class="absolute -bottom-4 -left-4 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center animate-pulse">
                    <span class="text-xl">⭐</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Services Segmentés Section -->
      <section class="py-24 bg-gradient-to-br from-slate-50 to-white">
        <div class="container mx-auto px-6">
          <div class="text-center mb-20" v-motion-slide-visible-once-bottom>
            <h2 class="text-4xl md:text-5xl font-bold mb-6">
              <span class="block bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent">
                Choisissez votre chemin
              </span>
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
                    <span class="mr-2">⭐</span>
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
                <NuxtLink to="/services" class="w-full inline-flex items-center justify-center px-6 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-xl hover:from-amber-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105">
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
                    <span class="mr-2">💰</span>
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
                <NuxtLink to="/templates" class="w-full inline-flex items-center justify-center px-6 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105">
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
                        <div class="text-8xl mb-4 opacity-80">🐴</div>
                        <div class="text-slate-400 text-sm">Image cheval noir & blanc</div>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Floating Tech Elements -->
                  <div class="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg animate-bounce">
                    <span class="text-2xl text-white">🤖</span>
                  </div>
                  <div class="absolute -bottom-6 -left-6 w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg animate-pulse">
                    <span class="text-xl text-white">⚡</span>
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
                    <span class="mr-2">🚀</span>
                    Le futur du web équin
                  </span>
                </div>
                
                <!-- Title -->
                <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span class="block bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                    Créé avec l'IA,
                  </span>
                  <span class="block text-white">
                    raffiné par l'humain
                  </span>
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
                  <NuxtLink to="/services" class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    <span>Découvrir notre technologie</span>
                    <ArrowRight :size="20" class="ml-3" />
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-20 bg-gray-50">
        <div class="container mx-auto px-6">
          <div class="flex justify-between items-end mb-12" v-motion-slide-visible-once-bottom>
            <div>
              <h2 class="section-title mb-4">Featured Templates</h2>
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

      <section class="py-20 bg-black text-white">
        <div class="container mx-auto px-6">
          <div class="max-w-4xl mx-auto text-center" v-motion-slide-visible-once-bottom>
            <h2 class="text-4xl md:text-5xl font-bold mb-6">
              Prêt à faire galoper votre projet ?
            </h2>
            <p class="text-xl text-gray-300 mb-10">
              Whether you need a custom solution or a ready-made template, we're here to help.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <NuxtLink to="/contact" class="btn-primary bg-white text-black hover:bg-gray-100">
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
</style>
