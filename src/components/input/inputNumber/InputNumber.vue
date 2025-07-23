<template>
  <div
    class="input"
    :class="{
      'input--has-value': hasValue,
      'input--is-focused': isFocused,
      'input--disabled': disabled,
      'input--readonly': readonly,
      'input--has-placeholder': hasPlaceholder,
      [`input--${status}`]: status !== 'default'
    }"
    :style="{
      '--icon-padding-left': leadingIcon ? '24px' : '0px'
    }"
  >
    <fieldset class="input__fieldset">
      <legend style="display: none" :aria-hidden="true">
        {{ label }}
      </legend>
      <label
        v-if="isFocused || modelValueFormatted !== null || placeholder !== ''"
        :for="id"
        class="input__label"
        :class="{ 'input__label--required': required }"
      >
        {{ label }}
      </label>
      <div class="input__wrapper">
        <HpIcon
          aria-hidden="true"
          :name="leadingIcon"
          size="sm"
          v-if="leadingIcon"
          class="input__icon input__icon--leading"
        />

        <input
          :id="id"
          ref="input"
          type="number"
          class="input__field"
          :value="modelValueFormatted"
          @input="handleInput"
          @focus="handleFocus"
          @blur="handleBlur"
          :readonly="readonly"
          :aria-readonly="readonly"
          :disabled="disabled"
          :placeholder="placeholderFormatted"
          :required="required"
          :maxlength="15"
          :min="minValue"
          :max="maxValue"
          :aria-labelledby="`${id}-label`"
          :aria-describedby="helperText ? `${id}-helper-text` : undefined"
          :aria-invalid="status === 'error'"
        />

        <div class="input__buttons-container">
          <button
            type="button"
            :disabled="disabled || readonly || isMinValue"
            @click="handleDecreaseClick"
            :aria-label="`Diminui em ${incrementBy}`"
            class="input__buttons-container--button"
          >
            <HpIcon name="BE0051" size="sm" color="#666666" />
          </button>
          <div class="input__buttons-container--divider"></div>
          <button
            type="button"
            :disabled="disabled || readonly || isMaxValue"
            @click="handleIncreaseClick"
            :aria-label="`Aumenta em ${incrementBy}`"
            class="input__buttons-container--button"
          >
            <HpIcon name="BE0041" size="sm" color="#666666" />
          </button>
        </div>
      </div>
    </fieldset>
    <div class="input__footer">
      <span
        v-if="helperText"
        :id="`${id}-helper-text`"
        class="input__helper-text"
        :class="{ [`input__helper-text--${status}`]: status !== 'default' }"
      >
        {{ helperText }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { HpIcon } from '@components'

const props = defineProps({
  modelValue: {
    type: Number,
    default: null
  },
  label: {
    type: String,
    required: true
  },
  incrementBy: {
    type: Number,
    default: 1
  },
  minValue: {
    type: Number,
    default: 0
  },
  maxValue: {
    type: Number,
    default: null
  },
  id: {
    type: String,
    default: () => `input-number-${Math.random().toString(36).substring(2, 9)}`
  },
  helperText: {
    type: String,
    default: ''
  },
  readonly: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  placeholder: {
    type: String,
    default: ''
  },
  required: {
    type: Boolean,
    default: false
  },
  leadingIcon: {
    type: String,
    default: ''
  },
  status: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'error', 'success'].includes(value)
  }
})

const emit = defineEmits(['update:modelValue'])

const input = ref(null)
const isFocused = ref(false)

const modelValueFormatted = computed({
  get: () => props.modelValue,
  set: (value) => {
    let newValue = value === '' ? null : Number(value)

    if (isNaN(newValue) && newValue !== null) {
      newValue = props.minValue || 0
    }

    if (newValue !== null) {
      if (props.minValue !== null && newValue < props.minValue) {
        newValue = props.minValue
      }

      if (props.maxValue !== null && newValue > props.maxValue) {
        newValue = props.maxValue
      }
    }

    emit('update:modelValue', newValue)
  }
})

const isMinValue = computed(() => {
  return props.minValue !== null && modelValueFormatted.value !== null
    ? modelValueFormatted.value <= props.minValue
    : false
})

const isMaxValue = computed(() => {
  return props.maxValue !== null && modelValueFormatted.value !== null
    ? modelValueFormatted.value >= props.maxValue
    : false
})

const hasValue = computed(() => modelValueFormatted.value !== null)
const hasPlaceholder = computed(() => String(props.placeholder).length > 0)

const placeholderFormatted = computed(() => {
  if (props.placeholder) return props.placeholder
  if (!isFocused.value) return props.label + (props.required ? ' *' : '')
  return ''
})

const handleInput = (event) => {
  const value = event.target.value

  if (value.length > 15) {
    event.target.value = value.slice(0, 15)
    return
  }

  modelValueFormatted.value = event.target.value
}

const handleFocus = () => {
  if (!props.readonly && !props.disabled) {
    isFocused.value = true
  }
}

const handleBlur = () => {
  isFocused.value = false
}

const handleDecreaseClick = () => {
  const currentValue = modelValueFormatted.value || 0
  modelValueFormatted.value = currentValue - props.incrementBy
}

const handleIncreaseClick = () => {
  const currentValue = modelValueFormatted.value || 0
  modelValueFormatted.value = currentValue + props.incrementBy
}

const focusInput = () => {
  if (input.value && !props.readonly && !props.disabled) {
    input.value.focus()
  }
}

defineExpose({
  focusInput
})
</script>

<style scoped lang="scss" src="./InputNumber.scss" />
