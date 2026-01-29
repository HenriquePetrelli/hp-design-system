<template>
  <div
    class="progress-bar"
    :class="[
      `progress-bar--${status}`,
      { 'progress-bar--disabled': disabled },
      { 'progress-bar--indeterminate': indeterminate }
    ]"
    :style="computedStyles"
    role="progressbar"
    :aria-valuemin="0"
    :aria-valuemax="max"
    :aria-valuenow="indeterminate ? undefined : value"
    :aria-valuetext="ariaValueText"
    :aria-labelledby="labelId"
  >
    <div v-if="hasLabel" class="progress-bar__header">
      <span class="progress-bar__label" :id="labelId">
        {{ label }}
      </span>

      <span v-if="!indeterminate" class="progress-bar__value">
        {{ normalizedValue }}%
      </span>
      <span v-else class="progress-bar__value">
        {{ indeterminateText }}
      </span>
    </div>

    <div class="progress-bar__wrapper">
      <progress
        class="progress-bar__track"
        :class="{
          'progress-bar__track--indeterminate': indeterminate,
          'progress-bar__track--disabled': disabled
        }"
        :value="indeterminate ? undefined : value"
        :max="max"
        :aria-hidden="true"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  label: {
    type: String,
    default: ''
  },
  value: {
    type: Number,
    default: 0
  },
  max: {
    type: Number,
    default: 100
  },
  hasLabel: {
    type: Boolean,
    default: true
  },
  // Colors override
  trackColor: {
    type: String,
    default: ''
  },
  barColor: {
    type: String,
    default: ''
  },
  textColor: {
    type: String,
    default: ''
  },
  // Status variants
  status: {
    type: String,
    default: 'default',
    validator: (value: string) =>
      ['default', 'success', 'warning', 'error', 'info'].includes(value)
  },
  // States
  disabled: {
    type: Boolean,
    default: false
  },
  indeterminate: {
    type: Boolean,
    default: false
  },
  indeterminateText: {
    type: String,
    default: 'Processando...'
  }
})

const labelId = `progress-bar-label-${Math.random().toString(36).slice(2)}`

const normalizedValue = computed(() => {
  const percent = (props.value / props.max) * 100
  return Math.min(100, Math.max(0, Math.round(percent)))
})

const ariaValueText = computed(() => {
  if (props.indeterminate) {
    return props.indeterminateText
  }
  return `${normalizedValue.value}% completo`
})

const computedStyles = computed(() => ({
  ...(props.trackColor && {
    '--progress-bar-track-bg': props.trackColor
  }),
  ...(props.barColor && {
    '--progress-bar-fill-bg': props.barColor
  }),
  ...(props.textColor && {
    '--progress-bar-text-color': props.textColor
  })
}))
</script>

<style scoped lang="scss" src="./ProgressBar.scss" />
