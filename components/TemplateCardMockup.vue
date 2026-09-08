<template>
  <div class="relative">

    <!-- Unified Card -->
    <NuxtLink :to="`/template-site-internet-equestre/${template.slug}`" class="block">
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
              <!-- Badges promo + statut, alignés sur la même ligne du header -->
              <div v-if="hasPromo(template) || template.badge" class="flex items-center gap-1">
                <Badge
                  v-if="hasPromo(template)"
                  variant="minimal-danger"
                  :text="`-${template.promo}%`"
                />
                <Badge
                  v-if="template.badge"
                  variant="minimal-plain"
                  :text="template.badge === 'best-seller' ? 'Best-seller' : 'Nouveau'"
                />
              </div>
            </div>
            
            <!-- Screen -->
            <div class="relative" style="aspect-ratio: 16/10;">
              <NuxtImg
                :src="template.image"
                :alt="`${template.name} site internet`"
                class="w-full h-full min-w-full min-h-full object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
            <div class="flex items-start justify-between gap-2">
              <h3 class="text-xs sm:text-sm font-bold text-secondary-900 leading-tight">
                {{ template.name }}
              </h3>
              <!-- Note issue des avis clients associés au template -->
              <div v-if="rating" class="flex items-center gap-0.5 text-yellow-500 flex-shrink-0">
                <Star :size="12" fill="currentColor" />
                <span class="text-[10px] sm:text-xs font-bold text-secondary-900">{{ rating.average }}</span>
              </div>
            </div>
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
              <!-- Prix promo : ancien prix barré à gauche, prix remisé à droite (même taille) -->
              <template v-if="hasPromo(template)">
                <div class="flex items-center gap-1.5 sm:gap-2">
                  <span class="text-sm sm:text-base text-secondary-400 line-through">
                    {{ formatPrice(template.price) }}
                  </span>
                  <span class="text-sm sm:text-base font-bold text-red-600">
                    {{ formatPrice(getFinalPrice(template)) }}
                  </span>
                </div>
              </template>
              <div v-else class="text-sm sm:text-base font-bold text-secondary-900">
                {{ formatPrice(template.price) }}
              </div>
            </div>
            
            <NuxtLink
              :to="`/template-site-internet-equestre/${template.slug}`"
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

// Note agrégée issue des avis clients associés à ce template.
const { getRating } = useTemplateRatings()
const rating = computed(() => getRating(props.template.id))

const isInCart = computed(() => {
  return cartStore.cartItems.some(item => item.template.id === props.template.id)
})

const handleAddToCart = () => {
  if (!isInCart.value) {
    cartStore.addToCart(props.template)
  }
}
</script>
