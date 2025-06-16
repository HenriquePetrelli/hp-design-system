import type { Meta, StoryFn } from "@storybook/vue3";
import IconList from "@components/icons/iconList/IconList.vue";

// Definindo o tipo dos argumentos
interface IconListArgs {
  color: string;
}

const meta: Meta = {
  title: "Foundation/Icons/AllIcons",
  component: IconList,
  argTypes: {
    color: {
      control: "color",
      description: "Cor em formato hexadecimal, rgb ou nome da cor",
      table: {
        category: "Propriedades",
        type: {
          summary: "string",
          detail: "hex: '#ccc'\nrgb: 'rgb(204, 204, 204)'\nnome: 'grey'",
        },
        defaultValue: { summary: "#000000" },
        disable: false,
        sortOrder: 3,
      },
    },
  },
};

export default meta;

const Template: StoryFn<IconListArgs> = (args) => ({
  components: { IconList },
  setup() {
    return { args };
  },
  template: '<IconList v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  color: "#757abf",
};

Default.parameters = {
  docs: {
    source: {
      code: `<IconList :color="color" />`,
    },
  },
};
