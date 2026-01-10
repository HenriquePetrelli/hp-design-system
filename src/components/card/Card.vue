<template>
  <article
    class="card"
    :class="cardClasses"
    :aria-labelledby="titleId"
    :aria-describedby="descriptionId"
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
  title: { type: String, default: '' },
  description: { type: String, default: '' },
  variant: { type: String, default: 'default' },
  interactive: { type: Boolean, default: false }
})

const titleId = `card-title-${Math.random().toString(36).slice(2)}`
const descriptionId = `card-desc-${Math.random().toString(36).slice(2)}`

const cardClasses = computed(() => ({
  [`card--${props.variant}`]: true,
  'card--interactive': props.interactive
}))
</script>

<style lang="scss" scoped src="./Card.scss"></style>
