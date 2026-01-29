import type { Meta, StoryObj } from '@storybook/vue3'
import RadioButton from './RadioButton.vue'

const meta: Meta<typeof RadioButton> = {
  title: 'Components/Selection/RadioButton',
  component: RadioButton,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'text',
      description: 'Valor selecionado'
    },
    value: {
      control: 'text',
      description: 'Valor deste radio'
    },
    label: {
      control: 'text',
      description: 'Label do radio'
    },
    disabled: {
      control: 'boolean',
      description: 'Estado desabilitado'
    },
    name: {
      control: 'text',
      description: 'Nome do grupo de radios'
    }
  }
}

export default meta
type Story = StoryObj<typeof RadioButton>

export const Default: Story = {
  args: {
    label: 'Opção Padrão',
    value: 'option1'
  }
}

export const Checked: Story = {
  args: {
    label: 'Opção Selecionada',
    value: 'selected',
    modelValue: 'selected'
  }
}

export const Disabled: Story = {
  args: {
    label: 'Opção Desabilitada',
    value: 'disabled',
    disabled: true
  }
}

export const WithAnimation: Story = {
  args: {
    label: 'Com Animação',
    value: 'animated',
    hasAnimation: true
  }
}

export const CustomColors: Story = {
  args: {
    label: 'Cores Personalizadas',
    value: 'custom',
    dotColor: '#4CAF50',
    backgroundColor: '#E8F5E9',
    borderColor: '#81C784'
  }
}

export const RadioGroupExample: Story = {
  render: () => ({
    components: { RadioButton },
    data() {
      return {
        selectedOption: 'option2'
      }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <RadioButton
          label="Opção 1"
          value="option1"
          v-model="selectedOption"
          name="example-group"
        />
        <RadioButton
          label="Opção 2"
          value="option2"
          v-model="selectedOption"
          name="example-group"
        />
        <RadioButton
          label="Opção 3 (desabilitada)"
          value="option3"
          v-model="selectedOption"
          name="example-group"
          disabled
        />
        <RadioButton
          label="Opção 4"
          value="option4"
          v-model="selectedOption"
          name="example-group"
        />
        <p style="margin-top: 12px;">Selecionado: {{ selectedOption }}</p>
      </div>
    `
  }),
  name: 'Radio Group Example'
}
