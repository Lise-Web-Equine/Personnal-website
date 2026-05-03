<template>
  <NuxtLayout>
    <PageHeader 
      title="Mentions légales"
      description="Informations légales relatives au site Lise Web Equine"
    />

    <section class="py-12 sm:py-16 md:py-20">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto">
          <div v-if="loading" class="text-center py-20">
            <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
          </div>

          <div v-else-if="legalText" class="bg-white rounded-2xl border border-secondary-200 p-8 sm:p-12" v-motion-slide-visible-once-bottom>
            <div class="prose prose-lg max-w-none" v-html="legalText.content"></div>
          </div>

          <div v-else class="text-center py-20 text-secondary-600">
            Chargement des mentions légales...
          </div>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>

<script setup lang="ts">
const supabase = useSupabaseClient()
const loading = ref(false)
const legalText = ref<any>(null)

onMounted(async () => {
  loading.value = true
  try {
    const { data, error } = await supabase
      .from('legal_texts')
      .select('*')
      .eq('key', 'mentions-legales')
      .single()

    if (error) throw error
    legalText.value = data
  } catch (error) {
    console.error('Error loading legal text:', error)
  } finally {
    loading.value = false
  }
})

useHead({
  title: 'Mentions légales - Lise Web Equine',
  meta: [
    { name: 'description', content: 'Mentions légales du site Lise Web Equine. Informations sur l\'éditeur, l\'hébergement et la protection des données.' }
  ]
})
</script>
