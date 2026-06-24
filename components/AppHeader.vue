<template>
  <header
    ref="headerRef"
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="{ 'bg-white/80 backdrop-blur-lg border-b border-gray-200 shadow-sm': isScrolled, 'border-b border-gray-200/50': isMenuOpen && !isScrolled }"
  >
    <nav class="w-full px-4 sm:px-6 py-4 md:container md:mx-auto">
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
          <template v-for="link in navLinks" :key="link.name">
            <!-- Lien avec sous-menu (dropdown) -->
            <div v-if="link.children" class="relative group">
              <button
                class="flex items-center gap-1 text-gray-700 group-hover:text-black font-medium transition-colors"
              >
                {{ link.name }}
                <ChevronDown :size="16" class="transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div class="absolute left-0 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div class="bg-white rounded-xl shadow-lg border border-gray-100 py-2 min-w-[16rem]">
                  <NuxtLink
                    v-for="child in link.children"
                    :key="child.path"
                    :to="child.path"
                    class="block px-4 py-2.5 text-gray-700 hover:text-black hover:bg-gray-50 transition-colors"
                    active-class="text-black font-semibold bg-gray-50"
                  >
                    {{ child.name }}
                  </NuxtLink>
                </div>
              </div>
            </div>
            <!-- Lien simple -->
            <NuxtLink
              v-else
              :to="link.path"
              class="text-gray-700 hover:text-black font-medium transition-colors"
              active-class="text-black font-semibold"
            >
              {{ link.name }}
            </NuxtLink>
          </template>

          <NuxtLink
            v-if="cartStore.itemCount > 0"
            to="/cart"
            class="relative p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ShoppingCart :size="20" />
            <span
              class="absolute -top-1 -right-1 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold"
            >
              {{ cartStore.itemCount }}
            </span>
          </NuxtLink>

          <NuxtLink to="/contact" class="btn-secondary">
            Demander un devis
          </NuxtLink>
        </div>
      </div>
    </nav>
  </header>

  <teleport to="body">
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
        class="md:hidden fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-lg shadow-xl flex flex-col space-y-2 px-4 py-4 overflow-x-hidden overflow-y-auto z-50"
        :style="{ paddingTop: `${headerHeight + 16}px`, maxHeight: '100vh' }"
      >
        <div class="w-full flex flex-col space-y-2">
          <template v-for="link in navLinks" :key="link.name">
            <!-- Lien avec sous-menu (accordéon mobile) -->
            <div v-if="link.children">
              <button
                @click="isMobileDropdownOpen = !isMobileDropdownOpen"
                class="w-full flex items-center justify-between text-gray-700 hover:text-black font-medium transition-colors py-2 px-4 hover:bg-gray-50 rounded-lg"
              >
                {{ link.name }}
                <ChevronDown :size="18" class="transition-transform duration-200" :class="isMobileDropdownOpen ? 'rotate-180' : ''" />
              </button>
              <div v-show="isMobileDropdownOpen" class="pl-4 mt-1 space-y-1">
                <NuxtLink
                  v-for="child in link.children"
                  :key="child.path"
                  :to="child.path"
                  @click="toggleMenu"
                  class="block text-gray-600 hover:text-black font-medium transition-colors py-2 px-4 hover:bg-gray-50 rounded-lg"
                  active-class="text-black font-semibold bg-gray-100"
                >
                  {{ child.name }}
                </NuxtLink>
              </div>
            </div>
            <!-- Lien simple -->
            <NuxtLink
              v-else
              :to="link.path"
              @click="toggleMenu"
              class="text-gray-700 hover:text-black font-medium transition-colors py-2 px-4 hover:bg-gray-50 rounded-lg"
              active-class="text-black font-semibold bg-gray-100"
            >
              {{ link.name }}
            </NuxtLink>
          </template>
          <NuxtLink
            v-if="cartStore.itemCount > 0"
            to="/cart"
            @click="toggleMenu"
            class="flex items-center space-x-2 text-gray-700 hover:text-black font-medium transition-colors py-2 px-4 hover:bg-gray-50 rounded-lg"
          >
            <ShoppingCart :size="20" />
            <span>Panier ({{ cartStore.itemCount }})</span>
          </NuxtLink>

          <NuxtLink
            to="/contact"
            @click="toggleMenu"
            class="btn-secondary mt-2 justify-center"
          >
            Demander un devis
          </NuxtLink>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script setup lang="ts">
import { Menu, X, ShoppingCart, ChevronDown } from 'lucide-vue-next'
import { useCartStore } from '~/stores/cart'

const cartStore = useCartStore()
const isMenuOpen = ref(false)
const isScrolled = ref(false)
const isMobileDropdownOpen = ref(false)
const headerHeight = ref(64)
const headerRef = ref<HTMLElement | null>(null)

interface NavChild {
  name: string
  path: string
}
interface NavLink {
  name: string
  path?: string
  children?: NavChild[]
}

const navLinks: NavLink[] = [
  {
    name: 'Création de site internet',
    children: [
      { name: 'Site internet sur-mesure', path: '/creation-site-internet-equestre' },
      { name: 'Site internet avec template', path: '/creation-template-site-internet-equestre' },
    ],
  },
  { name: 'Les templates', path: '/template-site-internet-equestre' },
  { name: 'Contact', path: '/contact' },
]

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  if (isMenuOpen.value && headerRef.value) {
    headerHeight.value = headerRef.value.offsetHeight
  }
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
