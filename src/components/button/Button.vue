<template>
  <button>{{ text }}</button>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  text: { type: String, required: true }
})
</script>
