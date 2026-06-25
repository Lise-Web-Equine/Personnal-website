<template>
  <section
    :class="[
      'relative py-16 md:py-20 lg:py-24 overflow-hidden',
      isDark ? 'text-white' : 'text-secondary-900'
    ]"
  >
    <!-- Image de fond + overlay sombre -->
    <div v-if="image" class="absolute inset-0 -z-10">
      <NuxtImg
        :src="image"
        :alt="imageAlt"
        class="w-full h-full object-cover"
        sizes="100vw"
        loading="lazy"
      />
      <div class="absolute inset-0 bg-gradient-to-b from-secondary-900/90 via-secondary-900/80 to-secondary-900/90"></div>
    </div>

    <div class="relative container mx-auto px-6">
      <div
        class="max-w-3xl mx-auto"
        :class="alignClasses"
        v-motion-slide-visible-once-bottom
      >
        <h2 :class="titleClasses">
          {{ title }}
        </h2>
        <p
          v-if="description"
          :class="[
            'mb-8 leading-relaxed',
            isDark ? 'text-secondary-200' : 'text-secondary-600',
            size === 'large' ? 'text-base sm:text-lg md:text-xl' : 'text-base sm:text-lg'
          ]"
        >
          {{ description }}
        </p>
        <div class="flex flex-col sm:flex-row gap-4" :class="actionsJustifyClasses">
          <slot name="actions">
            <NuxtLink
              v-if="primaryLink && primaryLabel"
              :to="primaryLink"
              class="btn-primary inline-flex items-center"
            >
              <span>{{ primaryLabel }}</span>
              <ArrowRight v-if="primaryIcon" :size="20" class="ml-2" />
            </NuxtLink>
          </slot>
        </div>
        <div v-if="$slots.extra" class="mt-6">
          <slot name="extra" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'

interface Props {
  title: string
  description?: string
  image?: string
  imageAlt?: string
  variant?: 'dark' | 'light'
  align?: 'left' | 'center' | 'responsive'
  size?: 'default' | 'large'
  primaryLabel?: string
  primaryLink?: string
  primaryIcon?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  description: '',
  image: '',
  imageAlt: '',
  variant: undefined,
  align: 'center',
  size: 'default',
  primaryLabel: '',
  primaryLink: '',
  primaryIcon: true
})

const isDark = computed(() => props.variant === 'dark' || (!props.variant && !!props.image))

const alignClasses = computed(() => {
  if (props.align === 'left') {
    return 'text-left sm:text-left'
  }
  if (props.align === 'responsive') {
    return 'text-left sm:text-center'
  }
  return 'text-center'
})

const actionsJustifyClasses = computed(() => {
  if (props.align === 'left') {
    return 'justify-start'
  }
  if (props.align === 'responsive') {
    return 'justify-start sm:justify-center'
  }
  return 'justify-center'
})

const titleClasses = computed(() => {
  const base = 'font-bold mb-4'
  const sizeClass = props.size === 'large'
    ? 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl'
    : 'text-2xl sm:text-3xl md:text-4xl'
  return `${base} ${sizeClass} ${isDark.value ? 'text-white' : 'text-secondary-900'}`
})
</script>
