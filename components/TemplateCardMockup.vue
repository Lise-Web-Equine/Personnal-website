<template>
  <div class="relative">
    <!-- Badge ancré sur la bordure -->
    <div v-if="template.badge" class="absolute -top-3 right-4 sm:right-6 z-10">
      <Badge
        variant="minimal"
        :text="template.badge === 'best-seller' ? 'Best-seller' : 'Nouveau'"
        class="shadow-md transform hover:scale-105 transition-all duration-200"
      />
    </div>

    <!-- Unified Card -->
    <NuxtLink :to="`/boutique/${template.id}`" class="block">
      <div class="bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 hover:scale-[1.02] transform cursor-pointer" v-motion-slide-visible-once-bottom>
        <!-- Article Section -->
        <article class="border-b border-gray-100">
          <!-- Mockup Frame -->
          <div class="relative bg-gray-50 overflow-hidden">
            <!-- Browser Header -->
            <div class="h-5 sm:h-6 bg-white border-b border-gray-200 flex items-center justify-between px-2 sm:px-3">
              <div class="flex items-center space-x-1 sm:space-x-1.5">
                <div class="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-primary-300 rounded-full"></div>
                <div class="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-primary-300 rounded-full"></div>
                <div class="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-primary-300 rounded-full"></div>
              </div>
            </div>
            
            <!-- Screen -->
            <div class="relative" style="aspect-ratio: 16/10;">
              <img
                :src="template.image"
                :alt="template.name"
                class="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </article>
        
        <!-- Card Footer -->
        <div class="bg-gradient-to-br from-white to-secondary-50 p-3 sm:p-4 relative overflow-hidden">
          <!-- Subtle background decoration -->
          <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-100 to-transparent opacity-30 rounded-full -mr-16 -mt-16"></div>
          
          <!-- Title Section -->
          <div class="flex flex-col gap-1.5 sm:gap-2 mb-2 sm:mb-3 relative z-10">
            <h3 class="text-xs sm:text-sm font-bold text-secondary-900 leading-tight">
              {{ template.name }}
            </h3>
            <div class="flex flex-wrap gap-1">
              <span 
                v-for="tag in template.tags.slice(0, 3)" 
                :key="tag"
                class="text-[10px] sm:text-xs font-semibold text-secondary-600 bg-secondary-100 px-1.5 sm:px-2 py-0.5 rounded"
              >
                {{ tag }}
              </span>
            </div>
          </div>
          
          <!-- Price and Button Section -->
          <div class="flex items-center justify-between gap-2 sm:gap-3 relative z-10">
            <div>
              <div class="text-lg sm:text-2xl font-bold text-secondary-900">
                {{ template.price }}€
              </div>
              <div v-if="template.promo" class="text-[10px] sm:text-xs text-red-600 font-medium bg-red-50 px-1 sm:px-1.5 py-0.5 rounded inline-block mt-0.5 sm:mt-1">
                -{{ template.promo }}%
              </div>
            </div>
            
            <NuxtLink
              :to="`/boutique/${template.id}`"
              class="btn-secondary text-xs sm:text-sm px-3 py-2 sm:px-4 sm:py-2.5 whitespace-nowrap"
              @click.stop
            >
              <span class="hidden sm:inline">Voir les détails</span>
              <span class="sm:hidden">Détails</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { ShoppingCart, Clock, Star, ArrowRight, CheckCircle } from 'lucide-vue-next'
import { useCartStore } from '~/stores/cart'
import type { Template } from '~/models'

const props = defineProps<{
  template: Template & { delivery_time?: string }
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
