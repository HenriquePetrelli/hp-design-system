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
      <legend aria-hidden="true">{{ label }}</legend>

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
          v-if="leadingIcon"
          aria-hidden="true"
          :name="leadingIcon"
          size="sm"
          class="input__icon input__icon--leading"
        />

        <input
          ref="input"
          :id="id"
          type="number"
          class="input__field"
          :value="modelValueFormatted"
          @input="handleInput"
          @focus="handleFocus"
          @blur="handleBlur"
          :readonly="readonly"
          :disabled="disabled"
          :placeholder="placeholderFormatted"
          :required="required"
          :min="minValue"
          :max="maxValue"
          :aria-invalid="status === 'error'"
        />

        <div class="input__buttons-container">
          <button
            type="button"
            class="input__buttons-container--button"
            :disabled="disabled || readonly || isMinValue"
            @click="handleDecreaseClick"
            aria-label="Diminuir valor"
          >
            <HpIcon name="BE0051" size="sm" />
          </button>

          <div class="input__buttons-container--divider" />

          <button
            type="button"
            class="input__buttons-container--button"
            :disabled="disabled || readonly || isMaxValue"
            @click="handleIncreaseClick"
            aria-label="Aumentar valor"
          >
            <HpIcon name="BE0041" size="sm" />
          </button>
        </div>
      </div>
    </fieldset>

    <div class="input__footer">
      <span
        v-if="helperText"
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
  modelValue: { type: Number, default: null },
  label: { type: String, required: true },
  incrementBy: { type: Number, default: 1 },
  minValue: { type: Number, default: 0 },
  maxValue: { type: Number, default: null },
  id: {
    type: String,
    default: () => `input-number-${Math.random().toString(36).slice(2)}`
  },
  helperText: { type: String, default: '' },
  readonly: Boolean,
  disabled: Boolean,
  placeholder: String,
  required: Boolean,
  leadingIcon: String,
  status: {
    type: String,
    default: 'default',
    validator: (v) => ['default', 'error', 'success'].includes(v)
  }
})

const emit = defineEmits(['update:modelValue'])

const input = ref(null)
const isFocused = ref(false)

const modelValueFormatted = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value === '' ? null : Number(value))
})

const isMinValue = computed(
  () => props.minValue !== null && modelValueFormatted.value <= props.minValue
)

const isMaxValue = computed(
  () => props.maxValue !== null && modelValueFormatted.value >= props.maxValue
)

const hasValue = computed(() => modelValueFormatted.value !== null)
const hasPlaceholder = computed(() => !!props.placeholder)

const placeholderFormatted = computed(() =>
  props.placeholder ? props.placeholder : !isFocused.value ? props.label : ''
)

const handleInput = (e) => (modelValueFormatted.value = e.target.value)
const handleFocus = () =>
  !props.disabled && !props.readonly && (isFocused.value = true)
const handleBlur = () => (isFocused.value = false)

const handleDecreaseClick = () =>
  (modelValueFormatted.value =
    (modelValueFormatted.value || 0) - props.incrementBy)

const handleIncreaseClick = () =>
  (modelValueFormatted.value =
    (modelValueFormatted.value || 0) + props.incrementBy)
</script>

<style scoped lang="scss" src="./InputNumber.scss" />
