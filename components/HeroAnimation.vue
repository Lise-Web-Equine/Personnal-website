<script setup>
const isFinal = ref(false)
const container = ref(null)
let interval = null

const triggerCycle = () => {
  isFinal.value = !isFinal.value
  
  if (!isFinal.value && container.value) {
    container.value.classList.remove('anim-active')
    // Trick pour forcer le redessin (reflow) et relancer l'animation CSS
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
  // Cycle de 5 secondes
  interval = setInterval(triggerCycle, 5000)
})

onUnmounted(() => {
  if (interval) clearInterval(interval)
})
</script>

<template>
  <div class="relative w-full max-w-3xl mx-auto transition-all duration-700 ease-in-out">
    <div 
      ref="container"
      class="relative w-full h-[550px] rounded-[32px] overflow-hidden bg-white border border-slate-200 shadow-[0_40px_100px_-15px_rgba(15,23,42,0.12)]"
      :class="{ 'scale-[1.02]': isFinal }"
    >
      <div class="h-12 bg-slate-50/80 backdrop-blur-md flex items-center px-6 gap-2 border-b border-slate-100 z-[50] relative">
        <div class="flex gap-1.5">
          <div class="w-3 h-3 rounded-full bg-slate-200 border border-slate-300/50"></div>
          <div class="w-3 h-3 rounded-full bg-slate-200 border border-slate-300/50"></div>
          <div class="w-3 h-3 rounded-full bg-slate-200 border border-slate-300/50"></div>
        </div>
        <div class="ml-6 h-6 w-1/3 bg-white border border-slate-200 rounded-md flex items-center px-3">
          <div class="w-2 h-2 rounded-full bg-slate-200 mr-2"></div>
          <div class="h-1.5 w-full bg-slate-100 rounded-full"></div>
        </div>
      </div>

      <div class="relative w-full h-[calc(100%-48px)] bg-white overflow-hidden">
        
        <div 
          class="absolute inset-0 z-[2] transition-all duration-[800ms] ease-in-out"
          :class="isFinal ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-105 blur-lg pointer-events-none'"
        >
          <img 
            src="https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&q=80&w=1400" 
            class="absolute inset-0 w-full h-full object-cover filter saturate-[0.9] brightness-[0.65]"
            alt="Zen Equine"
          />
          <div class="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-transparent"></div>
          
          <div class="absolute inset-0 p-16 flex flex-col justify-center">
            <nav class="absolute top-10 left-16 right-16 flex justify-between items-center text-white">
              <div class="font-black text-xl tracking-tighter uppercase">
                ZEN <span class="text-emerald-400 italic font-serif lowercase tracking-normal">equine</span>
              </div>
              <div class="flex gap-8 text-[10px] uppercase font-bold tracking-[0.3em] opacity-80">
                <span>Philosophie</span>
                <span>Réservation</span>
              </div>
            </nav>
            
            <div class="max-w-md space-y-8">
              <div class="h-1 w-16 bg-emerald-500 rounded-full"></div>
              <h2 class="hero-animation-title text-6xl font-black tracking-tighter leading-[0.9] text-white">
                L'art du <br/>
                <span class="text-emerald-400 italic font-serif font-light">mouvement.</span>
              </h2>
              <p class="text-lg text-slate-200 leading-relaxed font-light">Soins de massage pour la santé et la performance de vos chevaux.</p>
              <div class="pt-4">
                <button class="bg-emerald-500 text-white px-10 py-4 text-xs font-bold rounded-full uppercase tracking-[0.2em] shadow-2xl transition-all">Prendre rendez-vous</button>
              </div>
            </div>
          </div>
        </div>

        <div 
          class="absolute inset-0 bg-white flex items-center justify-center z-[10] transition-all duration-700"
          :class="isFinal ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'"
        >
          <svg width="80%" height="80%" viewBox="0 0 400 300" fill="none" class="drop-shadow-2xl">
            <defs>
              <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f1f5f9" stroke-width="0.5"/>
              </pattern>
            </defs>
            <rect width="400" height="300" fill="url(#grid)" />

            <path d="M5 5 H395 V295 H5 Z" stroke="#cbd5e1" stroke-width="0.5" class="wireframe-path delay-0" />
            <rect x="30" y="30" width="80" height="12" rx="2" stroke="#3b82f6" stroke-width="1.5" class="wireframe-path delay-1" />
            <circle cx="340" cy="36" r="4" stroke="#94a3b8" stroke-width="1.5" class="wireframe-path delay-1" />
            <circle cx="360" cy="36" r="4" stroke="#94a3b8" stroke-width="1.5" class="wireframe-path delay-1" />
            <rect x="220" y="70" width="150" height="200" rx="8" stroke="#3b82f6" stroke-width="1" stroke-dasharray="4 4" class="wireframe-path delay-2" />
            <path d="M220 120 L370 220 M370 120 L220 220" stroke="#e2e8f0" stroke-width="1" class="wireframe-path delay-3" />
            <path d="M30 100 H180" stroke="#3b82f6" stroke-width="6" stroke-linecap="round" class="wireframe-path delay-2" />
            <path d="M30 120 H150" stroke="#3b82f6" stroke-width="6" stroke-linecap="round" class="wireframe-path delay-2" />
            <g stroke="#94a3b8" stroke-width="1.5" stroke-linecap="round" class="wireframe-path delay-4">
              <path d="M30 160 H160" />
              <path d="M30 175 H170" />
              <path d="M30 190 H140" />
            </g>
            <rect x="30" y="230" width="100" height="34" rx="17" stroke="#3b82f6" stroke-width="2" class="wireframe-path delay-5" />
            <g font-family="monospace" font-size="6" fill="#3b82f6" font-weight="bold" class="opacity-40">
              <text x="30" y="92">HERO_TITLE_H1</text>
              <text x="220" y="65">IMAGE_PLACEHOLDER</text>
              <text x="30" y="225">CTA_BUTTON</text>
            </g>
          </svg>
        </div>
      </div>

      <div class="absolute bottom-10 right-10 z-[40]">
        <div 
          class="flex items-center gap-3 px-8 py-4 rounded-2xl text-[11px] font-black uppercase tracking-[0.25em] transition-all duration-500 border-2"
          :class="isFinal ? 'bg-emerald-500 border-emerald-300 text-white shadow-[0_20px_40px_rgba(16,185,129,0.3)]' : 'bg-white border-slate-100 text-slate-500'"
        >
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" :class="isFinal ? 'bg-white' : 'bg-blue-400'"></span>
            <span class="relative inline-flex rounded-full h-2 w-2" :class="isFinal ? 'bg-white' : 'bg-blue-500'"></span>
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
