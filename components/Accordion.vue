<template>
  <div class="space-y-4">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="border border-secondary-200 rounded-lg overflow-hidden hover:border-secondary-300 transition-colors"
    >
      <button
        @click="toggleItem(index)"
        class="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white hover:bg-secondary-50 transition-colors duration-200 flex items-center justify-between text-left"
      >
        <span class="font-semibold text-sm sm:text-base text-secondary-900">{{ item.question }}</span>
        <ChevronDown
          :size="18"
          class="text-secondary-500 transition-transform duration-200"
          :class="openItems[index] ? 'rotate-180' : ''"
        />
      </button>
      <div
        v-show="openItems[index]"
        class="px-4 sm:px-6 py-3 sm:py-4 bg-secondary-50 border-t border-secondary-200"
      >
        <div v-if="item.answer" class="text-sm sm:text-base text-secondary-600 leading-relaxed" v-html="formatAnswer(item.answer)"></div>
        <ul v-if="item.list" class="list-disc list-inside mt-3 space-y-1 text-sm sm:text-base text-secondary-600 leading-relaxed">
          <li v-for="(li, i) in item.list" :key="i" v-html="formatListItem(li)"></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ChevronDown } from 'lucide-vue-next'

interface AccordionItem {
  question: string
  answer?: string
  list?: string[]
}

interface Props {
  items: AccordionItem[]
}

const props = defineProps<Props>()

const openItems = ref<Record<number, boolean>>({})

const toggleItem = (index: number) => {
  openItems.value[index] = !openItems.value[index]
}

// Applique le formatage inline (gras + liens) sur un fragment de texte.
const formatInline = (text: string) => {
  return text
    // Gras pour les termes importants
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    // Liens
    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-primary-600 hover:text-primary-700 underline" target="_blank" rel="noopener noreferrer">$1</a>')
}

// Convertit une réponse markdown en HTML sémantique :
// - les lignes commençant par "-" ou "•" sont regroupées dans de vraies balises <ul>/<li>
// - les autres lignes sont encapsulées dans des paragraphes <p>
const formatAnswer = (answer: string) => {
  const lines = answer.split('\n')
  let html = ''
  let listBuffer: string[] = []

  const flushList = () => {
    if (listBuffer.length) {
      const listItems = listBuffer.map((li) => `<li>${formatInline(li)}</li>`).join('')
      html += `<ul class="list-disc list-inside mt-3 space-y-1">${listItems}</ul>`
      listBuffer = []
    }
  }

  for (const rawLine of lines) {
    const line = rawLine.trim()
    if (!line) {
      flushList()
      continue
    }
    const bullet = line.match(/^[-•]\s+(.*)$/)
    if (bullet) {
      listBuffer.push(bullet[1])
    } else {
      flushList()
      html += `<p class="mb-2">${formatInline(line)}</p>`
    }
  }
  flushList()

  return html
}

const formatListItem = (text: string) => formatInline(text)
</script>
