<script setup lang="ts">
interface ClientSite {
  name: string
  url: string
  image: string
}

const clients: ClientSite[] = [
  {
    name: 'Écurie du Vallon',
    url: 'ecurie-du-vallon.fr',
    image: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&q=80&w=600&h=400'
  },
  {
    name: 'Haras de la Loire',
    url: 'haras-loire.com',
    image: 'https://images.unsplash.com/photo-1534307671554-9a6d81f4d629?auto=format&fit=crop&q=80&w=600&h=400'
  },
  {
    name: 'Centre Équestre Soleil',
    url: 'ce-soleil.fr',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&q=80&w=600&h=400'
  },
  {
    name: 'Poney Club des Bois',
    url: 'poneyclub-desbois.fr',
    image: 'https://images.unsplash.com/photo-1506220926022-cc5c12acdb35?auto=format&fit=crop&q=80&w=600&h=400'
  },
  {
    name: 'Ostéo Équine Pro',
    url: 'osteo-equine.com',
    image: 'https://images.unsplash.com/photo-1551884831-bbf3cdc6469e?auto=format&fit=crop&q=80&w=600&h=400'
  },
  {
    name: 'Sellerie Artisanale',
    url: 'sellerie-artisanale.fr',
    image: 'https://images.unsplash.com/photo-1509023464722-18d996393ca8?auto=format&fit=crop&q=80&w=600&h=400'
  }
]

// Duplicate the list for infinite scroll effect
const duplicatedClients = [...clients, ...clients]
</script>

<template>
  <div class="w-full overflow-hidden py-4 sm:py-8 carousel-perspective">
    <div class="relative carousel-mask carousel-depth">
      <!-- Scrolling track -->
      <div class="carousel-track flex gap-3 sm:gap-6">
        <div
          v-for="(client, index) in duplicatedClients"
          :key="`${client.name}-${index}`"
          class="flex-shrink-0 w-52 sm:w-72 md:w-80"
        >
          <!-- Browser mockup -->
          <div class="rounded-lg sm:rounded-xl overflow-hidden border border-secondary-200 shadow-md sm:shadow-lg bg-white transition-transform duration-300 hover:scale-[1.02]">
            <!-- Browser bar -->
            <div class="h-6 sm:h-8 bg-secondary-50 flex items-center px-2 sm:px-3 gap-1.5 sm:gap-2 border-b border-secondary-100">
              <div class="flex gap-1 sm:gap-1.5">
                <div class="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-secondary-200"></div>
                <div class="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-secondary-200"></div>
                <div class="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-secondary-200"></div>
              </div>
              <div class="ml-2 sm:ml-3 h-3.5 sm:h-4 flex-1 max-w-[140px] sm:max-w-[180px] bg-white border border-secondary-200 rounded flex items-center px-1.5 sm:px-2">
                <span class="text-[8px] sm:text-[9px] text-secondary-400 truncate">{{ client.url }}</span>
              </div>
            </div>
            <!-- Site preview -->
            <div class="aspect-[3/2] overflow-hidden">
              <img
                :src="client.image"
                :alt="`Site web de ${client.name}`"
                class="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <!-- Client name -->
          <p class="mt-2 sm:mt-3 text-center text-xs sm:text-sm font-medium text-secondary-700">{{ client.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.carousel-perspective {
  perspective: 800px;
}

.carousel-depth {
  transform: rotateX(4deg) scale(0.95);
  transform-origin: center top;
}

.carousel-mask {
  -webkit-mask-image: linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%);
  mask-image: linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%);
}

.carousel-track {
  animation: scroll 30s linear infinite;
}

.carousel-track:hover {
  animation-play-state: paused;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
