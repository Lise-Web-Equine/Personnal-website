<template>
  <NuxtLayout>
    <div class="bg-gray-50 min-h-screen">
      <StudioHeader 
        title="La boutique de modèles"
        description="Des modèles de sites web premium et prêts à l'emploi pour chaque besoin professionnel"
        badge="Nouveaux modèles disponibles"
      />

      <section class="py-12">
        <div class="container mx-auto px-6">
          <div class="mb-6 text-gray-600">
            Affichage de {{ templates.length }} modèles
          </div>

          <div v-if="loading" class="text-center py-20">
            <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
          </div>

          <div v-else-if="templates.length === 0" class="text-center py-20">
            <Package :size="64" class="mx-auto mb-4 text-gray-300" />
            <h3 class="text-2xl font-bold mb-2">Aucun modèle trouvé</h3>
            <p class="text-gray-600">Revenez plus tard pour découvrir nos nouveaux modèles</p>
          </div>

          <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TemplateCard
              v-for="template in templates"
              :key="template.id"
              :template="template"
            />
          </div>
        </div>
      </section>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { Package } from 'lucide-vue-next'
import type { Template } from '~/models'

const supabase = useSupabase()

const loading = ref(true)
const templates = ref<Template[]>([])

onMounted(async () => {
  try {
    const { data, error } = await supabase
      .from('templates')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) throw error
    templates.value = data || []
  } catch (error) {
    console.error('Error fetching templates:', error)
  } finally {
    loading.value = false
  }
})
</script>
