<template>
  <section class="py-20 relative overflow-hidden bg-secondary">
    <div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-900/30 to-transparent rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-purple-900/30 to-transparent rounded-full blur-3xl"></div>
    <GradientAnimation />
    
    <div class="relative container mx-auto px-6">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16" v-motion-slide-visible-once-bottom>
          <h2 class="mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            {{ title }}
          </h2>
          <p class="text-sm sm:text-base md:text-lg text-secondary-300 max-w-3xl mx-auto">
            {{ subtitle }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 max-w-5xl mx-auto">
          <div 
            v-for="(feature, index) in features" 
            :key="index"
            class="bg-white/5 backdrop-blur-xs rounded-xl p-6 border border-white/5" 
            v-motion-slide-visible-once-bottom 
            :style="{ 'animation-delay': `${index * 100}ms` }"
          >
            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center bg-white/5">
                <component :is="feature.icon" :size="24" :class="feature.iconColor" />
              </div>
              <div>
                <h3 class="text-base sm:text-lg md:text-xl font-semibold text-white mb-2">
                  {{ feature.title }}
                </h3>
                <p class="text-sm sm:text-base text-secondary-300 leading-relaxed">
                  {{ feature.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Component } from 'vue'

interface Feature {
  icon: Component
  iconColor: string
  title: string
  description: string
}

interface Props {
  title: string
  subtitle: string
  features: Feature[]
}

defineProps<Props>()
</script>
