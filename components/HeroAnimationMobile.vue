<script setup>
const isFinal = ref(false)
const container = ref(null)
let interval = null

const triggerCycle = () => {
  isFinal.value = !isFinal.value
  if (!isFinal.value && container.value) {
    container.value.classList.remove('anim-active')
    // Forcer le reflow pour relancer l'animation CSS
    void container.value.offsetWidth 
    setTimeout(() => {
      if (container.value) {
        container.value.classList.add('anim-active')
      }
    }, 50)
  }
}

onMounted(() => {
  if (container.value) {
    container.value.classList.add('anim-active')
  }
  // Cycle de 6.5 secondes comme dans votre code original
  interval = setInterval(triggerCycle, 6500)
})

onUnmounted(() => {
  if (interval) clearInterval(interval)
})
</script>

<template>
  <div class="flex items-center justify-center min-h-screen p-4 sm:p-6 font-sans text-slate-900 -mt-8 overflow-x-hidden">
    <div
      ref="container"
      class="relative w-[280px] h-[560px] sm:w-[320px] sm:h-[640px] mx-auto transition-all duration-1000 ease-in-out"
      :class="{ 'scale-[1.02]': isFinal }"
    >
      <div class="relative w-full h-full rounded-[48px] overflow-hidden bg-white border-[8px] border-slate-900">
        
        <div class="absolute top-0 inset-x-0 h-7 flex justify-center items-end z-[60]">
          <div class="w-24 h-5 bg-slate-900 rounded-b-2xl"></div>
        </div>

        <div class="relative w-full h-full bg-white overflow-hidden">
          
          <div 
            class="absolute inset-0 z-[2] transition-all duration-[1200ms] ease-in-out"
            :class="isFinal ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-110 blur-xl pointer-events-none'"
          >
            <img 
              src="https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&q=80&w=800" 
              class="absolute inset-0 w-full h-full object-cover filter saturate-[0.9] brightness-[0.7]"
              alt="Zen Equine Mobile"
            />
            <div class="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-transparent to-slate-900/90"></div>
            
            <div class="absolute inset-0 p-8 flex flex-col">
              <nav class="mt-8 flex justify-between items-center text-white">
                <div class="font-black text-sm tracking-tighter uppercase">
                  ZEN <span class="text-emerald-400 italic font-serif lowercase tracking-normal">equine</span>
                </div>
                <div class="w-6 h-4 flex flex-col justify-between">
                  <div class="h-0.5 w-full bg-white"></div>
                  <div class="h-0.5 w-full bg-white"></div>
                </div>
              </nav>
              
              <div class="mt-auto mb-12 space-y-6">
                <div class="h-1 w-12 bg-emerald-500 rounded-full"></div>
                <h2 class="hero-animation-title text-4xl font-black tracking-tighter leading-[0.9] text-white">
                  L'art du <br/>
                  <span class="text-emerald-400 italic font-serif font-light">mouvement.</span>
                </h2>
                <p class="text-sm text-slate-200 leading-relaxed font-light">Soins de massage pour la santé et la performance de vos chevaux.</p>
                <div class="pt-2">
                  <button class="w-full bg-emerald-500 text-white py-4 text-[10px] font-bold rounded-xl uppercase tracking-[0.2em] shadow-xl transition-transform active:scale-95">Prendre RDV</button>
                </div>
              </div>
            </div>
          </div>

          <div 
            class="absolute inset-0 bg-white flex items-center justify-center z-[10] transition-all duration-1000"
            :class="isFinal ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'"
          >
            <svg width="85%" height="90%" viewBox="0 0 200 400" fill="none">
              <defs>
                <pattern id="grid-mobile" width="15" height="15" patternUnits="userSpaceOnUse">
                  <path d="M 15 0 L 0 0 0 15" fill="none" stroke="#f1f5f9" stroke-width="0.5"/>
                </pattern>
              </defs>
              <rect width="200" height="400" fill="url(#grid-mobile)" />

              <path d="M5 5 H195 V395 H5 Z" stroke="#cbd5e1" stroke-width="0.5" class="wireframe-path delay-0" />
              
              <rect x="20" y="30" width="50" height="10" rx="2" stroke="#3b82f6" stroke-width="1.5" class="wireframe-path delay-1" />
              <rect x="160" y="30" width="20" height="10" rx="2" stroke="#94a3b8" stroke-width="1.5" class="wireframe-path delay-1" />
              
              <rect x="20" y="60" width="160" height="180" rx="8" stroke="#3b82f6" stroke-width="1" stroke-dasharray="4 4" class="wireframe-path delay-2" />
              <path d="M20 60 L180 240 M180 60 L20 240" stroke="#e2e8f0" stroke-width="0.5" class="wireframe-path delay-2" />

              <path d="M20 270 H160" stroke="#3b82f6" stroke-width="5" stroke-linecap="round" class="wireframe-path delay-3" />
              <path d="M20 285 H130" stroke="#3b82f6" stroke-width="5" stroke-linecap="round" class="wireframe-path delay-3" />
              
              <g stroke="#94a3b8" stroke-width="1.5" stroke-linecap="round" class="wireframe-path delay-4">
                <path d="M20 315 H150" />
                <path d="M20 328 H160" />
                <path d="M20 341 H100" />
              </g>
              
              <rect x="20" y="365" width="160" height="20" rx="4" stroke="#3b82f6" stroke-width="2" class="wireframe-path delay-5" />
              
              <g font-family="monospace" font-size="5" fill="#3b82f6" font-weight="bold" class="opacity-40">
                <text x="20" y="55">HERO_IMAGE</text>
                <text x="20" y="262">H1_STACKED</text>
                <text x="135" y="385">CTA_FULL</text>
              </g>
            </svg>
          </div>
        </div>
      </div>

      <div class="absolute -bottom-16 left-0 right-0 z-[40] flex justify-center">
        <div 
          class="flex items-center gap-2 px-6 py-3 rounded-xl text-[9px] font-black uppercase tracking-[0.2em] transition-all duration-500 border-2 whitespace-nowrap"
          :class="isFinal ? 'bg-emerald-500 border-emerald-300 text-white' : 'bg-white border-slate-200 text-slate-400'"
        >
          <span class="relative flex h-1.5 w-1.5">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" :class="isFinal ? 'bg-white' : 'bg-blue-400'"></span>
            <span class="relative inline-flex rounded-full h-1.5 w-1.5" :class="isFinal ? 'bg-white' : 'bg-blue-500'"></span>
          </span>
          {{ isFinal ? 'PROJET FINALISÉ' : 'CONCEPTION EN COURS' }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wireframe-path {
  stroke-dasharray: 2000;
  stroke-dashoffset: 2000;
  opacity: 0;
  transition: opacity 0.3s ease;
  transform-origin: center;
}

.anim-active .wireframe-path {
  animation: drawLines 4.3s cubic-bezier(0.4, 0, 0.2, 1) forwards,
             vibrate 2s ease-in-out infinite alternate;
  opacity: 1;
}

.delay-0 { animation-delay: 0s, 0s; }
.delay-1 { animation-delay: 0.4s, 0.4s; }
.delay-2 { animation-delay: 1.0s, 1.0s; }
.delay-3 { animation-delay: 1.8s, 1.8s; }
.delay-4 { animation-delay: 2.5s, 2.5s; }
.delay-5 { animation-delay: 3.2s, 3.2s; }

@keyframes drawLines {
  from { stroke-dashoffset: 2000; }
  to { stroke-dashoffset: 0; }
}

@keyframes vibrate {
  0% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(0.4px, -0.4px) scale(1.001); }
  66% { transform: translate(-0.4px, 0.4px) scale(0.999); }
  100% { transform: translate(0.1px, 0.1px) scale(1); }
}
</style>
