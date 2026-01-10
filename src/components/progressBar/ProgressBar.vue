<template>
  <div class="progress-bar">
    <!-- Header -->
    <div v-if="hasLabel" class="progress-bar__header">
      <span class="progress-bar__label" :id="labelId">
        {{ label }}
      </span>

      <span class="progress-bar__value"> {{ normalizedValue }}% </span>
    </div>

    <!-- Progress -->
    <div class="progress-bar__wrapper">
      <progress
        class="progress-bar__track"
        :value="value"
        :max="max"
        :aria-labelledby="label ? labelId : undefined"
        :style="trackStyle"
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
    required: true
  },
  max: {
    type: Number,
    default: 100
  },
  hasLabel: {
    type: Boolean,
    default: false
  },
  backgroundColor: {
    type: String,
    default: ''
  },
  barColor: {
    type: String,
    default: ''
  }
})

const labelId = `progress-bar-label-${Math.random().toString(36).slice(2)}`

const normalizedValue = computed(() => {
  const percent = (props.value / props.max) * 100
  return Math.min(100, Math.max(0, Math.round(percent)))
})

const trackStyle = computed(() => ({
  '--track-color': props.backgroundColor || 'var(--color-border, #e5e7eb)',
  '--bar-color': props.barColor || 'var(--color-danger, #b91c1c)'
}))
</script>

<style lang="scss" scoped src="./ProgressBar.scss"></style>
