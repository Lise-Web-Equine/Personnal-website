import VuePdfEmbed from 'vue-pdf-embed'

// Register the PDF viewer globally (client-side only, pdf.js relies on the DOM).
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('VuePdfEmbed', VuePdfEmbed)
})
