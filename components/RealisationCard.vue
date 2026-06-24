<template>
  <!-- Carte de preuve sociale : capture du site client + témoignage -->
  <div class="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col">
    <!-- Capture du site (cliquable si lien fourni) -->
    <component
      :is="realisation.site_url ? 'a' : 'div'"
      :href="realisation.site_url || undefined"
      :target="realisation.site_url ? '_blank' : undefined"
      rel="noopener noreferrer"
      class="relative block group"
    >
      <NuxtImg
        :src="realisation.site_image"
        :alt="`Site de ${realisation.client_name}, ${realisation.client_profession}`"
        class="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 33vw"
        loading="lazy"
      />

      <!-- Badge type de réalisation -->
      <div class="absolute top-3 left-3">
        <span
          class="text-xs font-semibold px-3 py-1 rounded-full shadow-sm"
          :class="realisation.type === 'pack' ? 'bg-primary-500 text-white' : 'bg-white text-secondary-700'"
        >
          {{ realisation.type === 'pack' ? 'Réalisé pour le client' : 'Personnalisé en autonomie' }}
        </span>
      </div>

      <!-- Incitation à voir le site -->
      <div
        v-if="realisation.site_url"
        class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4"
      >
        <span class="flex items-center gap-2 text-white font-semibold text-sm">
          Voir le site
          <ExternalLink :size="16" />
        </span>
      </div>
    </component>

    <!-- Contenu textuel -->
    <div class="p-6 flex flex-col flex-1">
      <!-- Note -->
      <div v-if="realisation.rating" class="flex items-center text-yellow-500 mb-3">
        <Star v-for="n in 5" :key="n" :size="16" :fill="n <= Math.round(realisation.rating) ? 'currentColor' : 'none'" />
      </div>

      <!-- Témoignage -->
      <blockquote class="text-secondary-700 text-sm leading-relaxed italic flex-1">
        "{{ realisation.quote }}"
      </blockquote>

      <!-- Identité du client -->
      <div class="flex items-center gap-3 mt-4 pt-4 border-t border-gray-100">
        <NuxtImg
          v-if="realisation.client_photo"
          :src="realisation.client_photo"
          :alt="realisation.client_name"
          class="w-10 h-10 rounded-full object-cover"
          loading="lazy"
        />
        <div
          v-else
          class="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold text-sm flex-shrink-0"
        >
          {{ initials }}
        </div>
        <div class="min-w-0">
          <div class="font-semibold text-secondary-900 text-sm truncate">{{ realisation.client_name }}</div>
          <div class="text-xs text-secondary-500 truncate">{{ realisation.client_profession }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Star, ExternalLink } from 'lucide-vue-next'
import type { Realisation } from '~/models'

const props = defineProps<{
  realisation: Realisation
}>()

// Génère les initiales du client pour l'avatar de repli (sans photo).
const initials = computed(() => {
  return props.realisation.client_name
    .split(' ')
    .map(part => part.charAt(0))
    .slice(0, 2)
    .join('')
    .toUpperCase()
})
</script>
