<template>
  <div 
    :class="[
      'rounded-xl p-8 transition-all duration-300',
      variantClasses,
      featured ? featuredClasses : baseClasses
    ]"
    v-motion="motionProps"
  >
    <!-- Header with icon and badge -->
    <div class="flex items-start justify-between mb-6">
      <div :class="iconClasses">
        <component :is="icon" :size="24" :class="iconColor" />
      </div>
      <Badge v-if="badgeText" :variant="badgeVariant" :text="badgeText" />
    </div>
    
    <!-- Title -->
    <h3 class="text-2xl font-semibold text-secondary-900 mb-3">{{ title }}</h3>
    
    <!-- Description -->
    <p class="text-secondary-600 leading-relaxed mb-6">
      {{ description }}
    </p>
    
    <!-- Features list -->
    <ul v-if="features && features.length > 0" class="space-y-2 mb-8">
      <li v-for="feature in features" :key="feature.title" class="flex items-center text-secondary-600">
        <svg class="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
        <div>
          <span class="font-medium">{{ feature.title }}</span>
          <p v-if="feature.description" class="text-sm text-secondary-500 mt-0.5">{{ feature.description }}</p>
        </div>
      </li>
    </ul>
    
    <!-- CTA Button -->
    <NuxtLink 
      v-if="ctaLink && ctaText"
      :to="ctaLink"
      :class="buttonClasses"
    >
      <span>{{ ctaText }}</span>
      <ArrowRight :size="20" class="ml-2" />
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'

interface Feature {
  title: string
  description?: string
}

interface Props {
  variant?: 'default' | 'primary' | 'secondary'
  title: string
  description: string
  icon: any
  features?: Feature[]
  badgeText?: string
  badgeVariant?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'danger' | 'gray'
  ctaText?: string
  ctaLink?: string
  featured?: boolean
  motionDirection?: 'left' | 'right' | 'bottom'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  features: () => [],
  badgeVariant: 'primary',
  featured: false,
  motionDirection: 'bottom'
})

const variantClasses = computed(() => {
  const variants = {
    default: 'bg-white border border-gray-200 hover:shadow-lg',
    primary: 'bg-gradient-to-br from-primary-50 to-white border-2 border-primary-300 hover:shadow-xl transform hover:scale-105',
    secondary: 'bg-white border border-gray-200 hover:shadow-lg'
  }
  
  return variants[props.variant] || variants.default
})

const baseClasses = 'hover:shadow-lg transition-shadow duration-300'
const featuredClasses = 'hover:shadow-xl transition-all duration-300 transform hover:scale-105 relative'

const iconClasses = computed(() => {
  const base = 'w-12 h-12 rounded-lg flex items-center justify-center'
  
  if (props.variant === 'primary') {
    return `${base} bg-gradient-to-r from-primary-100 to-primary-200 border border-primary-300`
  } else if (props.variant === 'secondary') {
    return `${base} bg-gradient-to-r from-gray-100 to-gray-200 border border-gray-300`
  }
  
  return `${base} bg-gradient-to-r from-primary-100 to-primary-200 border border-primary-300`
})

const iconColor = computed(() => {
  if (props.variant === 'primary') {
    return 'text-primary-800'
  } else if (props.variant === 'secondary') {
    return 'text-title-dark'
  }
  
  return 'text-primary-800'
})

const buttonClasses = computed(() => {
  const base = 'w-full inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg transition-colors duration-300'
  
  if (props.variant === 'primary') {
    return `${base} bg-primary-600 text-white hover:bg-primary-700`
  } else if (props.variant === 'secondary') {
    return `${base} bg-title-dark text-white hover:bg-slate-700`
  }
  
  return `${base} bg-gray-900 text-white hover:bg-gray-800`
})

const motionProps = computed(() => {
  const directions = {
    left: 'slide-visible-once-left',
    right: 'slide-visible-once-right',
    bottom: 'slide-visible-once-bottom'
  }
  
  return {
    [directions[props.motionDirection]]: true
  }
})
</script>
