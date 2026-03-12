<template>
  <NuxtLayout>
    <div class="min-h-screen bg-white">
      <!-- Hero Section -->
      <section class="py-24 md:py-32">
        <div class="container mx-auto px-6">
          <div class="max-w-4xl mx-auto text-center" v-motion-slide-visible-once-bottom>
            <h1 class="text-4xl md:text-6xl font-bold mb-6 text-slate-900">
              À propos de Lise Web Equine
            </h1>
            <p class="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              L'alliance parfaite entre la passion équine et l'excellence digitale
            </p>
          </div>
        </div>
      </section>

      <!-- Mission Section -->
      <section class="py-20 bg-gray-50">
        <div class="container mx-auto px-6">
          <div class="max-w-4xl mx-auto">
            <div class="text-center mb-16" v-motion-slide-visible-once-bottom>
              <h2 class="text-3xl md:text-4xl font-bold mb-6 text-slate-900">Ma Mission</h2>
            </div>
            
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div v-motion-slide-visible-once-left>
                <p class="text-lg text-gray-600 leading-relaxed mb-6">
                  Je crée des expériences digitales uniques pour les professionnels du secteur équin. Mon approche combine une compréhension profonde de votre univers avec une maîtrise pointue des technologies web modernes.
                </p>
                <p class="text-lg text-gray-600 leading-relaxed">
                  Que vous soyez un établi ou un débutant, je vous accompagne dans votre transformation digitale avec des solutions sur mesure qui reflètent votre prestige et vos valeurs.
                </p>
              </div>
              
              <div v-motion-slide-visible-once-right class="relative">
                <div class="aspect-square bg-gradient-to-br from-amber-100 to-orange-100 rounded-3xl flex items-center justify-center">
                  <div class="text-center">
                    <div class="w-24 h-24 bg-amber-200 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span class="text-amber-700 font-bold text-2xl">L</span>
                    </div>
                    <div class="text-2xl font-bold text-amber-700 mb-2">Lise</div>
                    <div class="text-amber-600">Fondatrice & Développeuse</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Values Section -->
      <section class="py-20">
        <div class="container mx-auto px-6">
          <div class="max-w-4xl mx-auto">
            <div class="text-center mb-16" v-motion-slide-visible-once-bottom>
              <h2 class="text-3xl md:text-4xl font-bold mb-6 text-slate-900">Mes Valeurs</h2>
              <p class="text-xl text-gray-600">Ce qui guide mon travail chaque jour</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div 
                class="text-center p-8 bg-white rounded-2xl border border-gray-200 hover:border-gray-300 transition-colors"
                v-motion-slide-visible-once-bottom
                :delay="0"
              >
                <div class="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span class="text-amber-600 font-bold text-xl">P</span>
                </div>
                <h3 class="text-xl font-bold mb-4 text-slate-900">Passion Équine</h3>
                <p class="text-gray-600 leading-relaxed">
                  Une compréhension authentique de votre secteur et de ses spécificités
                </p>
              </div>
              
              <div 
                class="text-center p-8 bg-white rounded-2xl border border-gray-200 hover:border-gray-300 transition-colors"
                v-motion-slide-visible-once-bottom
                :delay="100"
              >
                <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span class="text-blue-600 font-bold text-xl">E</span>
                </div>
                <h3 class="text-xl font-bold mb-4 text-slate-900">Excellence</h3>
                <p class="text-gray-600 leading-relaxed">
                  Un engagement sans compromis sur la qualité et les résultats
                </p>
              </div>
              
              <div 
                class="text-center p-8 bg-white rounded-2xl border border-gray-200 hover:border-gray-300 transition-colors"
                v-motion-slide-visible-once-bottom
                :delay="200"
              >
                <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span class="text-purple-600 font-bold text-xl">I</span>
                </div>
                <h3 class="text-xl font-bold mb-4 text-slate-900">Innovation</h3>
                <p class="text-gray-600 leading-relaxed">
                  Les technologies les plus avancées au service de votre succès
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="py-20 bg-gray-50">
        <div class="container mx-auto px-6">
          <div class="max-w-3xl mx-auto text-center" v-motion-slide-visible-once-bottom>
            <h2 class="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
              Prêt à commencer votre projet ?
            </h2>
            <p class="text-xl text-gray-600 mb-8">
              Discutons ensemble de votre vision et transformons-la en réalité digitale
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <NuxtLink to="/contact" class="btn-primary inline-flex items-center justify-center">
                <span>Me contacter</span>
                <ArrowRight :size="20" class="ml-2" />
              </NuxtLink>
              <NuxtLink to="/services" class="inline-flex items-center justify-center px-6 py-3 text-slate-700 font-semibold rounded-lg border border-slate-300 hover:bg-slate-50 transition-colors">
                <span>Découvrir mes services</span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
</script>
