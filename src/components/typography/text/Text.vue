<template>
  <p
    class="text"
    :class="[sizeClass, weightClass, colorVariantClass, utilityClasses]"
    :style="computedStyles"
    :aria-disabled="disabled"
  >
    <slot />
  </p>
</template>

<script lang="ts">
// Constantes definidas fora do <script setup> para evitar erro de hoisting
export const TextSizes = {
  EXTRA_SMALL: 'xs',
  SMALL: 'sm',
  MEDIUM: 'md',
  LARGE: 'lg',
  EXTRA_LARGE: 'xl',
  EXTRA_EXTRA_LARGE: 'xxl'
} as const

export const TextWeights = {
  LIGHT: 'light',
  REGULAR: 'regular',
  MEDIUM: 'medium',
  SEMIBOLD: 'semibold',
  BOLD: 'bold'
} as const

export const TextColorVariants = {
  DEFAULT: 'default',
  SECONDARY: 'secondary',
  MUTED: 'muted',
  DISABLED: 'disabled',
  INVERSE: 'inverse',
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error',
  INFO: 'info',
  BRAND: 'brand'
} as const

export type TextSize = (typeof TextSizes)[keyof typeof TextSizes]
export type TextWeight = (typeof TextWeights)[keyof typeof TextWeights]
export type TextColorVariant =
  (typeof TextColorVariants)[keyof typeof TextColorVariants]
</script>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  size: {
    type: String,
    default: TextSizes.MEDIUM,
    validator: (value: string) =>
      Object.values(TextSizes).includes(value as any)
  },
  weight: {
    type: String,
    default: TextWeights.REGULAR,
    validator: (value: string) =>
      Object.values(TextWeights).includes(value as any)
  },
  color: {
    type: String,
    default: ''
  },
  colorVariant: {
    type: String,
    default: TextColorVariants.DEFAULT,
    validator: (value: string) =>
      Object.values(TextColorVariants).includes(value as any)
  },
  disabled: {
    type: Boolean,
    default: false
  },
  truncate: {
    type: Boolean,
    default: false
  },
  breakWord: {
    type: Boolean,
    default: false
  },
  uppercase: {
    type: Boolean,
    default: false
  },
  lowercase: {
    type: Boolean,
    default: false
  },
  capitalize: {
    type: Boolean,
    default: false
  },
  italic: {
    type: Boolean,
    default: false
  },
  underline: {
    type: Boolean,
    default: false
  },
  lineThrough: {
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

const sizeClass = computed(() => `text--${props.size}`)

const weightClass = computed(() => {
  if (props.weight !== TextWeights.REGULAR) {
    return `text--${props.weight}`
  }
  return ''
})

const colorVariantClass = computed(() => {
  if (props.disabled) {
    return 'text--disabled'
  }
  if (props.colorVariant !== TextColorVariants.DEFAULT) {
    return `text--${props.colorVariant}`
  }
  return ''
})

const utilityClasses = computed(() => {
  const classes: string[] = []

  if (props.truncate) classes.push('text--truncate')
  if (props.breakWord) classes.push('text--break-word')
  if (props.uppercase) classes.push('text--uppercase')
  if (props.lowercase) classes.push('text--lowercase')
  if (props.capitalize) classes.push('text--capitalize')
  if (props.italic) classes.push('text--italic')
  if (props.underline) classes.push('text--underline')
  if (props.lineThrough) classes.push('text--line-through')
  if (props.align !== 'left') classes.push(`text--${props.align}`)

  return classes
})

const computedStyles = computed(() => {
  const styles: Record<string, string> = {}

  // Cor customizada (sobrescreve variante)
  if (props.color) {
    styles['--text-color'] = props.color
  }

  return styles
})
</script>

<style scoped lang="scss" src="./Text.scss" />
