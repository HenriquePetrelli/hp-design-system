<template>
  <svg
    :class="['icon', sizeClass]"
    xmlns="http://www.w3.org/2000/svg"
    :role="isDecorative ? 'presentation' : 'img'"
    :aria-hidden="isDecorative"
    :aria-label="!isDecorative ? ariaLabel : undefined"
    :style="{
      '--icon-color': resolvedColor
    }"
  >
    <use :href="`#icon-${name}`" />
  </svg>
</template>

<script setup lang="ts">
import { computed, PropType } from 'vue'

type IconSize = 'sm' | 'md' | 'lg'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  size: {
    type: String as PropType<IconSize>,
    default: 'md'
  },
  color: {
    type: String,
    default: ''
  },
  decorative: {
    type: Boolean,
    default: true
  },
  ariaLabel: {
    type: String,
    default: ''
  }
})

const sizeClass = computed(() => {
  return (
    {
      sm: 'icon--sm',
      md: 'icon--md',
      lg: 'icon--lg'
    }[props.size] || 'icon--md'
  )
})

const isDecorative = computed(() => {
  return props.decorative || !props.ariaLabel
})

const resolvedColor = computed(() => {
  return props.color || 'var(--icon-color)'
})
</script>

<style scoped lang="scss" src="./Icon.scss" />
