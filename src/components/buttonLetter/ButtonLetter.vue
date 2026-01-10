<template>
  <button
    @click="handleClick"
    :aria-label="label"
    :aria-disabled="disabled || isLoading"
    :disabled="disabled || isLoading"
    :tabindex="disabled ? -1 : 0"
    class="button-letter"
    :class="{
      'button-letter--sm': size === ButtonLetterSize.SMALL,
      'button-letter--lg': size === ButtonLetterSize.LARGE,
      'button-letter--disabled': disabled,
      'button-letter--is-loading': isLoading
    }"
    :style="{
      '--background-color': computedBackgroundColor,
      '--letter-color-rgb': letterColorRgb,
      color: computedLetterColor
    }"
  >
    <span v-if="!isLoading">{{ letter }}</span>

    <HpSpinnerLoader
      v-else
      type="circle1"
      :color="computedLetterColor || 'var(--color-primary)'"
      :secondaryColor="computedBackgroundColor"
      :size="size"
      :speed="0.8"
    />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { HpSpinnerLoader } from '@components'
import { ButtonLetterSize } from './ButtonLetterTypes'
import { convertHexToRgb } from '@composables/convertColorType'

const props = defineProps({
  label: {
    type: String,
    required: true
  },
  letter: {
    type: String,
    required: true
  },
  hasBackground: {
    type: Boolean,
    default: false
  },
  backgroundColor: {
    type: String,
    default: ''
  },
  letterColor: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  tabindex: {
    type: Number,
    default: 0
  },
  isLoading: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: ButtonLetterSize.REGULAR
  }
})

const emit = defineEmits(['action:click'])

const handleClick = (event: Event) => {
  if (!props.disabled && !props.isLoading) {
    emit('action:click', event)
  }
}

/**
 * COR DO TEXTO (sempre uma cor válida)
 */
const computedLetterColor = computed(() => {
  if (props.hasBackground || props.backgroundColor) {
    return props.letterColor || '#000000'
  }

  return props.letterColor || 'var(--color-primary)'
})

/**
 * BACKGROUND
 */
const computedBackgroundColor = computed(() => {
  if (props.backgroundColor) return props.backgroundColor
  if (props.hasBackground) return 'var(--color-primary)'
  return 'transparent'
})

/**
 * RGB usado SOMENTE para efeitos visuais (hover)
 */
const letterColorRgb = computed(() => {
  const color = computedLetterColor.value
  return color ? convertHexToRgb(color) : ''
})
</script>

<style lang="scss" scoped src="./ButtonLetter.scss" />
