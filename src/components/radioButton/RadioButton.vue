<template>
  <label
    :for="id"
    class="radio"
    :style="{
      '--border-color': computedBorderColor,
      '--background-color': computedBackgroundColor,
      '--dot-color': computedDotColor
    }"
    :class="{
      'radio--disabled': disabled,
      'radio--checked': isChecked
    }"
  >
    <input
      type="radio"
      class="radio__input"
      :id="id"
      :checked="isChecked"
      :disabled="disabled"
      :value="value"
      @change="handleChange"
    />

    <span
      class="radio__container"
      :class="{ 'radio__container--rounded': rounded }"
    >
      <span
        v-if="isChecked"
        class="radio__dot"
        :class="{ 'radio__dot--animated': hasAnimation }"
      ></span>
    </span>

    <span v-if="$slots.default" class="radio__label">
      <slot />
    </span>
  </label>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: [String, Number, Boolean],
    default: undefined
  },
  value: {
    type: [String, Number, Boolean],
    required: true
  },
  id: {
    type: String,
    default: () => `radio-${Math.random().toString(36).substring(2, 9)}`
  },
  disabled: {
    type: Boolean,
    default: false
  },
  rounded: {
    type: Boolean,
    default: true
  },
  hasAnimation: {
    type: Boolean,
    default: false
  },
  dotColor: {
    type: String,
    default: ''
  },
  backgroundColor: {
    type: String,
    default: ''
  },
  borderColor: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue'])

const isChecked = computed(() => {
  return props.modelValue === props.value
})

const handleChange = () => {
  if (!props.disabled) {
    emit('update:modelValue', props.value)
  }
}

const computedBackgroundColor = computed(() => {
  return props.backgroundColor || 'var(--primary-color, #2563eb)'
})

const computedBorderColor = computed(() => {
  return props.borderColor || 'var(--primary-color, #2563eb)'
})

const computedDotColor = computed(() => {
  return props.dotColor || 'white'
})
</script>

<style lang="scss" scoped src="./RadioButton.scss" />
