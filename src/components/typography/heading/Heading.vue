<template>
  <component
    :is="headingTag"
    :class="{
      'heading--h-1': level === HeadingLevel.H1,
      'heading--h-2': level === HeadingLevel.H2,
      'heading--h-3': level === HeadingLevel.H3,
      'heading--h-4': level === HeadingLevel.H4,
      'heading--h-5': level === HeadingLevel.H5,
      'heading--h-6': level === HeadingLevel.H6
    }"
    :style="{ color: color }"
  >
    <slot />
  </component>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { HeadingLevel } from '../TypographyTypes'

const props = defineProps({
  level: {
    type: Number,
    default: HeadingLevel.H3
  },
  color: {
    type: String,
    default: 'black'
  }
})

const headingTag = computed(() => {
  return `h${props.level}`
})
</script>

<style lang="scss" scoped src="./Heading.scss" />
