<template>
  <div class="container mx-auto px-6 py-20">
    <h1 class="text-3xl font-bold mb-8">Test Supabase Connection</h1>
    
    <div class="bg-white rounded-lg shadow-lg p-6 mb-6">
      <h2 class="text-xl font-semibold mb-4">Environment Variables</h2>
      <div class="space-y-2">
        <p><strong>SUPABASE_URL:</strong> {{ supabaseUrl || 'Not found' }}</p>
        <p><strong>SUPABASE_KEY:</strong> {{ supabaseKey ? 'Present' : 'Not found' }}</p>
      </div>
    </div>

    <div class="bg-white rounded-lg shadow-lg p-6 mb-6">
      <h2 class="text-xl font-semibold mb-4">Connection Test</h2>
      <button @click="testConnection" class="bg-blue-500 text-white px-4 py-2 rounded">
        Test Connection
      </button>
      <div v-if="connectionResult" class="mt-4">
        <pre class="bg-gray-100 p-4 rounded">{{ JSON.stringify(connectionResult, null, 2) }}</pre>
      </div>
    </div>

    <div class="bg-white rounded-lg shadow-lg p-6">
      <h2 class="text-xl font-semibold mb-4">Templates Query Test</h2>
      <button @click="testTemplatesQuery" class="bg-green-500 text-white px-4 py-2 rounded">
        Test Templates Query
      </button>
      <div v-if="templatesResult" class="mt-4">
        <pre class="bg-gray-100 p-4 rounded">{{ JSON.stringify(templatesResult, null, 2) }}</pre>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Restreindre l'accès aux administrateurs uniquement
definePageMeta({ 
  middleware: 'auth'
})

const supabase = useSupabase()

const supabaseUrl = useRuntimeConfig().public.supabaseUrl
const supabaseKey = useRuntimeConfig().public.supabaseAnonKey

const connectionResult = ref<any>(null)
const templatesResult = ref<any>(null)

const testConnection = async () => {
  try {
    // Test simple connection
    const { data, error } = await supabase.from('templates').select('count').single()
    connectionResult.value = { data, error }
  } catch (err: any) {
    connectionResult.value = { error: err.message }
  }
}

const testTemplatesQuery = async () => {
  try {
    const { data, error } = await supabase
      .from('templates')
      .select('*')
      .limit(1)
    
    templatesResult.value = { 
      success: !error,
      data: data,
      error: error,
      count: data?.length || 0
    }
  } catch (err: any) {
    templatesResult.value = { error: err.message }
  }
}
</script>
