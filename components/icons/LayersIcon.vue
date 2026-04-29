<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 7L12 12L22 7L12 2Z" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M2 17L12 22L22 17" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M2 12L12 17L22 12" :stroke="color" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</template>

<script setup lang="ts">
interface Props {
  size?: number
  color?: string
}

withDefaults(defineProps<Props>(), {
  size: 24,
  color: 'currentColor'
})
</script>
