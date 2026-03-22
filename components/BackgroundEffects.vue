<template>
  <div class="bg-wrapper">
    <!-- Texture de grain -->
    <div class="bg-noise"></div>
    
    <!-- Lueurs principales -->
    <div 
      ref="glow1" 
      class="glow glow-1 animate-wave"
    ></div>
    <div 
      ref="glow2" 
      class="glow glow-2 animate-wave" 
      style="animation-delay: -10s;"
    ></div>
    
    <!-- Halos supplémentaires dispersés -->
    <div class="glow glow-3"></div>
    <div class="glow glow-4"></div>
    <div class="glow glow-5"></div>
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
  background: 
    radial-gradient(circle at 25% 25%, rgba(6, 182, 212, 0.03) 0%, transparent 50%),
    radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.02) 0%, transparent 50%),
    linear-gradient(to bottom, #ffffff 0%, #f8fafc 100%);
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
  opacity: 0.7;
}

.glow-1 {
  width: 900px;
  height: 900px;
  background: rgba(6, 182, 212, 0.12);
  top: -250px;
  right: -150px;
}

.glow-2 {
  width: 800px;
  height: 800px;
  background: rgba(168, 85, 247, 0.08);
  bottom: -200px;
  left: -150px;
}

.glow-3 {
  width: 400px;
  height: 400px;
  background: rgba(6, 182, 212, 0.06);
  top: 20%;
  left: 10%;
  animation: float 8s infinite ease-in-out;
}

.glow-4 {
  width: 500px;
  height: 500px;
  background: rgba(168, 85, 247, 0.05);
  top: 60%;
  right: 15%;
  animation: float 10s infinite ease-in-out reverse;
}

.glow-5 {
  width: 350px;
  height: 350px;
  background: rgba(6, 182, 212, 0.04);
  top: 40%;
  left: 50%;
  animation: float 12s infinite ease-in-out;
}

@keyframes wave {
  0% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(60px, -40px) scale(1.1); }
  66% { transform: translate(-30px, 20px) scale(0.95); }
  100% { transform: translate(0, 0) scale(1); }
}

@keyframes float {
  0%, 100% { transform: translateY(0px) scale(1); }
  50% { transform: translateY(-20px) scale(1.05); }
}

.animate-wave {
  animation: wave 20s infinite ease-in-out;
}
</style>
