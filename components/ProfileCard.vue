<template>
  <div
    class="border rounded-2xl overflow-hidden transition-colors"
    :class="[
      image ? 'relative border-white/20' : 'bg-white border-secondary-200',
      isOpen ? (image ? 'border-primary-400 shadow-md' : 'border-primary-300 shadow-md') : (image ? 'hover:border-white/30' : 'hover:border-secondary-300')
    ]"
  >
    <div v-if="image" class="absolute inset-0 -z-10">
      <NuxtImg
        :src="image"
        alt=""
        class="w-full h-full object-cover brightness-75"
        aria-hidden="true"
        loading="lazy"
      />
      <div
        class="absolute inset-0 bg-gradient-to-b"
        :class="isOpen ? 'from-secondary-900/75 via-secondary-900/60 to-secondary-900/30' : 'from-secondary-900/90 via-secondary-900/75 to-secondary-900/40'"
      ></div>
    </div>

    <button
      @click="$emit('toggle')"
      class="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left gap-4 relative z-10"
    >
      <h3 class="text-base sm:text-lg font-bold" :class="image ? 'text-white' : 'text-secondary-900'">
        {{ title }}
      </h3>
      <ChevronDown
        :size="20"
        class="transition-transform duration-200 flex-shrink-0"
        :class="[isOpen ? 'rotate-180' : '', image ? 'text-white' : 'text-secondary-500']"
      />
    </button>

    <div v-show="isOpen" class="px-5 sm:px-6 pb-5 sm:pb-6 relative z-10">
      <div>
        <span class="font-semibold" :class="image ? 'text-white' : 'text-secondary-700'">Exemples d'activité :</span>
        <h4 class="text-sm sm:text-base mb-3" :class="image ? 'text-white/80' : 'text-secondary-500'">
          {{ examples }}
        </h4>
      </div>
      <div class="flex items-start gap-2">
        <p class="text-sm sm:text-base leading-relaxed" :class="image ? 'text-white/90' : 'text-secondary-700'">
          {{ objective }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ChevronDown } from 'lucide-vue-next'
import type { Component } from 'vue'

interface Props {
  title: string
  examples: string
  objective: string
  icon: Component
  image?: string
  isOpen: boolean
}

defineProps<Props>()
defineEmits(['toggle'])
</script>
