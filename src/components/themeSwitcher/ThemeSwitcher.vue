<template>
  <div v-if="!hasAnimation">
    <button
      class="theme-switcher"
      type="button"
      role="switch"
      :aria-checked="isDarkMode"
      :aria-label="ariaLabel"
      @click="handleToggle"
      @keydown.enter.prevent="handleToggle"
      @keydown.space.prevent="handleToggle"
      :style="computedButtonStyles"
    >
      <HpIcon
        class="theme-switcher__icon"
        :name="computedButtonIcon"
        size="sm"
        :color="computedIconColor"
      />
    </button>
  </div>

  <div v-else class="theme-switcher-animation">
    <input
      type="checkbox"
      :id="id"
      class="toggle--checkbox"
      v-model="isDarkMode"
      @change="toggleTheme"
      role="switch"
      :aria-checked="isDarkMode"
      :aria-label="ariaLabel"
      tabindex="-1"
    />

    <label
      :for="id"
      class="toggle--label"
      :style="computedToggleStyles"
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
  ariaLabel: {
    type: String,
    default: 'Alternar entre tema claro e escuro'
  },
  // Props para override de tokens
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
  },
  lightIconColor: {
    type: String,
    default: ''
  },
  darkIconColor: {
    type: String,
    default: ''
  },
  lightHoverBackgroundColor: {
    type: String,
    default: ''
  },
  darkHoverBackgroundColor: {
    type: String,
    default: ''
  }
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

// Computed values com tokens
const computedButtonIcon = computed(
  () => (isDarkMode.value ? 'BE0130' : 'BE0140') // Ícones do sistema
)

const computedIconColor = computed(() => {
  if (isDarkMode.value && props.darkIconColor) {
    return props.darkIconColor
  }
  if (!isDarkMode.value && props.lightIconColor) {
    return props.lightIconColor
  }
  return isDarkMode.value
    ? 'var(--theme-switcher-dark-icon)'
    : 'var(--theme-switcher-light-icon)'
})

const computedButtonStyles = computed(() => ({
  '--theme-switcher-hover-bg': isDarkMode.value
    ? props.darkHoverBackgroundColor || 'var(--theme-switcher-dark-hover-bg)'
    : props.lightHoverBackgroundColor || 'var(--theme-switcher-light-hover-bg)',
  '--theme-switcher-icon-color': computedIconColor.value
}))

const computedToggleStyles = computed(() => ({
  '--theme-switcher-toggle-bg': isDarkMode.value
    ? props.darkBackgroundColor || 'var(--theme-switcher-dark-toggle-bg)'
    : props.lightBackgroundColor || 'var(--theme-switcher-light-toggle-bg)',
  '--theme-switcher-toggle-border': isDarkMode.value
    ? props.darkBorderColor || 'var(--theme-switcher-dark-toggle-border)'
    : props.lightBorderColor || 'var(--theme-switcher-light-toggle-border)',
  '--theme-switcher-toggle-bg-checked': props.darkBackgroundColor
    ? props.darkBackgroundColor
    : 'var(--theme-switcher-dark-toggle-bg)',
  '--theme-switcher-toggle-border-checked': props.darkBorderColor
    ? props.darkBorderColor
    : 'var(--theme-switcher-dark-toggle-border)',
  '--theme-switcher-toggle-handle-bg': isDarkMode.value
    ? 'var(--theme-switcher-dark-toggle-handle-bg)'
    : 'var(--theme-switcher-light-toggle-handle-bg)',
  '--theme-switcher-toggle-handle-border': isDarkMode.value
    ? 'var(--theme-switcher-dark-toggle-handle-border)'
    : 'var(--theme-switcher-light-toggle-handle-border)',
  '--theme-switcher-toggle-handle-bg-checked':
    'var(--theme-switcher-dark-toggle-handle-bg)',
  '--theme-switcher-toggle-handle-border-checked':
    'var(--theme-switcher-dark-toggle-handle-border)'
}))
</script>

<style scoped lang="scss" src="./ThemeSwitcher.scss" />
