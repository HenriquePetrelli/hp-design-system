<template>
  <div
    class="input-range"
    :class="{
      'input-range--disabled': disabled,
      [`input-range--${status}`]: status !== 'default'
    }"
  >
    <fieldset class="input-range__fieldset">
      <legend v-if="label" class="input-range__legend">
        {{ label }}
        <span v-if="required" class="input-range__required">*</span>
      </legend>

      <div class="input-range__wrapper">
        <input
          :id="id"
          ref="input"
          type="range"
          class="input-range__slider"
          :min="min"
          :max="max"
          :step="step"
          :value="modelValue"
          @input="handleInput"
          @change="handleChange"
          :disabled="disabled"
          :aria-valuemin="min"
          :aria-valuemax="max"
          :aria-valuenow="modelValue"
          :aria-labelledby="`${id}-label`"
          :aria-describedby="helperText ? `${id}-helper` : undefined"
        />

        <div class="input-range__value-display">
          <span class="input-range__value">{{ modelValue }}</span>
          <span v-if="unit" class="input-range__unit">{{ unit }}</span>
        </div>
      </div>
    </fieldset>

    <div v-if="helperText" class="input-range__footer">
      <span :id="`${id}-helper`" class="input-range__helper-text">
        {{ helperText }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const props = defineProps({
  modelValue: {
    type: Number,
    default: 0
  },
  label: {
    type: String,
    default: ''
  },
  id: {
    type: String,
    default: () => `input-range-${Math.random().toString(36).substring(2, 9)}`
  },
  min: {
    type: Number,
    default: 0
  },
  max: {
    type: Number,
    default: 100
  },
  step: {
    type: Number,
    default: 1
  },
  unit: {
    type: String,
    default: ''
  },
  helperText: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  required: {
    type: Boolean,
    default: false
  },
  status: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'error', 'success'].includes(value)
  }
})

const emit = defineEmits(['update:modelValue', 'change'])

const input = ref(null)

const handleInput = (event) => {
  emit('update:modelValue', Number(event.target.value))
}

const handleChange = (event) => {
  emit('change', Number(event.target.value))
}

const focusInput = () => {
  if (input.value && !props.disabled) {
    input.value.focus()
  }
}

defineExpose({
  focusInput
})
</script>

<style scoped lang="scss" src="./InputRange.scss" />
