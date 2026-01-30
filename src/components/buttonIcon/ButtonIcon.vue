<template>
  <button
    class="button-icon"
    :class="{
      'button-icon--sm': size === ButtonIconSize.SMALL,
      'button-icon--lg': size === ButtonIconSize.LARGE,
      'button-icon--disabled': disabled,
      'button-icon--is-loading': isLoading,
      'button-icon--has-background-hover': hasBackgroundHover
    }"
    :aria-label="label"
    :aria-disabled="disabled || isLoading"
    :disabled="disabled || isLoading"
    :tabindex="tabindex"
    @click="handleClick"
  >
    <HpIcon v-if="!isLoading" :name="icon" :size="iconSize" />

    <HpSpinnerLoader
      v-else
      type="circle1"
      :color="'var(--button-icon-color)'"
      :secondaryColor="'transparent'"
      :size="iconSize"
      :speed="0.8"
    />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { HpIcon, HpSpinnerLoader } from '@components'
import { ButtonIconSize, type ButtonIconSizeValue } from './ButtonIconTypes'

const props = defineProps({
  label: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    default: 'CA0010'
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
    type: String as () => ButtonIconSizeValue,
    default: ButtonIconSize.REGULAR
  },
  hasBackgroundHover: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits<{
  (e: 'action:click', event: Event): void
}>()

const handleClick = (event: Event) => {
  if (!props.disabled && !props.isLoading) {
    emit('action:click', event)
  }
}

const normalizedSize = computed<ButtonIconSize>(() => {
  switch (props.size) {
    case 'sm':
      return ButtonIconSize.SMALL
    case 'lg':
      return ButtonIconSize.LARGE
    default:
      return ButtonIconSize.REGULAR
  }
})

const iconSize = computed(() => normalizedSize.value)
</script>

<style scoped lang="scss" src="./ButtonIcon.scss" />
