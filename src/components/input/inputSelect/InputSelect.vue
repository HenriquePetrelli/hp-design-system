<template>
  <div
    class="input"
    :class="{
      'input--has-value': hasValue,
      'input--is-focused': isFocused,
      'input--disabled': disabled,
      'input--readonly': readonly,
      'input--has-placeholder': hasPlaceholder,
      [`input--${status}`]: status !== 'default'
    }"
    ref="select"
    :style="computedStyles"
  >
    <fieldset class="input__fieldset">
      <legend style="display: none" :aria-hidden="true">
        {{ label }}
      </legend>
      <label
        v-if="modelValue !== null || placeholder !== ''"
        :for="id"
        class="input__label"
        :class="{ 'input__label--required': required }"
        :id="`${id}-label`"
      >
        {{ label }}
        <span v-if="required" class="required-asterisk">*</span>
      </label>
      <div class="input__wrapper">
        <!-- Autocomplete mode -->
        <div v-if="autocomplete" class="autocomplete-wrapper">
          <input
            :id="id"
            v-model="searchText"
            type="text"
            class="autocomplete-input"
            :placeholder="placeholderFormatted"
            :disabled="disabled"
            :readonly="readonly"
            :required="required"
            @focus="handleFocus"
            @blur="handleBlur"
            @input="handleInput"
            @keydown.down="moveDown"
            @keydown.up="moveUp"
            @keydown.enter="selectHighlighted"
            @keydown.esc="isOpen = false"
            :aria-labelledby="`${id}-label`"
            :aria-describedby="helperText ? `${id}-helper-text` : undefined"
            :aria-invalid="status === 'error'"
            :aria-disabled="disabled"
            :aria-expanded="isOpen.toString()"
            aria-haspopup="listbox"
            :aria-activedescendant="
              highlightedIndex >= 0 ? `${id}-option-${highlightedIndex}` : null
            "
            role="combobox"
            aria-autocomplete="list"
          />
          <HpIcon
            name="BB0021"
            size="sm"
            class="autocomplete-arrow"
            aria-hidden="true"
          />

          <div
            v-show="isOpen && filteredOptions.length > 0"
            class="autocomplete-options"
            :style="{ width: dropdownWidth }"
            role="listbox"
            :aria-labelledby="`${id}-label`"
          >
            <div
              v-for="(option, index) in filteredOptions"
              :key="option.value"
              :id="`${id}-option-${index}`"
              class="autocomplete-option"
              :class="{
                'is-selected': option.value === modelValue,
                'is-disabled': option.disabled,
                'is-highlighted': highlightedIndex === index
              }"
              @mousedown="selectOption(option)"
              role="option"
              :aria-selected="option.value === modelValue"
              :aria-disabled="option.disabled"
            >
              {{ option.label }}
            </div>
          </div>
        </div>

        <!-- Select mode -->
        <div
          v-else
          class="custom-select"
          :class="{
            'is-open': isOpen,
            'is-disabled': disabled,
            'is-placeholder': isShowingPlaceholder
          }"
          role="combobox"
          :aria-expanded="isOpen.toString()"
          aria-haspopup="listbox"
          :aria-owns="`${id}-listbox`"
        >
          <div
            class="custom-select__trigger"
            :id="id"
            @click="toggleDropdown"
            @blur="handleBlur"
            @focus="handleFocus"
            @keydown.enter="toggleDropdown"
            @keydown.space="toggleDropdown"
            @keydown.down="isOpen ? moveDown() : toggleDropdown()"
            @keydown.up="isOpen ? moveUp() : null"
            @keydown.esc="isOpen = false"
            :tabindex="disabled ? -1 : 0"
            :aria-labelledby="`${id}-label`"
            :aria-describedby="helperText ? `${id}-helper-text` : undefined"
            :aria-invalid="status === 'error'"
            :aria-disabled="disabled"
            role="button"
            aria-haspopup="listbox"
          >
            <span>
              {{ selectedLabel }}
              <span
                v-if="required && isShowingPlaceholder"
                class="required-asterisk"
                >*</span
              >
            </span>
            <HpIcon
              name="BB0021"
              size="sm"
              class="custom-select__arrow"
              aria-hidden="true"
            />
          </div>

          <div
            v-show="isOpen"
            :id="`${id}-listbox`"
            class="custom-select__options"
            :style="{ width: dropdownWidth }"
            role="listbox"
            :aria-activedescendant="
              highlightedIndex >= 0 ? `${id}-option-${highlightedIndex}` : null
            "
          >
            <div
              v-for="(option, index) in options"
              :key="option.value"
              :id="`${id}-option-${index}`"
              class="custom-select__option"
              :class="{
                'is-selected': option.value === modelValue,
                'is-disabled': option.disabled
              }"
              @mousedown="selectOption(option)"
              role="option"
              :aria-selected="option.value === modelValue"
              :aria-disabled="option.disabled"
            >
              {{ option.label }}
            </div>
          </div>

          <select
            v-show="false"
            :value="modelValue"
            @change="handleNativeSelect"
            :disabled="disabled"
            :required="required"
          >
            <option
              v-if="placeholder"
              value=""
              disabled
              :selected="modelValue === null"
            >
              {{ placeholder }}
            </option>
            <option
              v-for="option in options"
              :key="option.value"
              :value="option.value"
              :disabled="option.disabled"
            >
              {{ option.label }}
            </option>
          </select>
        </div>
      </div>
    </fieldset>
    <div class="input__footer">
      <span
        v-if="helperText"
        :id="`${id}-helper-text`"
        class="input__helper-text"
        :class="{ [`input__helper-text--${status}`]: status !== 'default' }"
      >
        {{ helperText }}
      </span>
      <span v-if="status === 'error'" class="sr-only" aria-live="assertive">
        Erro: {{ helperText }}
      </span>
    </div>
    <div
      id="aria-live-message"
      aria-live="polite"
      role="status"
      class="sr-only"
    ></div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue'
import { HpIcon } from '@components'

const props = defineProps({
  modelValue: {
    type: [String, Number, Boolean],
    default: null
  },
  label: {
    type: String,
    required: true
  },
  options: {
    type: Array,
    required: true,
    validator: (value) => {
      return value.every((option) => {
        return 'value' in option && 'label' in option
      })
    }
  },
  id: {
    type: String,
    default: () => `input-select-${Math.random().toString(36).substring(2, 9)}`
  },
  helperText: {
    type: String,
    default: ''
  },
  readonly: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  placeholder: {
    type: String,
    default: ''
  },
  required: {
    type: Boolean,
    default: false
  },
  status: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'error', 'success'].includes(value)
  },
  autocomplete: {
    type: Boolean,
    default: false
  },
  // Props para override de tokens
  borderColor: {
    type: String,
    default: ''
  },
  backgroundColor: {
    type: String,
    default: ''
  },
  textColor: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue'])

const select = ref(null)
const isFocused = ref(false)
const isOpen = ref(false)
const dropdownWidth = ref('auto')
const triggerElement = ref(null)
const searchText = ref('')
const highlightedIndex = ref(-1)

const hasValue = computed(
  () => props.modelValue !== null && props.modelValue !== ''
)
const hasPlaceholder = computed(() => String(props.placeholder).length > 0)
const isShowingPlaceholder = computed(
  () => props.modelValue === null || props.modelValue === ''
)

const selectedLabel = computed(() => {
  if (isShowingPlaceholder.value) {
    return props.placeholder || props.label
  }
  const selectedOption = props.options.find(
    (opt) => opt.value === props.modelValue
  )
  return selectedOption ? selectedOption.label : props.placeholder
})

const placeholderFormatted = computed(() => {
  if (props.placeholder) return props.placeholder
  if (!isFocused.value) return props.label
  return ''
})

const filteredOptions = computed(() => {
  if (!props.autocomplete || !searchText.value) {
    return props.options
  }

  const search = searchText.value.toLowerCase()
  return props.options.filter((option) =>
    option.label.toLowerCase().includes(search)
  )
})

const computedStyles = computed(() => ({
  ...(props.borderColor && {
    '--input-select-border-color': props.borderColor,
    '--input-select-border-hover': props.borderColor
  }),
  ...(props.backgroundColor && {
    '--input-select-bg': props.backgroundColor
  }),
  ...(props.textColor && {
    '--input-select-text-color': props.textColor
  })
}))

watch(
  () => props.modelValue,
  (newVal) => {
    if (props.autocomplete) {
      const selectedOption = props.options.find((opt) => opt.value === newVal)
      searchText.value = selectedOption ? selectedOption.label : ''
    }
  },
  { immediate: true }
)

const toggleDropdown = () => {
  if (props.disabled || props.readonly) return
  isOpen.value = !isOpen.value

  if (isOpen.value) {
    if (triggerElement.value) {
      dropdownWidth.value = `${triggerElement.value.offsetWidth}px`
    }
    highlightedIndex.value = -1
  }
}

const selectOption = (option) => {
  if (option.disabled) return
  emit('update:modelValue', option.value)
  if (props.autocomplete) {
    searchText.value = option.label
  }
  isOpen.value = false
  highlightedIndex.value = -1
  announce(`Selecionado: ${option.label}`)
}

const handleNativeSelect = (e) => {
  emit('update:modelValue', e.target.value)
}

const handleFocus = () => {
  if (!props.readonly && !props.disabled) {
    isFocused.value = true
    if (props.autocomplete) {
      isOpen.value = true
      if (triggerElement.value) {
        dropdownWidth.value = `${triggerElement.value.offsetWidth}px`
      }
    }
    if (props.autocomplete) {
      announce(
        `${props.label}. Digite para filtrar opções. Use as teclas de seta para navegar.`
      )
    } else {
      announce(
        `${props.label}. Pressione espaço ou enter para abrir as opções.`
      )
    }
  }
}

const handleBlur = (e) => {
  if (!e.relatedTarget || !e.currentTarget.contains(e.relatedTarget)) {
    isFocused.value = false
    isOpen.value = false
    highlightedIndex.value = -1
  }
}

const handleInput = () => {
  isOpen.value = true
  highlightedIndex.value = -1

  if (searchText.value === '') {
    emit('update:modelValue', null)
  }
}

const moveDown = () => {
  if (!isOpen.value || filteredOptions.value.length === 0) return
  highlightedIndex.value =
    (highlightedIndex.value + 1) % filteredOptions.value.length
  scrollOptionIntoView(highlightedIndex.value)
}

const moveUp = () => {
  if (!isOpen.value || filteredOptions.value.length === 0) return
  highlightedIndex.value =
    (highlightedIndex.value - 1 + filteredOptions.value.length) %
    filteredOptions.value.length
  scrollOptionIntoView(highlightedIndex.value)
}

const selectHighlighted = () => {
  if (
    highlightedIndex.value >= 0 &&
    highlightedIndex.value < filteredOptions.value.length
  ) {
    selectOption(filteredOptions.value[highlightedIndex.value])
  } else if (
    props.autocomplete &&
    searchText.value &&
    filteredOptions.value.length > 0
  ) {
    selectOption(filteredOptions.value[0])
  }
}

const scrollOptionIntoView = (index) => {
  const optionElement = document.getElementById(`${props.id}-option-${index}`)
  if (optionElement) {
    optionElement.scrollIntoView({ block: 'nearest' })
  }
}

const announce = (message) => {
  const ariaLive =
    document.getElementById('aria-live-message') || createAriaLive()
  ariaLive.textContent = message
  setTimeout(() => {
    ariaLive.textContent = ''
  }, 1000)
}

const createAriaLive = () => {
  const ariaLive = document.createElement('div')
  ariaLive.id = 'aria-live-message'
  ariaLive.setAttribute('aria-live', 'polite')
  ariaLive.setAttribute('role', 'status')
  ariaLive.style.position = 'absolute'
  ariaLive.style.left = '-9999px'
  ariaLive.style.height = '1px'
  ariaLive.style.width = '1px'
  ariaLive.style.overflow = 'hidden'
  document.body.appendChild(ariaLive)
  return ariaLive
}

const handleClickOutside = (event) => {
  if (select.value && !select.value.contains(event.target)) {
    isOpen.value = false
    highlightedIndex.value = -1
  }
}

const focusSelect = () => {
  if (triggerElement.value && !props.readonly && !props.disabled) {
    triggerElement.value.focus()
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  triggerElement.value = document.getElementById(props.id)
  createAriaLive()
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})

defineExpose({
  focusSelect
})
</script>

<style scoped lang="scss" src="./InputSelect.scss" />
