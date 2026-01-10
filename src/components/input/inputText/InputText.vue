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
      '--icon-padding-left': leadingIcon ? '24px' : '0px',
      '--icon-padding-right': trailingIcon ? '32px' : '0px'
    }"
  >
    <fieldset class="input__fieldset">
      <legend style="display: none" :aria-hidden="true">
        {{ label }}
      </legend>
      <label
        v-if="showInputLabel"
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
          type="text"
          class="input__field"
          :value="modelValue"
          @input="handleInput"
          @focus="handleFocus"
          @blur="handleBlur"
          :readonly="readonly"
          :aria-readonly="readonly"
          :disabled="disabled"
          :placeholder="placeholderFormatted"
          :required="required"
          :maxlength="maxLength"
          :aria-labelledby="`${id}-label`"
          :aria-describedby="helperText ? `${id}-helper-text` : undefined"
          :aria-invalid="status === 'error'"
        />

        <HpButtonIcon
          v-if="iconHasAction && trailingIcon"
          class="input__icon input__icon--trailing"
          :label="trailingIconLabel"
          :disabled="disabled || readonly"
          :icon="trailingIcon"
          iconColor="#666666"
          size="sm"
          @action:click="handleTrailingIconClick"
        />

        <HpIcon
          v-else-if="!iconHasAction && trailingIcon"
          class="input__icon input__icon--trailing"
          aria-hidden="true"
          color="#666666"
          size="sm"
          :name="trailingIcon"
        />
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
      <span v-if="hasLengthCount" class="input__counter">
        {{ modelValue?.length || 0 }}/{{ maxLength }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { HpIcon, HpButtonIcon } from '@components'

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    required: true
  },
  hideLabel: {
    type: Boolean,
    default: false
  },
  id: {
    type: String,
    default: () => `input-text-${Math.random().toString(36).substring(2, 9)}`
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
  trailingIcon: {
    type: String,
    default: ''
  },
  iconHasAction: {
    type: Boolean,
    default: false
  },
  trailingIconLabel: {
    type: String,
    default: ''
  },
  status: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'error', 'success'].includes(value)
  },
  maxLength: {
    type: Number,
    default: null
  },
  hasLengthCount: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:modelValue', 'action:iconClick'])

const input = ref(null)
const isFocused = ref(false)
const showInputLabel = computed(
  () =>
    !props.hideLabel &&
    (isFocused || props.modelValue !== '' || props.placeholder !== '')
)
const hasValue = computed(() => String(props.modelValue).length > 0)
const hasPlaceholder = computed(() => String(props.placeholder).length > 0)
const placeholderFormatted = computed(() => {
  if (props.placeholder) return props.placeholder
  if (!isFocused.value) return props.label + (props.required ? ' *' : '')
  return ''
})

const handleInput = (event) => {
  emit('update:modelValue', event.target.value)
}

const handleFocus = () => {
  if (!props.readonly && !props.disabled) {
    isFocused.value = true
  }
}

const handleBlur = () => {
  isFocused.value = false
}

const handleTrailingIconClick = () => {
  if (!props.disabled && !props.readonly) {
    emit('action:iconClick')
  }
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

<style scoped lang="scss" src="./InputText.scss" />
