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

<style lang="scss" scoped>
.radio {
  --primary-color: #2563eb;
  font-size: 16px;
  font-weight: 400;
  display: inline-flex;
  align-items: center;
  position: relative;
  color: var(--text-color, #333);
  cursor: pointer;
  gap: 8px;
  margin: 4px 0;
  user-select: none;

  &--disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &--checked:not(.radio--disabled) {
    .radio__container {
      border-color: var(--border-color);
      background-color: var(--background-color);
    }
  }

  &__input {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;

    &:focus-visible + .radio__container {
      outline: 2px solid var(--border-color);
      outline-offset: 2px;
    }
  }

  &__container {
    width: 18px;
    height: 18px;
    border: 2px solid var(--border-color, #ccc);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
    background-color: white;

    &--rounded {
      border-radius: 50%;
    }
  }

  &__dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: var(--dot-color);
    display: inline-block;

    &--animated {
      animation: dot-appear 0.2s ease-out forwards;
    }
  }

  &__label {
    line-height: 1.5;
  }

  &:hover:not(.radio--disabled) {
    .radio__container {
      border-color: var(--border-color);
    }
  }
}

@keyframes dot-appear {
  0% {
    transform: scale(0.5);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
