<template>
  <button
    class="button-secondary"
    :class="{
      'button-secondary--large': size === ButtonSize.LARGE,
      'button-secondary--disabled': disabled
    }"
    :style="color ? { '--button-secondary-color': color } : undefined"
    :aria-label="ariaLabel || label"
    :aria-disabled="disabled"
    :disabled="disabled"
    @click="handleClick"
  >
    <span
      v-if="icon && iconPosition === IconPosition.LEFT"
      class="button-secondary__icon button-secondary__icon--left"
    >
      <HpIcon
        :name="icon"
        size="sm"
        :color="color || 'var(--button-secondary-text)'"
      />
    </span>

    <span class="button-secondary__label">
      {{ label }}
    </span>

    <span
      v-if="icon && iconPosition === IconPosition.RIGHT"
      class="button-secondary__icon button-secondary__icon--right"
    >
      <HpIcon
        :name="icon"
        size="sm"
        :color="color || 'var(--button-secondary-text)'"
      />
    </span>
  </button>
</template>

<script setup lang="ts">
import { ButtonSize, IconPosition } from '../ButtonTypes'
import { HpIcon } from '@components'

const props = defineProps({
  label: {
    type: String,
    required: true
  },
  ariaLabel: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  color: {
    type: String,
    default: ''
  },
  size: {
    type: String,
    default: ButtonSize.REGULAR
  },
  icon: {
    type: String,
    default: ''
  },
  iconPosition: {
    type: String,
    default: IconPosition.LEFT
  }
})

const emit = defineEmits(['action:click'])

const handleClick = (event: Event) => {
  if (!props.disabled) {
    emit('action:click', event)
  }
}
</script>

<style lang="scss" scoped src="./ButtonSecondary.scss" />
