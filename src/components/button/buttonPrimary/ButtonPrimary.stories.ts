import type { Meta, StoryObj } from '@storybook/vue3'
import ButtonPrimary from './ButtonPrimary.vue'
import { ButtonSize } from '../ButtonTypes'

const meta: Meta<typeof ButtonPrimary> = {
  title: 'Components/Buttons/ButtonPrimary',
  component: ButtonPrimary,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Texto do botão'
    },
    disabled: {
      control: 'boolean',
      description: 'Estado desabilitado'
    },
    size: {
      control: 'select',
      options: Object.values(ButtonSize),
      description: 'Tamanho do botão'
    },
    ariaLabel: {
      control: 'text',
      description: 'Label para acessibilidade'
    }
  }
}

export default meta
type Story = StoryObj<typeof ButtonPrimary>

export const Regular: Story = {
  args: {
    label: 'Botão Primário',
    size: ButtonSize.REGULAR
  }
}

export const Large: Story = {
  args: {
    label: 'Botão Primário Grande',
    size: ButtonSize.LARGE
  }
}

export const Disabled: Story = {
  args: {
    label: 'Botão Desabilitado',
    disabled: true
  }
}

export const WithLeftIcon: Story = {
  args: {
    label: 'Com Ícone Esquerdo',
    icon: 'BE0010',
    iconPosition: 'left'
  }
}

export const WithRightIcon: Story = {
  args: {
    label: 'Com Ícone Direito',
    icon: 'BE0010',
    iconPosition: 'right'
  }
}
