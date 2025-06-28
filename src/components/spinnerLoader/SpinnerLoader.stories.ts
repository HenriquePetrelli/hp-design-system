import type { Meta, StoryObj } from '@storybook/vue3'
import SpinnerLoader from './SpinnerLoader.vue'
import { SpinnerLoaderSize } from './SpinnerLoaderTypes'

const meta: Meta<typeof SpinnerLoader> = {
  title: 'Components/SpinnerLoader',
  component: SpinnerLoader,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: [
        'circle1',
        'circle2',
        'circle3',
        'circle4',
        'dot1',
        'dot2',
        'dot3',
        'dot4',
        'dot5',
        'ring1',
        'ring2',
        'ring3',
        'clock',
        'reload',
        'engine',
        'search'
      ],
      description: 'Tipo de spinner a ser exibido'
    },
    size: {
      control: {
        type: 'select',
        options: Object.values(SpinnerLoaderSize)
      },
      description:
        'Tamanho do spinner (pode ser um valor numérico ou um dos tamanhos pré-definidos)'
    },
    color: {
      control: 'color',
      description: 'Cor principal do spinner'
    },
    secondaryColor: {
      control: 'color',
      description: 'Cor secundária do spinner (para alguns tipos)'
    },
    speed: {
      control: {
        type: 'number',
        min: 0.1,
        max: 10,
        step: 0.1
      },
      description: 'Velocidade da animação em segundos'
    }
  }
}

export default meta

type Story = StoryObj<typeof SpinnerLoader>

// Story básico com spinner padrão (circle1)
export const Default: Story = {
  args: {
    type: 'circle1'
  }
}

// Spinner pequeno
export const Small: Story = {
  args: {
    size: SpinnerLoaderSize.SMALL
  }
}

// Spinner grande
export const Large: Story = {
  args: {
    size: SpinnerLoaderSize.LARGE
  }
}

// Spinner com cores customizadas
export const CustomColors: Story = {
  args: {
    color: '#FF5722',
    secondaryColor: '#4CAF50'
  }
}

// Spinner rápido
export const Fast: Story = {
  args: {
    speed: 0.5
  }
}

// Spinner lento
export const Slow: Story = {
  args: {
    speed: 2
  }
}

// Exemplos de diferentes tipos de spinners
export const Circle2: Story = {
  args: {
    type: 'circle2'
  },
  name: 'Circle 2'
}

export const Dot1: Story = {
  args: {
    type: 'dot1'
  },
  name: 'Dot 1'
}

export const Ring3: Story = {
  args: {
    type: 'ring3'
  },
  name: 'Ring 3'
}

export const Clock: Story = {
  args: {
    type: 'clock'
  },
  name: 'Clock'
}

export const Search: Story = {
  args: {
    type: 'search'
  },
  name: 'Search'
}
