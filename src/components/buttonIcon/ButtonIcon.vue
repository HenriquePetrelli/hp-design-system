<template>
  <button
    @click="handleClick"
    :aria-label="label"
    :tabindex="tabindex"
    class="button-icon"
    :class="{
      'button-icon--sm': size === ButtonIconSize.SMALL,
      'button-icon--lg': size === ButtonIconSize.LARGE,
      'button-icon--disabled': disabled,
      'button-icon--is-loading': isLoading
    }"
    :style="{
      '--background-color': computedBackgroundColor,
      '--icon-color': convertHexToRgb(computedIconColor)
    }"
    :aria-disabled="disabled || isLoading"
    :disabled="disabled || isLoading"
  >
    <HpIcon
      v-if="!isLoading"
      :name="icon"
      :size="size"
      :color="computedIconColor"
    />

    <HpSpinnerLoader
      v-else
      type="circle1"
      :color="computedIconColor || 'var(--color-primary)'"
      :secondaryColor="computedBackgroundColor"
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
    default: ''
  },
  hasBackground: {
    type: Boolean,
    default: false
  },
  backgroundColor: {
    type: String,
    default: ''
  },
  iconColor: {
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
    defualt: false
  },
  size: {
    type: String,
    default: ButtonIconSize.REGULAR
  }
})

const emit = defineEmits(['action:click'])

const handleClick = (event: Event) => {
  if (!props.disabled) {
    emit('action:click', event)
  }
}

const computedIconColor = computed(() => {
  if (props.backgroundColor || props.hasBackground)
    return props.iconColor || '#fff'
  else return props.iconColor || 'var(--color-primary)'
})

const computedBackgroundColor = computed(() => {
  if (props.backgroundColor) return props.backgroundColor
  if (props.hasBackground) return 'var(--color-primary)'
  return 'transparent'
})
</script>

<style lang="scss" scoped src="./ButtonIcon.scss" />
