<template>
  <button
    class="button"
    :aria-label="ariaLabel || label"
    @click="handleClick"
    :aria-disabled="disabled"
  >
    <span v-if="icon" class="button-icon">
      <Icon :name="icon" size="sm" color="white" />
    </span>
    <span class="button-label">{{ label }}</span>
  </button>
</template>

<script setup lang="ts">
import Icon from "../icons/icon/Icon.vue";

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  ariaLabel: {
    type: String,
    default: "",
  },
  backgroundColor: {
    type: String,
    default: "",
  },
  labelColor: {
    type: String,
    default: "",
  },
  size: {
    type: String,
    default: "",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
    default: "",
  },
  iconPosition: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["click"]);

const handleClick = (event: Event) => {
  if (!props.disabled) {
    emit("click", event);
  }
};
</script>

<style lang="scss" scoped src="./Button.scss" />
