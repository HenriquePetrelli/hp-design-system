<template>
  <div class="spinner-loader" :class="`spinner-${type}`" :style="spinnerStyles">
    <!-- Circle Spinners -->
    <div v-if="type === 'circle1'" class="spinner-circle-1"></div>
    <div v-if="type === 'circle2'" class="spinner-circle-2"></div>
    <div v-if="type === 'circle3'" class="spinner-circle-3"></div>
    <div v-if="type === 'circle4'" class="spinner-circle-4"></div>

    <!-- Dot Spinners -->
    <div v-if="type === 'dot1'" class="spinner-dot-1">
      <div v-for="i in 3" :key="`dot1-${i}`" class="dot"></div>
    </div>
    <div v-if="type === 'dot2'" class="spinner-dot-2"></div>
    <div v-if="type === 'dot3'" class="spinner-dot-3"></div>
    <div v-if="type === 'dot4'" class="spinner-dot-4"></div>
    <div v-if="type === 'dot5'" class="spinner-dot-5"></div>

    <!-- Ring Spinners -->
    <div v-if="type === 'ring1'" class="spinner-ring-1"></div>
    <div v-if="type === 'ring2'" class="spinner-ring-2"></div>
    <div v-if="type === 'ring3'" class="spinner-ring-3"></div>

    <!-- Special Spinners -->
    <div v-if="type === 'clock'" class="spinner-clock">
      <div class="clock-hand"></div>
    </div>
    <div v-if="type === 'reload'" class="spinner-reload"></div>
    <div v-if="type === 'engine'" class="spinner-engine"></div>
    <div v-if="type === 'search'" class="spinner-search"></div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { SpinnerLoaderSize } from './SpinnerLoaderTypes'

const props = defineProps({
  type: {
    type: String,
    default: 'circle1'
  },
  size: {
    type: [String, Number],
    default: SpinnerLoaderSize.REGULAR
  },
  color: {
    type: String,
    default: '#372772'
  },
  secondaryColor: {
    type: String,
    default: '#FFF'
  },
  speed: {
    type: [String, Number],
    default: 1
  }
})

const spinnerSizeMapper = {
  [SpinnerLoaderSize.SMALL]: 16,
  [SpinnerLoaderSize.REGULAR]: 24,
  [SpinnerLoaderSize.LARGE]: 32
}

const getSpinnerSize = (size) => {
  if (size in spinnerSizeMapper) {
    return spinnerSizeMapper[size]
  }
  return props.size
}

// Estilos computados com fallback values
const spinnerStyles = computed(() => ({
  '--spinner-size': `${getSpinnerSize(props.size)}px`,
  '--spinner-color': props.color || '#FF3D00',
  '--spinner-secondary-color': props.secondaryColor || '#FFF',
  '--spinner-speed': `${Math.max(0.1, props.speed)}s`,
  '--spinner-clock-speed': `${Math.max(0.1, props.speed) * 6}s`,
  '--spinner-dots-speed': `${Math.max(0.1, props.speed) * 1.4}s`
}))
</script>

<style lang="scss" src="./SpinnerLoader.scss"></style>
