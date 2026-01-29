import type { Meta, StoryObj } from '@storybook/vue3'
import InputText from './InputText.vue'

const meta: Meta<typeof InputText> = {
  title: 'Components/Inputs/InputText',
  component: InputText,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label do input'
    },
    modelValue: {
      control: 'text',
      description: 'Valor do input'
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
type Story = StoryObj<typeof InputText>

export const Default: Story = {
  args: {
    label: 'Nome Completo',
    placeholder: 'Digite seu nome'
  }
}

export const WithValue: Story = {
  args: {
    label: 'E-mail',
    modelValue: 'usuario@exemplo.com',
    placeholder: 'seu@email.com'
  }
}

export const Disabled: Story = {
  args: {
    label: 'Campo Desabilitado',
    modelValue: 'Valor fixo',
    disabled: true
  }
}

export const Required: Story = {
  args: {
    label: 'Senha',
    required: true,
    placeholder: 'Digite sua senha',
    type: 'password'
  }
}

export const WithHelperText: Story = {
  args: {
    label: 'Usuário',
    placeholder: 'Digite seu usuário',
    helperText: 'Use apenas letras e números'
  }
}

export const ErrorState: Story = {
  args: {
    label: 'E-mail',
    modelValue: 'email-invalido',
    status: 'error',
    helperText: 'Formato de e-mail inválido'
  }
}

export const SuccessState: Story = {
  args: {
    label: 'CPF',
    modelValue: '123.456.789-00',
    status: 'success',
    helperText: 'CPF válido'
  }
}

export const WithLeadingIcon: Story = {
  args: {
    label: 'Buscar',
    placeholder: 'Digite sua busca...',
    leadingIcon: 'BE0020'
  }
}

export const WithTrailingIcon: Story = {
  args: {
    label: 'Senha',
    placeholder: 'Digite sua senha',
    trailingIcon: 'BE0030',
    iconHasAction: true
  }
}

export const WithCharacterCount: Story = {
  args: {
    label: 'Biografia',
    placeholder: 'Conte um pouco sobre você...',
    maxLength: 200,
    hasLengthCount: true
  }
}
