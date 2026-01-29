import type { Meta, StoryObj } from '@storybook/vue3'
import ProgressBar from './ProgressBar.vue'

const meta: Meta<typeof ProgressBar> = {
  title: 'Components/Feedback/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'number',
      description: 'Valor atual do progresso'
    },
    max: {
      control: 'number',
      description: 'Valor máximo'
    },
    label: {
      control: 'text',
      description: 'Label do progresso'
    },
    hasLabel: {
      control: 'boolean',
      description: 'Mostrar label e valor'
    },
    status: {
      control: 'select',
      options: ['default', 'success', 'warning', 'error', 'info'],
      description: 'Estado visual'
    },
    indeterminate: {
      control: 'boolean',
      description: 'Estado indeterminado'
    }
  }
}

export default meta
type Story = StoryObj<typeof ProgressBar>

export const Default: Story = {
  args: {
    value: 75,
    max: 100,
    label: 'Progresso do Upload',
    hasLabel: true
  }
}

export const WithoutLabel: Story = {
  args: {
    value: 50,
    max: 100,
    hasLabel: false
  }
}

export const Success: Story = {
  args: {
    value: 100,
    max: 100,
    label: 'Concluído',
    status: 'success'
  }
}

export const Warning: Story = {
  args: {
    value: 80,
    max: 100,
    label: 'Quase Cheio',
    status: 'warning'
  }
}

export const Error: Story = {
  args: {
    value: 25,
    max: 100,
    label: 'Bateria Fraca',
    status: 'error'
  }
}

export const Info: Story = {
  args: {
    value: 40,
    max: 100,
    label: 'Processando',
    status: 'info'
  }
}

export const Indeterminate: Story = {
  args: {
    indeterminate: true,
    label: 'Carregando...',
    indeterminateText: 'Processando, por favor aguarde'
  }
}

export const Disabled: Story = {
  args: {
    value: 60,
    max: 100,
    label: 'Pausado',
    disabled: true
  }
}

export const CustomColors: Story = {
  args: {
    value: 90,
    max: 100,
    label: 'Customizado',
    barColor: '#9C27B0',
    trackColor: '#E1BEE7'
  }
}

export const SmallValue: Story = {
  args: {
    value: 5,
    max: 100,
    label: 'Início'
  }
}

export const Complete: Story = {
  args: {
    value: 100,
    max: 100,
    label: 'Concluído 100%'
  }
}
