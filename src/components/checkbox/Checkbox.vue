<template>
  <label
    :for="id"
    class="checkbox"
    :style="{
      '--border-color': computedBorderColor
    }"
    :class="{ 'checkbox--disabled': disabled }"
  >
    <input
      type="checkbox"
      class="checkbox__input"
      :id="id"
      :checked="isChecked"
      :disabled="disabled"
      @change="handleChange"
    />

    <span
      class="checkbox__container"
      :class="{ 'checkbox__container--rounded': rounded }"
      :style="{ '--background-color': computedBackgroundColor }"
    >
      <svg
        v-if="isChecked"
        class="checkbox__icon"
        :class="{ 'checkbox__icon--animated': hasAnimation }"
        :style="{
          '--icon-color': computedIconColor
        }"
        width="12px"
        height="9px"
        viewBox="0 0 12 9"
      >
        <polyline points="1 5 4 8 11 1"></polyline>
      </svg>
    </span>

    <span v-if="$slots.default" class="checkbox__label">
      <slot />
    </span>
  </label>
</template>

<script lang="ts" setup>
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
    default: () => `checkbox-${Math.random().toString(36).substring(2, 9)}`
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

// Estado interno inicializado com o valor da prop checked
const internalChecked = ref(props.checked)

// Valor computado que prioriza modelValue quando disponível
const isChecked = computed(() => {
  return props.modelValue !== undefined
    ? props.modelValue
    : internalChecked.value
})

const handleChange = (event: Event) => {
  const newValue = (event.target as HTMLInputElement).checked
  if (props.modelValue !== undefined) {
    emit('update:modelValue', newValue)
  } else {
    internalChecked.value = newValue
  }
}

// Atualiza o estado interno quando a prop checked muda
watch(
  () => props.checked,
  (newVal) => {
    internalChecked.value = newVal
  }
)

const computedBackgroundColor = computed(() => {
  return props.backgroundColor || 'black'
})

const computedBorderColor = computed(() => {
  return props.borderColor || 'black'
})

const computedIconColor = computed(() => {
  return props.iconColor || 'white'
})
</script>

<style lang="scss" scoped src="./Checkbox.scss" />
