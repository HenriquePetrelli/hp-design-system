<template>
  <button
    class="button-letter"
    :class="{
      'button-letter--sm': size === ButtonLetterSize.SMALL,
      'button-letter--lg': size === ButtonLetterSize.LARGE,
      'button-letter--disabled': disabled,
      'button-letter--is-loading': isLoading
    }"
    :style="computedStyles"
    :aria-label="label"
    :aria-disabled="disabled || isLoading"
    :disabled="disabled || isLoading"
    :tabindex="disabled || isLoading ? -1 : tabindex"
    @click="handleClick"
  >
    <span v-if="!isLoading" class="button-letter__content">
      {{ letter }}
    </span>

    <HpSpinnerLoader
      v-else
      type="circle1"
      :color="color"
      :secondaryColor="backgroundColor || 'transparent'"
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
  color: {
    type: String,
    default: 'currentColor'
  },
  hoverColor: {
    type: String,
    default: ''
  },
  backgroundColor: {
    type: String,
    default: 'transparent'
  },
  disabledColor: {
    type: String,
    default: 'var(--color-text-disabled)'
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

const computedStyles = computed(() => ({
  '--background-color': props.backgroundColor,
  '--text-color': props.color,
  '--hover-color': props.hoverColor || props.color,
  '--letter-color-rgb': convertHexToRgb(props.color),
  '--disabled-color': props.disabledColor
}))
</script>

<style lang="scss" scoped src="./ButtonLetter.scss" />
