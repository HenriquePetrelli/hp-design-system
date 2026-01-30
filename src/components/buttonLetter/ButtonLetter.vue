<template>
  <button
    class="button-letter"
    :class="{
      'button-letter--sm': size === ButtonLetterSize.SMALL,
      'button-letter--lg': size === ButtonLetterSize.LARGE,
      'button-letter--disabled': disabled,
      'button-letter--is-loading': isLoading,
      'button-letter--has-background-hover': hasBackgroundHover
    }"
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
      :color="'var(--button-letter-color)'"
      :secondaryColor="'transparent'"
      :size="size"
      :speed="0.8"
    />
  </button>
</template>

<script setup lang="ts">
import { HpSpinnerLoader } from '@components'
import { ButtonLetterSize } from './ButtonLetterTypes'

const props = defineProps({
  label: {
    type: String,
    required: true
  },
  letter: {
    type: String,
    required: true
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
</script>

<style scoped lang="scss" src="./ButtonLetter.scss" />
