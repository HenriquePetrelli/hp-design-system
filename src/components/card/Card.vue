<template>
  <article
    class="card"
    :class="cardClasses"
    :aria-labelledby="title ? titleId : undefined"
    :aria-describedby="description ? descriptionId : undefined"
    tabindex="0"
  >
    <header v-if="$slots.header" class="card__header">
      <slot name="header" />
    </header>

    <div class="card__body">
      <h3 v-if="title" :id="titleId" class="card__title">
        {{ title }}
      </h3>

      <p v-if="description" :id="descriptionId" class="card__description">
        {{ description }}
      </p>

      <slot />
    </div>

    <footer v-if="$slots.footer" class="card__footer">
      <slot name="footer" />
    </footer>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  variant: {
    type: String,
    default: 'default' // default | outlined | elevated
  },
  interactive: {
    type: Boolean,
    default: false
  }
})

const uid = Math.random().toString(36).slice(2)

const titleId = `card-title-${uid}`
const descriptionId = `card-description-${uid}`

const cardClasses = computed(() => ({
  'card--default': props.variant === 'default',
  'card--outlined': props.variant === 'outlined',
  'card--elevated': props.variant === 'elevated',
  'card--interactive': props.interactive
}))
</script>

<style lang="scss" scoped src="./Card.scss" />
