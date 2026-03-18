<template>
  <section class="py-20 relative overflow-hidden bg-secondary text-white">
    <!-- Background decoration -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-900/30 to-transparent rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-purple-900/30 to-transparent rounded-full blur-3xl"></div>
    
    <div class="relative container mx-auto px-6">
      <div class="max-w-3xl" v-motion-slide-visible-once-bottom>
        <h1 class="text-5xl md:text-6xl font-bold mb-6">
          <span class="text-white">{{ title }}</span>
        </h1>
        <p class="text-xl text-secondary-300 leading-relaxed mb-6">
          {{ description }}
        </p>
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
