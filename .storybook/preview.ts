import type { Preview } from "@storybook/vue3";
import "@assets/fonts/Quicksand-Bold.ttf";
import "@assets/fonts/Quicksand-Light.ttf";
import "@assets/fonts/Quicksand-Medium.ttf";
import "@assets/fonts/Quicksand-Regular.ttf";
import "@assets/fonts/Quicksand-SemiBold.ttf";
import "virtual:svg-icons-register";
import "./preview.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
