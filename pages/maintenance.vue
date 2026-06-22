<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-secondary-50 px-6 text-center">
    <div class="max-w-md">
      <div class="mb-8 flex items-center justify-center">
        <div class="h-16 w-16 rounded-full bg-primary-100 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 text-primary-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
      </div>

      <h1 class="text-3xl font-bold text-secondary-900 mb-4">
        Maintenance en cours
      </h1>

      <p class="text-secondary-600 mb-2 leading-relaxed">
        Le site est temporairement indisponible pour cause de maintenance.
      </p>

      <p class="text-secondary-500 text-sm mb-8">
        Nous travaillons à améliorer votre expérience. Merci de votre patience.
      </p>

      <div class="flex items-center justify-center gap-3">
        <div class="h-2 w-2 animate-bounce rounded-full bg-primary-500" style="animation-delay: 0s" />
        <div class="h-2 w-2 animate-bounce rounded-full bg-primary-500" style="animation-delay: 0.2s" />
        <div class="h-2 w-2 animate-bounce rounded-full bg-primary-500" style="animation-delay: 0.4s" />
      </div>
    </div>

    <footer class="absolute bottom-6 text-xs text-secondary-400">
      Lise Web Equine
    </footer>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
})

// Page de maintenance : exclue de l'indexation Google
useHead({ meta: [{ name: 'robots', content: 'noindex, nofollow' }] })
</script>
