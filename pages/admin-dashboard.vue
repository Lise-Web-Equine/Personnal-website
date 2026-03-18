<template>
  <NuxtLayout>
    <div class="min-h-screen bg-gray-50 py-8">
      <div class="container mx-auto px-6">
        <div class="max-w-6xl mx-auto">
          <!-- Header -->
          <div class="bg-white rounded-2xl p-6 mb-8 shadow-sm">
            <div class="flex justify-between items-center">
              <div>
                <h1 class="text-3xl font-bold text-gray-900">Dashboard Admin</h1>
                <p class="text-gray-600 mt-2">Gestion des modèles et services</p>
              </div>
              <button
                @click="handleLogout"
                class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                Déconnexion
              </button>
            </div>
          </div>

          <!-- Add Templates Section -->
          <div class="bg-white rounded-2xl p-8 shadow-sm mb-8">
            <h2 class="text-2xl font-bold mb-6">Ajouter des modèles</h2>
            
            <div class="mb-6">
              <p class="text-gray-600 mb-4">
                Ajouter les modèles Horizon et Ancrage à la boutique.
              </p>
              <div class="bg-gray-100 border border-gray-200 rounded-lg p-4">
                <h3 class="font-semibold mb-2">Modèles à ajouter :</h3>
                <ul class="space-y-2 text-sm">
                  <li>• <strong>Horizon</strong> - Style Épuré • Calme • Professionnel (40€)</li>
                  <li>• <strong>Ancrage</strong> - Style Doux • Naturel • Holistique (40€)</li>
                </ul>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                @click="addTemplates"
                :disabled="loading"
                class="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span v-if="loading">Ajout en cours...</span>
                <span v-else>Ajouter les modèles</span>
              </button>

              <button
                @click="cleanTemplates"
                :disabled="loading"
                class="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span v-if="loading && cleaning">Suppression en cours...</span>
                <span v-else>Supprimer les autres modèles</span>
              </button>
            </div>
          </div>

          <!-- Templates List -->
          <div class="bg-white rounded-2xl p-8 shadow-sm">
            <div class="flex justify-between items-center mb-6">
              <h2 class="text-2xl font-bold">Modèles existants</h2>
              <button
                @click="refreshTemplates"
                :disabled="loading"
                class="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors disabled:opacity-50"
              >
                Actualiser
              </button>
            </div>

            <div v-if="loading && !templates.length" class="text-center py-8">
              <div class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
              <p class="mt-2 text-gray-600">Chargement...</p>
            </div>

            <div v-else-if="!templates.length" class="text-center py-8 text-gray-500">
              Aucun modèle trouvé
            </div>

            <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div
                v-for="template in templates"
                :key="template.id"
                class="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div class="flex justify-between items-start mb-3">
                  <h3 class="font-semibold text-lg">{{ template.name }}</h3>
                  <span class="text-2xl font-bold text-primary-600">{{ template.price }}€</span>
                </div>
                
                <p class="text-gray-600 text-sm mb-3 line-clamp-2">{{ template.description }}</p>
                
                <div class="flex flex-wrap gap-1 mb-3">
                  <span
                    v-for="tag in template.tags.slice(0, 3)"
                    :key="tag"
                    class="px-2 py-1 bg-gray-100 text-xs rounded-full"
                  >
                    {{ tag }}
                  </span>
                </div>

                <div class="flex justify-between items-center text-sm text-gray-500">
                  <span>{{ template.downloads }} téléchargements</span>
                  <span>⭐ {{ template.rating }}</span>
                </div>

                <div class="mt-3 pt-3 border-t border-gray-100">
                  <button
                    @click="deleteTemplate(template.id)"
                    class="w-full px-3 py-1 bg-red-50 text-red-600 rounded hover:bg-red-100 transition-colors text-sm"
                  >
                    Supprimer
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Messages -->
          <div v-if="message" class="mt-6 p-4 rounded-lg" :class="success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'">
            {{ message }}
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
})

const supabase = useSupabaseClient<Database>()
const router = useRouter()
const user = useSupabaseUser()

// Import database types
import type { Database } from '~/types/database.types'
import type { Template, TemplateCreate } from '~/models'
type TemplateInsert = Database['public']['Tables']['templates']['Insert']

// Debug user role
console.log("Mon rôle actuel est :", user.value?.role)
console.log("Supabase client type:", typeof supabase)

const templates = ref<Template[]>([])
const loading = ref(false)
const cleaning = ref(false)
const message = ref('')
const success = ref(false)

// Load templates on mount
onMounted(() => {
  refreshTemplates()
})

const refreshTemplates = async () => {
  loading.value = true
  try {
    const { data, error } = await supabase
      .from('templates')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) throw error
    templates.value = data || []
  } catch (error) {
    console.error('Error loading templates:', error)
    showMessage('Erreur lors du chargement des modèles', false)
  } finally {
    loading.value = false
  }
}

const addTemplates = async () => {
  loading.value = true
  message.value = ''
  
  try {
    const templatesToAdd: TemplateCreate[] = [
      {
        name: 'Horizon',
        description: 'Style Épuré • Calme • Professionnel. Un univers visuel basé sur des tons bleus apaisants. Idéal pour instaurer un climat de confiance immédiat et mettre en avant votre rigueur technique.',
        category: 'equine',
        price: 40.00,
        image_url: 'https://images.pexels.com/photos/1559387/pexels-photo-1559387.jpeg?auto=compress&cs=tinysrgb&w=800',
        demo_url: '#',
        features: ["Prestations phares & tarifs", "Expérience terrain", "Focus prestation technique", "Formulaire de contact", "Témoignages"],
        tags: ['equine', 'professionnel', 'bleu', 'confiance', 'technique'],
        is_featured: true,
        downloads: 0,
        rating: 0.0
      },
      {
        name: 'Ancrage',
        description: 'Style Doux • Naturel • Holistique. Une esthétique épurée et apaisante qui laisse place à l\'image et au ressenti, parfaite pour les approches globales et naturelles.',
        category: 'equine',
        price: 40.00,
        image_url: 'https://images.pexels.com/photos/1559387/pexels-photo-1559387.jpeg?auto=compress&cs=tinysrgb&w=800',
        demo_url: '#',
        features: ["Prestations phares & tarifs", "Bénéfices du soin", "Déroulement d'une séance", "Formulaire de contact", "Témoignages immersifs"],
        tags: ['equine', 'naturel', 'holistique', 'doux', 'apaisant'],
        is_featured: true,
        downloads: 0,
        rating: 0.0
      }
    ]

    for (const templateData of templatesToAdd) {
      // Debug session before insert
      const session = await supabase.auth.getSession()
      console.log("Session before insert:", session)
      console.log("Session data:", session.data.session)
      console.log("Session user:", session.data.session?.user)
      
      // Create template without auto-generated fields
      const templateToInsert: Partial<TemplateInsert> = {
        name: templateData.name,
        description: templateData.description,
        category: templateData.category,
        price: templateData.price,
        image_url: templateData.image_url,
        demo_url: templateData.demo_url,
        features: templateData.features,
        tags: templateData.tags,
        is_featured: templateData.is_featured,
        downloads: templateData.downloads || 0,
        rating: templateData.rating || 0
      }
      
      const { error } = await supabase
        .from('templates')
        .insert(templateToInsert as any)
      
      if (error) {
        console.error(`Error inserting template ${templateData.name}:`, error)
        throw error
      }
    }
    
    showMessage('Modèles Horizon et Ancrage ajoutés avec succès !', true)
    await refreshTemplates()
  } catch (error) {
    console.error('Error adding templates:', error)
    showMessage('Erreur lors de l\'ajout des modèles', false)
  } finally {
    loading.value = false
  }
}

const cleanTemplates = async () => {
  if (!confirm('Êtes-vous sûr de vouloir supprimer tous les modèles sauf Horizon et Ancrage ? Cette action est irréversible.')) {
    return
  }

  cleaning.value = true
  message.value = ''
  
  try {
    const { data: existingTemplates, error: fetchError } = await supabase
      .from('templates')
      .select('id, name')
      .returns<Template[]>()
    
    if (fetchError) throw fetchError

    const templatesToDelete = existingTemplates?.filter(
      template => template.name !== 'Horizon' && template.name !== 'Ancrage'
    ) || []

    if (templatesToDelete.length === 0) {
      showMessage('Aucun modèle à supprimer (seuls Horizon et Ancrage existent)', true)
      return
    }

    let deletedCount = 0
    for (const template of templatesToDelete) {
      const { error } = await supabase
        .from('templates')
        .delete()
        .eq('id', template.id)
      
      if (error) {
        console.error(`Error deleting template ${template.name}:`, error)
        continue
      }
      
      deletedCount++
    }

    showMessage(`${deletedCount} modèle(s) supprimé(s) avec succès !`, true)
    await refreshTemplates()
  } catch (error) {
    console.error('Error cleaning templates:', error)
    showMessage('Erreur lors de la suppression des modèles', false)
  } finally {
    cleaning.value = false
    loading.value = false
  }
}

const deleteTemplate = async (templateId: string) => {
  if (!confirm('Êtes-vous sûr de vouloir supprimer ce modèle ?')) {
    return
  }

  try {
    const { error } = await supabase
      .from('templates')
      .delete()
      .eq('id', templateId)
    
    if (error) throw error
    
    showMessage('Modèle supprimé avec succès', true)
    await refreshTemplates()
  } catch (error) {
    console.error('Error deleting template:', error)
    showMessage('Erreur lors de la suppression du modèle', false)
  }
}

const handleLogout = async () => {
  await supabase.auth.signOut()
  await navigateTo('/login')
}

const showMessage = (msg: string, isSuccess: boolean) => {
  message.value = msg
  success.value = isSuccess
  setTimeout(() => {
    message.value = ''
  }, 5000)
}
</script>
