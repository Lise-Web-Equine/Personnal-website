<template>
  <NuxtLayout>
    <div class="bg-gray-50 min-h-screen">
      <div v-if="loading" class="container mx-auto px-6 py-20">
        <div class="text-center">
          <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
        </div>
      </div>

      <div v-else-if="!template" class="container mx-auto px-6 py-20 text-center">
        <h1 class="text-3xl font-bold mb-4">Template Not Found</h1>
        <NuxtLink to="/templates" class="btn-primary">
          Back to Templates
        </NuxtLink>
      </div>

      <div v-else>
        <section class="bg-white py-12">
          <div class="container mx-auto px-6">
            <div class="mb-6">
              <NuxtLink to="/templates" class="inline-flex items-center text-gray-600 hover:text-black">
                <ArrowLeft :size="20" class="mr-2" />
                Back to Templates
              </NuxtLink>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div v-motion-slide-visible-once-left>
                <div class="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    :src="template.image_url"
                    :alt="template.name"
                    class="w-full h-auto"
                  />
                </div>
              </div>

              <div v-motion-slide-visible-once-right>
                <div class="flex items-center space-x-2 mb-4">
                  <span class="text-sm text-gray-500 uppercase tracking-wide font-medium">
                    {{ template.category }}
                  </span>
                  <span v-if="template.is_featured" class="bg-black text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Featured
                  </span>
                </div>

                <h1 class="text-4xl md:text-5xl font-bold mb-4">{{ template.name }}</h1>

                <div class="flex items-center space-x-6 mb-6">
                  <div class="flex items-center space-x-2">
                    <div class="flex items-center text-yellow-500">
                      <Star :size="20" fill="currentColor" />
                      <span class="ml-1 text-lg font-semibold text-gray-900">{{ template.rating }}</span>
                    </div>
                  </div>
                  <div class="flex items-center text-gray-600">
                    <Download :size="18" class="mr-1" />
                    <span>{{ template.downloads }} downloads</span>
                  </div>
                </div>

                <p class="text-xl text-gray-600 mb-8 leading-relaxed">
                  {{ template.description }}
                </p>

                <div class="bg-gray-50 rounded-xl p-6 mb-8">
                  <div class="text-4xl font-bold mb-2">${{ template.price }}</div>
                  <p class="text-gray-600 text-sm">One-time payment, lifetime access</p>
                </div>

                <div class="flex gap-4 mb-8">
                  <button
                    @click="handleAddToCart"
                    :disabled="isInCart"
                    class="flex-1 btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ShoppingCart :size="20" class="mr-2" />
                    {{ isInCart ? 'Already in Cart' : 'Add to Cart' }}
                  </button>
                  <a
                    v-if="template.demo_url && template.demo_url !== '#'"
                    :href="template.demo_url"
                    target="_blank"
                    class="btn-secondary"
                  >
                    <ExternalLink :size="20" class="mr-2" />
                    Live Demo
                  </a>
                </div>

                <div class="border-t border-gray-200 pt-8">
                  <h3 class="text-xl font-bold mb-4">Features</h3>
                  <ul class="space-y-3">
                    <li
                      v-for="(feature, index) in template.features"
                      :key="index"
                      class="flex items-start"
                    >
                      <Check :size="20" class="mr-3 mt-0.5 text-green-600 flex-shrink-0" />
                      <span class="text-gray-700">{{ feature }}</span>
                    </li>
                  </ul>
                </div>

                <div class="border-t border-gray-200 pt-8 mt-8">
                  <h3 class="text-xl font-bold mb-4">Tags</h3>
                  <div class="flex flex-wrap gap-2">
                    <span
                      v-for="tag in template.tags"
                      :key="tag"
                      class="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                    >
                      {{ tag }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="py-16 bg-gray-50">
          <div class="container mx-auto px-6">
            <h2 class="text-3xl font-bold mb-8">Related Templates</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TemplateCard
                v-for="relatedTemplate in relatedTemplates"
                :key="relatedTemplate.id"
                :template="relatedTemplate"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ArrowLeft, Star, Download, ShoppingCart, ExternalLink, Check } from 'lucide-vue-next'
import { useCartStore } from '~/stores/cart'
import type { Template } from '~/stores/cart'

const route = useRoute()
const supabase = useSupabase()
const cartStore = useCartStore()

const loading = ref(true)
const template = ref<Template | null>(null)
const relatedTemplates = ref<Template[]>([])

const isInCart = computed(() => {
  if (!template.value) return false
  return cartStore.cartItems.some(item => item.template.id === template.value!.id)
})

const handleAddToCart = () => {
  if (template.value && !isInCart.value) {
    cartStore.addToCart(template.value)
  }
}

onMounted(async () => {
  try {
    const { data, error } = await supabase
      .from('templates')
      .select('*')
      .eq('id', route.params.id)
      .maybeSingle()

    if (error) throw error
    template.value = data

    if (data) {
      const { data: related } = await supabase
        .from('templates')
        .select('*')
        .eq('category', data.category)
        .neq('id', data.id)
        .limit(3)

      relatedTemplates.value = related || []
    }
  } catch (error) {
    console.error('Error fetching template:', error)
  } finally {
    loading.value = false
  }
})
</script>
