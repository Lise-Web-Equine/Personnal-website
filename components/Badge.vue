<template>
  <span 
    :class="[
      'inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 border rounded-full text-xs sm:text-sm font-medium transition-colors duration-200',
      variantClasses
    ]"
  >
    <slot>{{ text }}</slot>
  </span>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'danger' | 'gray'
  text?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  text: ''
})

const variantClasses = computed(() => {
  const variants = {
    primary: 'bg-gradient-to-r from-primary-100 to-primary-200 border-primary-300 text-primary-800',
    secondary: 'bg-gradient-to-r from-gray-100 to-gray-200 border-gray-300 text-title-dark',
    accent: 'bg-gradient-to-r from-blue-100 to-blue-200 border-blue-300 text-blue-800',
    success: 'bg-gradient-to-r from-green-100 to-green-200 border-green-300 text-green-800',
    warning: 'bg-gradient-to-r from-amber-100 to-amber-200 border-amber-300 text-amber-800',
    danger: 'bg-gradient-to-r from-red-100 to-red-200 border-red-300 text-red-800',
    gray: 'bg-gradient-to-r from-gray-100 to-gray-200 border-gray-300 text-gray-700'
  }
  
  return variants[props.variant] || variants.primary
})
</script>
