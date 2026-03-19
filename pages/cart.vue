<template>
  <NuxtLayout>
    <div class="bg-gray-50 min-h-screen py-20">
      <div class="container mx-auto px-6">
        <h1 class="text-4xl font-bold mb-4" v-motion-slide-visible-once-bottom>Panier</h1>
        <p class="text-lg text-gray-600 mb-8" v-motion-slide-visible-once-bottom>
          Sélectionnez vos modèles préférés et procédez au paiement pour un accès instantané
        </p>

        <div v-if="cartStore.itemCount === 0" class="text-center py-20 bg-white rounded-2xl">
          <ShoppingCart :size="64" class="mx-auto mb-4 text-gray-300" />
          <h2 class="text-2xl font-bold mb-2">Votre panier est vide</h2>
          <p class="text-gray-600 mb-6">Parcourez nos modèles et ajoutez-en à votre panier</p>
          <NuxtLink to="/templates" class="btn-primary inline-flex items-center">
            Parcourir les modèles
          </NuxtLink>
        </div>

        <div v-else class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div class="lg:col-span-2 space-y-4">
            <div
              v-for="item in cartStore.cartItems"
              :key="item.template.id"
              class="bg-white rounded-xl p-6 flex gap-6"
              v-motion-slide-visible-once-left
            >
              <img
                :src="item.template.image"
                :alt="item.template.name"
                class="w-32 h-32 object-cover rounded-lg flex-shrink-0"
              />

              <div class="flex-1">
                <div class="flex justify-between items-start mb-2">
                  <div>
                    <h3 class="text-xl font-bold mb-1">{{ item.template.name }}</h3>
                    <p class="text-sm text-gray-500 uppercase">{{ item.template.speciality }}</p>
                  </div>
                  <button
                    @click="cartStore.removeFromCart(item.template.id)"
                    class="text-gray-400 hover:text-red-600 transition-colors"
                  >
                    <Trash2 :size="20" />
                  </button>
                </div>

                <p class="text-gray-600 text-sm mb-2 line-clamp-2">{{ item.template.description }}</p>
                <p class="text-green-600 text-sm font-medium mb-4 flex items-center">
                  <Check :size="16" class="mr-1" />
                  Guide inclus avec ce modèle
                </p>

                <div class="flex items-center justify-between">
                  <span class="text-gray-600 text-sm">Quantité: {{ item.quantity }}</span>
                  <span class="text-2xl font-bold">{{ (item.template.price * item.quantity).toFixed(2) }}€</span>
                </div>
              </div>
            </div>
          </div>

          <div class="lg:col-span-1">
            <div class="bg-white rounded-xl p-6 sticky top-24" v-motion-slide-visible-once-right>
              <h2 class="text-2xl font-bold mb-6">Récapitulatif de la commande</h2>

              <div class="space-y-4 mb-6">
                <div class="flex justify-between">
                  <span class="text-gray-600">Sous-total</span>
                  <span class="font-semibold">{{ cartStore.totalPrice.toFixed(2) }}€</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Taxe (0%)</span>
                  <span class="font-semibold">0,00€</span>
                </div>
                <div class="border-t border-gray-200 pt-4">
                  <div class="flex justify-between items-center">
                    <span class="text-xl font-bold">Total</span>
                    <span class="text-3xl font-bold">{{ cartStore.totalPrice.toFixed(2) }}€</span>
                  </div>
                </div>
              </div>

              <button @click="paymentModal.openPaymentModal()" class="w-full btn-primary mb-4">
                <CreditCard :size="20" class="mr-2" />
                Procéder au paiement
              </button>

              <button
                @click="cartStore.clearCart"
                class="w-full text-center text-sm text-red-600 hover:text-red-700 font-medium"
              >
                Vider le panier
              </button>

              <div class="mt-6 pt-6 border-t border-gray-200">
                <div class="flex items-start space-x-3 text-sm text-gray-600">
                  <Shield :size="20" class="text-green-600 flex-shrink-0 mt-0.5" />
                  <p>Paiement sécurisé avec accès instantané au téléchargement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
  
  <!-- Payment Modal -->
  <PaymentModal ref="paymentModal" />
</template>

<script setup lang="ts">
import { ShoppingCart, Trash2, Minus, Plus, CreditCard, Shield, Check } from 'lucide-vue-next'
import { useCartStore } from '~/stores/cart'

const cartStore = useCartStore()
const paymentModal = ref()
</script>
