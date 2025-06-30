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
import { TextSize } from '../TypographyTypes'

defineProps({
  size: {
    type: String,
    default: TextSize.MEDIUM
  },
  color: {
    type: String,
    default: 'black'
  }
})
</script>

<style lang="scss" scoped src="./Text.scss" />
