import type { Meta, StoryObj } from '@storybook/vue3'
import ButtonIconPrimary from './ButtonIconPrimary.vue'
import { ButtonIconSize } from './ButtonIconTypes'

const meta: Meta<typeof ButtonIconPrimary> = {
  title: 'Components/ButtonIcon/ButtonIconPrimary',
  component: ButtonIconPrimary,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Texto para acessibilidade (aria-label)'
    },
    icon: {
      control: 'text',
      description: 'Nome do ícone a ser exibido'
    },
    backgroundColor: {
      control: 'color',
      description: 'Cor de fundo do botão'
    },
    iconColor: {
      control: 'color',
      description: 'Cor do ícone'
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

type Story = StoryObj<typeof ButtonIconPrimary>

// Story básico
export const Default: Story = {
  args: {
    label: 'Ícone de exemplo',
    icon: 'AA0010'
  }
}

// Botão pequeno
export const Small: Story = {
  args: {
    label: 'Botão pequeno',
    icon: 'AA0010',
    size: ButtonIconSize.SMALL
  }
}

// Botão grande
export const Large: Story = {
  args: {
    label: 'Botão grande',
    icon: 'AA0010',
    size: ButtonIconSize.LARGE
  }
}

// Botão desabilitado
export const Disabled: Story = {
  args: {
    label: 'Botão desabilitado',
    icon: 'AA0010',
    disabled: true
  }
}

// Botão com loading
export const Loading: Story = {
  args: {
    label: 'Botão carregando',
    icon: 'AA0010',
    isLoading: true
  }
}

// Botão com cores customizadas
export const CustomColors: Story = {
  args: {
    label: 'Cores customizadas',
    icon: 'AA0010',
    backgroundColor: '#4CAF50',
    iconColor: '#FFEB3B'
  }
}

// Botão com ícone diferente
export const DifferentIcon: Story = {
  args: {
    label: 'Ícone diferente',
    icon: 'AA0020'
  }
}

// Botão com loading e cores customizadas
export const LoadingWithCustomColors: Story = {
  args: {
    label: 'Loading com cores',
    icon: 'AA0010',
    isLoading: true,
    backgroundColor: '#9C27B0',
    iconColor: '#FFFFFF'
  }
}
