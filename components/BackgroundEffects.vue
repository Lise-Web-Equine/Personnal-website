<template>
  <div class="bg-wrapper">
    <!-- Texture de grain -->
    <div class="bg-noise"></div>
    
    <!-- Lueurs (Vagues violettes) -->
    <div 
      ref="glow1" 
      class="glow glow-1 animate-wave"
    ></div>
    <div 
      ref="glow2" 
      class="glow glow-2 animate-wave" 
      style="animation-delay: -10s;"
    ></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const glow1 = ref(null)
const glow2 = ref(null)

const handleMouseMove = (e) => {
  if (!glow1.value || !glow2.value) return

  const x = (e.clientX / window.innerWidth - 0.5) * 60
  const y = (e.clientY / window.innerHeight - 0.5) * 60

  glow1.value.style.marginLeft = `${x}px` 
  glow1.value.style.marginTop = `${y}px` 

  glow2.value.style.marginLeft = `${-x}px` 
  glow2.value.style.marginTop = `${-y}px` 
}

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
})
</script>

<style scoped>
.bg-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;
  overflow: hidden;
  pointer-events: none;
  background-color: #ffffff;
}

.bg-noise {
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
  opacity: 0.04;
  mix-blend-mode: multiply;
}

.glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(140px);
  transition: transform 0.4s ease-out;
  opacity: 0.9;
}

.glow-1 {
  width: 900px;
  height: 900px;
  background: rgba(139, 92, 246, 0.15);
  top: -250px;
  right: -150px;
}

.glow-2 {
  width: 800px;
  height: 800px;
  background: rgba(192, 38, 211, 0.12);
  bottom: -200px;
  left: -150px;
}

@keyframes wave {
  0% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(60px, -40px) scale(1.1); }
  66% { transform: translate(-30px, 20px) scale(0.95); }
  100% { transform: translate(0, 0) scale(1); }
}

.animate-wave {
  animation: wave 20s infinite ease-in-out;
}
</style>
