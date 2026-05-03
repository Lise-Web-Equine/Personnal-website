<template>
  <footer class="bg-secondary-900 border-t border-secondary-800">
    <div class="container mx-auto px-6 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 text-center md:text-left">
        <div>
          <div class="text-2xl font-bold mb-4 flex items-center justify-center md:justify-start">
            <span class="gradient-primary-light bg-clip-text text-transparent">Lise</span>
            <span class="ml-2 text-white">Web Equine</span>
          </div>
          <p class="text-secondary-300 text-sm leading-relaxed">
            Création de site web pour le secteur équin.
          </p>
          <p class="text-secondary-300 text-sm leading-relaxed">Fait avec ❤️ pour les indépendants de la filière équine.</p>
        </div>

        <div>
          <h3 class="font-semibold mb-4 text-lg text-white">Navigation</h3>
          <ul class="space-y-2 text-sm">
            <li><NuxtLink to="/studio" class="text-secondary-300 hover:text-white transition-colors">Le studio</NuxtLink></li>
            <li><NuxtLink to="/boutique" class="text-secondary-300 hover:text-white transition-colors">La boutique</NuxtLink></li>
            <li><NuxtLink to="/contact" class="text-secondary-300 hover:text-white transition-colors">Contact</NuxtLink></li>
          </ul>
        </div>

        <div>
          <h3 class="font-semibold mb-4 text-lg text-white">Contact</h3>
          <ul class="space-y-3 text-sm">
            <li class="flex items-center justify-center sm:justify-start gap-2">
              <Mail :size="16" class="text-primary-400 flex-shrink-0" />
              <a href="mailto:contact@lisewebequine.com" class="text-secondary-300 hover:text-white transition-colors">contact@lisewebequine.com</a>
            </li>
            <li class="flex items-center justify-center sm:justify-start gap-2">
              <MapPin :size="16" class="text-primary-400 flex-shrink-0" />
              <span class="text-secondary-300">Angers, France</span>
            </li>
            <li>
              <NuxtLink to="/contact" class="text-secondary-300 hover:text-white transition-colors">Me contacter →</NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="font-semibold mb-4 text-lg text-white">Réseaux sociaux</h3>
          <div class="flex justify-center sm:justify-start gap-4">
            <a href="https://www.instagram.com/lise_webequine/" target="_blank" rel="noopener noreferrer" class="text-secondary-300 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="https://www.facebook.com/lisewebequine" target="_blank" rel="noopener noreferrer" class="text-secondary-300 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div class="border-t border-secondary-800 pt-6 sm:pt-8">
        <div class="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p class="text-secondary-300 text-sm text-center sm:text-left">
            &copy; {{ currentYear }} Lise Web Equine. Tous droits réservés.
          </p>
          <div class="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-sm">
            <NuxtLink to="/mentions-legales" class="text-secondary-300 hover:text-white transition-colors">Mentions légales</NuxtLink>
            <span class="hidden sm:inline text-secondary-600">•</span>
            <NuxtLink to="/politique-confidentialite" class="text-secondary-300 hover:text-white transition-colors">Politique de confidentialité</NuxtLink>
            <span class="hidden sm:inline text-secondary-600">•</span>
            <NuxtLink to="/cgu" class="text-secondary-300 hover:text-white transition-colors">CGU</NuxtLink>
            <span class="hidden sm:inline text-secondary-600">•</span>
            <NuxtLink to="/cgv" class="text-secondary-300 hover:text-white transition-colors">CGV</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Mail, MapPin } from 'lucide-vue-next'

const currentYear = new Date().getFullYear()
</script>
          
