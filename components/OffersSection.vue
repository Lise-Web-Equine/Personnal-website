<template>
  <section class="py-12 sm:py-16 md:py-20 bg-gray-50">
    <!-- Ordinateur : texte + petit mot à gauche, cartes empilées à droite. Mobile : texte, cartes, puis petit mot. -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-8 sm:gap-y-10 items-center">
      <div class="lg:col-start-1 lg:row-start-1 lg:self-end" v-motion-slide-visible-once-bottom>
        <h2 class="mb-4 sm:mb-6">Deux façons de créer votre site ensemble</h2>
        <p class="text-base sm:text-lg text-secondary-600 leading-relaxed">
          Que vous lanciez votre activité ou que votre structure soit déjà bien installée, je vous accompagne avec la formule qui vous ressemble.
        </p>
      </div>

      <div class="lg:col-start-2 lg:row-start-1 lg:row-span-2 flex flex-col gap-6">
        <div
          v-for="offer in offers"
          :key="offer.link"
          class="bg-white rounded-2xl shadow-md border border-secondary-100 hover:border-[#642F95]/40 hover:shadow-lg transition-all duration-200 p-6 sm:p-8"
          v-motion-slide-visible-once-bottom
        >
          <h3 class="text-xl sm:text-2xl font-bold text-secondary-900 mb-3">{{ offer.name }}</h3>
          <p class="text-sm sm:text-base text-secondary-600 leading-relaxed mb-6">{{ offer.text }}</p>
          <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <p class="text-secondary-500 text-sm">
              {{ offer.pricePrefix }}
              <span class="block text-3xl sm:text-4xl font-bold text-[#642F95]">{{ offer.price }}</span>
            </p>
            <NuxtLink :to="offer.link" class="btn-primary w-full sm:w-auto" @click="emit('offer-click', offer)">
              {{ offer.cta }}
              <ArrowRight :size="20" class="ml-2" />
            </NuxtLink>
          </div>
        </div>
      </div>

      <div class="lg:col-start-1 lg:row-start-2 lg:self-start flex items-center gap-4" v-motion-slide-visible-once-bottom>
        <NuxtImg
          src="/images/lise-profile.jpg"
          alt="Lise, créatrice de Lise Web Equine"
          width="128"
          height="128"
          class="w-16 h-16 rounded-full object-cover flex-shrink-0 ring-4 ring-white shadow-md"
          loading="lazy"
        />
        <p class="text-sm sm:text-base text-secondary-700">
          Vous hésitez entre les deux ?
          <NuxtLink :to="quizLink" class="text-[#642F95] font-semibold underline hover:text-[#3A1A5A] transition-colors">Faites le test</NuxtLink>
          ou
          <NuxtLink to="/contact" class="text-[#642F95] font-semibold underline hover:text-[#3A1A5A] transition-colors">écrivez-moi</NuxtLink>,
          je vous conseille en toute franchise.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'

withDefaults(defineProps<{
  quizLink?: string
}>(), {
  quizLink: '/creation-site-internet-equestre#quiz-recommandation'
})

interface Offer {
  title: string
  name: string
  text: string
  pricePrefix: string
  price: string
  cta: string
  link: string
}

const emit = defineEmits<{
  'offer-click': [offer: Offer]
}>()

const offers: Offer[] = [
  {
    title: 'Création et refonte de site internet équestre',
    name: 'Sur-mesure',
    text: 'Votre structure est installée et vous voulez un site qui grandit avec vous ? Je le conçois de A à Z pour vous, et vous le modifiez ensuite en toute autonomie.',
    pricePrefix: 'À partir de',
    price: '1 500€',
    cta: 'Découvrir le sur-mesure',
    link: '/creation-site-internet-equestre/sur-mesure'
  },
  {
    title: 'Création de site internet clé en main',
    name: 'Clé en main',
    text: 'Vous démarrez votre activité et manquez de temps ? Je personnalise pour vous un modèle équestre, pour que vous soyez en ligne rapidement avec un site pro.',
    pricePrefix: 'Tarif unique',
    price: '290€',
    cta: 'Découvrir le clé en main',
    link: '/creation-site-internet-equestre/cle-en-main'
  }
]
</script>
