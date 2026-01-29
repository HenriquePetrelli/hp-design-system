<template>
  <label
    :for="id"
    class="radio"
    :class="{
      'radio--disabled': disabled,
      'radio--checked': isChecked
    }"
    :style="computedStyles"
  >
    <input
      type="radio"
      class="radio__input"
      :id="id"
      :checked="isChecked"
      :disabled="disabled"
      :value="value"
      @change="handleChange"
      :name="name"
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

    <span v-if="$slots.default || label" class="radio__label">
      <slot>
        {{ label }}
      </slot>
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
  label: {
    type: String,
    default: ''
  },
  id: {
    type: String,
    default: () => `radio-${Math.random().toString(36).substring(2, 9)}`
  },
  name: {
    type: String,
    default: ''
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
  // Props para override de tokens
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
  },
  checkedBackgroundColor: {
    type: String,
    default: ''
  },
  checkedBorderColor: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue', 'change'])

const isChecked = computed(() => {
  return props.modelValue === props.value
})

const handleChange = (event: Event) => {
  if (!props.disabled) {
    emit('update:modelValue', props.value)
    emit('change', event)
  }
}

const computedStyles = computed(() => ({
  ...(props.backgroundColor && {
    '--radio-button-bg': props.backgroundColor
  }),
  ...(props.borderColor && {
    '--radio-button-border-color': props.borderColor,
    '--radio-button-border-color-hover': props.borderColor
  }),
  ...(props.dotColor && {
    '--radio-button-dot-color': props.dotColor
  }),
  ...(props.checkedBackgroundColor && {
    '--radio-button-bg-checked': props.checkedBackgroundColor,
    '--radio-button-border-color-checked': props.checkedBackgroundColor
  }),
  ...(props.checkedBorderColor && {
    '--radio-button-border-color-checked': props.checkedBorderColor
  })
}))
</script>

<style lang="scss" scoped src="./RadioButton.scss" />
