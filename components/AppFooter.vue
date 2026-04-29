<template>
  <footer class="bg-white border-t border-gray-200">
    <div class="container mx-auto px-6 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div>
          <div class="text-2xl font-bold mb-4 flex items-center">
            <span class="gradient-primary bg-clip-text text-transparent">Lise</span>
            <span class="ml-2 text-secondary-900">Web Equine</span>
          </div>
          <p class="text-gray-600 text-sm leading-relaxed">
            Création de site web pour le secteur équin.
          </p>
          <p class="text-gray-600 text-sm leading-relaxed">Fait avec ❤️ pour les indépendants de la filière équine.</p>
        </div>

        <div>
          <h3 class="font-semibold mb-4 text-lg text-secondary-900">Navigation</h3>
          <ul class="space-y-2 text-sm">
            <li><NuxtLink to="/studio" class="text-gray-600 hover:text-secondary-900 transition-colors">Le studio</NuxtLink></li>
            <li><NuxtLink to="/templates" class="text-gray-600 hover:text-secondary-900 transition-colors">La boutique</NuxtLink></li>
            <li><NuxtLink to="/contact" class="text-gray-600 hover:text-secondary-900 transition-colors">Contact</NuxtLink></li>
          </ul>
        </div>
      </div>

      <div class="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p class="text-gray-600 text-sm mb-4 md:mb-0">
          &copy; {{ currentYear }} Lise Web Equine. All rights reserved.
        </p>
        <div class="flex space-x-6">
          <a href="#" class="text-gray-600 hover:text-secondary-900 transition-colors" aria-label="Twitter">
            <Twitter :size="20" />
          </a>
          <a href="#" class="text-gray-600 hover:text-secondary-900 transition-colors" aria-label="Facebook">
            <Facebook :size="20" />
          </a>
          <a href="#" class="text-gray-600 hover:text-secondary-900 transition-colors" aria-label="LinkedIn">
            <Linkedin :size="20" />
          </a>
          <a href="#" class="text-gray-600 hover:text-secondary-900 transition-colors" aria-label="GitHub">
            <Github :size="20" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Twitter, Facebook, Linkedin, Github } from 'lucide-vue-next'

const currentYear = new Date().getFullYear()
</script>
