import HpButtonPrimary from './button/buttonPrimary/ButtonPrimary.vue'
import HpButtonSecondary from './button/buttonSecondary/ButtonSecondary.vue'
import HpButtonTertiary from './button/buttonTertiary/ButtonTertiary.vue'
import HpCheckbox from './inputs/checkbox/Checkbox.vue'
import HpIcon from './icons/icon/Icon.vue'
import HpTeste from './teste/Teste.vue'

// Exportação dos componentes
export {
  HpCheckbox,
  HpIcon,
  HpTeste,
  HpButtonPrimary,
  HpButtonSecondary,
  HpButtonTertiary
}

export interface ComponentLibrary {
  HpButtonPrimary: typeof HpButtonPrimary
  HpButtonSecondary: typeof HpButtonSecondary
  HpButtonTertiary: typeof HpButtonTertiary
  HpCheckbox: typeof HpCheckbox
  HpIcon: typeof HpIcon
  HpTeste: typeof HpTeste
}
