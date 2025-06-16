import type { Meta, StoryFn } from "@storybook/vue3";
import HpButton from "@components/button/Button.vue";

const meta: Meta = {
  title: "Componentes/Button",
  component: HpButton,
  argTypes: {
    label: {
      control: {
        type: "text",
      },
      table: {
        category: "Propriedades",
        type: {
          summary: "string",
          detail: "Tipo de texto",
        },
        defaultValue: { summary: "Label padrão" },
      },
      description: "Texto do botão",
    },
  },
};

export default meta;

const Template: StoryFn<{ label: string }> = (args) => ({
  // Define explicitamente o tipo de args
  components: { HpButton },
  setup() {
    return { args };
  },
  template: '<HpButton :label="args.label" />',
});

export const Example = Template.bind({});
Example.args = {
  label: "Label",
};
