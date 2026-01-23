<template>
  <div class="spinner-loader" :class="`spinner-${type}`" :style="spinnerStyles">
    <div v-if="type === 'circle1'" class="spinner-circle-1"></div>
    <div v-if="type === 'circle2'" class="spinner-circle-2"></div>
    <div v-if="type === 'circle3'" class="spinner-circle-3"></div>
    <div v-if="type === 'circle4'" class="spinner-circle-4"></div>

    <div v-if="type === 'dot1'" class="spinner-dot-1">
      <div v-for="i in 3" :key="`dot1-${i}`" class="dot"></div>
    </div>
    <div v-if="type === 'dot2'" class="spinner-dot-2"></div>
    <div v-if="type === 'dot3'" class="spinner-dot-3"></div>
    <div v-if="type === 'dot4'" class="spinner-dot-4"></div>
    <div v-if="type === 'dot5'" class="spinner-dot-5"></div>

    <div v-if="type === 'ring1'" class="spinner-ring-1"></div>
    <div v-if="type === 'ring2'" class="spinner-ring-2"></div>
    <div v-if="type === 'ring3'" class="spinner-ring-3"></div>

    <div v-if="type === 'clock'" class="spinner-clock">
      <div class="clock-hand"></div>
    </div>
    <div v-if="type === 'reload'" class="spinner-reload"></div>
    <div v-if="type === 'engine'" class="spinner-engine"></div>
    <div v-if="type === 'search'" class="spinner-search"></div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

enum SpinnerLoaderSize {
  SMALL = 'small',
  REGULAR = 'regular',
  LARGE = 'large'
}

enum SpinnerLoaderSpeed {
  FAST = 'fast',
  NORMAL = 'normal',
  SLOW = 'slow'
}

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
    default: SpinnerLoaderSpeed.NORMAL
  }
})

const spinnerSizeMapper: Record<SpinnerLoaderSize, number> = {
  [SpinnerLoaderSize.SMALL]: 16,
  [SpinnerLoaderSize.REGULAR]: 24,
  [SpinnerLoaderSize.LARGE]: 32
}

const spinnerSpeedMapper: Record<SpinnerLoaderSpeed, number> = {
  [SpinnerLoaderSpeed.FAST]: 0.5,
  [SpinnerLoaderSpeed.NORMAL]: 1,
  [SpinnerLoaderSpeed.SLOW]: 2
}

const getSpinnerSize = (size: string | number): number => {
  if (typeof size === 'string' && size in spinnerSizeMapper) {
    return spinnerSizeMapper[size as SpinnerLoaderSize]
  }
  return typeof size === 'number'
    ? size
    : spinnerSizeMapper[SpinnerLoaderSize.REGULAR]
}

const getSpinnerSpeed = (speed: string | number): number => {
  if (typeof speed === 'string' && speed in spinnerSpeedMapper) {
    return spinnerSpeedMapper[speed as SpinnerLoaderSpeed]
  }
  return typeof speed === 'number'
    ? Math.max(0.1, speed)
    : spinnerSpeedMapper[SpinnerLoaderSpeed.NORMAL]
}

const spinnerStyles = computed(() => {
  const sizePx = `${getSpinnerSize(props.size)}px`
  const speedSec = `${getSpinnerSpeed(props.speed)}s`
  const speedClock = `${getSpinnerSpeed(props.speed) * 6}s`
  const speedDots = `${getSpinnerSpeed(props.speed) * 1.4}s`

  return {
    '--spinner-size': sizePx,
    '--spinner-color': props.color || '#FF3D00',
    '--spinner-secondary-color': props.secondaryColor || '#FFF',
    '--spinner-speed': speedSec,
    '--spinner-clock-speed': speedClock,
    '--spinner-dots-speed': speedDots
  }
})
</script>

<style lang="scss" src="./SpinnerLoader.scss"></style>
