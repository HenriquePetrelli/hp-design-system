<template>
  <section class="alert">
    <div
      class="alert__container"
      :style="{
        '--background-color': computedBackgroundType,
        '--color': computedColorType
      }"
    >
      <p class="alert__container__message">{{ message }}</p>

      <HpButtonIconPrimary
        class="alert__container__icon"
        label="Fechar modal"
        icon="BE0031"
        size="md"
        :icon-color="computedColorType"
        :backgroundColor="computedBackgroundType"
        @click="closeManually"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted } from 'vue'
import { AlertType } from './AlertTypes'
import { HpButtonIconPrimary } from '@components'

const props = defineProps({
  message: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    default: 3500
  },
  hasDuration: {
    type: Boolean,
    default: true
  },
  type: {
    type: String,
    default: AlertType.INFO
  }
})

const emit = defineEmits([
  'action:alertClose',
  'action:alertAutoClose',
  'action:alertManualClose'
])

let timeoutId: ReturnType<typeof setTimeout> | null = null

const closeAutomatically = () => {
  emit('action:alertAutoClose')
  emit('action:alertClose')
}

const closeManually = () => {
  if (timeoutId) {
    clearTimeout(timeoutId)
  }
  emit('action:alertManualClose')
  emit('action:alertClose')
}

onMounted(() => {
  if (props.hasDuration) {
    timeoutId = setTimeout(closeAutomatically, props.duration)
  }
})

onUnmounted(() => {
  if (timeoutId) {
    clearTimeout(timeoutId)
  }
})

const computedColorType = computed(() => {
  if (Object.values(AlertType).includes(props.type as AlertType)) {
    return `var(--color-${props.type})`
  }
  return props.type
})

const computedBackgroundType = computed(() => {
  if (Object.values(AlertType).includes(props.type as AlertType)) {
    return `var(--color-${props.type}-background)`
  }
  return props.type
})
</script>

<style lang="scss" scoped src="./Alert.scss" />
