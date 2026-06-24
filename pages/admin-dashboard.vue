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
                    Slug (URL) *
                  </label>
                  <input
                    v-model="newTemplate.slug"
                    type="text"
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Ex: horizon"
                    pattern="[a-z0-9-]+"
                    title="Uniquement des lettres minuscules, chiffres et tirets"
                  />
                  <p class="text-xs text-gray-500 mt-1">
                    Utilisé dans l'URL : /template-site-internet-equestre/{{ newTemplate.slug || 'votre-slug' }}
                  </p>
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-1 gap-6">
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

              <!-- Specialties -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Spécialités (une par ligne)
                </label>
                <textarea
                  v-model="specialtiesText"
                  rows="3"
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Ostéopathe équin&#10;Maréchal-ferrant&#10;Éleveur..."
                ></textarea>
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
                    v-model="editingTemplate!.name"
                    type="text"
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Ex: Horizon"
                  />
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    Slug (URL) *
                  </label>
                  <input
                    v-model="editingTemplate!.slug"
                    type="text"
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Ex: horizon"
                    pattern="[a-z0-9-]+"
                    title="Uniquement des lettres minuscules, chiffres et tirets"
                  />
                  <p class="text-xs text-gray-500 mt-1">
                    Utilisé dans l'URL : /template-site-internet-equestre/{{ editingTemplate?.slug || 'votre-slug' }}
                  </p>
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-1 gap-6">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    Spécialité *
                  </label>
                  <input
                    v-model="editingTemplate!.speciality"
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
                  v-model="editingTemplate!.description"
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

              <!-- Specialties -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Spécialités (une par ligne)
                </label>
                <textarea
                  v-model="editSpecialtiesText"
                  rows="3"
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Ostéopathe équin&#10;Maréchal-ferrant&#10;Éleveur..."
                ></textarea>
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

          <!-- Realisations Management (Social Proof) -->
          <div class="bg-white rounded-2xl p-8 shadow-sm mt-8">
            <div class="flex justify-between items-center mb-6">
              <div>
                <h2 class="text-2xl font-bold">Réalisations & témoignages</h2>
                <p class="text-gray-600 mt-1 text-sm">Preuve sociale affichée sur les pages templates</p>
              </div>
              <button
                @click="showRealisationForm = !showRealisationForm; showRealisationEditForm = false"
                class="btn-primary"
              >
                {{ showRealisationForm ? 'Annuler' : 'Ajouter une réalisation' }}
              </button>
            </div>

            <!-- Add Realisation Form -->
            <div v-if="showRealisationForm" class="space-y-6">
              <!-- Client identity -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Nom du client *</label>
                  <input
                    v-model="newRealisation.client_name"
                    type="text"
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Ex: Marie D."
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Profession équestre *</label>
                  <input
                    v-model="newRealisation.client_profession"
                    type="text"
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Ex: Ostéopathe équin"
                  />
                </div>
              </div>

              <!-- Type and linked template -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Type de réalisation *</label>
                  <select
                    v-model="newRealisation.type"
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="pack">Pack Sérénité (réalisé par moi)</option>
                    <option value="template">Template (personnalisé en autonomie)</option>
                  </select>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Template lié (optionnel)</label>
                  <select
                    v-model="newRealisation.template_id"
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option :value="null">Aucun</option>
                    <option v-for="t in templates" :key="t.id" :value="t.id">{{ t.name }}</option>
                  </select>
                </div>
              </div>

              <!-- Site URL -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">URL du site client (optionnel)</label>
                <input
                  v-model="newRealisation.site_url"
                  type="url"
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="https://nom-du-client.carrd.co"
                />
              </div>

              <!-- Quote -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Témoignage *</label>
                <textarea
                  v-model="newRealisation.quote"
                  rows="3"
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Le retour du client sur son site..."
                ></textarea>
              </div>

              <!-- Site image upload -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Capture du site *</label>
                <div class="flex items-center space-x-4">
                  <label class="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer">
                    <input type="file" accept="image/*" @change="handleSiteImageUpload" class="hidden" />
                    Choisir une image
                  </label>
                  <span class="text-sm text-gray-500">{{ siteImageFile?.name || 'Aucun fichier sélectionné' }}</span>
                </div>
                <div v-if="siteImagePreview" class="mt-4">
                  <img :src="siteImagePreview" alt="Prévisualisation du site" class="w-48 h-32 object-cover rounded-lg border border-gray-200" />
                </div>
              </div>

              <!-- Client photo upload -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Photo du client (optionnel)</label>
                <div class="flex items-center space-x-4">
                  <label class="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer">
                    <input type="file" accept="image/*" @change="handleClientPhotoUpload" class="hidden" />
                    Choisir une image
                  </label>
                  <span class="text-sm text-gray-500">{{ clientPhotoFile?.name || 'Aucun fichier sélectionné' }}</span>
                </div>
                <div v-if="clientPhotoPreview" class="mt-4">
                  <img :src="clientPhotoPreview" alt="Photo du client" class="w-20 h-20 object-cover rounded-full border border-gray-200" />
                </div>
              </div>

              <!-- Rating, order, featured -->
              <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Note (sur 5, optionnel)</label>
                  <input
                    v-model="newRealisation.rating"
                    type="number"
                    step="0.1"
                    min="0"
                    max="5"
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="5"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Ordre d'affichage</label>
                  <input
                    v-model="newRealisation.display_order"
                    type="number"
                    min="0"
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="0"
                  />
                </div>
                <div class="flex items-end">
                  <label class="inline-flex items-center gap-2 cursor-pointer">
                    <input v-model="newRealisation.featured" type="checkbox" class="w-4 h-4 text-primary-600 rounded focus:ring-primary-500" />
                    <span class="text-sm font-medium text-gray-700">Mettre en avant</span>
                  </label>
                </div>
              </div>

              <!-- Form Actions -->
              <div class="flex justify-end space-x-4 pt-6 border-t border-gray-200">
                <button
                  @click="resetRealisationForm"
                  class="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Annuler
                </button>
                <button
                  @click="addNewRealisation"
                  :disabled="realisationLoading"
                  class="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span v-if="realisationLoading">Ajout en cours...</span>
                  <span v-else>Ajouter la réalisation</span>
                </button>
              </div>
            </div>

            <!-- Edit Realisation Form -->
            <div v-else-if="showRealisationEditForm && editingRealisation" class="space-y-6">
              <h3 class="text-lg font-bold">Modifier : {{ editingRealisation.client_name }}</h3>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Nom du client *</label>
                  <input
                    v-model="editingRealisation.client_name"
                    type="text"
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Profession équestre *</label>
                  <input
                    v-model="editingRealisation.client_profession"
                    type="text"
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Type de réalisation *</label>
                  <select
                    v-model="editingRealisation.type"
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="pack">Pack Sérénité (réalisé par moi)</option>
                    <option value="template">Template (personnalisé en autonomie)</option>
                  </select>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Template lié (optionnel)</label>
                  <select
                    v-model="editingRealisation.template_id"
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option :value="null">Aucun</option>
                    <option v-for="t in templates" :key="t.id" :value="t.id">{{ t.name }}</option>
                  </select>
                </div>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">URL du site client (optionnel)</label>
                <input
                  v-model="editingRealisation.site_url"
                  type="url"
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Témoignage *</label>
                <textarea
                  v-model="editingRealisation.quote"
                  rows="3"
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                ></textarea>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Capture du site</label>
                <div class="flex items-center space-x-4">
                  <label class="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer">
                    <input type="file" accept="image/*" @change="handleSiteImageUpload" class="hidden" />
                    Changer l'image
                  </label>
                  <span class="text-sm text-gray-500">{{ siteImageFile?.name || 'Image actuelle conservée' }}</span>
                </div>
                <div v-if="siteImagePreview" class="mt-4">
                  <img :src="siteImagePreview" alt="Prévisualisation du site" class="w-48 h-32 object-cover rounded-lg border border-gray-200" />
                </div>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Photo du client (optionnel)</label>
                <div class="flex items-center space-x-4">
                  <label class="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer">
                    <input type="file" accept="image/*" @change="handleClientPhotoUpload" class="hidden" />
                    Changer la photo
                  </label>
                  <span class="text-sm text-gray-500">{{ clientPhotoFile?.name || 'Photo actuelle conservée' }}</span>
                </div>
                <div v-if="clientPhotoPreview" class="mt-4">
                  <img :src="clientPhotoPreview" alt="Photo du client" class="w-20 h-20 object-cover rounded-full border border-gray-200" />
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Note (sur 5, optionnel)</label>
                  <input
                    v-model="editingRealisation.rating"
                    type="number"
                    step="0.1"
                    min="0"
                    max="5"
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Ordre d'affichage</label>
                  <input
                    v-model="editingRealisation.display_order"
                    type="number"
                    min="0"
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                <div class="flex items-end">
                  <label class="inline-flex items-center gap-2 cursor-pointer">
                    <input v-model="editingRealisation.featured" type="checkbox" class="w-4 h-4 text-primary-600 rounded focus:ring-primary-500" />
                    <span class="text-sm font-medium text-gray-700">Mettre en avant</span>
                  </label>
                </div>
              </div>

              <div class="flex justify-end space-x-4 pt-6 border-t border-gray-200">
                <button
                  @click="resetRealisationEditForm"
                  class="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Annuler
                </button>
                <button
                  @click="updateRealisation"
                  :disabled="realisationLoading"
                  class="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span v-if="realisationLoading">Modification en cours...</span>
                  <span v-else>Mettre à jour</span>
                </button>
              </div>
            </div>

            <!-- Realisations List -->
            <div v-else>
              <div v-if="realisationLoading && !realisations.length" class="text-center py-8">
                <div class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
                <p class="mt-2 text-gray-600">Chargement...</p>
              </div>

              <div v-else-if="!realisations.length" class="text-center py-8 text-gray-500">
                Aucune réalisation pour le moment. Ajoutez votre première preuve sociale !
              </div>

              <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div
                  v-for="realisation in realisations"
                  :key="realisation.id"
                  class="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                >
                  <img :src="realisation.site_image" :alt="`Site de ${realisation.client_name}`" class="w-full h-40 object-cover" />
                  <div class="p-4">
                    <div class="flex items-center justify-between mb-2">
                      <span
                        class="text-xs font-semibold px-2 py-1 rounded-full"
                        :class="realisation.type === 'pack' ? 'bg-primary-100 text-primary-700' : 'bg-secondary-100 text-secondary-700'"
                      >
                        {{ realisation.type === 'pack' ? 'Pack Sérénité' : 'Template' }}
                      </span>
                      <span v-if="realisation.featured" class="text-xs font-semibold px-2 py-1 bg-amber-100 text-amber-700 rounded-full">En avant</span>
                    </div>
                    <h3 class="font-semibold">{{ realisation.client_name }}</h3>
                    <p class="text-sm text-gray-500 mb-2">{{ realisation.client_profession }}</p>
                    <p class="text-gray-600 text-sm line-clamp-3 italic">"{{ realisation.quote }}"</p>
                    <p v-if="templateNameById(realisation.template_id)" class="text-xs text-gray-400 mt-2">
                      Template : {{ templateNameById(realisation.template_id) }}
                    </p>

                    <div class="mt-3 pt-3 border-t border-gray-100 flex gap-2">
                      <button
                        @click="startEditRealisation(realisation)"
                        class="flex-1 px-3 py-1 bg-blue-50 text-blue-600 rounded hover:bg-blue-100 transition-colors text-sm"
                      >
                        Modifier
                      </button>
                      <button
                        @click="deleteRealisation(realisation.id)"
                        class="flex-1 px-3 py-1 bg-red-50 text-red-600 rounded hover:bg-red-100 transition-colors text-sm"
                      >
                        Supprimer
                      </button>
                    </div>
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

// Page privée : exclue de l'indexation Google
useHead({ meta: [{ name: 'robots', content: 'noindex, nofollow' }] })

// Import database types
import { Star, Download, ShoppingCart } from 'lucide-vue-next'
import { useCartStore } from '~/stores/cart'
import type { Template, TemplateUpdate, TemplateCreate, Realisation, RealisationCreate, RealisationUpdate } from '~/models'
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
  slug: '',
  description: '',
  speciality: '',
  price: 0,
  image: '',
  demo_url: null,
  download_url: '',
  features: [],
  tags: [],
  specialties: [],
  badge: null,
  promo: null,
  rating: 0
})

// Utility function to generate slug from name
const generateSlug = (name: string): string => {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove accents
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters except spaces and hyphens
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .replace(/^-|-$/g, '') // Remove leading and trailing hyphens
}

// Auto-generate slug when name changes
watch(() => newTemplate.value.name, (newName) => {
  if (newName && !newTemplate.value.slug) {
    newTemplate.value.slug = generateSlug(newName)
  }
})

watch(() => editingTemplate.value?.name, (newName) => {
  if (newName && editingTemplate.value && !editingTemplate.value.slug) {
    editingTemplate.value.slug = generateSlug(newName)
  }
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

const specialtiesText = computed({
  get: () => newTemplate.value.specialties.join('\n'),
  set: (value: string) => {
    newTemplate.value.specialties = value.split('\n').filter(f => f.trim() !== '')
  }
})

const editSpecialtiesText = computed({
  get: () => editingTemplate.value?.specialties?.join('\n') || '',
  set: (value: string) => {
    if (editingTemplate.value) {
      editingTemplate.value.specialties = value.split('\n').filter(f => f.trim() !== '')
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
    slug: '',
    description: '',
    speciality: '',
    price: 0,
    image: '',
    demo_url: null,
    download_url: '',
    features: [],
    tags: [],
    specialties: [],
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
  editingTemplate.value = { 
    ...template,
    slug: template.slug || generateSlug(template.name),
    specialties: template.specialties || []
  }
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
    
    // Validate slug format if provided
    if (editingTemplate.value.slug) {
      const slugRegex = /^[a-z0-9-]+$/
      if (!slugRegex.test(editingTemplate.value.slug)) {
        showMessage('Le slug doit contenir uniquement des lettres minuscules, chiffres et tirets', false)
        loading.value = false
        return
      }
    }

    const templateToUpdate: TemplateUpdate = {
      name: editingTemplate.value.name,
      slug: editingTemplate.value.slug,
      description: editingTemplate.value.description,
      speciality: editingTemplate.value.speciality,
      price: editingTemplate.value.price,
      image: imageUrl,
      demo_url: editingTemplate.value.demo_url,
      download_url: editingTemplate.value.download_url,
      features: editingTemplate.value.features,
      tags: editingTemplate.value.tags,
      specialties: editingTemplate.value.specialties,
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
  if (!newTemplate.value.name || !newTemplate.value.slug || !newTemplate.value.description || !newTemplate.value.speciality) {
    showMessage('Veuillez remplir les champs obligatoires', false)
    return
  }

  // Validate slug format
  const slugRegex = /^[a-z0-9-]+$/
  if (!slugRegex.test(newTemplate.value.slug)) {
    showMessage('Le slug doit contenir uniquement des lettres minuscules, chiffres et tirets', false)
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
      slug: newTemplate.value.slug,
      description: newTemplate.value.description,
      speciality: newTemplate.value.speciality,
      price: newTemplate.value.price,
      image: imageUrl,
      demo_url: newTemplate.value.demo_url,
      download_url: newTemplate.value.download_url,
      features: newTemplate.value.features,
      tags: newTemplate.value.tags,
      specialties: newTemplate.value.specialties,
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

// ─────────────────────────────────────────────────────────────
// Réalisations (preuve sociale : sites clients + témoignages)
// ─────────────────────────────────────────────────────────────
const realisations = ref<Realisation[]>([])
const realisationLoading = ref(false)
const showRealisationForm = ref(false)
const showRealisationEditForm = ref(false)
const editingRealisation = ref<Realisation | null>(null)

// Fichiers d'images dédiés aux réalisations (capture du site + photo client)
const siteImageFile = ref<File | null>(null)
const siteImagePreview = ref<string>('')
const clientPhotoFile = ref<File | null>(null)
const clientPhotoPreview = ref<string>('')

const emptyRealisation = (): RealisationCreate => ({
  client_name: '',
  client_profession: '',
  client_photo: null,
  site_url: null,
  site_image: '',
  quote: '',
  rating: null,
  type: 'pack',
  template_id: null,
  featured: false,
  display_order: 0
})

const newRealisation = ref<RealisationCreate>(emptyRealisation())

// Convertit un fichier image en data URL (même approche que pour les templates)
const fileToDataUrl = (file: File): Promise<string> =>
  new Promise((resolve) => {
    const reader = new FileReader()
    reader.onload = (e) => resolve(e.target?.result as string)
    reader.readAsDataURL(file)
  })

const handleSiteImageUpload = (event: Event) => {
  const file = (event.target as HTMLInputElement).files?.[0]
  if (file) {
    siteImageFile.value = file
    const reader = new FileReader()
    reader.onload = (e) => { siteImagePreview.value = e.target?.result as string }
    reader.readAsDataURL(file)
  }
}

const handleClientPhotoUpload = (event: Event) => {
  const file = (event.target as HTMLInputElement).files?.[0]
  if (file) {
    clientPhotoFile.value = file
    const reader = new FileReader()
    reader.onload = (e) => { clientPhotoPreview.value = e.target?.result as string }
    reader.readAsDataURL(file)
  }
}

const resetRealisationForm = () => {
  newRealisation.value = emptyRealisation()
  siteImageFile.value = null
  siteImagePreview.value = ''
  clientPhotoFile.value = null
  clientPhotoPreview.value = ''
  showRealisationForm.value = false
}

const resetRealisationEditForm = () => {
  editingRealisation.value = null
  siteImageFile.value = null
  siteImagePreview.value = ''
  clientPhotoFile.value = null
  clientPhotoPreview.value = ''
  showRealisationEditForm.value = false
}

const loadRealisations = async () => {
  realisationLoading.value = true
  try {
    const { data, error } = await supabase
      .from('realisations')
      .select('*')
      .order('display_order', { ascending: true })
      .order('created_at', { ascending: false })

    if (error) throw error
    realisations.value = (data as Realisation[]) || []
  } catch (error) {
    console.error('Error loading realisations:', error)
    showMessage('Erreur lors du chargement des réalisations', false)
  } finally {
    realisationLoading.value = false
  }
}

const addNewRealisation = async () => {
  if (!newRealisation.value.client_name || !newRealisation.value.client_profession || !newRealisation.value.quote) {
    showMessage('Veuillez remplir le nom, la profession et le témoignage', false)
    return
  }
  if (!siteImageFile.value) {
    showMessage('Veuillez fournir une capture du site', false)
    return
  }

  realisationLoading.value = true
  message.value = ''

  try {
    const siteImage = await fileToDataUrl(siteImageFile.value)
    const clientPhoto = clientPhotoFile.value ? await fileToDataUrl(clientPhotoFile.value) : null

    const toInsert: RealisationCreate = {
      ...newRealisation.value,
      site_image: siteImage,
      client_photo: clientPhoto,
      site_url: newRealisation.value.site_url || null,
      rating: newRealisation.value.rating ? Number(newRealisation.value.rating) : null,
      display_order: Number(newRealisation.value.display_order) || 0
    }

    const { error } = await supabase
      .from('realisations')
      .insert(toInsert as any)

    if (error) throw error

    showMessage('Réalisation ajoutée avec succès !', true)
    resetRealisationForm()
    await loadRealisations()
  } catch (error) {
    console.error('Error adding realisation:', error)
    showMessage('Erreur lors de l\'ajout de la réalisation', false)
  } finally {
    realisationLoading.value = false
  }
}

const startEditRealisation = (realisation: Realisation) => {
  editingRealisation.value = { ...realisation }
  siteImagePreview.value = realisation.site_image
  clientPhotoPreview.value = realisation.client_photo || ''
  siteImageFile.value = null
  clientPhotoFile.value = null
  showRealisationEditForm.value = true
  showRealisationForm.value = false
}

const updateRealisation = async () => {
  if (!editingRealisation.value) {
    showMessage('Aucune réalisation sélectionnée', false)
    return
  }

  realisationLoading.value = true
  message.value = ''

  try {
    const siteImage = siteImageFile.value ? await fileToDataUrl(siteImageFile.value) : editingRealisation.value.site_image
    const clientPhoto = clientPhotoFile.value ? await fileToDataUrl(clientPhotoFile.value) : editingRealisation.value.client_photo

    const toUpdate: RealisationUpdate = {
      client_name: editingRealisation.value.client_name,
      client_profession: editingRealisation.value.client_profession,
      client_photo: clientPhoto || null,
      site_url: editingRealisation.value.site_url || null,
      site_image: siteImage,
      quote: editingRealisation.value.quote,
      rating: editingRealisation.value.rating ? Number(editingRealisation.value.rating) : null,
      type: editingRealisation.value.type,
      template_id: editingRealisation.value.template_id || null,
      featured: editingRealisation.value.featured,
      display_order: Number(editingRealisation.value.display_order) || 0,
      updated_at: new Date().toISOString()
    }

    const { error } = await supabase
      .from('realisations')
      .update(toUpdate as any)
      .eq('id', editingRealisation.value.id)

    if (error) throw error

    showMessage('Réalisation mise à jour avec succès !', true)
    resetRealisationEditForm()
    await loadRealisations()
  } catch (error) {
    console.error('Error updating realisation:', error)
    showMessage('Erreur lors de la mise à jour de la réalisation', false)
  } finally {
    realisationLoading.value = false
  }
}

const deleteRealisation = async (id: string) => {
  if (!confirm('Êtes-vous sûr de vouloir supprimer cette réalisation ? Cette action est irréversible.')) {
    return
  }

  realisationLoading.value = true
  try {
    const { error } = await supabase
      .from('realisations')
      .delete()
      .eq('id', id)

    if (error) throw error

    showMessage('Réalisation supprimée avec succès !', true)
    await loadRealisations()
  } catch (error) {
    console.error('Error deleting realisation:', error)
    showMessage('Erreur lors de la suppression de la réalisation', false)
  } finally {
    realisationLoading.value = false
  }
}

// Retourne le nom du template lié (pour l'affichage dans la liste)
const templateNameById = (templateId: string | null): string => {
  if (!templateId) return ''
  return templates.value.find(t => t.id === templateId)?.name || ''
}

// Load templates on mount
onMounted(() => {
  refreshTemplates()
  loadLegalTexts()
  loadRealisations()
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
        slug: 'horizon',
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
        slug: 'ancrage',
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
