<template>
  <label
    class="checkbox"
    :class="{
      'checkbox--disabled': disabled,
      'checkbox--checked': isChecked
    }"
    :for="id"
    :style="{
      '--checkbox-border-color': computedBorderColor,
      '--checkbox-bg-color': computedBackgroundColor,
      '--checkbox-icon-color': computedIconColor
    }"
  >
    <input
      :id="id"
      class="checkbox__input"
      type="checkbox"
      :checked="isChecked"
      :disabled="disabled"
      @change="handleChange"
    />

    <span class="checkbox__box" :class="{ 'checkbox__box--rounded': rounded }">
      <svg
        v-if="isChecked"
        class="checkbox__icon"
        :class="{ 'checkbox__icon--animated': hasAnimation }"
        width="12"
        height="9"
        viewBox="0 0 12 9"
        aria-hidden="true"
      >
        <polyline points="1 5 4 8 11 1" />
      </svg>
    </span>

    <span v-if="$slots.default" class="checkbox__label">
      <slot />
    </span>
  </label>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: undefined
  },
  checked: {
    type: Boolean,
    default: false
  },
  id: {
    type: String,
    default: () => `checkbox-${Math.random().toString(36).slice(2, 9)}`
  },
  disabled: {
    type: Boolean,
    default: false
  },
  rounded: {
    type: Boolean,
    default: false
  },
  hasAnimation: {
    type: Boolean,
    default: false
  },
  iconColor: {
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

const internalChecked = ref(props.checked)

const isChecked = computed(() =>
  props.modelValue !== undefined ? props.modelValue : internalChecked.value
)

const handleChange = (event: Event) => {
  const value = (event.target as HTMLInputElement).checked

  if (props.modelValue !== undefined) {
    emit('update:modelValue', value)
  } else {
    internalChecked.value = value
  }
}

watch(
  () => props.checked,
  (value) => {
    internalChecked.value = value
  }
)

const computedBorderColor = computed(() => {
  return props.borderColor || 'var(--checkbox-border-color)'
})

const computedBackgroundColor = computed(() => {
  return props.backgroundColor || 'var(--checkbox-bg-color)'
})

const computedIconColor = computed(() => {
  return props.iconColor || 'var(--checkbox-icon-color)'
})
</script>

<style lang="scss" scoped src="./Checkbox.scss" />
