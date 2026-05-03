<template>
  <div class="space-y-3 sm:space-y-4">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="border border-secondary-200 rounded-lg overflow-hidden"
    >
      <button
        @click="toggleItem(index)"
        class="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white hover:bg-secondary-50 transition-colors duration-200 flex items-center justify-between text-left"
      >
        <span class="font-semibold text-sm sm:text-base text-secondary-900">{{ item.question }}</span>
        <ChevronDown
          :size="18"
          class="sm:size-20 text-secondary-500 transition-transform duration-200"
          :class="openItems[index] ? 'rotate-180' : ''"
        />
      </button>
      <div
        v-show="openItems[index]"
        class="px-4 sm:px-6 py-3 sm:py-4 bg-secondary-50 border-t border-secondary-200"
      >
        <div class="text-sm sm:text-base text-secondary-600 leading-relaxed" v-html="formatAnswer(item.answer)"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ChevronDown } from 'lucide-vue-next'

interface AccordionItem {
  question: string
  answer: string
}

interface Props {
  items: AccordionItem[]
}

const props = defineProps<Props>()

const openItems = ref<Record<number, boolean>>({})

const toggleItem = (index: number) => {
  openItems.value[index] = !openItems.value[index]
}

const formatAnswer = (answer: string) => {
  return answer
    // Bold pour les termes importants
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    // Liens
    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-primary-600 hover:text-primary-700 underline" target="_blank" rel="noopener noreferrer">$1</a>')
    // Listes avec puces
    .replace(/^• (.*$)/gim, '<li class="ml-4 my-1">• $1</li>')
    // Sauts de ligne
    .replace(/\n\n/g, '</p><p class="mt-3 mb-2">')
    .replace(/\n/g, '<br>')
    // Wrap dans des paragraphes
    .replace(/^(.*)$/g, '<p class="mb-2">$1</p>')
}
</script>
