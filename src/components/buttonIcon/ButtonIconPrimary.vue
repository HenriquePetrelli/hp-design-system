<template>
  <button
    @click="handleClick()"
    :aria-label="label"
    :tabindex="tabindex"
    class="button-icon-primary"
    :class="{
      'button-icon-primary--small': size === ButtonIconSize.SMALL,
      'button-icon-primary--large': size === ButtonIconSize.LARGE,
      'button-icon-primary--disabled': disabled
    }"
    :style="{
      '--background-color': computedBackgroundColor
    }"
  >
    <HpIcon v-if="!isLoading" :name="icon" :color="computedIconColor" />

    <HpSpinnerLoader v-else :type="icon" :color="computedIconColor" size="md" />
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

const handleClick = () => {
  emit('action:click')
}

const computedIconColor = computed(() => {
  return props.iconColor || '#fff'
})

const computedBackgroundColor = computed(() => {
  return props.backgroundColor || 'var(--color-primary)'
})
</script>

<style lang="scss" scoped src="./ButtonIconPrimary.scss" />
