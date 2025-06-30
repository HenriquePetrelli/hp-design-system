<template>
  <button
    @click="handleClick"
    :aria-label="label"
    :tabindex="tabindex"
    class="button-icon-primary"
    :class="{
      'button-icon-primary--sm': size === ButtonIconSize.SMALL,
      'button-icon-primary--lg': size === ButtonIconSize.LARGE,
      'button-icon-primary--disabled': disabled,
      'button-icon-primary--is-loading': isLoading
    }"
    :style="{
      '--background-color': computedBackgroundColor
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
      color="white"
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

const props = defineProps({
  label: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
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
  return props.iconColor || '#fff'
})

const computedBackgroundColor = computed(() => {
  return props.backgroundColor || 'var(--color-primary)'
})
</script>

<style lang="scss" scoped src="./ButtonIconPrimary.scss" />
