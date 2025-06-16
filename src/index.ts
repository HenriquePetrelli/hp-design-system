import { App } from "vue";
import * as components from "./components";
import "./styles/style.scss";
import "virtual:svg-icons-register";

const install = (app: App): void => {
  Object.entries(components).forEach(([name, component]) => {
    if (component) {
      app.component(name, component);
    }
  });
};

// Exportação padrão da biblioteca
export default {
  install,
  ...components,
};

// Exportações nomeadas para todos os componentes
export * from "./components";
