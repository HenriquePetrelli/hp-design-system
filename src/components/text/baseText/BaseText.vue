<template>
  <p
    :class="{
      'base-text--xs': size === BaseTextSize.EXTRA_SMALL,
      'base-text--sm': size === BaseTextSize.SMALL,
      'base-text--md': size === BaseTextSize.MEDIUM,
      'base-text--lg': size === BaseTextSize.LARGE,
      'base-text--xl': size === BaseTextSize.EXTRA_LARGE,
      'base-text--xxl': size === BaseTextSize.EXTRA_EXTRA_LARGE
    }"
    :style="{ color: color }"
  >
    <slot />
  </p>
</template>

<script lang="ts" setup>
import { BaseTextSize } from '../TextTypes'

defineProps({
  size: {
    type: String,
    default: BaseTextSize.MEDIUM
  },
  color: {
    type: String,
    default: 'black'
  }
})
</script>

<style lang="scss" scoped src="./BaseText.scss" />
