<template>
  <aside class="sidebar" :class="{ 'sidebar--open': open }">
    <div class="sidebar__header">
      <slot name="sidebar-header"></slot>
    </div>

    <nav class="sidebar__nav">
      <slot name="menu"></slot>
    </nav>

    <div class="sidebar__footer">
      <slot name="sidebar-footer"></slot>
    </div>
  </aside>
</template>

<script setup lang="ts">
defineProps({
  open: {
    type: Boolean,
    required: true
  }
})
</script>

<style scoped lang="scss" src="./Sidebar.scss" />
