<template>
  <NuxtLayout>
    <div class="bg-gray-50 min-h-screen">
      <section class="bg-black text-white py-16">
        <div class="container mx-auto px-6">
          <div class="max-w-3xl" v-motion-slide-visible-once-bottom>
            <h1 class="text-5xl font-bold mb-4">Template Store</h1>
            <p class="text-xl text-gray-300">
              Premium, ready-to-use website templates for every business need
            </p>
          </div>
        </div>
      </section>

      <section class="py-12">
        <div class="container mx-auto px-6">
          <div class="bg-white rounded-2xl p-6 mb-8 shadow-sm">
            <div class="flex flex-col lg:flex-row gap-4">
              <div class="flex-1 relative">
                <Search :size="20" class="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  v-model="searchQuery"
                  type="text"
                  placeholder="Search templates..."
                  class="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none"
                />
              </div>

              <select
                v-model="selectedCategory"
                class="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none bg-white"
              >
                <option value="">All Categories</option>
                <option v-for="cat in categories" :key="cat" :value="cat">
                  {{ formatCategory(cat) }}
                </option>
              </select>

              <select
                v-model="sortBy"
                class="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none bg-white"
              >
                <option value="featured">Featured</option>
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest</option>
              </select>
            </div>

            <div class="flex flex-wrap gap-2 mt-4">
              <button
                v-for="cat in categories"
                :key="cat"
                @click="selectedCategory = selectedCategory === cat ? '' : cat"
                class="px-4 py-2 rounded-full text-sm font-medium transition-all"
                :class="selectedCategory === cat ? 'bg-black text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"
              >
                {{ formatCategory(cat) }}
              </button>
            </div>
          </div>

          <div class="mb-6 text-gray-600">
            Showing {{ filteredTemplates.length }} of {{ templates.length }} templates
          </div>

          <div v-if="loading" class="text-center py-20">
            <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
          </div>

          <div v-else-if="filteredTemplates.length === 0" class="text-center py-20">
            <Package :size="64" class="mx-auto mb-4 text-gray-300" />
            <h3 class="text-2xl font-bold mb-2">No templates found</h3>
            <p class="text-gray-600 mb-6">Try adjusting your search or filters</p>
            <button
              @click="resetFilters"
              class="btn-primary"
            >
              Reset Filters
            </button>
          </div>

          <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TemplateCard
              v-for="template in filteredTemplates"
              :key="template.id"
              :template="template"
            />
          </div>
        </div>
      </section>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { Search, Package } from 'lucide-vue-next'
import type { Template } from '~/stores/cart'

const supabase = useSupabase()
const route = useRoute()

const loading = ref(true)
const templates = ref<Template[]>([])
const searchQuery = ref('')
const selectedCategory = ref(route.query.category as string || '')
const sortBy = ref('featured')

const categories = computed(() => {
  const cats = new Set(templates.value.map(t => t.category))
  return Array.from(cats).sort()
})

const filteredTemplates = computed(() => {
  let filtered = [...templates.value]

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(t =>
      t.name.toLowerCase().includes(query) ||
      t.description.toLowerCase().includes(query) ||
      t.tags.some(tag => tag.toLowerCase().includes(query))
    )
  }

  if (selectedCategory.value) {
    filtered = filtered.filter(t => t.category === selectedCategory.value)
  }

  switch (sortBy.value) {
    case 'featured':
      filtered.sort((a, b) => (b.is_featured ? 1 : 0) - (a.is_featured ? 1 : 0))
      break
    case 'popular':
      filtered.sort((a, b) => b.downloads - a.downloads)
      break
    case 'rating':
      filtered.sort((a, b) => b.rating - a.rating)
      break
    case 'price-low':
      filtered.sort((a, b) => a.price - b.price)
      break
    case 'price-high':
      filtered.sort((a, b) => b.price - a.price)
      break
    case 'newest':
      filtered.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
      break
  }

  return filtered
})

const formatCategory = (category: string) => {
  return category.charAt(0).toUpperCase() + category.slice(1)
}

const resetFilters = () => {
  searchQuery.value = ''
  selectedCategory.value = ''
  sortBy.value = 'featured'
}

onMounted(async () => {
  try {
    const { data, error } = await supabase
      .from('templates')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) throw error
    templates.value = data || []
  } catch (error) {
    console.error('Error fetching templates:', error)
  } finally {
    loading.value = false
  }
})

watch(() => route.query.category, (newCategory) => {
  if (newCategory) {
    selectedCategory.value = newCategory as string
  }
})
</script>
