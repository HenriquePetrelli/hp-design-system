<template>
  <transition name="modal">
    <div
      v-if="isOpen"
      class="modal"
      @click.self="handleCloseModal"
      :style="computedStyles"
    >
      <div class="modal__container" :class="[`modal__container--${size}`]">
        <div class="modal__header">
          <HpButtonIcon
            v-if="showBackButton"
            class="modal__back-button"
            icon="BB0010"
            :iconColor="iconColor"
            label="Botão de voltar"
            @click="handleBackClick"
          />

          <h2 class="modal__title">{{ title }}</h2>

          <HpButtonIcon
            v-if="showCloseButton"
            class="modal__close-button"
            icon="BE0031"
            :iconColor="iconColor"
            label="Botão de fechar modal"
            @click="handleCloseModal"
          />
        </div>

        <div class="modal__content">
          <slot />
        </div>

        <div
          v-if="hasPrimaryButton || hasSecondaryButton"
          class="modal__footer"
        >
          <HpButtonSecondary
            v-if="hasSecondaryButton"
            :label="secondaryButtonLabel"
            :color="secondaryButtonColor"
            @click="handleSecondaryButtonClick"
          />

          <HpButtonPrimary
            v-if="hasPrimaryButton"
            :label="primaryButtonLabel"
            :backgroundColor="primaryButtonBackgroundColor"
            @click="handlePrimaryButtonClick"
          />
        </div>

        <div
          v-if="!hasPrimaryButton && !hasSecondaryButton && $slots.buttons"
          class="modal__footer"
        >
          <slot name="buttons" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { HpButtonPrimary, HpButtonSecondary, HpButtonIcon } from '@/components'
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  isOpen: {
    type: Boolean,
    required: true
  },
  showBackButton: {
    type: Boolean,
    default: false
  },
  showCloseButton: {
    type: Boolean,
    default: true
  },
  size: {
    type: String,
    default: 'md',
    validator: (value: string) => ['sm', 'md', 'lg'].includes(value)
  },
  hasPrimaryButton: {
    type: Boolean,
    default: false
  },
  hasSecondaryButton: {
    type: Boolean,
    default: false
  },
  primaryButtonBackgroundColor: {
    type: String,
    default: 'var(--modal-primary-button-bg)'
  },
  secondaryButtonColor: {
    type: String,
    default: 'var(--modal-secondary-button-color)'
  },
  primaryButtonLabel: {
    type: String,
    default: 'Prosseguir'
  },
  secondaryButtonLabel: {
    type: String,
    default: 'Fechar'
  },
  // Props para override de tokens
  overlayColor: {
    type: String,
    default: ''
  },
  backgroundColor: {
    type: String,
    default: ''
  },
  iconColor: {
    type: String,
    default: 'var(--modal-icon-color)'
  }
})

const emit = defineEmits([
  'action:backClick',
  'action:closeModal',
  'action:primaryButtonClick',
  'action:secondaryButtonClick'
])

const computedStyles = computed(() => ({
  ...(props.overlayColor && {
    '--modal-overlay-bg': props.overlayColor
  }),
  ...(props.backgroundColor && {
    '--modal-container-bg': props.backgroundColor
  }),
  ...(props.iconColor && {
    '--modal-icon-color': props.iconColor
  })
}))

const handleBackClick = () => {
  emit('action:backClick')
}

const handleCloseModal = () => {
  emit('action:closeModal')
}

const handlePrimaryButtonClick = () => {
  emit('action:primaryButtonClick')
}

const handleSecondaryButtonClick = () => {
  emit('action:secondaryButtonClick')
}
</script>

<style lang="scss" scoped src="./Modal.scss" />
