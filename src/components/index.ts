// Exportação padrão dos componentes
export { default as HpButtonPrimary } from './button/buttonPrimary/ButtonPrimary.vue'
export { default as HpButtonSecondary } from './button/buttonSecondary/ButtonSecondary.vue'
export { default as HpButtonTertiary } from './button/buttonTertiary/ButtonTertiary.vue'
export { default as HpCheckbox } from './inputs/checkbox/Checkbox.vue'
export { default as HpIcon } from './icons/icon/Icon.vue'
export { default as HpTeste } from './teste/Teste.vue'

// Tipo da biblioteca (opcional, se estiver usando TypeScript)
export type ComponentLibrary = {
  HpButtonPrimary: typeof import('./button/buttonPrimary/ButtonPrimary.vue').default
  HpButtonSecondary: typeof import('./button/buttonSecondary/ButtonSecondary.vue').default
  HpButtonTertiary: typeof import('./button/buttonTertiary/ButtonTertiary.vue').default
  HpCheckbox: typeof import('./inputs/checkbox/Checkbox.vue').default
  HpIcon: typeof import('./icons/icon/Icon.vue').default
  HpTeste: typeof import('./teste/Teste.vue').default
}
