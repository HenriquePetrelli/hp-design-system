<template>
  <button
    class="button-secondary"
    :class="{
      'button-secondary--large': size === ButtonSize.LARGE,
      'button-secondary--disabled': disabled
    }"
    :style="{
      '--hover-color': computedColor
    }"
    :aria-label="ariaLabel || label"
    :aria-disabled="disabled"
    :disabled="disabled"
    @click="handleClick"
  >
    <span
      v-if="icon && iconPosition === IconPosition.LEFT"
      class="button-secondary__icon--left"
    >
      <Icon :name="icon" size="sm" />
    </span>

    <span class="button-secondary__label">
      {{ label }}
    </span>

    <span
      v-if="icon && iconPosition === IconPosition.RIGHT"
      class="button-secondary__icon--right"
    >
      <Icon :name="icon" size="sm" />
    </span>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { IconPosition, ButtonSize } from '../ButtonTypes'
import Icon from '../../icons/icon/Icon.vue'

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

const emit = defineEmits(['click'])

const handleClick = (event: Event) => {
  if (!props.disabled) {
    emit('click', event)
  }
}

const computedColor = computed(() => {
  return props.color || '#fca311'
})
</script>

<style lang="scss" scoped src="./ButtonSecondary.scss" />
