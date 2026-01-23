<template>
  <svg
    :class="['icon', sizeClass]"
    xmlns="http://www.w3.org/2000/svg"
    :aria-hidden="isDecorative"
    :role="isDecorative ? 'presentation' : 'img'"
    :aria-label="!isDecorative ? ariaLabel : undefined"
    :style="{ '--icon-color': color }"
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

  /** Cor do ícone (usa currentColor por padrão) */
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

/**
 * Se não houver ariaLabel, o ícone deve ser decorativo
 */
const isDecorative = computed(() => {
  return props.decorative || !props.ariaLabel
})
</script>

<style scoped lang="scss" src="./Icon.scss" />
