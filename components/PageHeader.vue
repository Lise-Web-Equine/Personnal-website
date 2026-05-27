<template>
  <section class="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden bg-secondary text-white border-b border-white/10 sm:border-b-0">
    <!-- Background decoration -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-900/30 to-transparent rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-purple-900/30 to-transparent rounded-full blur-3xl"></div>
    
    <div class="relative container mx-auto px-6">
      <div class="max-w-5xl" v-motion-slide-visible-once-bottom>
        <h1 class="mb-4 sm:mb-6">
          <span class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight block">{{ title }}</span>
          <span class="text-secondary-300 font-medium block text-sm sm:text-base md:text-lg lg:text-xl mt-2 sm:mt-3 tracking-wide">{{ description }}</span>
        </h1>
        <div v-if="badge" class="mt-6">
          <Badge variant="primary" :text="badge" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  title: string
  description: string
  badge?: string
}

defineProps<Props>()
</script>
