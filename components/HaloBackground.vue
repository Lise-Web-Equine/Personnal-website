<template>
  <div class="halo-wrapper">
    <div class="absolute inset-x-0 -top-20 sm:-top-40 -z-10 transform-gpu overflow-hidden blur-2xl sm:blur-3xl" aria-hidden="true">
      <div 
        class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[40rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff9a76] to-[#9089fc] opacity-50 sm:opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" 
        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
      ></div>
    </div>

    <div class="absolute inset-x-0 top-[calc(50%-20rem)] -z-10 transform-gpu overflow-hidden blur-2xl sm:blur-3xl sm:top-[calc(50%-30rem)]" aria-hidden="true">
      <div 
        class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[40rem] -translate-x-1/2 bg-gradient-to-tr from-[#9089fc] to-[#ffb380] opacity-35 sm:opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" 
        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
      ></div>
    </div>

    <div class="absolute inset-x-0 -bottom-20 sm:-bottom-40 -z-10 transform-gpu overflow-hidden blur-2xl sm:blur-3xl" aria-hidden="true">
      <div 
        class="relative left-[calc(50%-15rem)] aspect-[1155/678] w-[40rem] -translate-x-1/2 rotate-[-30deg] bg-gradient-to-tr from-[#ffa366] to-[#ff80b5] opacity-45 sm:opacity-25 sm:left-[calc(50%-20rem)] sm:w-[72.1875rem]" 
        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
      ></div>
    </div>
  </div>
</template>

<style scoped>
.halo-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;
  overflow: hidden;
  pointer-events: none;
}
</style>
