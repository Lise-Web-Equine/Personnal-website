<template>
  <NuxtLayout>
      <StudioHeader 
        title="Contactez-moi"
        description="Discutons de votre projet et donnons vie à votre vision digitale"
      />

      <section class="py-20">
        <div class="container mx-auto px-6">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div class="lg:col-span-2">
              <div class="bg-white rounded-2xl p-8 lg:p-12 shadow-sm" v-motion-slide-visible-once-left>
                <h2 class="text-3xl font-bold mb-8">Send us a message</h2>

                <form @submit.prevent="handleSubmit" class="space-y-6">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label for="name" class="block text-sm font-semibold mb-2">Name *</label>
                      <input
                        v-model="form.name"
                        type="text"
                        id="name"
                        required
                        class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label for="email" class="block text-sm font-semibold mb-2">Email *</label>
                      <input
                        v-model="form.email"
                        type="email"
                        id="email"
                        required
                        class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label for="company" class="block text-sm font-semibold mb-2">Company</label>
                    <input
                      v-model="form.company"
                      type="text"
                      id="company"
                      class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label for="service" class="block text-sm font-semibold mb-2">Service Interest *</label>
                    <select
                      v-model="form.service"
                      id="service"
                      required
                      class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none bg-white"
                    >
                      <option value="">Select a service</option>
                      <option value="bespoke">Bespoke Web Development</option>
                      <option value="template">Template Customization</option>
                      <option value="design">UI/UX Design</option>
                      <option value="consultation">Consultation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label for="budget" class="block text-sm font-semibold mb-2">Budget Range</label>
                    <select
                      v-model="form.budget"
                      id="budget"
                      class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none bg-white"
                    >
                      <option value="">Select a budget range</option>
                      <option value="under-5k">Under $5,000</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k-plus">$50,000+</option>
                    </select>
                  </div>

                  <div>
                    <label for="message" class="block text-sm font-semibold mb-2">Message *</label>
                    <textarea
                      v-model="form.message"
                      id="message"
                      rows="6"
                      required
                      class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none resize-none"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    :disabled="submitting"
                    class="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send :size="20" class="mr-2" />
                    {{ submitting ? 'Sending...' : 'Send Message' }}
                  </button>

                  <p v-if="submitMessage" class="text-center" :class="submitSuccess ? 'text-green-600' : 'text-red-600'">
                    {{ submitMessage }}
                  </p>
                </form>
              </div>
            </div>

            <div class="space-y-6">
              <div
                v-for="(contact, index) in contactInfo"
                :key="index"
                class="bg-white rounded-xl p-6"
                v-motion-slide-visible-once-right
                :delay="index * 100"
              >
                <component :is="contact.icon" :size="32" class="mb-4" />
                <h3 class="font-bold text-lg mb-2">{{ contact.title }}</h3>
                <p class="text-gray-600">{{ contact.value }}</p>
              </div>

              <div class="bg-black text-white rounded-xl p-6" v-motion-slide-visible-once-right :delay="300">
                <h3 class="font-bold text-lg mb-4">Business Hours</h3>
                <div class="space-y-2 text-gray-300">
                  <p>Monday - Friday: 9am - 6pm</p>
                  <p>Saturday: 10am - 4pm</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>

              <div class="bg-white rounded-xl p-6" v-motion-slide-visible-once-right :delay="400">
                <h3 class="font-bold text-lg mb-4">Follow Us</h3>
                <div class="flex space-x-4">
                  <a href="#" class="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                    <Twitter :size="20" />
                  </a>
                  <a href="#" class="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                    <Facebook :size="20" />
                  </a>
                  <a href="#" class="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                    <Linkedin :size="20" />
                  </a>
                  <a href="#" class="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                    <Github :size="20" />
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
import { Send, Mail, Phone, MapPin, Twitter, Facebook, Linkedin, Github } from 'lucide-vue-next'

const form = ref({
  name: '',
  email: '',
  company: '',
  service: '',
  budget: '',
  message: ''
})

const submitting = ref(false)
const submitMessage = ref('')
const submitSuccess = ref(false)

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'hello@lisewebequine.com'
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+1 (555) 123-4567'
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'San Francisco, CA 94102'
  }
]

const handleSubmit = async () => {
  submitting.value = true
  submitMessage.value = ''

  try {
    await new Promise(resolve => setTimeout(resolve, 1500))

    submitSuccess.value = true
    submitMessage.value = 'Thank you for your message! We\'ll get back to you soon.'

    form.value = {
      name: '',
      email: '',
      company: '',
      service: '',
      budget: '',
      message: ''
    }

    setTimeout(() => {
      submitMessage.value = ''
    }, 5000)
  } catch (error) {
    submitSuccess.value = false
    submitMessage.value = 'Something went wrong. Please try again.'
  } finally {
    submitting.value = false
  }
}
</script>
