<template>
  <aside class="sidebar" :class="{ 'sidebar--open': open }">
    <!-- Header slot -->
    <div class="sidebar__header">
      <slot name="sidebar-header"></slot>
    </div>

    <!-- Menu slot -->
    <nav class="sidebar__nav">
      <slot name="menu"></slot>
    </nav>

    <!-- Footer slot -->
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
