import type { Meta, StoryFn } from "@storybook/vue3";
import HpCheckbox from "@components/inputs/checkbox/Checkbox.vue";

const meta: Meta = {
  title: "Componentes/Checkbox",
  component: HpCheckbox,
  argTypes: {
    checked: {
      control: {
        type: "boolean",
      },
      table: {
        category: "Propriedades",
        type: {
          summary: "boolean",
        },
        defaultValue: { summary: "false" },
      },
      description: "Define se o checkbox está marcado",
    },
    label: {
      control: {
        type: "text",
      },
      table: {
        category: "Propriedades",
        type: {
          summary: "string",
        },
        defaultValue: { summary: "" },
      },
      description: "Texto da label ao lado do checkbox",
    },
    backgroundColor: {
      control: {
        type: "color",
      },
      table: {
        category: "Propriedades",
        type: {
          summary: "string",
        },
        defaultValue: { summary: "#8f44fd" },
      },
      description: "Cor de fundo do checkbox quando marcado",
    },
    checkColor: {
      control: {
        type: "color",
      },
      table: {
        category: "Propriedades",
        type: {
          summary: "string",
        },
        defaultValue: { summary: "#f9f9f9" },
      },
      description: "Cor do check no checkbox",
    },
    borderColor: {
      control: {
        type: "color",
      },
      table: {
        category: "Propriedades",
        type: {
          summary: "string",
        },
        defaultValue: { summary: "#8f44fd" },
      },
      description: "Cor da borda do checkbox",
    },
  },
};

export default meta;

const Template: StoryFn<{
  checked: boolean;
  label: string;
  backgroundColor: string;
  checkColor: string;
  borderColor: string;
}> = (args) => ({
  components: { HpCheckbox },
  setup() {
    return { args };
  },
  template:
    '<HpCheckbox :checked="args.checked" :label="args.label" :backgroundColor="args.backgroundColor" :checkColor="args.checkColor" :borderColor="args.borderColor" />',
});

export const Example = Template.bind({});
Example.args = {
  checked: false,
  label: "Label do Checkbox",
  backgroundColor: "#8f44fd",
  checkColor: "#f9f9f9",
  borderColor: "#8f44fd",
};
