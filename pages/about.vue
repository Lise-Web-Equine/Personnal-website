<template>
  <NuxtLayout>
    <div class="bg-gray-50">
      <section class="bg-black text-white py-20">
        <div class="container mx-auto px-6">
          <div class="max-w-3xl" v-motion-slide-visible-once-bottom>
            <h1 class="text-5xl md:text-6xl font-bold mb-6">About Us</h1>
            <p class="text-xl text-gray-300 leading-relaxed">
              We're a digital agency passionate about creating exceptional web experiences
            </p>
          </div>
        </div>
      </section>

      <section class="py-20">
        <div class="container mx-auto px-6">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div v-motion-slide-visible-once-left>
              <h2 class="text-4xl font-bold mb-6">Our Mission</h2>
              <p class="text-lg text-gray-600 leading-relaxed mb-6">
                We believe every business deserves a powerful online presence. Whether you need a fully custom solution or want to get started quickly with a premium template, we're here to help you succeed in the digital world.
              </p>
              <p class="text-lg text-gray-600 leading-relaxed">
                Our hybrid approach combines the flexibility of bespoke development with the speed and affordability of ready-made templates, giving you the best of both worlds.
              </p>
            </div>
            <div class="bg-gray-200 aspect-square rounded-2xl" v-motion-slide-visible-once-right>
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team collaboration"
                class="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div
              v-for="(stat, index) in stats"
              :key="index"
              class="bg-white rounded-xl p-8 text-center"
              v-motion-slide-visible-once-bottom
              :delay="index * 100"
            >
              <div class="text-5xl font-bold mb-2">{{ stat.value }}</div>
              <div class="text-gray-600">{{ stat.label }}</div>
            </div>
          </div>

          <div class="mb-16" v-motion-slide-visible-once-bottom>
            <h2 class="text-4xl font-bold text-center mb-4">Our Values</h2>
            <p class="text-xl text-gray-600 text-center mb-12">
              What drives us every day
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div
              v-for="(value, index) in values"
              :key="index"
              class="bg-white rounded-xl p-8"
              v-motion-slide-visible-once-bottom
              :delay="index * 100"
            >
              <component :is="value.icon" :size="40" class="mb-4" />
              <h3 class="text-xl font-bold mb-3">{{ value.title }}</h3>
              <p class="text-gray-600 leading-relaxed">{{ value.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="py-20 bg-white">
        <div class="container mx-auto px-6">
          <div class="max-w-4xl mx-auto">
            <div class="text-center mb-16" v-motion-slide-visible-once-bottom>
              <h2 class="text-4xl font-bold mb-4">Why Choose Us?</h2>
              <p class="text-xl text-gray-600">
                We combine expertise, creativity, and dedication
              </p>
            </div>

            <div class="space-y-6">
              <div
                v-for="(reason, index) in reasons"
                :key="index"
                class="bg-gray-50 rounded-xl p-8 flex items-start space-x-6"
                v-motion-slide-visible-once-left
                :delay="index * 100"
              >
                <div class="flex-shrink-0">
                  <component :is="reason.icon" :size="32" class="text-black" />
                </div>
                <div>
                  <h3 class="text-xl font-bold mb-2">{{ reason.title }}</h3>
                  <p class="text-gray-600 leading-relaxed">{{ reason.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-20 bg-black text-white">
        <div class="container mx-auto px-6 text-center">
          <div class="max-w-3xl mx-auto" v-motion-slide-visible-once-bottom>
            <h2 class="text-4xl font-bold mb-6">Let's Work Together</h2>
            <p class="text-xl text-gray-300 mb-10">
              Ready to take your digital presence to the next level?
            </p>
            <NuxtLink to="/contact" class="btn-primary bg-white text-black hover:bg-gray-100 inline-flex items-center">
              Get in Touch
              <ArrowRight :size="20" class="ml-2" />
            </NuxtLink>
          </div>
        </div>
      </section>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { Target, Users, Zap, Heart, Award, Clock, Shield, Lightbulb, ArrowRight } from 'lucide-vue-next'

const stats = [
  { value: '500+', label: 'Projects Completed' },
  { value: '200+', label: 'Happy Clients' },
  { value: '50+', label: 'Premium Templates' }
]

const values = [
  {
    icon: Target,
    title: 'Quality First',
    description: 'We never compromise on quality. Every project receives our full attention and expertise.'
  },
  {
    icon: Users,
    title: 'Client-Focused',
    description: 'Your success is our success. We work closely with you to understand and achieve your goals.'
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'We stay ahead of trends and use cutting-edge technologies to deliver modern solutions.'
  },
  {
    icon: Heart,
    title: 'Passion',
    description: 'We love what we do, and it shows in every pixel, every line of code, and every interaction.'
  }
]

const reasons = [
  {
    icon: Award,
    title: 'Proven Expertise',
    description: 'Our team brings years of experience in web development, design, and digital strategy. We\'ve helped hundreds of businesses establish and grow their online presence.'
  },
  {
    icon: Clock,
    title: 'Fast Turnaround',
    description: 'Whether you choose a custom build or a template, we ensure quick delivery without sacrificing quality. Get your website up and running faster than you thought possible.'
  },
  {
    icon: Shield,
    title: 'Reliable Support',
    description: 'We don\'t disappear after launch. Our team provides ongoing support, maintenance, and updates to keep your website running smoothly.'
  },
  {
    icon: Lightbulb,
    title: 'Creative Solutions',
    description: 'We think outside the box to create unique solutions that set you apart from the competition. Your brand deserves to stand out.'
  }
]
</script>
