<template>
  <button
    class="button-secondary"
    :class="{
      'button-secondary--large': size === ButtonSize.LARGE,
      'button-secondary--disabled': disabled
    }"
    :style="{
      '--button-color': color
    }"
    :aria-label="ariaLabel || label"
    :aria-disabled="disabled"
    :disabled="disabled"
    @click="handleClick"
  >
    <span
      v-if="icon && iconPosition === IconPosition.LEFT"
      class="button-secondary__icon button-secondary__icon--left"
    >
      <Icon :name="icon" size="sm" :color="color" />
    </span>

    <span class="button-secondary__label">
      {{ label }}
    </span>

    <span
      v-if="icon && iconPosition === IconPosition.RIGHT"
      class="button-secondary__icon button-secondary__icon--right"
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

  /** 100% dinâmico */
  color: {
    type: String,
    default: 'var(--color-secondary)'
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
