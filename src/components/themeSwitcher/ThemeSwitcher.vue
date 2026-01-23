<template>
  <!-- Theme switcher sem animação -->
  <div v-if="!hasAnimation">
    <button
      class="theme-switcher"
      type="button"
      role="switch"
      :aria-checked="isDarkMode"
      aria-label="Alternar entre tema claro e escuro"
      @click="handleToggle"
      @keydown.enter.prevent="handleToggle"
      @keydown.space.prevent="handleToggle"
      :style="{
        '--hover-bg-color': computedButtonHoverBackgroundColor,
        '--icon-color': computedButtonIconColor
      }"
    >
      <HpIcon
        class="theme-switcher__icon"
        :name="computedButtonIcon"
        size="sm"
        :color="computedButtonIconColor"
      />
    </button>
  </div>

  <!-- Theme switcher com animação -->
  <div v-else class="theme-switcher-animation">
    <input
      type="checkbox"
      :id="id"
      class="toggle--checkbox"
      v-model="isDarkMode"
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
      @keydown.enter.prevent="handleToggle"
      @keydown.space.prevent="handleToggle"
    >
      <span class="toggle--label-background"></span>
    </label>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { HpIcon } from '@components'

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
  },
  id: {
    type: String,
    default: () => `theme-${Math.random().toString(36).substring(2, 9)}`
  },
  hasAnimation: {
    type: Boolean,
    default: false
  },

  /* Toggle animado */
  lightBorderColor: String,
  lightBackgroundColor: String,
  darkBorderColor: String,
  darkBackgroundColor: String,

  /* Ícone */
  lightIconColor: String,
  darkIconColor: String,

  /* Hover */
  lightHoverBackgroundColor: String,
  darkHoverBackgroundColor: String
})

const emit = defineEmits(['update:modelValue'])

const getStoredTheme = () => localStorage.getItem('theme') || 'light'
const isStoredDark = () => getStoredTheme() === 'dark'

const isDarkMode = ref(isStoredDark())

const applyTheme = (isDark: boolean) => {
  const theme = isDark ? 'dark' : 'light'
  document.documentElement.setAttribute('data-theme', theme)
  localStorage.setItem('theme', theme)
}

const toggleTheme = () => {
  applyTheme(isDarkMode.value)
  emit('update:modelValue', isDarkMode.value)
}

const handleToggle = () => {
  isDarkMode.value = !isDarkMode.value
  toggleTheme()
}

onMounted(() => {
  const isDark = isStoredDark()
  isDarkMode.value = isDark
  applyTheme(isDark)
  emit('update:modelValue', isDark)
})

watch(
  () => props.modelValue,
  (value) => {
    if (value !== isDarkMode.value) {
      isDarkMode.value = value
      applyTheme(value)
    }
  }
)

/* 🎨 Ícone */
const computedButtonIcon = computed(() =>
  isDarkMode.value ? 'BE0130' : 'BE0140'
)

const computedButtonIconColor = computed(() =>
  isDarkMode.value
    ? props.darkIconColor || '#f3c32e'
    : props.lightIconColor || '#000000'
)

/* 🎯 Hover background */
const computedButtonHoverBackgroundColor = computed(() =>
  isDarkMode.value
    ? props.darkHoverBackgroundColor || '#717171'
    : props.lightHoverBackgroundColor || 'rgba(0, 0, 0, 0.08)'
)

/* 🎚 Toggle animado */
const computedLightBorderColor = computed(
  () => props.lightBorderColor || '#72cce3'
)

const computedLightBackgroundColor = computed(
  () => props.lightBackgroundColor || '#96dcee'
)

const computedDarkBorderColor = computed(
  () => props.darkBorderColor || '#072f5f'
)

const computedDarkBackgroundColor = computed(
  () => props.darkBackgroundColor || '#1261a0'
)
</script>

<style scoped lang="scss" src="./ThemeSwitcher.scss" />
