<template>
  <aside
    class="sidebar"
    :class="{ 'sidebar--open': open }"
    :style="computedStyles"
    :aria-label="ariaLabel"
    :aria-hidden="!open"
  >
    <div class="sidebar__header">
      <slot name="sidebar-header"></slot>
    </div>

    <nav class="sidebar__nav" :aria-label="navAriaLabel">
      <slot name="menu"></slot>
    </nav>

    <div class="sidebar__footer">
      <slot name="sidebar-footer"></slot>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  open: {
    type: Boolean,
    required: true
  },
  ariaLabel: {
    type: String,
    default: 'Navegação lateral'
  },
  navAriaLabel: {
    type: String,
    default: 'Menu de navegação principal'
  },
  // Props para override de tokens
  backgroundColor: {
    type: String,
    default: ''
  },
  borderColor: {
    type: String,
    default: ''
  },
  widthDesktop: {
    type: String,
    default: ''
  },
  topPosition: {
    type: String,
    default: ''
  }
})

const computedStyles = computed(() => ({
  ...(props.backgroundColor && {
    '--sidebar-bg': props.backgroundColor
  }),
  ...(props.borderColor && {
    '--sidebar-border-color': props.borderColor
  }),
  ...(props.widthDesktop && {
    '--sidebar-width-desktop': props.widthDesktop
  }),
  ...(props.topPosition && {
    '--sidebar-top-position': props.topPosition
  })
}))
</script>

<style scoped lang="scss" src="./Sidebar.scss" />
