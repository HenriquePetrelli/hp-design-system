<template>
  <section class="alert" :class="alertVariant">
    <div class="alert__container" role="alert">
      <p class="alert__message">
        {{ message }}
      </p>

      <HpButtonIcon
        :class="alertIconClass"
        label="Fechar alerta"
        icon="BE0031"
        size="md"
        :backgroundColor="'transparent'"
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

const alertVariant = computed(() => {
  switch (props.type) {
    case AlertType.SUCCESS:
      return 'alert--success'
    case AlertType.WARNING:
      return 'alert--warning'
    case AlertType.ERROR:
      return 'alert--error'
    case AlertType.INFO:
    default:
      return 'alert--info'
  }
})

const alertIconClass = computed(() => {
  switch (props.type) {
    case AlertType.SUCCESS:
      return 'alert__icon alert__icon--success'
    case AlertType.WARNING:
      return 'alert__icon alert__icon--warning'
    case AlertType.ERROR:
      return 'alert__icon alert__icon--error'
    case AlertType.INFO:
    default:
      return 'alert__icon alert__icon--info'
  }
})
</script>

<style scoped lang="scss" src="./Alert.scss" />
