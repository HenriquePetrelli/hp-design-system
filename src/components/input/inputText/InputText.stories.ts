import type { Meta, StoryObj } from '@storybook/vue3'
import InputText from '@components/input/inputText/InputText.vue'
import { ref } from 'vue'

interface InputTextProps {
  modelValue?: string
  label: string
  helperText?: string
  readonly?: boolean
  disabled?: boolean
  placeholder?: string
  required?: boolean
  leadingIcon?: string
  trailingIcon?: string
  iconHasAction?: boolean
  trailingIconLabel?: string
  status?: 'default' | 'error' | 'success'
  maxLength?: number
  hasLengthCount?: boolean
  'action:trailingIconClick'?: () => void
}

const meta: Meta<typeof InputText> = {
  title: 'Components/Input/InputText',
  component: InputText,
  tags: ['autodocs'],
  argTypes: {
    modelValue: { control: 'text' },
    label: { control: 'text', defaultValue: 'Label' },
    helperText: { control: 'text' },
    readonly: { control: 'boolean' },
    disabled: { control: 'boolean' },
    placeholder: { control: 'text' },
    required: { control: 'boolean' },
    leadingIcon: {
      control: 'text',
      description: 'Icon name from HpIcon component'
    },
    trailingIcon: {
      control: 'text',
      description: 'Icon name from HpIcon component'
    },
    iconHasAction: {
      control: 'boolean',
      description: 'If true, trailing icon becomes clickable'
    },
    trailingIconLabel: {
      control: 'text',
      description: 'Accessible label for trailing icon button'
    },
    status: {
      control: 'select',
      options: ['default', 'error', 'success']
    },
    maxLength: { control: 'number' },
    hasLengthCount: { control: 'boolean' },
    'action:trailingIconClick': { action: 'trailingIconClicked' }
  }
}

export default meta

type Story = StoryObj<InputTextProps>

const Template: Story = {
  render: (args) => ({
    components: { InputText },
    setup() {
      const modelValue = ref(args.modelValue)
      return { args, modelValue }
    },
    template: `
      <InputText
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
    label: 'Seu nome'
  }
}

export const WithValue: Story = {
  ...Template,
  args: {
    label: 'Seu nome',
    modelValue: 'Henrique Petrelli'
  }
}

export const WithPlaceholder: Story = {
  ...Template,
  args: {
    label: 'Seu nome',
    placeholder: 'Digite seu nome completo'
  }
}

export const Required: Story = {
  ...Template,
  args: {
    label: 'Seu nome obrigatório',
    required: true
  }
}

export const Disabled: Story = {
  ...Template,
  args: {
    label: 'Seu nome desabilitado',
    disabled: true,
    modelValue: 'Henrique Petrelli'
  }
}

export const Readonly: Story = {
  ...Template,
  args: {
    label: 'Seu nome apenas para leitura',
    readonly: true,
    modelValue: 'Henrique Petrelli'
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

export const WithTrailingIcon: Story = {
  ...Template,
  args: {
    label: 'Input com ícone a direita',
    trailingIcon: 'BE0090'
  }
}

export const WithClickableTrailingIcon: Story = {
  ...Template,
  args: {
    label: 'Input com ícone clicável a direita',
    trailingIcon: 'BE0090',
    iconHasAction: true,
    trailingIconLabel: 'Search input'
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

export const WithCharacterCounter: Story = {
  ...Template,
  args: {
    label: 'Input com contador de caracteres',
    maxLength: 100,
    hasLengthCount: true
  }
}
