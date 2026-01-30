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

// Botão sem background
export const WithoutBackgroud: Story = {
  args: {
    label: 'Botão sem background',
    letter: 'H',
    hasBackgroundHover: false
  }
}

// Botão com loading
export const Loading: Story = {
  args: {
    label: 'Botão carregando',
    letter: 'H',
    isLoading: true
  }
}
