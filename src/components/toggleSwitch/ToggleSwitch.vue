<template>
  <div
    class="toggle-switch"
    :class="{ 'toggle-switch--disabled': disabled }"
    :style="computedStyles"
  >
    <input
      type="checkbox"
      :id="id"
      ref="inputRef"
      class="toggle-switch__input"
      :checked="modelValue"
      :disabled="disabled"
      @change="handleChange"
      role="switch"
      :aria-checked="modelValue"
      :aria-labelledby="`${id}-label`"
      :aria-disabled="disabled"
      tabindex="-1"
    />
    <label
      :for="id"
      class="toggle-switch__label"
      :id="`${id}-label`"
      :tabindex="disabled ? -1 : 0"
      @keydown.space.prevent="toggleWithKeyboard"
      @keydown.enter.prevent="toggleWithKeyboard"
    >
      <span class="toggle-switch__track">
        <span class="toggle-switch__thumb"></span>
      </span>
      <span v-if="$slots.default || label" class="toggle-switch__text">
        <slot>
          {{ label }}
        </slot>
      </span>
    </label>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
  },
  disabled: {
    type: Boolean,
    default: false
  },
  label: {
    type: String,
    default: ''
  },
  id: {
    type: String,
    default: () => `toggle-${Math.random().toString(36).substring(2, 9)}`
  },
  // Props para override de tokens
  trackOnColor: {
    type: String,
    default: ''
  },
  trackOffColor: {
    type: String,
    default: ''
  },
  thumbOnColor: {
    type: String,
    default: ''
  },
  thumbOffColor: {
    type: String,
    default: ''
  },
  textColor: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue', 'change'])
const inputRef = ref<HTMLInputElement | null>(null)

const handleChange = (event: Event) => {
  if (!props.disabled) {
    const newValue = (event.target as HTMLInputElement).checked
    emit('update:modelValue', newValue)
    emit('change', newValue)
  }
}

const toggleWithKeyboard = () => {
  if (!props.disabled) {
    const newValue = !props.modelValue
    emit('update:modelValue', newValue)
    emit('change', newValue)
    if (inputRef.value) inputRef.value.checked = newValue
  }
}

const computedStyles = computed(() => ({
  ...(props.trackOnColor && {
    '--toggle-switch-track-bg-on': props.trackOnColor
  }),
  ...(props.trackOffColor && {
    '--toggle-switch-track-bg-off': props.trackOffColor
  }),
  ...(props.thumbOnColor && {
    '--toggle-switch-thumb-bg-on': props.thumbOnColor
  }),
  ...(props.thumbOffColor && {
    '--toggle-switch-thumb-bg-off': props.thumbOffColor
  }),
  ...(props.textColor && {
    '--toggle-switch-text-color': props.textColor
  })
}))
</script>

<style scoped lang="scss" src="./ToggleSwitch.scss" />
