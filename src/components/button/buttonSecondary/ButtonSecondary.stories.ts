import type { Meta, StoryObj } from '@storybook/vue3'
import ButtonSecondary from './ButtonSecondary.vue'
import { ButtonSize, IconPosition } from '../ButtonTypes'

const meta: Meta<typeof ButtonSecondary> = {
  title: 'Componentes/Button/ButtonSecondary',
  component: ButtonSecondary,
  tags: ['autodocs'],
  parameters: {
    docs: {
      source: {
        // Remove <template> e mantém apenas o componente
        transform: (code: string) =>
          code.replace(/^<template>\s*|\s*<\/template>$/g, '').trim()
      }
    }
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Texto exibido no botão'
    },
    ariaLabel: {
      control: 'text',
      description: 'Texto para acessibilidade (aria-label)'
    },
    disabled: {
      control: 'boolean',
      description: 'Estado desabilitado do botão'
    },
    color: {
      control: 'color',
      description: 'Cor do botão no hover e borda'
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

type Story = StoryObj<typeof ButtonSecondary>

// Story básico
export const Default: Story = {
  args: {
    label: 'Secondary Button'
  }
}

// Story para botão desabilitado
export const Disabled: Story = {
  args: {
    label: 'Disabled Secondary',
    disabled: true
  }
}

// Story para botão grande
export const Large: Story = {
  args: {
    label: 'Large Secondary',
    size: ButtonSize.LARGE
  }
}

// Story com ícone à esquerda
export const WithLeftIcon: Story = {
  args: {
    label: 'With Left Icon',
    icon: 'AA0030',
    iconPosition: IconPosition.LEFT
  }
}

// Story com ícone à direita
export const WithRightIcon: Story = {
  args: {
    label: 'With Right Icon',
    icon: 'AA0030',
    iconPosition: IconPosition.RIGHT
  }
}

// Story com cor personalizada
export const CustomColor: Story = {
  args: {
    label: 'Custom Color',
    color: '#2ec4b6'
  }
}
