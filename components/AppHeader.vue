<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="{ 'bg-white/80 backdrop-blur-lg border-b border-gray-200 shadow-sm': isScrolled, 'border-b border-gray-200/50': isMenuOpen && !isScrolled }"
  >
    <nav class="container mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <NuxtLink to="/" class="text-lg sm:text-xl md:text-2xl font-bold tracking-tight hover:opacity-80 transition-opacity flex items-center">
          <span class="gradient-primary bg-clip-text text-transparent">Lise</span>
          <span class="ml-1.5 sm:ml-2">Web Equine</span>
        </NuxtLink>

        <button
          @click="toggleMenu"
          class="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
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

      <transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div
          v-if="isMenuOpen"
          class="md:hidden mt-4 pt-4 pb-4 px-2 bg-white/95 backdrop-blur-lg rounded-xl shadow-lg border border-gray-100 flex flex-col space-y-2"
        >
          <NuxtLink
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            @click="toggleMenu"
            class="text-gray-700 hover:text-black font-medium transition-colors py-2 px-4 hover:bg-gray-50 rounded-lg"
            active-class="text-black font-semibold bg-gray-100"
          >
            {{ link.name }}
          </NuxtLink>
          <NuxtLink
            to="/cart"
            @click="toggleMenu"
            class="flex items-center space-x-2 text-gray-700 hover:text-black font-medium transition-colors py-2 px-4 hover:bg-gray-50 rounded-lg"
          >
            <ShoppingCart :size="20" />
            <span>Panier ({{ cartStore.itemCount }})</span>
          </NuxtLink>
        </div>
      </transition>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { Menu, X, ShoppingCart } from 'lucide-vue-next'
import { useCartStore } from '~/stores/cart'

const cartStore = useCartStore()
const isMenuOpen = ref(false)
const isScrolled = ref(false)

const navLinks = [
  { name: 'Le Studio', path: '/studio' },
  { name: 'La Boutique', path: '/templates' },
  { name: 'Contact', path: '/contact' },
]

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
