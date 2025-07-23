import type { Meta, StoryObj } from '@storybook/vue3'
import InputNumber from '@components/input/inputNumber/InputNumber.vue'
import AllIcons from '@assets/icons/icons.json'
import { ref } from 'vue'

interface InputNumberProps {
  modelValue?: number
  label: string
  incrementBy: number
  minValue: number
  maxValue: number
  helperText?: string
  readonly?: boolean
  disabled?: boolean
  placeholder?: string
  required?: boolean
  leadingIcon?: string
  status?: 'default' | 'error' | 'success'
}

const meta: Meta<typeof InputNumber> = {
  title: 'Components/Input/InputNumber',
  component: InputNumber,
  tags: ['autodocs'],
  argTypes: {
    modelValue: { control: 'text' },
    label: { control: 'text', defaultValue: 'Label' },
    incrementBy: { control: 'number' },
    minValue: { control: 'number' },
    maxValue: { control: 'number' },
    helperText: { control: 'text' },
    readonly: { control: 'boolean' },
    disabled: { control: 'boolean' },
    placeholder: { control: 'text' },
    required: { control: 'boolean' },
    leadingIcon: {
      control: 'select',
      options: AllIcons,
      description: 'Identificador do ícone'
    },
    status: {
      control: 'select',
      options: ['default', 'error', 'success']
    }
  }
}

export default meta

type Story = StoryObj<InputNumberProps>

const Template: Story = {
  render: (args) => ({
    components: { InputNumber },
    setup() {
      const modelValue = ref(args.modelValue)
      return { args, modelValue }
    },
    template: `
      <InputNumber
        v-bind="args"
        v-model="modelValue"
        @action:trailingIconClick="args['action:trailingIconClick']"
      />
    `
  })
}

export const Default: Story = {
  ...Template,
  args: {
    label: 'Sua idade'
  }
}

export const WithValue: Story = {
  ...Template,
  args: {
    label: 'Sua idade',
    modelValue: 0
  }
}

export const WithPlaceholder: Story = {
  ...Template,
  args: {
    label: 'Sua idade',
    placeholder: 'Digite sua idade'
  }
}

export const Required: Story = {
  ...Template,
  args: {
    label: 'Sua idade obrigatório',
    required: true
  }
}

export const Disabled: Story = {
  ...Template,
  args: {
    label: 'Sua idade desabilitado',
    disabled: true,
    modelValue: 20
  }
}

export const Readonly: Story = {
  ...Template,
  args: {
    label: 'Sua idade apenas para leitura',
    readonly: true,
    modelValue: 25
  }
}

export const WithHelperText: Story = {
  ...Template,
  args: {
    label: 'Input com helper text',
    helperText: 'Mensagem de suporte'
  }
}

export const WithLeadingIcon: Story = {
  ...Template,
  args: {
    label: 'Input com ícone a esquerda',
    leadingIcon: 'BE0090'
  }
}

export const ErrorState: Story = {
  ...Template,
  args: {
    label: 'Input com status de erro',
    status: 'error',
    helperText: 'Mensagem de erro'
  }
}

export const SuccessState: Story = {
  ...Template,
  args: {
    label: 'Input com status de sucesso',
    status: 'success',
    helperText: 'Mensagem de sucesso'
  }
}
