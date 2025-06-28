<template>
  <svg
    :class="['icon', sizeClass]"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    :style="{ fill: color }"
  >
    <use :xlink:href="`#icon-${name}`"></use>
  </svg>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    default: "md",
  },
  color: {
    type: String,
    default: "currentColor",
  },
});

const sizeClass = computed(() => {
  return (
    {
      sm: "icon-small",
      md: "icon-medium",
      lg: "icon-large",
    }[props.size] || "icon-medium"
  );
});
</script>

<style>
.icon {
  width: 2em;
  height: 2em;
  fill: currentColor;
}
.icon-small {
  width: 1em;
  height: 1em;
}
.icon-medium {
  width: 2em;
  height: 2em;
}
.icon-large {
  width: 3em;
  height: 3em;
}
</style>
