<template>
  <section class="alert">
    <div
      class="alert__container"
      :style="{
        '--background-color': computedBackgroundType,
        '--color': computedColorType
      }"
      role="alert"
    >
      <p class="alert__message">
        {{ message }}
      </p>

      <HpButtonIcon
        class="alert__icon"
        label="Fechar alerta"
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
import { HpButtonIcon } from '@components'

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
  switch (props.type) {
    case AlertType.SUCCESS:
      return 'var(--color-feedback-success)'
    case AlertType.WARNING:
      return 'var(--color-feedback-warning)'
    case AlertType.ERROR:
      return 'var(--color-feedback-error)'
    case AlertType.INFO:
    default:
      return 'var(--color-feedback-info)'
  }
})

const computedBackgroundType = computed(() => {
  switch (props.type) {
    case AlertType.SUCCESS:
      return 'var(--color-feedback-success-bg)'
    case AlertType.WARNING:
      return 'var(--color-feedback-warning-bg)'
    case AlertType.ERROR:
      return 'var(--color-feedback-error-bg)'
    case AlertType.INFO:
    default:
      return 'var(--color-feedback-info-bg)'
  }
})
</script>

<style lang="scss" scoped src="./Alert.scss" />
