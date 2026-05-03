<template>
  <NuxtLayout>
      <PageHeader 
        title="Contactez-moi"
        description="Discutons ensemble de votre projet et créons un site web qui vous ressemble"
      />

      <section class="py-12 sm:py-16 md:py-20">
        <div class="container mx-auto px-6">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
            <div class="lg:col-span-2">
              <div class="bg-white rounded-2xl p-6 sm:p-8 lg:p-12 shadow-sm" v-motion-slide-visible-once-left>
                <h2 class="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-secondary-900">Envoyez-moi un message</h2>

                <form @submit.prevent="handleSubmit" class="space-y-6">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label for="name" class="block text-sm font-semibold mb-2 text-secondary-700">Nom *</label>
                      <input
                        v-model="form.name"
                        type="text"
                        id="name"
                        required
                        class="w-full px-4 py-3 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label for="email" class="block text-sm font-semibold mb-2 text-secondary-700">Email *</label>
                      <input
                        v-model="form.email"
                        type="email"
                        id="email"
                        required
                        class="w-full px-4 py-3 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>


                  <div>
                    <label for="service" class="block text-sm font-semibold mb-2 text-secondary-700">Service souhaité *</label>
                    <select
                      v-model="form.service"
                      id="service"
                      required
                      class="w-full px-4 py-3 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none bg-white"
                    >
                      <option value="">Choisir un service</option>
                      <option value="studio">Le Studio (sur mesure)</option>
                      <option value="template">La Boutique (modèles)</option>
                      <option value="pack">Pack Sérénité</option>
                      <option value="other">Autre demande</option>
                    </select>
                  </div>


                  <div>
                    <label for="message" class="block text-sm font-semibold mb-2 text-secondary-700">Message *</label>
                    <textarea
                      v-model="form.message"
                      id="message"
                      rows="6"
                      required
                      class="w-full px-4 py-3 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none resize-none"
                      placeholder="Parlez-moi de votre projet..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    :disabled="submitting"
                    class="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send :size="20" class="mr-2" />
                    {{ submitting ? 'Envoi en cours...' : 'Envoyer le message' }}
                  </button>

                  <p v-if="submitMessage" class="text-center mt-4" :class="submitSuccess ? 'text-green-600' : 'text-red-600'">
                    {{ submitMessage }}
                  </p>
                </form>
              </div>
            </div>

            <div class="space-y-6">
              <div
                v-for="(contact, index) in contactInfo"
                :key="index"
                class="bg-white rounded-xl p-6 border border-secondary-200 shadow-sm"
                v-motion-slide-visible-once-right
                :delay="index * 100"
              >
                <component :is="contact.icon" :size="32" class="mb-4 text-primary-600" />
                <h3 class="font-bold text-lg mb-2 text-secondary-900">{{ contact.title }}</h3>
                <p class="text-secondary-600">{{ contact.value }}</p>
              </div>

              <div class="bg-secondary text-white rounded-xl p-6" v-motion-slide-visible-once-right :delay="300">
                <h3 class="font-bold text-lg mb-4">Horaires</h3>
                <div class="space-y-2 text-white/90">
                  <p>Lundi - Vendredi: 9h - 18h</p>
                  <p>Samedi: Sur rendez-vous</p>
                  <p>Dimanche: Fermé</p>
                </div>
              </div>

              <div class="bg-white rounded-xl p-6 border border-secondary-200 shadow-sm" v-motion-slide-visible-once-right :delay="400">
                <h3 class="font-bold text-lg mb-4 text-secondary-900">Retrouvez-moi</h3>
                <div class="flex space-x-4">
                  <a href="https://www.facebook.com/lisewebequine" target="_blank" rel="noopener noreferrer" class="w-10 h-10 bg-secondary-100 rounded-lg flex items-center justify-center hover:bg-primary-100 hover:text-primary-600 transition-colors text-secondary-600">
                    <Facebook :size="20" />
                  </a>
                  <a href="https://www.instagram.com/lisewebequine" target="_blank" rel="noopener noreferrer" class="w-10 h-10 bg-secondary-100 rounded-lg flex items-center justify-center hover:bg-primary-100 hover:text-primary-600 transition-colors text-secondary-600">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { Send, Mail, MapPin, Facebook } from 'lucide-vue-next'

const route = useRoute()

useHead({
  title: 'Contact - Lise Web Equine',
  meta: [
    { name: 'description', content: 'Contactez Lise Web Equine pour discuter de votre projet de site web. Studio sur mesure ou modèles prêts à l\'emploi pour les professionnels équins.' },
    { property: 'og:title', content: 'Contact - Lise Web Equine' },
    { property: 'og:description', content: 'Contactez Lise Web Equine pour discuter de votre projet de site web.' },
    { property: 'og:type', content: 'website' }
  ]
})

const form = ref({
  name: '',
  email: '',
  service: route.query.service as string || '',
  message: ''
})

const submitting = ref(false)
const submitMessage = ref('')
const submitSuccess = ref(false)

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'contact@lisewebequine.com'
  },
  {
    icon: MapPin,
    title: 'Localisation',
    value: 'Angers'
  }
]

const handleSubmit = async () => {
  submitting.value = true
  submitMessage.value = ''

  try {
    await new Promise(resolve => setTimeout(resolve, 1500))

    submitSuccess.value = true
    submitMessage.value = 'Merci pour votre message ! Je vous répondrai dans les plus brefs délais.'

    form.value = {
      name: '',
      email: '',
      service: '',
      message: ''
    }

    setTimeout(() => {
      submitMessage.value = ''
    }, 5000)
  } catch (error) {
    submitSuccess.value = false
    submitMessage.value = 'Une erreur est survenue. Veuillez réessayer.'
  } finally {
    submitting.value = false
  }
}
</script>
