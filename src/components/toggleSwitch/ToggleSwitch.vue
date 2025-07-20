<template>
  <div class="toggle-switch" :class="{ 'toggle-switch--disabled': disabled }">
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
      tabindex="-1"
    />
    <label
      :for="id"
      class="toggle-switch__label"
      :style="{ '--background-color': computedBackgroundColor }"
      :id="`${id}-label`"
      :tabindex="disabled ? -1 : 0"
      @keydown.space.prevent="toggleWithKeyboard"
      @keydown.enter.prevent="toggleWithKeyboard"
    >
      <span
        class="toggle-switch__track"
        :style="{ '--background-color': computedBackgroundColor }"
      >
        <span
          class="toggle-switch__thumb"
          :style="{ '--thumb-color': computedThumbColor }"
        ></span>
      </span>
      <span v-if="$slots.default" class="toggle-switch__text">
        <slot />
      </span>
    </label>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
  },
  disabled: {
    type: Boolean,
    default: false
  },
  id: {
    type: String,
    default: () => `toggle-${Math.random().toString(36).substring(2, 9)}`
  },
  thumbColor: {
    type: String,
    default: ''
  },
  backgroundColor: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue'])
const inputRef = ref<HTMLInputElement | null>(null)

const handleChange = (event: Event) => {
  if (!props.disabled) {
    emit('update:modelValue', (event.target as HTMLInputElement).checked)
  }
}

const toggleWithKeyboard = () => {
  if (!props.disabled) {
    emit('update:modelValue', !props.modelValue)

    if (inputRef.value) {
      inputRef.value.checked = !props.modelValue
    }
  }
}

const computedBackgroundColor = computed(() => {
  return props.backgroundColor || '#372772'
})

const computedThumbColor = computed(() => {
  return props.thumbColor || '#ffffff'
})
</script>

<style lang="scss" scoped src="./ToggleSwitch.scss" />
