<template>
  <NuxtLayout>
    <div class="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <div class="container mx-auto px-6 py-20">
        <div class="max-w-4xl mx-auto">
          
          <!-- Section principale -->
          <div class="text-center mb-16">
            <!-- Icône de succès -->
            <div class="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
              <svg class="w-10 h-10 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
            </div>
            
            <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Paiement réussi !
            </h1>
            
            <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Merci pour votre achat ! Un email de confirmation vient de vous être envoyé avec tous les détails pour accéder à vos modèles.
            </p>
          </div>

          <!-- Carte de confirmation -->
          <div class="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <div class="grid md:grid-cols-2 gap-8 items-center">
              
              <!-- Partie gauche - Informations -->
              <div>
                <h2 class="text-2xl font-bold text-gray-900 mb-6">Ce que vous recevez</h2>
                
                <div class="space-y-4">
                  <div class="flex items-start">
                    <div class="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                      <svg class="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 class="font-semibold text-gray-900">Accès immédiat</h3>
                      <p class="text-gray-600 text-sm">Lien de téléchargement direct dans votre email</p>
                    </div>
                  </div>
                  
                  <div class="flex items-start">
                    <div class="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                      <svg class="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 class="font-semibold text-gray-900">Guide bonus inclus</h3>
                      <p class="text-gray-600 text-sm">30 pages pour personnaliser votre site web</p>
                    </div>
                  </div>
                  
                  <div class="flex items-start">
                    <div class="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                      <svg class="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 class="font-semibold text-gray-900">Support dédié</h3>
                      <p class="text-gray-600 text-sm">Aide si besoin dans votre parcours</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Partie droite - Email -->
              <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
                <div class="text-center mb-6">
                  <div class="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                    <svg class="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                  </div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-2">Vérifiez votre email</h3>
                  <p class="text-gray-600 text-sm">
                    Un email avec vos liens de téléchargement a été envoyé à l'adresse utilisée pour le paiement.
                  </p>
                </div>
                
                <div class="bg-white/80 rounded-lg p-4">
                  <p class="text-xs text-gray-500 text-center">
                    L'email peut prendre quelques minutes pour arriver. <br>
                    Pensez à vérifier vos spams !
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Actions -->
          <div class="text-center space-y-4">
            <NuxtLink 
              to="/templates" 
              class="inline-flex items-center px-8 py-4 bg-primary-500 text-white font-semibold rounded-xl hover:bg-primary-600 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
              </svg>
              Retour aux modèles
            </NuxtLink>
            
            <div class="text-gray-500 text-sm">
              Besoin d'aide ? <NuxtLink to="/contact" class="text-primary-600 hover:text-primary-700">Contactez-moi</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
// Récupérer les paramètres de l'URL (session_id)
const route = useRoute()
const sessionId = route.query.session_id as string

// Envoyer l'email de confirmation au chargement de la page
onMounted(async () => {
  if (sessionId) {
    try {
      // Vérifier la session Stripe avec sécurité
      const verification = await $fetch('/api/stripe/verify-session', {
        method: 'POST',
        body: {
          sessionId: sessionId
        }
      })
      
      if (verification.success && verification.session.customer_email) {
        // Envoyer l'email de confirmation via l'API
        await $fetch('/api/email/confirmation', {
          method: 'POST',
          body: {
            email: verification.session.customer_email,
            sessionId: sessionId
          }
        })
        
        console.log('Email de confirmation envoyé à:', verification.session.customer_email)
      }
    } catch (error: any) {
      console.error('Erreur envoi email confirmation:', error)
      // Rediriger vers une page d'erreur si session invalide/expirée
      if (error.statusCode === 410) {
        await navigateTo('/error?code=session_expired')
      } else if (error.statusCode === 400) {
        await navigateTo('/error?code=invalid_session')
      }
    }
  }
})
</script>
