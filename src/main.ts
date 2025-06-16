import { createApp } from "vue";
import HpDesignSystem from "./index";
import App from "./App.vue";
import "./styles/style.scss";

const app = createApp(App);
app.use(HpDesignSystem);
app.mount("#app");
