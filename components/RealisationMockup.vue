<script setup lang="ts">
import { latestRealisation as realisation } from '~/utils/realisations'

// Maquette ordinateur (fenêtre de navigateur) + téléphone de la réalisation client.
// Toute la maquette est un lien vers le site (nouvel onglet).
// Le padding droit laisse la place au téléphone qui déborde, sans scroll horizontal.
</script>

<template>
  <a
    :href="realisation.url"
    target="_blank"
    rel="noopener noreferrer"
    :aria-label="`Voir le site ${realisation.client} (nouvel onglet)`"
    class="group relative block w-full max-w-5xl pr-10 sm:pr-16 lg:pr-20"
  >
    <!-- Navigateur -->
    <div class="rounded-lg sm:rounded-xl overflow-hidden border border-secondary-200 bg-white shadow-2xl transition-transform duration-500 group-hover:-translate-y-1">
      <div class="h-6 sm:h-9 bg-secondary-50 flex items-center px-2 sm:px-4 gap-2 sm:gap-3 border-b border-secondary-100">
        <div class="flex gap-1 sm:gap-1.5">
          <span class="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-secondary-200"></span>
          <span class="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-secondary-200"></span>
          <span class="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-secondary-200"></span>
        </div>
        <div class="h-4 sm:h-5 flex-1 max-w-[160px] sm:max-w-xs bg-white border border-secondary-200 rounded flex items-center px-2">
          <span class="text-[9px] sm:text-xs text-secondary-400 truncate">{{ realisation.displayUrl }}</span>
        </div>
      </div>
      <NuxtImg
        :src="realisation.desktopImage"
        :alt="`Page d'accueil du site ${realisation.client} sur ordinateur`"
        width="1920"
        height="911"
        class="block w-full h-auto"
        sizes="(max-width: 1024px) 100vw, 1024px"
        loading="lazy"
      />
    </div>

    <!-- Téléphone -->
    <div class="absolute right-0 -bottom-6 sm:-bottom-10 w-20 sm:w-32 lg:w-40 rounded-[1rem] sm:rounded-[1.75rem] bg-secondary-900 p-1 sm:p-1.5 shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
      <NuxtImg
        :src="realisation.mobileImage"
        :alt="`Page d'accueil du site ${realisation.client} sur mobile`"
        width="374"
        height="748"
        class="block w-full h-auto rounded-[0.75rem] sm:rounded-[1.4rem]"
        sizes="160px"
        loading="lazy"
      />
    </div>
  </a>
</template>
