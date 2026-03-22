<template>
  <NuxtLayout>
    <div class="container mx-auto px-6 py-20">
      <h1 class="text-3xl font-bold mb-8">Debug API Routes</h1>
      
      <div class="space-y-6">
        <!-- Test Supabase API -->
        <div class="bg-white rounded-lg shadow-lg p-6">
          <h2 class="text-xl font-semibold mb-4">Test /api/supabase/client</h2>
          <button @click="testSupabaseAPI" class="bg-blue-500 text-white px-4 py-2 rounded">
            Test Supabase API
          </button>
          <div v-if="supabaseResult" class="mt-4">
            <pre class="bg-gray-100 p-4 rounded text-sm">{{ JSON.stringify(supabaseResult, null, 2) }}</pre>
          </div>
        </div>

        <!-- Test Resend API -->
        <div class="bg-white rounded-lg shadow-lg p-6">
          <h2 class="text-xl font-semibold mb-4">Test /api/resend/config</h2>
          <button @click="testResendAPI" class="bg-green-500 text-white px-4 py-2 rounded">
            Test Resend API
          </button>
          <div v-if="resendResult" class="mt-4">
            <pre class="bg-gray-100 p-4 rounded text-sm">{{ JSON.stringify(resendResult, null, 2) }}</pre>
          </div>
        </div>

        <!-- Test Config API -->
        <div class="bg-white rounded-lg shadow-lg p-6">
          <h2 class="text-xl font-semibold mb-4">Test /api/config</h2>
          <button @click="testConfigAPI" class="bg-purple-500 text-white px-4 py-2 rounded">
            Test Config API
          </button>
          <div v-if="configResult" class="mt-4">
            <pre class="bg-gray-100 p-4 rounded text-sm">{{ JSON.stringify(configResult, null, 2) }}</pre>
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

const supabaseResult = ref<any>(null)
const resendResult = ref<any>(null)
const configResult = ref<any>(null)

const testSupabaseAPI = async () => {
  try {
    const response = await $fetch('/api/supabase/client')
    supabaseResult.value = { success: true, data: response }
  } catch (error: any) {
    supabaseResult.value = { success: false, error: error.message }
  }
}

const testResendAPI = async () => {
  try {
    const response = await $fetch('/api/resend/config')
    resendResult.value = { success: true, data: response }
  } catch (error: any) {
    resendResult.value = { success: false, error: error.message }
  }
}

const testConfigAPI = async () => {
  try {
    const response = await $fetch('/api/config')
    configResult.value = { success: true, data: response }
  } catch (error: any) {
    configResult.value = { success: false, error: error.message }
  }
}
</script>
