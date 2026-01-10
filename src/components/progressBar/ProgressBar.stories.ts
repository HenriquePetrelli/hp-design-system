import type { Meta, StoryObj } from '@storybook/vue3'
import ProgressBar from './ProgressBar.vue'

const meta: Meta<typeof ProgressBar> = {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Texto descritivo do progresso (usado para acessibilidade)'
    },
    value: {
      control: { type: 'number', min: 0 },
      description: 'Valor atual do progresso'
    },
    max: {
      control: { type: 'number', min: 1 },
      description: 'Valor máximo do progresso'
    },
    hasLabel: {
      control: 'boolean',
      description:
        'Exibe a porcentagem acima da barra, alinhada ao final do progresso'
    },
    backgroundColor: {
      control: 'color',
      description: 'Cor de fundo da barra de progresso (track)'
    },
    barColor: {
      control: 'color',
      description: 'Cor da barra de progresso (fill)'
    }
  }
}

export default meta

type Story = StoryObj<typeof ProgressBar>

/**
 * Progress bar padrão
 */
export const Default: Story = {
  args: {
    label: 'Progresso',
    value: 50
  }
}

/**
 * Com label flutuante (porcentagem acima da barra)
 */
export const WithLabel: Story = {
  args: {
    label: 'Vale Refeição',
    value: 85,
    hasLabel: true
  }
}

/**
 * Progresso completo
 */
export const Complete: Story = {
  args: {
    label: 'Progresso completo',
    value: 100,
    hasLabel: true
  }
}

/**
 * Valores customizados de máximo
 */
export const CustomMaxValue: Story = {
  args: {
    label: 'Uso de benefício',
    value: 350,
    max: 500,
    hasLabel: true
  }
}

/**
 * Cores customizadas
 */
export const CustomColors: Story = {
  args: {
    label: 'Vale Alimentação',
    value: 60,
    hasLabel: true,
    backgroundColor: '#E5E7EB',
    barColor: '#16A34A'
  }
}

/**
 * Baixo progresso
 */
export const LowProgress: Story = {
  args: {
    label: 'Saldo restante',
    value: 10,
    hasLabel: true,
    barColor: '#DC2626'
  }
}
