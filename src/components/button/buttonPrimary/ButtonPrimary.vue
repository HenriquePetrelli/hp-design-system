<template>
  <button
    class="button-primary"
    :class="{
      'button-primary--large': size === ButtonSize.LARGE,
      'button-primary--disabled': disabled
    }"
    :style="{
      backgroundColor: computedBackgroundColor,
      color: computedColor
    }"
    :aria-label="ariaLabel || label"
    :aria-disabled="disabled"
    :disabled="disabled"
    @click="handleClick"
  >
    <span
      v-if="icon && iconPosition === IconPosition.LEFT"
      class="button-primary__icon--left"
    >
      <Icon :name="icon" size="sm" :color="computedColor" />
    </span>

    <span class="button-primary__label" :style="{ color: computedColor }">
      {{ label }}
    </span>

    <span
      v-if="icon && iconPosition === IconPosition.RIGHT"
      class="button-primary__icon--right"
    >
      <Icon :name="icon" size="sm" :color="computedColor" />
    </span>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { ButtonColor, IconPosition, ButtonSize } from '../ButtonTypes'
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
  tabindex: {
    type: Number,
    required: true
  },
  disabled: {
    type: Boolean,
    default: false
  },
  backgroundColor: {
    type: String,
    default: ButtonColor.PRIMARY
  },
  color: {
    type: String,
    default: 'white'
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
  return props.color || 'inherit'
})

const computedBackgroundColor = computed(() => {
  if (
    Object.values(ButtonColor).includes(props.backgroundColor as ButtonColor)
  ) {
    return `var(--color-${props.backgroundColor})`
  }
  return props.backgroundColor
})
</script>

<style lang="scss" scoped src="./ButtonPrimary.scss" />
