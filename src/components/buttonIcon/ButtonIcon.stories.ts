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
export const WithBackgroud: Story = {
  args: {
    label: 'Botão carregando',
    hasBackground: true,
    backgroundColor: '#4CAF50',
    icon: 'BE0120'
  }
}

// Botão com cores customizadas
export const CustomColors: Story = {
  args: {
    label: 'Cores customizadas',
    icon: 'BE0120',
    backgroundColor: '#4CAF50',
    iconColor: '#FFEB3B'
  }
}

// Botão com loading
export const Loading: Story = {
  args: {
    label: 'Botão carregando',
    isLoading: true,
    iconColor: '#000000'
  }
}

// Botão com loading e cores customizadas
export const LoadingWithCustomColors: Story = {
  args: {
    label: 'Loading com cores',
    isLoading: true,
    backgroundColor: '#00a392',
    iconColor: 'black'
  }
}
