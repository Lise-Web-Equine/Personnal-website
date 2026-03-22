<template>
  <NuxtLayout>
    <div class="container mx-auto px-6 py-20">
      <h1 class="text-3xl font-bold mb-8">Test Session Stripe</h1>
      
      <div class="bg-white rounded-lg shadow-lg p-6">
        <div class="space-y-4">
          <input 
            v-model="sessionId" 
            type="text" 
            placeholder="cs_test_..." 
            class="w-full px-4 py-2 border rounded-lg"
          />
          <button 
            @click="testSession" 
            :disabled="!sessionId || loading"
            class="bg-blue-500 text-white px-6 py-3 rounded-lg disabled:opacity-50"
          >
            {{ loading ? 'Test...' : 'Tester session' }}
          </button>
        </div>
        
        <div v-if="result" class="mt-4">
          <pre class="bg-gray-100 p-4 rounded text-sm">{{ JSON.stringify(result, null, 2) }}</pre>
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

const sessionId = ref('')
const loading = ref(false)
const result = ref<any>(null)

const testSession = async () => {
  loading.value = true
  result.value = null
  
  try {
    const response = await $fetch(`/api/stripe/session/${sessionId}`)
    result.value = { success: true, response }
  } catch (error: any) {
    result.value = { success: false, error: error.message }
  } finally {
    loading.value = false
  }
}
</script>
