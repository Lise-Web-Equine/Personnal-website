<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
    <nav class="container mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <NuxtLink to="/" class="text-2xl font-bold tracking-tight hover:opacity-80 transition-opacity">
          <span class="bg-black text-white px-3 py-1 rounded">Lise</span>
          <span class="ml-1">Web Equine</span>
        </NuxtLink>

        <button
          @click="toggleMenu"
          class="md:hidden p-2"
          aria-label="Toggle menu"
        >
          <Menu v-if="!isMenuOpen" :size="24" />
          <X v-else :size="24" />
        </button>

        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="text-gray-700 hover:text-black font-medium transition-colors"
            active-class="text-black font-semibold"
          >
            {{ link.name }}
          </NuxtLink>

          <NuxtLink
            to="/cart"
            class="relative p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ShoppingCart :size="20" />
            <span
              v-if="cartStore.itemCount > 0"
              class="absolute -top-1 -right-1 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold"
            >
              {{ cartStore.itemCount }}
            </span>
          </NuxtLink>
        </div>
      </div>

      <div
        v-if="isMenuOpen"
        class="md:hidden mt-4 pb-4 flex flex-col space-y-4"
      >
        <NuxtLink
          v-for="link in navLinks"
          :key="link.path"
          :to="link.path"
          @click="toggleMenu"
          class="text-gray-700 hover:text-black font-medium transition-colors"
          active-class="text-black font-semibold"
        >
          {{ link.name }}
        </NuxtLink>
        <NuxtLink
          to="/cart"
          @click="toggleMenu"
          class="flex items-center space-x-2 text-gray-700 hover:text-black font-medium transition-colors"
        >
          <ShoppingCart :size="20" />
          <span>Cart ({{ cartStore.itemCount }})</span>
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { Menu, X, ShoppingCart } from 'lucide-vue-next'
import { useCartStore } from '~/stores/cart'

const cartStore = useCartStore()
const isMenuOpen = ref(false)

const navLinks = [
  { name: 'Le Studio', path: '/studio' },
  { name: 'La Boutique', path: '/templates' },
  { name: 'Contact', path: '/contact' },
]

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>
