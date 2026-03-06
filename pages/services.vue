<template>
  <NuxtLayout>
    <div class="bg-gray-50">
      <section class="bg-black text-white py-20">
        <div class="container mx-auto px-6">
          <div class="max-w-3xl" v-motion-slide-visible-once-bottom>
            <h1 class="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p class="text-xl text-gray-300 leading-relaxed">
              We offer comprehensive digital solutions from custom web development to premium ready-made templates
            </p>
          </div>
        </div>
      </section>

      <section class="py-20">
        <div class="container mx-auto px-6">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            <div
              v-for="(service, index) in mainServices"
              :key="index"
              class="bg-white rounded-2xl p-8 lg:p-12 shadow-sm hover:shadow-xl transition-shadow"
              v-motion-slide-visible-once-bottom
              :delay="index * 100"
            >
              <component :is="service.icon" :size="48" class="mb-6" />
              <h2 class="text-3xl font-bold mb-4">{{ service.title }}</h2>
              <p class="text-gray-600 text-lg mb-6 leading-relaxed">{{ service.description }}</p>
              <ul class="space-y-3 mb-8">
                <li v-for="feature in service.features" :key="feature" class="flex items-start">
                  <Check :size="20" class="mr-3 mt-1 text-green-600 flex-shrink-0" />
                  <span class="text-gray-700">{{ feature }}</span>
                </li>
              </ul>
              <NuxtLink :to="service.link" class="btn-primary inline-flex items-center">
                {{ service.cta }}
                <ArrowRight :size="20" class="ml-2" />
              </NuxtLink>
            </div>
          </div>

          <div class="mb-16" v-motion-slide-visible-once-bottom>
            <h2 class="text-4xl font-bold text-center mb-4">Additional Services</h2>
            <p class="text-xl text-gray-600 text-center mb-12">
              Comprehensive solutions for your digital needs
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              v-for="(service, index) in additionalServices"
              :key="index"
              class="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow"
              v-motion-slide-visible-once-bottom
              :delay="index * 100"
            >
              <component :is="service.icon" :size="40" class="mb-4 text-black" />
              <h3 class="text-xl font-bold mb-3">{{ service.title }}</h3>
              <p class="text-gray-600 leading-relaxed">{{ service.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="py-20 bg-black text-white">
        <div class="container mx-auto px-6 text-center">
          <div class="max-w-3xl mx-auto" v-motion-slide-visible-once-bottom>
            <h2 class="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p class="text-xl text-gray-300 mb-10">
              Let's discuss your project and find the perfect solution for your needs
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <NuxtLink to="/contact" class="btn-primary bg-white text-black hover:bg-gray-100">
                Get in Touch
              </NuxtLink>
              <NuxtLink to="/templates" class="btn-secondary text-white border-white hover:bg-white/10">
                Browse Templates
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { Code, ShoppingBag, Palette, Zap, Search, Smartphone, Database, Check, ArrowRight } from 'lucide-vue-next'

const mainServices = [
  {
    icon: Code,
    title: 'Bespoke Web Development',
    description: 'Custom-built websites and web applications tailored to your exact specifications and business requirements.',
    features: [
      'Full-stack development with modern frameworks',
      'Custom design and functionality',
      'Scalable architecture and clean code',
      'Ongoing support and maintenance',
      'SEO optimization and performance tuning'
    ],
    cta: 'Request a Quote',
    link: '/contact'
  },
  {
    icon: ShoppingBag,
    title: 'Template Marketplace',
    description: 'Premium, ready-to-use website templates that can be deployed instantly and customized to match your brand.',
    features: [
      'Instant download and deployment',
      'Fully responsive and mobile-optimized',
      'Regular updates and improvements',
      'Comprehensive documentation',
      'Lifetime access and support'
    ],
    cta: 'Browse Templates',
    link: '/templates'
  }
]

const additionalServices = [
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces designed with your users in mind, ensuring optimal engagement and conversion rates.'
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Lightning-fast websites optimized for speed, Core Web Vitals, and search engine rankings.'
  },
  {
    icon: Search,
    title: 'SEO Services',
    description: 'Comprehensive SEO strategies to improve your search rankings and drive organic traffic to your site.'
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Native and progressive web apps that provide seamless experiences across all devices and platforms.'
  },
  {
    icon: Database,
    title: 'Backend Development',
    description: 'Robust server-side solutions, APIs, and database architecture for complex web applications.'
  },
  {
    icon: Code,
    title: 'Technical Consulting',
    description: 'Expert guidance on technology choices, architecture decisions, and development best practices.'
  }
]
</script>
