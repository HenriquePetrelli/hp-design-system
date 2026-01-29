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
  LARGE = 'large',
  XLARGE = 'xlarge'
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
    default: ''
  },
  secondaryColor: {
    type: String,
    default: ''
  },
  speed: {
    type: [String, Number],
    default: SpinnerLoaderSpeed.NORMAL
  }
})

// Mapeamento para tokens CSS (ao invés de valores hardcoded)
const spinnerSizeMapper: Record<SpinnerLoaderSize, string> = {
  [SpinnerLoaderSize.SMALL]: 'var(--spinner-size-sm)',
  [SpinnerLoaderSize.REGULAR]: 'var(--spinner-size-md)',
  [SpinnerLoaderSize.LARGE]: 'var(--spinner-size-lg)',
  [SpinnerLoaderSize.XLARGE]: 'var(--spinner-size-xl)'
}

const spinnerSpeedMapper: Record<SpinnerLoaderSpeed, string> = {
  [SpinnerLoaderSpeed.FAST]: 'var(--spinner-speed-fast)',
  [SpinnerLoaderSpeed.NORMAL]: 'var(--spinner-speed-normal)',
  [SpinnerLoaderSpeed.SLOW]: 'var(--spinner-speed-slow)'
}

// Funções auxiliares usando tokens
const getSpinnerSize = (size: string | number): string => {
  if (typeof size === 'string' && size in spinnerSizeMapper) {
    return spinnerSizeMapper[size as SpinnerLoaderSize]
  }

  // Se for número, converte para px (backward compatibility)
  if (typeof size === 'number') {
    return `${size}px`
  }

  // Default para token
  return spinnerSizeMapper[SpinnerLoaderSize.REGULAR]
}

const getSpinnerSpeed = (speed: string | number): string => {
  if (typeof speed === 'string' && speed in spinnerSpeedMapper) {
    return spinnerSpeedMapper[speed as SpinnerLoaderSpeed]
  }

  // Se for número, converte para segundos (backward compatibility)
  if (typeof speed === 'number') {
    return `${Math.max(0.1, speed)}s`
  }

  // Default para token
  return spinnerSpeedMapper[SpinnerLoaderSpeed.NORMAL]
}

// Calcular velocidades derivadas usando tokens ou valores custom
const getDerivedSpeeds = (speedValue: string) => {
  // Se for um token CSS (começa com var), mantém o cálculo proporcional
  if (speedValue.startsWith('var(')) {
    // Usa multiplicadores como variáveis CSS derivadas
    return {
      dots: `calc(${speedValue} / 1.5)`,
      clock: `calc(${speedValue} * 6)`
    }
  }

  // Se for valor em segundos (ex: "1s"), faz cálculo numérico
  if (speedValue.endsWith('s')) {
    const numericValue = parseFloat(speedValue)
    if (!isNaN(numericValue)) {
      return {
        dots: `${numericValue / 1.5}s`,
        clock: `${numericValue * 6}s`
      }
    }
  }

  // Fallback
  return {
    dots: 'calc(var(--spinner-speed-normal) / 1.5)',
    clock: 'calc(var(--spinner-speed-normal) * 6)'
  }
}

const spinnerStyles = computed(() => {
  const sizeValue = getSpinnerSize(props.size)
  const speedValue = getSpinnerSpeed(props.speed)
  const derivedSpeeds = getDerivedSpeeds(speedValue)

  return {
    '--spinner-size': sizeValue,
    '--spinner-color': props.color || 'var(--spinner-color)',
    '--spinner-secondary-color':
      props.secondaryColor || 'var(--spinner-secondary-color)',
    '--spinner-speed': speedValue,
    '--spinner-clock-speed': derivedSpeeds.clock,
    '--spinner-dots-speed': derivedSpeeds.dots
  }
})
</script>

<style lang="scss" src="./SpinnerLoader.scss"></style>
