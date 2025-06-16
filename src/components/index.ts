import HpButton from "./button/Button.vue";
import HpCheckbox from "./inputs/checkbox/Checkbox.vue";
import HpIcon from "./icons/icon/Icon.vue";
import HpTeste from "./teste/Teste.vue";

// Exportação dos componentes
export { HpButton, HpCheckbox, HpIcon, HpTeste };

export interface ComponentLibrary {
  HpButton: typeof HpButton;
  HpCheckbox: typeof HpCheckbox;
  HpIcon: typeof HpIcon;
  HpTeste: typeof HpTeste;
}
