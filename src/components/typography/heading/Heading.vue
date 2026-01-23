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

const HeadingLevel = {
  H1: 1,
  H2: 2,
  H3: 3,
  H4: 4,
  H5: 5,
  H6: 6
} as const

type HeadingLevelType = (typeof HeadingLevel)[keyof typeof HeadingLevel]

const props = defineProps<{
  level?: HeadingLevelType
  color?: string
}>()

const headingTag = computed(() => `h${props.level ?? HeadingLevel.H3}`)
</script>

<style scoped lang="scss" src="./Heading.scss" />
