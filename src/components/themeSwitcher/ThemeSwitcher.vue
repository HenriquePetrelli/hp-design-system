<template>
  <div class="theme-switcher-container">
    <input
      type="checkbox"
      :id="id"
      class="toggle--checkbox"
      v-model="isDarkMode"
      :checked="modelValue"
      @change="toggleTheme"
      role="switch"
      :aria-checked="isDarkMode"
      aria-label="Alternar entre tema claro e escuro"
      tabindex="-1"
    />
    <label
      :for="id"
      class="toggle--label"
      :style="{
        '--light-background-color': computedLightBackgroundColor,
        '--light-border-color': computedLightBorderColor,
        '--dark-background-color': computedDarkBackgroundColor,
        '--dark-border-color': computedDarkBorderColor
      }"
      tabindex="0"
      @keydown.enter.prevent="handleKeydown"
      @keydown.space.prevent="handleKeydown"
    >
      <span class="toggle--label-background"></span>
    </label>
    <div class="background"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
  },
  id: {
    type: String,
    default: () => `theme-${Math.random().toString(36).substring(2, 9)}`
  },
  lightBorderColor: {
    type: String,
    default: ''
  },
  lightBackgroundColor: {
    type: String,
    default: ''
  },
  darkBorderColor: {
    type: String,
    default: ''
  },
  darkBackgroundColor: {
    type: String,
    default: ''
  }
})

const isDarkMode = ref(false)

const toggleTheme = () => {
  if (isDarkMode.value) {
    document.documentElement.classList.remove('light')
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    document.documentElement.classList.add('light')
    localStorage.setItem('theme', 'light')
  }
}

const handleKeydown = () => {
  isDarkMode.value = !isDarkMode.value
  toggleTheme()
}

onMounted(() => {
  const savedTheme =
    localStorage.getItem('theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light')
  isDarkMode.value = savedTheme === 'dark'
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.add('light')
  }
})

const computedLightBorderColor = computed(() => {
  return props.lightBorderColor || '#72cce3'
})

const computedLightBackgroundColor = computed(() => {
  return props.lightBackgroundColor || '#96dcee'
})

const computedDarkBorderColor = computed(() => {
  return props.darkBorderColor || '#072f5f'
})

const computedDarkBackgroundColor = computed(() => {
  return props.darkBackgroundColor || '#1261a0'
})
</script>

<style scoped lang="scss" src="./ThemeSwitcher.scss"></style>
