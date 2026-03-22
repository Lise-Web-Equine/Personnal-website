<template>
  <NuxtLayout>
    <div class="container mx-auto px-6 py-20">
      <h1 class="text-3xl font-bold mb-8">Test Webhook Stripe</h1>
      
      <div class="bg-white rounded-lg shadow-lg p-6 mb-6">
        <h2 class="text-xl font-semibold mb-4">Simuler un webhook Stripe</h2>
        <div class="space-y-4">
          <input 
            v-model="testEmail" 
            type="email" 
            placeholder="email@test.com" 
            class="w-full px-4 py-2 border rounded-lg"
          />
          <button 
            @click="simulateWebhook" 
            :disabled="!testEmail || loading"
            class="bg-blue-500 text-white px-6 py-3 rounded-lg disabled:opacity-50"
          >
            {{ loading ? 'Envoi...' : 'Simuler webhook paiement' }}
          </button>
        </div>
        
        <div v-if="result" class="mt-4">
          <pre class="bg-gray-100 p-4 rounded text-sm">{{ JSON.stringify(result, null, 2) }}</pre>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow-lg p-6">
        <h2 class="text-xl font-semibold mb-4">Instructions</h2>
        <ol class="list-decimal list-inside space-y-2 text-gray-700">
          <li>Entrez une adresse email de test</li>
          <li>Cliquez sur "Simuler webhook paiement"</li>
          <li>Ça envoie les mêmes données qu'un vrai paiement Stripe</li>
          <li>Vérifiez que vous recevez l'email de confirmation</li>
          <li>Regardez les logs dans le terminal</li>
        </ol>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
// Restreindre aux admins
definePageMeta({ 
  middleware: 'auth'
})

const testEmail = ref('')
const loading = ref(false)
const result = ref<any>(null)

const simulateWebhook = async () => {
  loading.value = true
  result.value = null
  
  try {
    // Simuler les données d'un webhook Stripe
    const mockWebhookData = {
      type: 'checkout.session.completed',
      data: {
        object: {
          id: 'cs_test_' + Date.now(),
          customer_details: {
            email: testEmail.value,
            name: 'Test Customer'
          },
          metadata: {
            cart_items: JSON.stringify([
              {
                template: {
                  id: 'test-template-id',
                  name: 'Test Template',
                  price: 49
                },
                quantity: 1
              }
            ])
          }
        }
      }
    }

    const response = await $fetch('/api/stripe/webhook', {
      method: 'POST',
      body: mockWebhookData
    })

    result.value = { success: true, response }
  } catch (error: any) {
    result.value = { success: false, error: error.message }
  } finally {
    loading.value = false
  }
}
</script>
