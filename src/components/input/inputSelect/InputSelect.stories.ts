import type { Meta, StoryObj } from '@storybook/vue3'
import InputSelect from './InputSelect.vue'

const meta: Meta<typeof InputSelect> = {
  title: 'Components/Inputs/InputSelect',
  component: InputSelect,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label do select'
    },
    modelValue: {
      control: 'text',
      description: 'Valor selecionado'
    },
    placeholder: {
      control: 'text',
      description: 'Texto placeholder'
    },
    disabled: {
      control: 'boolean',
      description: 'Estado desabilitado'
    },
    required: {
      control: 'boolean',
      description: 'Campo obrigatório'
    },
    status: {
      control: 'select',
      options: ['default', 'error', 'success'],
      description: 'Estado visual'
    }
  }
}

export default meta
type Story = StoryObj<typeof InputSelect>

const options = [
  { label: 'Opção 1', value: '1' },
  { label: 'Opção 2', value: '2' },
  { label: 'Opção 3', value: '3' },
  { label: 'Opção 4 (desabilitada)', value: '4', disabled: true },
  { label: 'Opção 5', value: '5' }
]

export const Default: Story = {
  args: {
    label: 'Selecione uma opção',
    options,
    placeholder: 'Escolha...'
  }
}

export const WithValue: Story = {
  args: {
    label: 'País',
    modelValue: '2',
    options,
    placeholder: 'Selecione um país'
  }
}

export const Disabled: Story = {
  args: {
    label: 'Select Desabilitado',
    options,
    disabled: true
  }
}

export const Required: Story = {
  args: {
    label: 'Gênero',
    options: [
      { label: 'Masculino', value: 'M' },
      { label: 'Feminino', value: 'F' },
      { label: 'Outro', value: 'O' }
    ],
    required: true,
    placeholder: 'Selecione...'
  }
}

export const ErrorState: Story = {
  args: {
    label: 'Estado',
    options,
    status: 'error',
    helperText: 'Este campo é obrigatório'
  }
}

export const SuccessState: Story = {
  args: {
    label: 'Plano',
    modelValue: 'premium',
    options: [
      { label: 'Básico', value: 'basic' },
      { label: 'Standard', value: 'standard' },
      { label: 'Premium', value: 'premium' }
    ],
    status: 'success',
    helperText: 'Plano selecionado com sucesso'
  }
}

export const Autocomplete: Story = {
  args: {
    label: 'Buscar Cidade',
    options: [
      { label: 'São Paulo', value: 'sp' },
      { label: 'Rio de Janeiro', value: 'rj' },
      { label: 'Belo Horizonte', value: 'bh' },
      { label: 'Curitiba', value: 'cur' },
      { label: 'Porto Alegre', value: 'poa' }
    ],
    autocomplete: true,
    placeholder: 'Digite para buscar...'
  }
}
