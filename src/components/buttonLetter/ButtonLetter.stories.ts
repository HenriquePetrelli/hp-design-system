import type { Meta, StoryObj } from '@storybook/vue3'
import ButtonLetter from './ButtonLetter.vue'
import { ButtonLetterSize } from './ButtonLetterTypes'

const meta: Meta<typeof ButtonLetter> = {
  title: 'Components/ButtonLetter',
  component: ButtonLetter,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Texto para acessibilidade (aria-label)'
    },
    letter: {
      control: 'text',
      description: 'Letra do botão'
    },

    backgroundColor: {
      control: 'color',
      description: 'Cor de fundo do botão'
    },
    letterColor: {
      control: 'color',
      description: 'Cor da letra'
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
      description: 'Se verdadeiro, exibe um spinner no lugar da letra'
    },
    size: {
      control: 'select',
      options: Object.values(ButtonLetterSize),
      description: 'Tamanho do botão'
    }
  }
}

export default meta

type Story = StoryObj<typeof ButtonLetter>

// Story básico
export const Default: Story = {
  args: {
    label: 'Botão de exemplo',
    letter: 'H'
  }
}

// Botão pequeno
export const Small: Story = {
  args: {
    label: 'Botão pequeno',
    letter: 'HP',
    size: ButtonLetterSize.SMALL
  }
}

// Botão grande
export const Large: Story = {
  args: {
    label: 'Botão grande',
    letter: 'H',
    size: ButtonLetterSize.LARGE
  }
}

// Botão desabilitado
export const Disabled: Story = {
  args: {
    label: 'Botão desabilitado',
    letter: 'H',
    disabled: true
  }
}

// Botão com background
export const WithBackgroud: Story = {
  args: {
    label: 'Botão carregando',
    hasBackground: true,
    backgroundColor: '#4CAF50',
    letter: 'H'
  }
}

// Botão com cores customizadas
export const CustomColors: Story = {
  args: {
    label: 'Cores customizadas',
    letter: 'H',
    backgroundColor: '#4CAF50',
    letterColor: '#FFEB3B'
  }
}

// Botão com loading
export const Loading: Story = {
  args: {
    label: 'Botão carregando',
    letter: 'H',
    isLoading: true,
    letterColor: '#000000'
  }
}

// Botão com loading e cores customizadas
export const LoadingWithCustomColors: Story = {
  args: {
    label: 'Loading com cores',
    isLoading: true,
    backgroundColor: '#00a392',
    letter: 'H',
    letterColor: 'black'
  }
}
