import type { Meta, StoryObj } from '@storybook/vue3'
import InputRange from './InputRange.vue'

const meta: Meta<typeof InputRange> = {
  title: 'Components/Inputs/InputRange',
  component: InputRange,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label do controle'
    },
    modelValue: {
      control: 'number',
      description: 'Valor atual'
    },
    min: {
      control: 'number',
      description: 'Valor mínimo'
    },
    max: {
      control: 'number',
      description: 'Valor máximo'
    },
    step: {
      control: 'number',
      description: 'Incremento do slider'
    },
    disabled: {
      control: 'boolean',
      description: 'Estado desabilitado'
    },
    status: {
      control: 'select',
      options: ['default', 'error', 'success'],
      description: 'Estado visual'
    }
  }
}

export default meta
type Story = StoryObj<typeof InputRange>

export const Default: Story = {
  args: {
    label: 'Nível de Volume',
    modelValue: 50,
    min: 0,
    max: 100,
    step: 1
  }
}

export const WithUnit: Story = {
  args: {
    label: 'Temperatura',
    modelValue: 25,
    min: 0,
    max: 100,
    step: 1,
    unit: '°C'
  }
}

export const Disabled: Story = {
  args: {
    label: 'Controle Desabilitado',
    modelValue: 30,
    disabled: true
  }
}

export const ErrorState: Story = {
  args: {
    label: 'Nível de Bateria',
    modelValue: 15,
    min: 0,
    max: 100,
    status: 'error',
    helperText: 'Bateria crítica! Conecte ao carregador.'
  }
}

export const SuccessState: Story = {
  args: {
    label: 'Progresso do Upload',
    modelValue: 75,
    min: 0,
    max: 100,
    status: 'success',
    helperText: 'Upload quase concluído'
  }
}

export const CustomRange: Story = {
  args: {
    label: 'Rating (1-5)',
    modelValue: 3,
    min: 1,
    max: 5,
    step: 0.5,
    unit: 'estrelas'
  }
}
