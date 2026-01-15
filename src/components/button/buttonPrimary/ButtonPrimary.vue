<template>
  <button
    class="button-primary"
    :class="{
      'button-primary--large': size === ButtonSize.LARGE,
      'button-primary--disabled': disabled
    }"
    :style="{
      backgroundColor: backgroundColor,
      color: color
    }"
    :aria-label="ariaLabel || label"
    :aria-disabled="disabled"
    :disabled="disabled"
    @click="handleClick"
  >
    <span
      v-if="icon && iconPosition === IconPosition.LEFT"
      class="button-primary__icon button-primary__icon--left"
    >
      <Icon :name="icon" size="sm" :color="color" />
    </span>

    <span class="button-primary__label">
      {{ label }}
    </span>

    <span
      v-if="icon && iconPosition === IconPosition.RIGHT"
      class="button-primary__icon button-primary__icon--right"
    >
      <Icon :name="icon" size="sm" :color="color" />
    </span>
  </button>
</template>

<script setup lang="ts">
import { ButtonSize, IconPosition } from '../ButtonTypes'
import Icon from '../../icon/Icon.vue'

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

  backgroundColor: {
    type: String,
    default: 'var(--color-primary)'
  },

  color: {
    type: String,
    default: 'var(--color-text-inverse)'
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

<style lang="scss" scoped src="./ButtonPrimary.scss" />
