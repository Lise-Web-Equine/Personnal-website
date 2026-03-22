<template>
  <NuxtLayout>
    <div class="container mx-auto px-6 py-20">
      <h1 class="text-3xl font-bold mb-8">Test Email Resend</h1>
      
      <div class="bg-white rounded-lg shadow-lg p-6 mb-6">
        <h2 class="text-xl font-semibold mb-4">Environment Variables</h2>
        <div class="space-y-2">
          <p><strong>RESEND_API_KEY:</strong> {{ resendKey || 'Not found' }}</p>
          <p><strong>RESEND_FROM_EMAIL:</strong> {{ fromEmail || 'Not found' }}</p>
          <p><strong>RESEND_AUDIENCE_ID:</strong> {{ audienceId || 'Not found' }}</p>
          <p><strong>RESEND_CONFIRMATION_TEMPLATE_ID:</strong> {{ templateId || 'Not found' }}</p>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow-lg p-6">
        <h2 class="text-xl font-semibold mb-4">Test Email Sending</h2>
        <div class="space-y-4">
          <input 
            v-model="testEmail" 
            type="email" 
            placeholder="votre@email.com" 
            class="w-full px-4 py-2 border rounded-lg"
          />
          <button 
            @click="testEmailSending" 
            :disabled="!testEmail || loading"
            class="bg-blue-500 text-white px-6 py-3 rounded-lg disabled:opacity-50"
          >
            {{ loading ? 'Envoi...' : 'Tester email' }}
          </button>
        </div>
        
        <div v-if="result" class="mt-4">
          <pre class="bg-gray-100 p-4 rounded">{{ JSON.stringify(result, null, 2) }}</pre>
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

const config = ref<any>(null)
const resendKey = ref('Loading...')
const fromEmail = ref('Loading...')
const audienceId = ref('Loading...')
const templateId = ref('Loading...')

// Charger la configuration Resend uniquement
onMounted(async () => {
  try {
    const resendConfig = await $fetch('/api/resend/config') as any
    
    config.value = resendConfig
    
    resendKey.value = resendConfig.resendApiKey
    fromEmail.value = resendConfig.resendFromEmail
    audienceId.value = resendConfig.resendAudienceId
    templateId.value = resendConfig.resendConfirmationTemplateId
  } catch (error) {
    console.error('Error loading Resend config:', error)
    resendKey.value = 'Error loading config'
    fromEmail.value = 'Error'
    audienceId.value = 'Error'
    templateId.value = 'Error'
  }
})

const testEmail = ref('')
const loading = ref(false)
const result = ref<any>(null)

const testEmailSending = async () => {
  loading.value = true
  result.value = null
  
  try {
    const response = await $fetch('/api/resend/test', {
      method: 'POST',
      body: {
        to: testEmail.value
      }
    })
    result.value = { success: true, response }
  } catch (error: any) {
    result.value = { success: false, error: error.message }
  } finally {
    loading.value = false
  }
}
</script>
