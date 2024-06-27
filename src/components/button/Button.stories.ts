// src/components/Button/Button.stories.ts
import type { Meta, StoryFn } from '@storybook/vue3'; // Importa StoryFn em vez de Story
import HpButton from './Button.vue';

const meta: Meta = {
  title: 'Componentes/Button',
  component: HpButton,
  argTypes: {
    text: {
      control: {
        type: 'text',
      },
      table: {
        category: 'Propriedades',
        type: {
          summary: 'string',
          detail: 'Tipo de texto',
        },
        defaultValue: { summary: 'Label padrão' },
      },
      description: 'Texto do botão',
    },
  },
};

export default meta;

const Template: StoryFn<{ text: string }> = (args) => ({ // Define explicitamente o tipo de args
  components: { HpButton },
  setup() {
    return { args };
  },
  template: '<HpButton :text="args.text" />',
});

export const Example = Template.bind({});
Example.args = {
  text: 'Label',
};
