<template>
  <span 
    :class="[
      'inline-flex items-center font-medium transition-colors duration-200 badge-shine',
      variantClasses
    ]"
  >
    <svg v-if="icon" :class="iconClasses" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="icon"></path>
    </svg>
    <slot>{{ text }}</slot>
  </span>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'danger' | 'gray' | 'minimal' | 'tag'
  text?: string
  icon?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  text: '',
  icon: ''
})

const variantClasses = computed(() => {
  const variants = {
    primary: 'px-3 py-1.5 sm:px-4 sm:py-2 border rounded-full text-xs sm:text-sm bg-gradient-to-r from-primary-100 to-primary-200 border-primary-300 text-primary-800',
    secondary: 'px-3 py-1.5 sm:px-4 sm:py-2 border rounded-full text-xs sm:text-sm bg-gradient-to-r from-gray-100 to-gray-200 border-gray-300 text-title-dark',
    accent: 'px-3 py-1.5 sm:px-4 sm:py-2 border rounded-full text-xs sm:text-sm bg-gradient-to-r from-blue-100 to-blue-200 border-blue-300 text-blue-800',
    success: 'px-3 py-1.5 sm:px-4 sm:py-2 border rounded-full text-xs sm:text-sm bg-gradient-to-r from-green-100 to-green-200 border-green-300 text-green-800',
    warning: 'px-3 py-1.5 sm:px-4 sm:py-2 border rounded-full text-xs sm:text-sm bg-gradient-to-r from-amber-100 to-amber-200 border-amber-300 text-amber-800',
    danger: 'px-3 py-1.5 sm:px-4 sm:py-2 border rounded-full text-xs sm:text-sm bg-gradient-to-r from-red-100 to-red-200 border-red-300 text-red-800',
    gray: 'px-3 py-1.5 sm:px-4 sm:py-2 border rounded-full text-xs sm:text-sm bg-gradient-to-r from-gray-100 to-gray-200 border-gray-300 text-gray-700',
    minimal: 'px-2 py-1 text-[10px] rounded-full bg-primary text-white shadow-sm uppercase',
    tag: 'text-xs text-gray-700 bg-white px-2 py-0.5 rounded'
  }
  
  return variants[props.variant] || variants.primary
})

const iconClasses = computed(() => {
  return props.icon ? 'w-4 h-4 mr-2' : ''
})
</script>

<style scoped>
.badge-shine {
  position: relative;
  overflow: hidden;
}

.badge-shine::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 50%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
  animation: shine 4s infinite;
}

@keyframes shine {
  0% {
    left: -50%;
  }
  100% {
    left: 150%;
  }
}
</style>
