<template>
  <p
    :class="{
      'text--xs': size === TextSize.EXTRA_SMALL,
      'text--sm': size === TextSize.SMALL,
      'text--md': size === TextSize.MEDIUM,
      'text--lg': size === TextSize.LARGE,
      'text--xl': size === TextSize.EXTRA_LARGE,
      'text--xxl': size === TextSize.EXTRA_EXTRA_LARGE
    }"
    :style="{ color: color }"
  >
    <slot />
  </p>
</template>

<script lang="ts" setup>
// Enum interno para tamanhos de texto
const TextSize = {
  EXTRA_SMALL: 'xs',
  SMALL: 'sm',
  MEDIUM: 'md',
  LARGE: 'lg',
  EXTRA_LARGE: 'xl',
  EXTRA_EXTRA_LARGE: 'xxl'
} as const

type TextSizeType = (typeof TextSize)[keyof typeof TextSize]

const props = defineProps<{
  size?: TextSizeType
  color?: string
}>()
</script>

<style lang="scss" scoped src="./Text.scss" />
