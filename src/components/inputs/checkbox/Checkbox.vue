<template>
  <div
    class="checkbox"
    :style="{
      '--background-color': backgroundColor || '#8f44fd',
      '--border-color': borderColor || '#8f44fd',
      '--check-color': checkColor || '#f9f9f9',
    }"
  >
    <input
      class="input"
      id="check"
      :checked="checked"
      type="checkbox"
      style="display: none"
    />
    <label class="check" for="check">
      <span>
        <svg width="12px" height="9px" viewbox="0 0 12 9">
          <polyline points="1 5 4 8 11 1"></polyline>
        </svg>
      </span>
    </label>
    <span class="checkbox-label">{{ label }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps({
  checked: {
    type: Boolean,
    required: false,
  },
  label: {
    type: String,
    required: false,
  },
  backgroundColor: {
    type: String,
    required: false,
  },
  checkColor: {
    type: String,
    required: false,
  },
  borderColor: {
    type: String,
    required: false,
  },
});
</script>

<style lang="scss" scoped src="./Checkbox.scss" />
