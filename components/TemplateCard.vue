<template>
  <div
    class="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100"
    v-motion-slide-visible-once-bottom
  >
    <div class="relative overflow-hidden aspect-video bg-gray-100">
      <img
        :src="template.image_url"
        :alt="template.name"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div class="absolute top-4 right-4 flex gap-2">
        <span
          v-if="template.is_featured"
          class="bg-black text-white text-xs font-semibold px-3 py-1 rounded-full"
        >
          Featured
        </span>
      </div>
    </div>

    <div class="p-6">
      <div class="flex items-start justify-between mb-3">
        <div>
          <span class="text-sm text-gray-500 uppercase tracking-wide font-medium">
            {{ template.category }}
          </span>
          <h3 class="text-xl font-bold mt-1 group-hover:text-gray-600 transition-colors">
            {{ template.name }}
          </h3>
        </div>
        <div class="flex items-center space-x-1 text-yellow-500">
          <Star :size="16" fill="currentColor" />
          <span class="text-sm font-semibold text-gray-900">{{ template.rating }}</span>
        </div>
      </div>

      <p class="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
        {{ template.description }}
      </p>

      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center text-sm text-gray-500 space-x-4">
          <span class="flex items-center">
            <Download :size="14" class="mr-1" />
            {{ template.downloads }}
          </span>
        </div>
        <span class="text-2xl font-bold">${{ template.price }}</span>
      </div>

      <div class="flex gap-2">
        <NuxtLink
          :to="`/templates/${template.id}`"
          class="flex-1 text-center px-4 py-2.5 bg-gray-100 text-black rounded-lg font-semibold hover:bg-gray-200 transition-colors"
        >
          View Details
        </NuxtLink>
        <button
          @click="handleAddToCart"
          :disabled="isInCart"
          class="flex-1 px-4 py-2.5 rounded-lg font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          :class="isInCart ? 'bg-green-100 text-green-700' : 'bg-black text-white hover:bg-gray-800'"
        >
          <ShoppingCart :size="16" class="mr-2" />
          {{ isInCart ? 'In Cart' : 'Add to Cart' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Star, Download, ShoppingCart } from 'lucide-vue-next'
import { useCartStore } from '~/stores/cart'
import type { Template } from '~/stores/cart'

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
