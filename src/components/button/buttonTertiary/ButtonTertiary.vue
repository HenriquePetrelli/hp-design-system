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
      class="button-tertiary__icon--left"
    >
      <Icon :name="icon" size="sm" />
    </span>

    <span class="button-tertiary__label">
      {{ label }}
    </span>

    <span
      v-if="icon && iconPosition === IconPosition.RIGHT"
      class="button-tertiary__icon--right"
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
   * Cor do texto no estado normal
   */
  color: {
    type: String,
    default: '#000000'
  },

  /**
   * Cor do texto no hover
   */
  hoverColor: {
    type: String,
    default: '#FF7F50'
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
 * CSS variables totalmente dinâmicas
 */
const computedStyles = computed(() => ({
  '--text-color': props.color,
  '--hover-color': props.hoverColor
}))
</script>

<style lang="scss" scoped src="./ButtonTertiary.scss" />
