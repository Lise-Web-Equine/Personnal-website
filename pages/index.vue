<template>
  <NuxtLayout>
    <div class="relative">
      <section class="relative bg-gradient-to-b from-gray-50 to-white py-20 md:py-32 overflow-hidden">
        <div class="container mx-auto px-6">
          <div class="max-w-4xl mx-auto text-center" v-motion-slide-visible-once-bottom>
            <h1 class="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Transform Your Digital
              <span class="block bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Presence Today
              </span>
            </h1>
            <p class="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed">
              Premium web development services and ready-to-use templates for modern businesses.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <NuxtLink to="/templates" class="btn-primary">
                <ShoppingBag :size="20" class="mr-2" />
                Browse Templates
              </NuxtLink>
              <NuxtLink to="/contact" class="btn-secondary">
                <MessageSquare :size="20" class="mr-2" />
                Get Custom Quote
              </NuxtLink>
            </div>
          </div>
        </div>

        <div class="absolute top-1/2 left-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div class="absolute top-1/2 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </section>

      <section class="py-20 bg-white">
        <div class="container mx-auto px-6">
          <div class="text-center mb-16" v-motion-slide-visible-once-bottom>
            <h2 class="section-title mb-4">Our Services</h2>
            <p class="section-subtitle">
              Comprehensive digital solutions tailored to your needs
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              v-for="(service, index) in services"
              :key="index"
              class="group p-8 bg-gray-50 rounded-2xl hover:bg-black hover:text-white transition-all duration-300 cursor-pointer"
              v-motion-slide-visible-once-bottom
              :delay="index * 100"
            >
              <component :is="service.icon" :size="40" class="mb-6 text-black group-hover:text-white transition-colors" />
              <h3 class="text-2xl font-bold mb-4">{{ service.title }}</h3>
              <p class="text-gray-600 group-hover:text-gray-200 leading-relaxed">
                {{ service.description }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="py-20 bg-gray-50">
        <div class="container mx-auto px-6">
          <div class="flex justify-between items-end mb-12" v-motion-slide-visible-once-bottom>
            <div>
              <h2 class="section-title mb-4">Featured Templates</h2>
              <p class="section-subtitle text-left max-w-none">
                Ready-to-use, professionally designed templates
              </p>
            </div>
            <NuxtLink to="/templates" class="hidden md:inline-flex items-center text-black font-semibold hover:gap-2 transition-all">
              View All
              <ArrowRight :size="20" class="ml-1" />
            </NuxtLink>
          </div>

          <div v-if="loading" class="text-center py-20">
            <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
          </div>

          <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TemplateCard
              v-for="template in featuredTemplates"
              :key="template.id"
              :template="template"
            />
          </div>

          <div class="text-center mt-12 md:hidden">
            <NuxtLink to="/templates" class="btn-primary inline-flex items-center">
              View All Templates
              <ArrowRight :size="20" class="ml-2" />
            </NuxtLink>
          </div>
        </div>
      </section>

      <section class="py-20 bg-black text-white">
        <div class="container mx-auto px-6">
          <div class="max-w-4xl mx-auto text-center" v-motion-slide-visible-once-bottom>
            <h2 class="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p class="text-xl text-gray-300 mb-10">
              Whether you need a custom solution or a ready-made template, we're here to help.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <NuxtLink to="/contact" class="btn-primary bg-white text-black hover:bg-gray-100">
                Get Started
              </NuxtLink>
              <NuxtLink to="/templates" class="btn-secondary text-white border-white hover:bg-white/10">
                Explore Templates
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { Code, Palette, Zap, ShoppingBag, MessageSquare, ArrowRight } from 'lucide-vue-next'
import type { Template } from '~/stores/cart'

const supabase = useSupabase()
const loading = ref(true)
const featuredTemplates = ref<Template[]>([])

const services = [
  {
    icon: Code,
    title: 'Bespoke Development',
    description: 'Custom web applications built from scratch to match your unique requirements and brand identity.'
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces designed with your users in mind, ensuring optimal engagement.'
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Lightning-fast websites optimized for speed, SEO, and conversion rates.'
  }
]

onMounted(async () => {
  try {
    const { data, error } = await supabase
      .from('templates')
      .select('*')
      .eq('is_featured', true)
      .order('rating', { ascending: false })
      .limit(3)

    if (error) throw error
    featuredTemplates.value = data || []
  } catch (error) {
    console.error('Error fetching templates:', error)
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
@keyframes blob {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}
</style>
