<script setup lang="ts">
interface ClientSite {
  name: string
  url: string
  image: string
}

const clients: ClientSite[] = [
  {
    name: 'Anne PhytoÉquine',
    url: 'https://anne-phytoequine.carrd.co/',
    image: '/images/siteweb-annephytoequine.PNG'
  },
  {
    name: 'Modèle Ostéopathe Équin',
    url: 'modele-ostheopathe-equin.fr',
    image: '/images/siteweb-modele.png'
  },
  {
    name: 'MB Prestations Équestres',
    url: 'https://mb-prestationsequestres.carrd.co/',
    image: '/images/siteweb-morganebrient.png'
  },
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
          class="flex-shrink-0 w-64 sm:w-80 md:w-96"
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
            <div class="h-auto overflow-hidden bg-white">
              <img
                :src="client.image"
                :alt="`Site web de ${client.name}`"
                class="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>
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
  transform: rotateX(2deg) scale(0.98);
  transform-origin: center top;
}

.carousel-mask {
  -webkit-mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
  mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
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
