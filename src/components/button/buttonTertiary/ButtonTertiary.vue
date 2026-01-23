<template>
  <button
    class="button-tertiary"
    :class="{
      'button-tertiary--large': size === ButtonSize.LARGE,
      'button-tertiary--disabled': disabled
    }"
    :style="computedStyles"
    :aria-label="ariaLabel || label"
    :aria-disabled="disabled"
    :disabled="disabled"
    @click="handleClick"
  >
    <span
      v-if="icon && iconPosition === IconPosition.LEFT"
      class="button-tertiary__icon button-tertiary__icon--left"
    >
      <Icon :name="icon" size="sm" />
    </span>

    <span class="button-tertiary__label">
      {{ label }}
    </span>

    <span
      v-if="icon && iconPosition === IconPosition.RIGHT"
      class="button-tertiary__icon button-tertiary__icon--right"
    >
      <Icon :name="icon" size="sm" />
    </span>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { IconPosition, ButtonSize } from '../ButtonTypes'
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

  /**
   * Override da cor do texto (opcional)
   */
  color: {
    type: String,
    default: 'var(--button-tertiary-text)'
  },

  /**
   * Override da cor no hover/focus (opcional)
   */
  hoverColor: {
    type: String,
    default: 'var(--button-tertiary-text-hover)'
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

/**
 * CSS variables semânticas com override via props
 */
const computedStyles = computed(() => ({
  '--button-tertiary-text': props.color,
  '--button-tertiary-hover-text': props.hoverColor
}))
</script>

<style lang="scss" scoped src="./ButtonTertiary.scss" />
