<template>
  <div v-if="showEmailModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-white rounded-xl p-8 max-w-md w-full mx-4" v-motion-slide-visible-once-bottom>
      <h3 class="text-2xl font-bold mb-4">Finaliser votre commande</h3>
      <p class="text-gray-600 mb-6">
        Entrez votre email pour recevoir vos modèles et les guides inclus
      </p>
      
      <form @submit.prevent="handlePayment">
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Prénom *
          </label>
          <input
            v-model="firstName"
            type="text"
            required
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="Votre prénom"
          />
        </div>
        
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Email *
          </label>
          <input
            v-model="email"
            type="email"
            required
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="votre@email.com"
          />
        </div>
        
        <div class="mb-6">
          <label class="flex items-center">
            <input
              v-model="acceptNewsletter"
              type="checkbox"
              class="mr-2 rounded text-primary-500 focus:ring-primary-500"
            />
            <span class="text-sm text-gray-600">
              Je souhaite recevoir les nouveautés et offres exclusives
            </span>
          </label>
        </div>
        
        <div class="flex gap-4">
          <button
            type="button"
            @click="showEmailModal = false"
            class="flex-1 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Annuler
          </button>
          <button
            type="submit"
            :disabled="isLoading"
            class="flex-1 btn-primary"
          >
            <CreditCard :size="20" class="mr-2" />
            {{ isLoading ? 'Traitement...' : 'Payer' }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CreditCard } from 'lucide-vue-next'

const showEmailModal = ref(false)
const firstName = ref('')
const email = ref('')
const acceptNewsletter = ref(true)
const isLoading = ref(false)

const cartStore = useCartStore()

const openPaymentModal = () => {
  showEmailModal.value = true
}

const handlePayment = async () => {
  if (!firstName.value || !email.value) return
  
  console.log('🚀 handlePayment appelé')
  console.log('- firstName:', firstName.value)
  console.log('- email:', email.value)
  console.log('- acceptNewsletter:', acceptNewsletter.value)
  console.log('- cartItems:', cartStore.cartItems)
  
  isLoading.value = true
  
  try {
    const body = {
      firstName: firstName.value,
      email: email.value,
      acceptNewsletter: acceptNewsletter.value,
      cartItems: cartStore.cartItems
    }
    
    console.log('📦 Body envoyé à API:', JSON.stringify(body, null, 2))
    
    const response = await $fetch('/api/stripe/create-session', {
      method: 'POST',
      body: body
    })
    
    console.log('✅ Réponse API:', response)
    
    if (response.url) {
      // Rediriger vers Stripe Checkout
      window.location.href = response.url
    }
  } catch (error) {
    console.error('❌ Erreur paiement:', error)
    console.error('❌ Détails erreur:', JSON.stringify(error, null, 2))
    // Afficher un message d'erreur
    alert('Une erreur est survenue. Veuillez réessayer.')
  } finally {
    isLoading.value = false
  }
}

defineExpose({
  openPaymentModal
})
</script>
