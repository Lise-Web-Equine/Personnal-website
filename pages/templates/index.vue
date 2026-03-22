<template>

  <NuxtLayout>

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



          <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            <TemplateCardMockup

              v-for="template in templates"

              :key="template.id"

              :template="template"

            />

            <!-- Card création personnalisée -->

            <div class="bg-secondary rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-secondary-600 flex flex-col justify-center items-center p-8 text-center text-white min-h-[400px]">

              <div class="mb-6">

                <div class="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mb-2 mx-auto">

                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">

                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>

                  </svg>

                </div>

                <div class="text-sm font-bold text-primary-400 uppercase">Co-Création</div>

              </div>

              <h3 class="text-lg font-bold mb-3">Vous voulez proposer un nouveau modèle pour votre profession ?</h3>

              <p class="text-white/90 mb-6 text-sm">

                Ostéopathe, maréchal-ferrant, dentiste...<br>

                Créons ensemble le modèle parfait pour votre métier équin.

              </p>

              <NuxtLink 

                to="/contact" 

                class="group px-4 py-2.5 font-semibold rounded-lg border-2 transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-0.5 flex items-center justify-center text-sm bg-white text-secondary-700 border-secondary-300 hover:bg-secondary-50 hover:border-secondary-400 hover:shadow-lg"

              >

                Discutons ensemble

                <MessageSquare :size="16" class="ml-2" />

              </NuxtLink>

            </div>

          </div>

        </div>

      </section>



      <!-- Section Comment ça fonctionne -->

      <section class="py-20">

        <div class="container mx-auto px-6">

          <div class="max-w-6xl mx-auto">

            <!-- Header -->

            <div class="text-center mb-16">

              <h2 class="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">

                Votre nouveau site web prêt en 3 étapes simples

              </h2>

            </div>



            <!-- Processus visuel -->

            <div class="relative">

              <!-- Ligne de connexion -->

              <div class="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-primary-200 -translate-y-1/2 z-0"></div>

              

              <!-- Étapes -->

              <div class="grid md:grid-cols-3 gap-8 relative z-10">

                <!-- Étape 1 -->

                <div class="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">

                  <div class="flex items-center mb-6">

                    <div class="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">

                      1

                    </div>

                    <div class="h-px bg-primary-200 flex-1 hidden md:block"></div>

                  </div>

                  <h3 class="text-xl font-bold text-secondary-900 mb-4">Choix du modèle</h3>

                  <p class="text-secondary-600 mb-4">

                    Explorez notre collection de modèles et trouvez celui qui représente parfaitement votre activité.

                  </p>

                </div>



                <!-- Étape 2 -->

                <div class="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">

                  <div class="flex items-center mb-6">

                    <div class="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">

                      2

                    </div>

                    <div class="h-px bg-primary-200 flex-1 hidden md:block"></div>

                  </div>

                  <h3 class="text-xl font-bold text-secondary-900 mb-4">Personnalisation</h3>

                  <p class="text-secondary-600 mb-4">

                    Modifiez chaque élément : textes, images, couleurs. Votre guide stratégique de 30 pages vous accompagne à chaque étape.

                  </p>

                </div>



                <!-- Étape 3 -->

                <div class="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">

                  <div class="flex items-center mb-6">

                    <div class="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">

                      3

                    </div>

                  </div>

                  <h3 class="text-xl font-bold text-secondary-900 mb-4">Mise en ligne</h3>

                  <p class="text-secondary-600 mb-4">

                    Publiez en un clic grâce à l'hébergement inclus.   

                  </p>

                </div>

              </div>

            </div>



            <!-- Badge de confiance -->

            <div class="text-center mt-16">

              <div class="inline-flex items-center bg-white rounded-full px-6 py-3 shadow-md">

                <div class="w-2 h-2 bg-green-500 rounded-full mr-3"></div>

                <span class="text-secondary-700 font-medium">Aucune compétence technique requise</span>

              </div>

            </div>



            <!-- Illustration de personnalisation -->

            <div class="mt-16">

              <div class="bg-white rounded-2xl shadow-xl p-8">

                <h3 class="text-2xl font-bold text-center text-secondary-900 mb-8">

                  Personnalisation en un clic

                </h3>

                

                <div class="grid md:grid-cols-2 gap-8 items-center">

                  <!-- Interface simulée -->

                  <div class="bg-gray-50 rounded-xl p-6 border border-gray-200">

                    <div class="space-y-4">

                      <!-- Header -->

                      <div class="flex justify-between items-center">

                        <div class="h-8 w-32 bg-primary-200 rounded animate-pulse"></div>

                        <div class="flex gap-2">

                          <div class="w-6 h-6 bg-gray-300 rounded-full"></div>

                          <div class="w-6 h-6 bg-gray-300 rounded-full"></div>

                        </div>

                      </div>

                      

                      <!-- Hero section -->

                      <div class="h-32 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-lg flex items-center justify-center">

                        <div class="text-center">

                          <div class="h-6 w-24 bg-primary-300 rounded mx-auto mb-2"></div>

                          <div class="h-4 w-32 bg-secondary-300 rounded mx-auto"></div>

                        </div>

                      </div>

                      

                      <!-- Text content -->

                      <div class="space-y-2">

                        <div class="h-4 w-full bg-gray-300 rounded"></div>

                        <div class="h-4 w-5/6 bg-gray-300 rounded"></div>

                        <div class="h-4 w-4/5 bg-gray-300 rounded"></div>

                      </div>

                      

                      <!-- Button -->

                      <div class="h-10 w-32 bg-primary-500 rounded-lg mx-auto"></div>

                    </div>

                  </div>

                  

                  <!-- Instructions -->

                  <div class="space-y-6">

                    <div class="flex items-start gap-4">

                      <div class="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">

                        <svg class="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">

                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>

                        </svg>

                      </div>

                      <div>

                        <h4 class="font-semibold text-secondary-900 mb-1">Cliquez pour modifier</h4>

                        <p class="text-secondary-600 text-sm">Sur n'importe quel élément, un simple clic vous permet de changer le texte, les couleurs ou les images.</p>

                      </div>

                    </div>

                    

                    <div class="flex items-start gap-4">

                      <div class="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">

                        <svg class="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">

                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>

                        </svg>

                      </div>

                      <div>

                        <h4 class="font-semibold text-secondary-900 mb-1">Glissez-déposez</h4>

                        <p class="text-secondary-600 text-sm">Réorganisez les sections, ajoutez des images ou déplacez des éléments en un seul mouvement.</p>

                      </div>

                    </div>

                    

                    <div class="flex items-start gap-4">

                      <div class="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">

                        <svg class="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">

                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>

                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>

                        </svg>

                      </div>

                      <div>

                        <h4 class="font-semibold text-secondary-900 mb-1">Aperçu en temps réel</h4>

                        <p class="text-secondary-600 text-sm">Voyez instantanément les changements que vous apportez, sans avoir besoin de sauvegarder.</p>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>



      <!-- Section Bonus Guide -->

      <section class="py-20 relative overflow-hidden bg-secondary">

        <!-- Background decoration -->

        <div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-900/30 to-transparent rounded-full blur-3xl"></div>

        <div class="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-purple-900/30 to-transparent rounded-full blur-3xl"></div>

        

        <div class="relative container mx-auto px-6">

          <div class="max-w-7xl mx-auto">

            <!-- Section Header -->

            <div class="text-center mb-16" v-motion-slide-visible-once-bottom>

              <div class="mb-6">
                <Badge 
                  variant="primary" 
                  text="Inclus avec chaque modèle" 
                  :icon="'M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7'" 
                  class="mb-4" 
                />
              </div>

              <h2 class="mb-6 text-4xl md:text-5xl font-bold text-white">Votre guide stratégique de 30 pages offert</h2>

              <p class="text-lg text-secondary-300 max-w-3xl mx-auto">

                Ne soyez plus jamais seul devant votre écran. Nous vous remettons un guide complet pour transformer votre modèle en un véritable outil de travail.

              </p>

            </div>



            <!-- Grid avec les 3 cards -->

            <div class="max-w-4xl mx-auto">

              <!-- Item 1 -->

              <div class="bg-white/5 backdrop-blur-xs rounded-xl p-6 border border-white/5 mb-4" v-motion-slide-visible-once-bottom>

                <div class="flex items-start space-x-4">

                  <div class="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center bg-white/5">

                    <BookOpen :size="24" class="text-primary-600" />

                  </div>

                  <div>

                    <h3 class="text-xl font-semibold text-white mb-2">Guide pas à pas</h3>

                    <p class="text-secondary-300 leading-relaxed">

                      Instructions détaillées pour personnaliser chaque élément de votre modèle et le lancer professionnellement.</p>

                  </div>

                </div>

              </div>

              <!-- Item 2 -->

              <div class="bg-white/5 backdrop-blur-xs rounded-xl p-6 border border-white/5 mb-4" v-motion-slide-visible-once-bottom style="animation-delay: 100ms">

                <div class="flex items-start space-x-4">

                  <div class="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center bg-white/5">

                    <Lightbulb :size="24" class="text-primary-500" />

                  </div>

                  <div>

                    <h3 class="text-xl font-semibold text-white mb-2">Un site web clair</h3>

                    <p class="text-secondary-300 leading-relaxed">

                      Un tableau d'auto-évaluation pour te poser les bonnes questions.</p>

                  </div>

                </div>

              </div>

              <!-- Item 3 -->

              <div class="bg-white/5 backdrop-blur-xs rounded-xl p-6 border border-white/5 mb-4" v-motion-slide-visible-once-bottom style="animation-delay: 200ms">
                <div class="flex items-start space-x-4">
                  <div class="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center bg-white/5">
                    <Sparkles :size="24" class="text-primary-400" />
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold text-white mb-2">Prompt IA exclusif</h3>
                    <p class="text-secondary-300 leading-relaxed">
                      Générez une palette de couleur professionnelle grâce au prompt IA.</p>
                  </div>
                </div>
              </div>

              <!-- Card OFFERT -->

              <div class="bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl p-6 text-white border border-primary-300" v-motion-slide-visible-once-bottom style="animation-delay: 300ms">

                <div class="flex items-center justify-between">

                  <div>

                    <div class="text-3xl font-bold mb-2">OFFERT</div>

                    <div class="text-sm opacity-90">Guide stratégique de 30 pages inclus avec chaque modèle</div>

                  </div>

                  <div class="text-right">

                    <div class="text-2xl font-bold line-through opacity-75">49€</div>

                    <div class="text-sm opacity-75">Valeur réelle</div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>



      <!-- Section FAQ Accordion -->

      <section class="py-16">

        <div class="container mx-auto px-6">

          <div class="max-w-4xl mx-auto">

            <!-- Header -->

            <div class="text-center mb-12">

              <h2 class="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">

                Questions fréquentes

              </h2>

              <p class="text-lg text-secondary-600 max-w-2xl mx-auto">

                Tout ce que vous devez savoir sur nos modèles et le guide bonus

              </p>

            </div>



            <!-- Accordion -->

            <Accordion :items="faqItems" />

          </div>

        </div>

      </section>



      <!-- Section CTA Final -->

      <section class="py-16">

        <div class="container mx-auto px-6">

          <div class="text-center">

            <h2 class="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">

              Prêt à lancer votre site web pro équin ?

            </h2>

            <p class="text-lg text-secondary-600 max-w-2xl mx-auto mb-8">

              Choisissez parmi nos modèles et commencez dès aujourd'hui

            </p>

            <Button to="#templates" variant="primary" text="Voir tous les modèles" class="inline-flex" />

          </div>

        </div>

      </section>

  </NuxtLayout>

</template>



<script setup lang="ts">

import { Package, BookOpen, Lightbulb, Sparkles, MessageSquare } from 'lucide-vue-next'

import type { Template } from '~/models'



const loading = ref(true)
const templates = ref<Template[]>([])
const supabase = ref<any>(null)

// Charger le client Supabase au montage du composant
onMounted(async () => {
  try {
    supabase.value = await useSupabaseClientSecure()
    await fetchTemplates()
  } catch (error) {
    console.error('Error initializing Supabase:', error)
    loading.value = false
  }
})

const fetchTemplates = async () => {
  if (!supabase.value) return
  
  try {
    const { data, error } = await supabase.value
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
}

const faqItems = [

  {

    question: "Comment fonctionne l'achat d'un modèle ?",

    answer: "Une fois votre achat effectué, vous recevez **immédiatement par email** un lien pour télécharger :\n\n- Le modèle complet\n- Votre guide stratégique de 30 pages\n\n- L'accès à notre support si besoin\n\n**Processus simple et instantané** pour commencer tout de suite !"

  },

  {

    question: "Est-ce que je peux modifier les textes et photos ?",

    answer: "**Absolument !** Tous nos modèles sont **100% personnalisables**.\n\nVous pouvez :\n- Modifier **tous les textes**\n- Remplacer les **images par les vôtres**\n- Changer les **couleurs et polices**\n- Adapter le **design à votre marque**\n\nNotre guide bonus vous explique **étape par étape** comment faire chaque modification."

  },

  {

    question: "Combien me coûte mon site web au total ?",

    answer: "**C'est la solution la moins chère du marché** pour un résultat professionnel :\n\n- **Le modèle** : Paiement unique (selon le modèle choisi)\n- **L'abonnement technique** : Pour activer toutes les fonctionnalités premium (votre propre nom de domaine, formulaires, etc.), il faudra souscrire à l'offre Carrd Pro Standard\n- **Le coût total** : Environ **19$ par an** (soit moins de **2€/mois**)\n\n**C'est imbattable** comparé aux 150€ ou 200€ demandés par d'autres plateformes !"

  },

  {

    question: "Le guide bonus est-il vraiment utile si je suis débutant ?",

    answer: "**Absolument !** Le guide est spécialement conçu pour les **débutants complets**.\n\nIl vous explique **pas à pas** :\n- Comment personnaliser chaque élément de votre page\n- Comment avoir un site web clair et professionnel\n- Comment avoir une palette de couleur harmonieuse\n\n"

  },

  {

    question: "Ai-je besoin de connaissances en informatique ?",

    answer: "**Non !** J'ai simplifié le processus au maximum grâce au modèle.\n\n**Carrd.co est un système de drag and drop** :\n- **Zero code** requis\n- **Interface intuitive**\n- **Modification visuelle** simple\n\nVotre guide stratégique de **30 pages** est conçu spécifiquement pour les **débutants complets**."

  },

  {

    question: "L'hébergement est-il inclus ?",

    answer: "**Oui, l'hébergement gratuit est inclus** via l'extension .carrd.co (ex: monactivite.carrd.co).\n\n**C'est la solution la plus simple** pour commencer :\n- **Hébergement gratuit** inclus\n- **Tout est expliqué** dans votre guide\n- **Mise en ligne instantanée**\n\n**Vous voulez un nom de domaine personnalisé** (ex: .fr ou .com) ? C'est tout à fait possible ! Il suffit de [me contacter](/contact) pour que nous mettions cela en place ensemble une fois votre modèle acquis."

  }

]




</script>

