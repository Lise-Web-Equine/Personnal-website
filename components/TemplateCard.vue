<template>
  <article
    class="group bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-secondary-100"
    v-motion-slide-visible-once-bottom
  >
    <!-- Badge Section -->
    <div class="relative overflow-hidden aspect-[4/3] bg-secondary-100">
      <img
        :src="template.image"
        :alt="template.name"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
      <div class="absolute top-2 right-2 sm:top-4 sm:right-4 flex gap-2">
        <Badge
          v-if="template.badge"
          :variant="template.badge === 'best-seller' ? 'success' : 'warning'"
          :text="template.badge === 'best-seller' ? 'Best-seller' : 'Nouveau'"
          class="shadow-lg transform hover:scale-105 transition-all duration-200"
        />
      </div>
    </div>

    <!-- Content Section -->
    <div class="p-4 sm:p-5 md:p-6">
      <!-- Header -->
      <header class="flex items-start justify-between mb-3 sm:mb-4">
        <div>
          <span class="text-xs text-primary-500 uppercase tracking-wide font-bold">
            {{ template.name }}
          </span>
          <h3 class="text-lg sm:text-xl font-bold mt-1 group-hover:text-secondary-600 transition-colors">
            {{ template.name }}
          </h3>
        </div>
        <div v-if="template.rating" class="flex items-center space-x-1 text-yellow-500 flex-shrink-0">
          <Star :size="16" fill="currentColor" />
          <span class="text-sm font-bold text-secondary-900">{{ template.rating }}</span>
        </div>
      </header>

      <!-- Description -->
      <p class="text-secondary-600 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2 leading-relaxed">
        {{ template.description }}
      </p>

      <!-- Pricing Section -->
      <div class="flex items-center justify-between mb-3 sm:mb-4">
        <div class="flex items-center text-xs sm:text-sm text-secondary-500">
          <span v-if="template.promo" class="text-red-600 font-bold">
            -{{ template.promo }}%
          </span>
        </div>
        <div class="text-right">
          <span v-if="template.promo" class="text-xs sm:text-sm font-semibold text-secondary-500 line-through">
            {{ template.price }}€
          </span>
          <span class="text-xl sm:text-2xl font-extrabold text-secondary-900">
            {{ template.promo ? (template.price * (1 - template.promo / 100)).toFixed(2) : template.price }}€
          </span>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="flex flex-col sm:flex-row gap-2">
        <NuxtLink
          :to="`/boutique/${template.id}`"
          class="flex-1 text-center px-3 py-2 sm:px-4 sm:py-2.5 text-sm sm:text-base bg-secondary-100 text-secondary-900 rounded-lg font-semibold hover:bg-secondary-200 transition-colors focus:ring-2 focus:ring-secondary-300 focus:ring-offset-2"
        >
          Voir les détails
        </NuxtLink>
        <button
          @click="handleAddToCart"
          :disabled="isInCart"
          class="flex-1 px-3 py-2 sm:px-4 sm:py-2.5 text-sm sm:text-base rounded-lg font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          :class="isInCart ? 'bg-green-100 text-green-700 hover:bg-green-200' : 'bg-primary-500 text-white hover:bg-primary-600'"
        >
          <ShoppingCart :size="16" class="mr-2" />
          <span class="hidden sm:inline">{{ isInCart ? 'Déjà dans le panier' : 'Ajouter au panier' }}</span>
          <span class="sm:hidden">{{ isInCart ? 'Dans le panier' : 'Ajouter' }}</span>
        </button>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { Star, ShoppingCart } from 'lucide-vue-next'
import { useCartStore } from '~/stores/cart'
import type { Template } from '~/models'

const props = defineProps<{
  template: Template
}>()

const cartStore = useCartStore()

const isInCart = computed(() => {
  return cartStore.cartItems.some(item => item.template.id === props.template.id)
})

const handleAddToCart = () => {
  if (!isInCart.value) {
    cartStore.addToCart(props.template)
  }
}
</script>
