<template>
  <NuxtLayout>
    <div class="container mx-auto px-6 py-20">
      <h1 class="text-3xl font-bold mb-8">Test Email Confirmation</h1>
      
      <div class="space-y-6">
        <div class="bg-white rounded-lg shadow-lg p-6">
          <h2 class="text-xl font-semibold mb-4">Test API Email Confirmation</h2>
          <div class="space-y-4">
            <input 
              v-model="testEmail" 
              type="email" 
              placeholder="email@test.com" 
              class="w-full px-4 py-2 border rounded-lg"
            />
            <button 
              @click="testSimpleEmail" 
              :disabled="!testEmail || loading"
              class="bg-green-500 text-white px-6 py-3 rounded-lg disabled:opacity-50 mr-4"
            >
              {{ loading ? 'Test...' : 'Tester email simple' }}
            </button>
            
            <input 
              v-model="testSessionId" 
              type="text" 
              placeholder="cs_test_..." 
              class="w-full px-4 py-2 border rounded-lg mt-4"
            />
            <button 
              @click="testConfirmationEmail" 
              :disabled="!testEmail || !testSessionId || loading"
              class="bg-blue-500 text-white px-6 py-3 rounded-lg disabled:opacity-50"
            >
              {{ loading ? 'Test...' : 'Tester email confirmation complet' }}
            </button>
          </div>
          
          <div v-if="result" class="mt-4">
            <pre class="bg-gray-100 p-4 rounded text-sm">{{ JSON.stringify(result, null, 2) }}</pre>
          </div>
        </div>
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
const testSessionId = ref('')
const loading = ref(false)
const result = ref<any>(null)

const testSimpleEmail = async () => {
  loading.value = true
  result.value = null
  
  try {
    const response = await $fetch('/api/email/simple', {
      method: 'POST',
      body: {
        email: testEmail.value
      }
    })
    result.value = { success: true, response }
  } catch (error: any) {
    result.value = { success: false, error: error.message, stack: error.stack }
  } finally {
    loading.value = false
  }
}

const testConfirmationEmail = async () => {
  loading.value = true
  result.value = null
  
  try {
    const response = await $fetch('/api/email/confirmation', {
      method: 'POST',
      body: {
        email: testEmail.value,
        sessionId: testSessionId.value
      }
    })
    result.value = { success: true, response }
  } catch (error: any) {
    result.value = { success: false, error: error.message, stack: error.stack }
  } finally {
    loading.value = false
  }
}
</script>
