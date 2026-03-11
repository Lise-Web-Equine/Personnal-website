<template>
  <footer class="bg-gray-900 text-white">
    <div class="container mx-auto px-6 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div>
          <div class="text-2xl font-bold mb-4">
            <span class="bg-white text-black px-3 py-1 rounded">Lise</span>
            <span class="ml-1 gradient-text">Web Equine</span>
          </div>
          <p class="text-gray-400 text-sm leading-relaxed">
            Your trusted partner for bespoke web development and premium website templates.
          </p>
        </div>

        <div>
          <h3 class="font-semibold mb-4 text-lg">Le Studio</h3>
          <ul class="space-y-2 text-sm">
            <li><NuxtLink to="/services" class="text-gray-400 hover:text-white transition-colors">Web Development</NuxtLink></li>
            <li><NuxtLink to="/services" class="text-gray-400 hover:text-white transition-colors">UI/UX Design</NuxtLink></li>
            <li><NuxtLink to="/services" class="text-gray-400 hover:text-white transition-colors">E-Commerce Solutions</NuxtLink></li>
            <li><NuxtLink to="/services" class="text-gray-400 hover:text-white transition-colors">SEO Optimization</NuxtLink></li>
          </ul>
        </div>

        <div>
          <h3 class="font-semibold mb-4 text-lg">La Boutique</h3>
          <ul class="space-y-2 text-sm">
            <li><NuxtLink to="/templates?category=business" class="text-gray-400 hover:text-white transition-colors">Business</NuxtLink></li>
            <li><NuxtLink to="/templates?category=ecommerce" class="text-gray-400 hover:text-white transition-colors">E-Commerce</NuxtLink></li>
            <li><NuxtLink to="/templates?category=portfolio" class="text-gray-400 hover:text-white transition-colors">Portfolio</NuxtLink></li>
            <li><NuxtLink to="/templates?category=blog" class="text-gray-400 hover:text-white transition-colors">Blog</NuxtLink></li>
          </ul>
        </div>

        <div>
          <h3 class="font-semibold mb-4 text-lg">Entreprise</h3>
          <ul class="space-y-2 text-sm">
            <li><NuxtLink to="/about" class="text-gray-400 hover:text-white transition-colors">À propos</NuxtLink></li>
            <li><NuxtLink to="/contact" class="text-gray-400 hover:text-white transition-colors">Contact</NuxtLink></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Politique de confidentialité</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Conditions d'utilisation</a></li>
          </ul>
        </div>
      </div>

      <div class="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p class="text-gray-400 text-sm mb-4 md:mb-0">
          &copy; {{ currentYear }} Lise Web Equine. All rights reserved.
        </p>
        <div class="flex space-x-6">
          <a href="#" class="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
            <Twitter :size="20" />
          </a>
          <a href="#" class="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
            <Facebook :size="20" />
          </a>
          <a href="#" class="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
            <Linkedin :size="20" />
          </a>
          <a href="#" class="text-gray-400 hover:text-white transition-colors" aria-label="GitHub">
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
