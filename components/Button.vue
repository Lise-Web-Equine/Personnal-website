<template>
  <component
    :is="to ? 'NuxtLink' : 'button'"
    :to="to"
    :type="to ? undefined : type"
    :disabled="disabled"
    :class="[
      'group px-4 py-2.5 font-semibold transition-all duration-300 flex items-center justify-center text-sm',
      variant === 'primary' ? 'rounded-lg border-2 transform hover:scale-[1.02] hover:-translate-y-0.5' : 'relative',
      variantClasses,
      disabled && 'opacity-50 cursor-not-allowed hover:scale-100 hover:translate-y-0'
    ]"
  >
    <slot>
      <span class="flex items-center justify-center">
        <component v-if="icon" :is="icon" :size="16" class="mr-2" />
        {{ text }}
      </span>
    </slot>
  </component>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary'
  text?: string
  to?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  icon?: any
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  text: '',
  type: 'button',
  disabled: false
})

const variantClasses = computed(() => {
  const variants = {
    primary: 'bg-gradient-to-r from-primary-500 to-primary-600 text-white border-primary-500 hover:from-primary-600 hover:to-primary-700 hover:border-primary-600 hover:shadow-xl',
    secondary: 'secondary-link'
  }
  
  return variants[props.variant] || variants.primary
})
</script>
