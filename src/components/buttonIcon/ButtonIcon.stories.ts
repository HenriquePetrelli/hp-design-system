import type { Meta, StoryObj } from '@storybook/vue3'
import ButtonIcon from './ButtonIcon.vue'
import { ButtonIconSize } from './ButtonIconTypes'
import AllIcons from '@assets/icons/icons.json'

const meta: Meta<typeof ButtonIcon> = {
  title: 'Components/ButtonIcon',
  component: ButtonIcon,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Texto para acessibilidade (aria-label)'
    },
    icon: {
      control: 'select',
      options: AllIcons,
      description: 'Identificador do ícone'
    },
    disabled: {
      control: 'boolean',
      description: 'Estado desabilitado do botão'
    },
    tabindex: {
      control: { type: 'number', min: 0 },
      description: 'Ordem de tabulação'
    },
    isLoading: {
      control: 'boolean',
      description: 'Se verdadeiro, exibe um spinner no lugar do ícone'
    },
    size: {
      control: 'select',
      options: Object.values(ButtonIconSize),
      description: 'Tamanho do botão'
    }
  }
}

export default meta

type Story = StoryObj<typeof ButtonIcon>

// Story básico
export const Default: Story = {
  args: {
    label: 'Ícone de exemplo',
    icon: 'BD0020'
  }
}

// Botão pequeno
export const Small: Story = {
  args: {
    label: 'Botão pequeno',
    icon: 'BE0010',
    size: ButtonIconSize.SMALL
  }
}

// Botão grande
export const Large: Story = {
  args: {
    label: 'Botão grande',
    icon: 'BE0010',
    size: ButtonIconSize.LARGE
  }
}

// Botão desabilitado
export const Disabled: Story = {
  args: {
    label: 'Botão desabilitado',
    icon: 'BE0120',
    disabled: true
  }
}

// Botão com background
export const WithoutBackgroud: Story = {
  args: {
    label: 'Botão sem background',
    icon: 'BE0120',
    hasBackgroundHover: false
  }
}

// Botão com loading
export const Loading: Story = {
  args: {
    label: 'Botão carregando',
    isLoading: true
  }
}
