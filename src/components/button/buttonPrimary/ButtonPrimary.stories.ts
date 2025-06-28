import type { Meta, StoryObj } from '@storybook/vue3'
import ButtonPrimary from './ButtonPrimary.vue'
import { ButtonColor, ButtonSize, IconPosition } from '../ButtonTypes'

const meta: Meta<typeof ButtonPrimary> = {
  title: 'Components/Button/ButtonPrimary',
  component: ButtonPrimary,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Texto exibido no botão'
    },
    ariaLabel: {
      control: 'text',
      description: 'Texto para acessibilidade (aria-label)'
    },
    tabindex: {
      control: { type: 'number', min: 0 },
      description: 'Ordem de tabulação'
    },
    disabled: {
      control: 'boolean',
      description: 'Estado desabilitado do botão'
    },
    backgroundColor: {
      control: 'select',
      options: Object.values(ButtonColor),
      description: 'Cor de fundo do botão'
    },
    color: {
      control: 'color',
      description: 'Cor do texto e ícone'
    },
    size: {
      control: 'select',
      options: Object.values(ButtonSize),
      description: 'Tamanho do botão'
    },
    icon: {
      control: 'text',
      description: 'Nome do ícone (opcional)'
    },
    iconPosition: {
      control: 'select',
      options: Object.values(IconPosition),
      description: 'Posição do ícone'
    }
  }
}

export default meta

type Story = StoryObj<typeof ButtonPrimary>

// Story básico
export const Default: Story = {
  args: {
    label: 'Primary Button'
  }
}

// Story para botão desabilitado
export const Disabled: Story = {
  args: {
    label: 'Disabled Button',
    disabled: true
  }
}

// Story para botão grande
export const Large: Story = {
  args: {
    label: 'Large Button',
    size: ButtonSize.LARGE
  }
}

// Story com ícone à esquerda
export const WithLeftIcon: Story = {
  args: {
    label: 'With Icon',
    icon: 'AA0010',
    iconPosition: IconPosition.LEFT
  }
}

// Story com ícone à direita
export const WithRightIcon: Story = {
  args: {
    label: 'With Icon',
    icon: 'AA0010',
    iconPosition: IconPosition.RIGHT
  }
}

// Story com cor personalizada
export const CustomColor: Story = {
  args: {
    label: 'Custom Color',
    backgroundColor: ButtonColor.SECONDARY,
    color: '#fff'
  }
}
