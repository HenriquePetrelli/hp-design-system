<template>
  <svg
    :class="['icon', sizeClass]"
    xmlns="http://www.w3.org/2000/svg"
    :aria-hidden="decorative"
    :role="decorative ? 'presentation' : 'img'"
    :aria-label="decorative ? undefined : ariaLabel"
    :style="{ color }"
  >
    <use :xlink:href="`#icon-${name}`" />
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

  /** Cor do ícone (usa color / currentColor) */
  color: {
    type: String,
    default: 'currentColor'
  },

  /** Se true, o ícone é apenas decorativo */
  decorative: {
    type: Boolean,
    default: true
  },

  /** Label acessível quando não decorativo */
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
</script>

<style scoped lang="scss" src="./Icon.scss" />
