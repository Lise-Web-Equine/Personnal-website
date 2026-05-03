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
            <div class="flex justify-between items-center mb-6">
              <h2 class="text-2xl font-bold">Ajouter un modèle</h2>
              <button
                @click="showForm = !showForm"
                class="btn-primary"
              >
                {{ showForm ? 'Annuler' : 'Ajouter un modèle' }}
              </button>
            </div>

            <!-- Form -->
            <div v-if="showForm" class="space-y-6">
              <!-- Basic Info -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    Nom du modèle *
                  </label>
                  <input
                    v-model="newTemplate.name"
                    type="text"
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Ex: Horizon"
                  />
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    Spécialité *
                  </label>
                  <input
                    v-model="newTemplate.speciality"
                    type="text"
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Ex: Équin"
                  />
                </div>
              </div>

              <!-- Description -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Description *
                </label>
                <textarea
                  v-model="newTemplate.description"
                  rows="3"
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Description détaillée du modèle..."
                ></textarea>
              </div>

              <!-- Price, Demo URL and Download URL -->
              <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    Prix (€) *
                  </label>
                  <input
                    v-model="newTemplate.price"
                    type="number"
                    step="0.01"
                    min="0"
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="40.00"
                  />
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    URL de démonstration
                  </label>
                  <input
                    v-model="newTemplate.demo_url"
                    type="url"
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="https://exemple.com"
                  />
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    URL de téléchargement *
                  </label>
                  <input
                    v-model="newTemplate.download_url"
                    type="url"
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="https://carrd.co/build?template=xxx"
                  />
                </div>
              </div>

              <!-- Image Upload -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Image du modèle *
                </label>
                
                <div class="space-y-4">
                  <div class="flex items-center space-x-4">
                    <label class="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer">
                      <input
                        type="file"
                        accept="image/*"
                        @change="handleImageUpload"
                        class="hidden"
                      />
                      Choisir une image
                    </label>
                    <span class="text-sm text-gray-500">
                      {{ imageFile?.name || 'Aucun fichier sélectionné' }}
                    </span>
                  </div>
                  
                  <!-- Preview -->
                  <div v-if="imagePreview" class="mt-4">
                    <p class="text-sm font-medium text-gray-700 mb-2">Prévisualisation :</p>
                    <img
                      :src="imagePreview"
                      alt="Prévisualisation"
                      class="w-32 h-32 object-cover rounded-lg border border-gray-200"
                    />
                  </div>
                </div>
              </div>

              <!-- Features -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Fonctionnalités (une par ligne)
                </label>
                <textarea
                  v-model="featuresText"
                  rows="4"
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Prestation phare&#10;tarifs&#10;Expérience terrain&#10;..."
                ></textarea>
              </div>

              <!-- Tags -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Tags (séparés par des virgules)
                </label>
                <input
                  v-model="tagsText"
                  type="text"
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="equine, professionnel, bleu, confiance"
                />
              </div>

              <!-- Badge and Promo -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    Badge
                  </label>
                  <select
                    v-model="newTemplate.badge"
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option :value="null">Aucun</option>
                    <option value="best-seller">Best-seller</option>
                    <option value="new">Nouveau</option>
                  </select>
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    Promotion (%)
                  </label>
                  <input
                    v-model="newTemplate.promo"
                    type="number"
                    min="0"
                    max="100"
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="20"
                  />
                </div>
              </div>

              <!-- Form Actions -->
              <div class="flex justify-end space-x-4 pt-6 border-t border-gray-200">
                <button
                  @click="resetForm"
                  class="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Annuler
                </button>
                <button
                  @click="addNewTemplate"
                  :disabled="loading"
                  class="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span v-if="loading">Ajout en cours...</span>
                  <span v-else>Ajouter le modèle</span>
                </button>
              </div>
            </div>

            <!-- Quick Add Buttons -->
            <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                @click="addTemplates"
                :disabled="loading"
                class="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span v-if="loading">Ajout en cours...</span>
                <span v-else>Ajouter modèles de test</span>
              </button>
              <button
                @click="cleanTemplates"
                :disabled="loading"
                class="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span v-if="loading && cleaning">Suppression en cours...</span>
                <span v-else>Nettoyer la base</span>
              </button>
            </div>
          </div>

          <!-- Edit Template Section -->
          <div v-if="showEditForm" class="bg-white rounded-2xl p-8 shadow-sm mb-8">
            <div class="flex justify-between items-center mb-6">
              <h2 class="text-2xl font-bold">Modifier le modèle : {{ editingTemplate?.name }}</h2>
              <button
                @click="resetEditForm"
                class="btn-primary"
              >
                Annuler
              </button>
            </div>

            <!-- Edit Form -->
            <div class="space-y-6">
              <!-- Basic Info -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    Nom du modèle *
                  </label>
                  <input
                    v-model="editingTemplate.name"
                    type="text"
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Ex: Horizon"
                  />
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    Spécialité *
                  </label>
                  <input
                    v-model="editingTemplate.speciality"
                    type="text"
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Ex: Équin"
                  />
                </div>
              </div>

              <!-- Description -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Description *
                </label>
                <textarea
                  v-model="editingTemplate.description"
                  rows="3"
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Description détaillée du modèle..."
                ></textarea>
              </div>

              <!-- Price, Demo URL and Download URL -->
              <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    Prix (€) *
                  </label>
                  <input
                    v-model="editingTemplate.price"
                    type="number"
                    step="0.01"
                    min="0"
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="40.00"
                  />
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    URL de démonstration
                  </label>
                  <input
                    v-model="editingTemplate.demo_url"
                    type="url"
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="https://exemple.com"
                  />
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    URL de téléchargement *
                  </label>
                  <input
                    v-model="editingTemplate.download_url"
                    type="url"
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="https://carrd.co/build?template=xxx"
                  />
                </div>
              </div>

              <!-- Image Upload -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Image du modèle
                </label>
                
                <div class="space-y-4">
                  <!-- Current image preview -->
                  <div class="flex items-center space-x-4">
                    <img
                      :src="imagePreview || editingTemplate.image"
                      alt="Image actuelle"
                      class="w-20 h-20 object-cover rounded-lg border border-gray-200"
                    />
                    <div>
                      <p class="text-sm text-gray-600">Image actuelle</p>
                      <button
                        @click="imageFile = null; imagePreview = ''"
                        class="text-sm text-primary-600 hover:text-primary-700"
                      >
                        Changer l'image
                      </button>
                    </div>
                  </div>
                  
                  <!-- File Upload -->
                  <div class="flex items-center space-x-4">
                    <label class="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer">
                      <input
                        type="file"
                        accept="image/*"
                        @change="handleImageUpload"
                        class="hidden"
                      />
                      Choisir une nouvelle image
                    </label>
                    <span class="text-sm text-gray-500">
                      {{ imageFile?.name || 'Aucun fichier sélectionné' }}
                    </span>
                  </div>
                  
                  <!-- New preview -->
                  <div v-if="imagePreview && imagePreview !== editingTemplate.image" class="mt-4">
                    <p class="text-sm font-medium text-gray-700 mb-2">Nouvelle prévisualisation :</p>
                    <img
                      :src="imagePreview"
                      alt="Nouvelle prévisualisation"
                      class="w-32 h-32 object-cover rounded-lg border border-gray-200"
                    />
                  </div>
                </div>
              </div>

              <!-- Features -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Fonctionnalités (une par ligne)
                </label>
                <textarea
                  v-model="editFeaturesText"
                  rows="4"
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Prestation phare&#10;tarifs&#10;Expérience terrain&#10;..."
                ></textarea>
              </div>

              <!-- Tags -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Tags (séparés par des virgules)
                </label>
                <input
                  v-model="editTagsText"
                  type="text"
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="equine, professionnel, bleu, confiance"
                />
              </div>

              <!-- Badge and Promo -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    Badge
                  </label>
                  <select
                    v-model="editingTemplate.badge"
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option :value="null">Aucun</option>
                    <option value="best-seller">Best-seller</option>
                    <option value="new">Nouveau</option>
                  </select>
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    Promotion (%)
                  </label>
                  <input
                    v-model="editingTemplate.promo"
                    type="number"
                    min="0"
                    max="100"
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="20"
                  />
                </div>
              </div>

              <!-- Form Actions -->
              <div class="flex justify-end space-x-4 pt-6 border-t border-gray-200">
                <button
                  @click="resetEditForm"
                  class="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Annuler
                </button>
                <button
                  @click="updateTemplate"
                  :disabled="loading"
                  class="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span v-if="loading">Modification en cours...</span>
                  <span v-else>Mettre à jour</span>
                </button>
              </div>
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
                  <span v-if="template.badge" class="text-xs font-semibold px-2 py-1 bg-primary-100 text-primary-700 rounded-full">
                    {{ template.badge === 'best-seller' ? 'Best-seller' : 'Nouveau' }}
                  </span>
                  <span v-if="template.rating">⭐ {{ template.rating }}</span>
                </div>

                <div class="mt-3 pt-3 border-t border-gray-100">
                  <div class="flex gap-2">
                    <button
                      @click="startEditTemplate(template)"
                      class="flex-1 px-3 py-1 bg-blue-50 text-blue-600 rounded hover:bg-blue-100 transition-colors text-sm"
                    >
                      Modifier
                    </button>
                    <button
                      @click="deleteTemplate(template.id)"
                      class="flex-1 px-3 py-1 bg-red-50 text-red-600 rounded hover:bg-red-100 transition-colors text-sm"
                    >
                      Supprimer
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Legal Texts Management -->
          <div class="bg-white rounded-2xl p-8 shadow-sm mt-8">
            <div class="flex justify-between items-center mb-6">
              <h2 class="text-2xl font-bold">Textes légaux</h2>
            </div>

            <div v-if="legalLoading" class="text-center py-8">
              <div class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
              <p class="mt-2 text-gray-600">Chargement...</p>
            </div>

            <div v-else-if="legalTexts.length === 0" class="text-center py-8 text-gray-500">
              Aucun texte légal trouvé. Veuillez appliquer la migration Supabase.
            </div>

            <div v-else class="space-y-4">
              <div
                v-for="legalText in legalTexts"
                :key="legalText.key"
                class="border border-gray-200 rounded-lg p-4"
              >
                <div class="flex justify-between items-center mb-3">
                  <h3 class="font-semibold text-lg">{{ legalText.title }}</h3>
                  <button
                    @click="startEditLegalText(legalText)"
                    class="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors text-sm"
                  >
                    Modifier
                  </button>
                </div>
                <p class="text-sm text-gray-500">Dernière mise à jour : {{ new Date(legalText.updated_at).toLocaleDateString('fr-FR') }}</p>
              </div>
            </div>
          </div>

          <!-- Edit Legal Text Section -->
          <div v-if="showLegalEditForm" class="bg-white rounded-2xl p-8 shadow-sm mt-8">
            <div class="flex justify-between items-center mb-6">
              <h2 class="text-2xl font-bold">Modifier : {{ editingLegalText?.title }}</h2>
              <button
                @click="resetLegalEditForm"
                class="btn-primary"
              >
                Annuler
              </button>
            </div>

            <div class="space-y-6">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Contenu HTML *
                </label>
                <textarea
                  v-model="editingLegalContent"
                  rows="20"
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 font-mono text-sm"
                  placeholder="<h2>Titre</h2><p>Contenu...</p>"
                ></textarea>
                <p class="mt-2 text-sm text-gray-500">
                  Utilisez du HTML pour formater le contenu. Les liens doivent utiliser des chemins relatifs (ex: /politique-confidentialite).
                </p>
              </div>

              <div class="flex justify-end space-x-4 pt-6 border-t border-gray-200">
                <button
                  @click="resetLegalEditForm"
                  class="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Annuler
                </button>
                <button
                  @click="saveLegalText"
                  :disabled="legalSaving"
                  class="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span v-if="legalSaving">Sauvegarde en cours...</span>
                  <span v-else>Sauvegarder</span>
                </button>
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

// Import database types
import { Star, Download, ShoppingCart } from 'lucide-vue-next'
import { useCartStore } from '~/stores/cart'
import type { Template, TemplateUpdate, TemplateCreate } from '~/models'
import type { Database } from '~/types/database.types'

const supabase = useSupabaseClient<Database>()
const router = useRouter()
const user = useSupabaseUser()
type TemplateInsert = Database['public']['Tables']['templates']['Insert']

// Legal texts state
const legalTexts = ref<any[]>([])
const legalLoading = ref(false)
const showLegalEditForm = ref(false)
const editingLegalText = ref<any>(null)
const editingLegalContent = ref('')
const legalSaving = ref(false)

// Debug user role
console.log("Mon rôle actuel est :", user.value?.role)
console.log("Supabase client type:", typeof supabase)

const templates = ref<Template[]>([])
const loading = ref(false)
const cleaning = ref(false)
const message = ref('')
const success = ref(false)

// Form variables
const showForm = ref(false)
const showEditForm = ref(false)
const editingTemplate = ref<Template | null>(null)
const imageFile = ref<File | null>(null)
const imagePreview = ref<string>('')
const newTemplate = ref<TemplateCreate>({
  name: '',
  description: '',
  speciality: '',
  price: 0,
  image: '',
  demo_url: null,
  download_url: '',
  features: [],
  tags: [],
  badge: null,
  promo: null,
  rating: 0
})

// Computed properties for text areas
const featuresText = computed({
  get: () => newTemplate.value.features.join('\n'),
  set: (value: string) => {
    newTemplate.value.features = value.split('\n').filter(f => f.trim() !== '')
  }
})

const tagsText = computed({
  get: () => newTemplate.value.tags.join(', '),
  set: (value: string) => {
    newTemplate.value.tags = value.split(',').map(t => t.trim()).filter(t => t !== '')
  }
})

const editFeaturesText = computed({
  get: () => editingTemplate.value?.features?.join('\n') || '',
  set: (value: string) => {
    if (editingTemplate.value) {
      editingTemplate.value.features = value.split('\n').filter(f => f.trim() !== '')
    }
  }
})

const editTagsText = computed({
  get: () => editingTemplate.value?.tags?.join(', ') || '',
  set: (value: string) => {
    if (editingTemplate.value) {
      editingTemplate.value.tags = value.split(',').map(t => t.trim()).filter(t => t !== '')
    }
  }
})

// Image handling functions
const handleImageUpload = (event: Event) => {
  const file = (event.target as HTMLInputElement).files?.[0]
  if (file) {
    imageFile.value = file
    const reader = new FileReader()
    reader.onload = (e) => {
      imagePreview.value = e.target?.result as string
    }
    reader.readAsDataURL(file)
  }
}

const uploadImage = async (): Promise<string> => {
  if (!imageFile.value) {
    return newTemplate.value.image
  }
  
  // For now, we'll create a data URL from file
  // In a real app, you would upload to Supabase Storage
  const reader = new FileReader()
  
  return new Promise((resolve) => {
    reader.onload = (e) => {
      // Return data URL as image source
      const dataUrl = e.target?.result as string
      resolve(dataUrl)
    }
    reader.readAsDataURL(imageFile.value!)
  })
}

// Form functions
const resetForm = () => {
  newTemplate.value = {
    name: '',
    description: '',
    speciality: '',
    price: 0,
    image: '',
    demo_url: null,
    download_url: '',
    features: [],
    tags: [],
    badge: null,
    promo: null,
    rating: 0
  }
  imageFile.value = null
  imagePreview.value = ''
  showForm.value = false
}

const resetEditForm = () => {
  editingTemplate.value = null
  imageFile.value = null
  imagePreview.value = ''
  showEditForm.value = false
}

const startEditTemplate = (template: Template) => {
  editingTemplate.value = { ...template }
  imagePreview.value = template.image
  showEditForm.value = true
  showForm.value = false
}

const updateTemplate = async () => {
  if (!editingTemplate.value) {
    showMessage('Aucun modèle sélectionné pour la modification', false)
    return
  }

  loading.value = true
  message.value = ''
  
  try {
    // Upload image if file is provided
    const imageUrl = imageFile.value ? await uploadImage() : editingTemplate.value.image
    
    const templateToUpdate: TemplateUpdate = {
      name: editingTemplate.value.name,
      description: editingTemplate.value.description,
      speciality: editingTemplate.value.speciality,
      price: editingTemplate.value.price,
      image: imageUrl,
      demo_url: editingTemplate.value.demo_url,
      download_url: editingTemplate.value.download_url,
      features: editingTemplate.value.features,
      tags: editingTemplate.value.tags,
      badge: editingTemplate.value.badge,
      promo: editingTemplate.value.promo,
      rating: editingTemplate.value.rating,
      updated_at: new Date().toISOString()
    }
    
    const { error } = await supabase
      .from('templates')
      .update(templateToUpdate as any)
      .eq('id', editingTemplate.value.id)
    
    if (error) throw error
    
    showMessage('Modèle mis à jour avec succès !', true)
    resetEditForm()
    await refreshTemplates()
  } catch (error) {
    console.error('Error updating template:', error)
    showMessage('Erreur lors de la mise à jour du modèle', false)
  } finally {
    loading.value = false
  }
}

const addNewTemplate = async () => {
  if (!newTemplate.value.name || !newTemplate.value.description || !newTemplate.value.speciality) {
    showMessage('Veuillez remplir les champs obligatoires', false)
    return
  }

  // Check if image is provided
  if (!imageFile.value && !newTemplate.value.image) {
    showMessage('Veuillez fournir une image', false)
    return
  }

  loading.value = true
  message.value = ''
  
  try {
    // Upload image if file is provided
    const imageUrl = await uploadImage()
    
    const templateToInsert = {
      name: newTemplate.value.name,
      description: newTemplate.value.description,
      speciality: newTemplate.value.speciality,
      price: newTemplate.value.price,
      image: imageUrl,
      demo_url: newTemplate.value.demo_url,
      download_url: newTemplate.value.download_url,
      features: newTemplate.value.features,
      tags: newTemplate.value.tags,
      badge: newTemplate.value.badge,
      promo: newTemplate.value.promo,
      rating: newTemplate.value.rating
    }
    
    const { error } = await supabase
      .from('templates')
      .insert(templateToInsert as any)
    
    if (error) throw error
    
    showMessage('Modèle ajouté avec succès !', true)
    resetForm()
    await refreshTemplates()
  } catch (error) {
    console.error('Error adding template:', error)
    showMessage('Erreur lors de l\'ajout du modèle', false)
  } finally {
    loading.value = false
  }
}

// Load templates on mount
onMounted(() => {
  refreshTemplates()
  loadLegalTexts()
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
        description: 'Un modèle élégant et professionnel avec des couleurs apaisantes et une navigation intuitive. Idéal pour les praticiens qui souhaitent mettre en valeur leur expertise.',
        speciality: 'Équin',
        price: 40,
        image: 'https://images.unsplash.com/photo-1559826264-d554356bf5d6?w=800&h=600&fit=crop',
        demo_url: '#',
        download_url: 'https://carrd.co/build?template=horizon',
        features: ["Prestations phares & tarifs", "Expérience terrain", "Focus prestation technique", "Formulaire de contact", "Témoignages"],
        tags: ['equine', 'professionnel', 'bleu', 'confiance', 'technique'],
        badge: 'best-seller',
        promo: null,
        rating: 4.8
      },
      {
        name: 'Ancrage',
        description: 'Un modèle doux et naturel avec des tons terreux et une ambiance holistique. Parfait pour les approches bienveillantes et connectées.',
        speciality: 'Équin',
        price: 40,
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
        demo_url: '#',
        download_url: 'https://carrd.co/build?template=ancrage',
        features: ["Prestations phares & tarifs", "Bénéfices du soin", "Déroulement d'une séance", "Formulaire de contact", "Témoignages immersifs"],
        tags: ['equine', 'naturel', 'holistique', 'doux', 'apaisant'],
        badge: 'new',
        promo: 20,
        rating: 4.9
      }
    ]

    for (const templateData of templatesToAdd) {
      // Debug session before insert
      const session = await supabase.auth.getSession()
      console.log("Session before insert:", session)
      console.log("Session data:", session.data.session)
      console.log("Session user:", session.data.session?.user)
      
      // Create template without auto-generated fields
      const templateToInsert = {
        name: templateData.name,
        description: templateData.description,
        speciality: templateData.speciality,
        price: templateData.price,
        image: templateData.image,
        demo_url: templateData.demo_url,
        features: templateData.features,
        tags: templateData.tags,
        badge: templateData.badge,
        promo: templateData.promo,
        rating: templateData.rating
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

// Legal texts functions
const loadLegalTexts = async () => {
  legalLoading.value = true
  try {
    const { data, error } = await supabase
      .from('legal_texts')
      .select('*')
      .order('key')

    if (error) throw error
    legalTexts.value = data || []
  } catch (error) {
    console.error('Error loading legal texts:', error)
    showMessage('Erreur lors du chargement des textes légaux', false)
  } finally {
    legalLoading.value = false
  }
}

const startEditLegalText = (legalText: any) => {
  editingLegalText.value = legalText
  editingLegalContent.value = legalText.content
  showLegalEditForm.value = true
  showForm.value = false
  showEditForm.value = false
}

const resetLegalEditForm = () => {
  editingLegalText.value = null
  editingLegalContent.value = ''
  showLegalEditForm.value = false
}

const saveLegalText = async () => {
  if (!editingLegalText.value) {
    showMessage('Aucun texte légal sélectionné', false)
    return
  }

  legalSaving.value = true
  message.value = ''

  try {
    const { error } = await (supabase as any)
      .from('legal_texts')
      .update({
        content: editingLegalContent.value,
        updated_at: new Date().toISOString()
      })
      .eq('key', editingLegalText.value.key)

    if (error) throw error

    showMessage('Texte légal mis à jour avec succès !', true)
    resetLegalEditForm()
    await loadLegalTexts()
  } catch (error) {
    console.error('Error saving legal text:', error)
    showMessage('Erreur lors de la sauvegarde', false)
  } finally {
    legalSaving.value = false
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
