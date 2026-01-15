<template>
  <button
    class="button-icon"
    :class="{
      'button-icon--sm': size === ButtonIconSize.SMALL,
      'button-icon--lg': size === ButtonIconSize.LARGE,
      'button-icon--disabled': disabled,
      'button-icon--is-loading': isLoading
    }"
    :style="computedStyles"
    :aria-label="label"
    :aria-disabled="disabled || isLoading"
    :disabled="disabled || isLoading"
    :tabindex="tabindex"
    @click="handleClick"
  >
    <HpIcon v-if="!isLoading" :name="icon" :size="size" :color="color" />

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
import { HpIcon, HpSpinnerLoader } from '@components'
import { ButtonIconSize } from './ButtonIconTypes'
import { convertHexToRgb } from '@composables/convertColorType'

const props = defineProps({
  label: {
    type: String,
    required: true
  },
  icon: {
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
    default: ButtonIconSize.REGULAR
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
  '--icon-color': convertHexToRgb(props.color),
  '--text-color': props.color,
  '--hover-color': props.hoverColor || props.color,
  '--disabled-color': props.disabledColor
}))
</script>

<style lang="scss" scoped src="./ButtonIcon.scss" />
