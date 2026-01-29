<template>
  <component
    :is="headingTag"
    class="heading"
    :class="[
      headingClass,
      colorVariantClass,
      { 'heading--truncate': truncate }
    ]"
    :style="computedStyles"
    :aria-level="level"
  >
    <slot />
  </component>
</template>

<script lang="ts">
// Constantes definidas fora do <script setup> para evitar erro de hoisting
export const HeadingLevels = {
  H1: 1,
  H2: 2,
  H3: 3,
  H4: 4,
  H5: 5,
  H6: 6
} as const

export const ColorVariants = {
  DEFAULT: 'default',
  SECONDARY: 'secondary',
  MUTED: 'muted',
  INVERSE: 'inverse',
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error',
  INFO: 'info',
  BRAND: 'brand'
} as const

export type HeadingLevel = (typeof HeadingLevels)[keyof typeof HeadingLevels]
export type ColorVariant = (typeof ColorVariants)[keyof typeof ColorVariants]
</script>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  level: {
    type: Number,
    default: HeadingLevels.H1,
    validator: (value: number) =>
      Object.values(HeadingLevels).includes(value as any)
  },
  // Opções de cor
  color: {
    type: String,
    default: ''
  },
  colorVariant: {
    type: String,
    default: ColorVariants.DEFAULT,
    validator: (value: string) =>
      Object.values(ColorVariants).includes(value as any)
  },
  // Outras props
  truncate: {
    type: Boolean,
    default: false
  },
  align: {
    type: String,
    default: 'left',
    validator: (value: string) =>
      ['left', 'center', 'right', 'justify'].includes(value)
  }
})

const headingTag = computed(() => `h${props.level}`)

const headingClass = computed(() => {
  const level = props.level || HeadingLevels.H1
  return `heading--h-${level}`
})

const colorVariantClass = computed(() => {
  if (props.colorVariant !== ColorVariants.DEFAULT) {
    return `heading--${props.colorVariant}`
  }
  return ''
})

const computedStyles = computed(() => {
  const styles: Record<string, string> = {}

  // Cor customizada (sobrescreve variante)
  if (props.color) {
    styles['--heading-color'] = props.color
  }

  // Alinhamento de texto
  if (props.align && props.align !== 'left') {
    styles['text-align'] = props.align
  }

  // Truncate (se necessário)
  if (props.truncate) {
    styles['overflow'] = 'hidden'
    styles['text-overflow'] = 'ellipsis'
    styles['white-space'] = 'nowrap'
  }

  return styles
})
</script>

<style scoped lang="scss" src="./Heading.scss" />
