<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- Toit / Auvent -->
    <path d="M3 9L4.5 4C4.8 3 5.5 2 7 2H17C18.5 2 19.2 3 19.5 4L21 9" stroke="#64748b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M3 9H21V12C21 13.1 20.1 14 19 14C17.9 14 17 13.1 17 12V12C17 13.1 16.1 14 15 14C13.9 14 13 13.1 13 12V12C13 13.1 12.1 14 11 14C9.9 14 9 13.1 9 12V12C9 13.1 8.1 14 7 14C5.9 14 5 13.1 5 12V12C5 13.1 4.1 14 3 14V9Z" stroke="#64748b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <!-- Murs -->
    <path d="M5 14V20C5 21.1 5.9 22 7 22H17C18.1 22 19 21.1 19 20V14" stroke="#475569" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <!-- Détail Intérieur -->
    <path d="M9 22V18H15V22" stroke="#475569" stroke-opacity="0.4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</template>

<script setup lang="ts">
interface Props {
  size?: number
}

withDefaults(defineProps<Props>(), {
  size: 24
})
</script>
