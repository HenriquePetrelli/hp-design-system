import type { Meta, StoryObj } from '@storybook/vue3'
import Text from './Text.vue'
import { TextSize } from '../TextTypes'

const meta: Meta<typeof Text> = {
  title: 'Components/Text/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: Object.values(TextSize),
      description: 'Tamanho do texto'
    },
    color: {
      control: 'color',
      description: 'Cor do texto'
    }
  },
  args: {
    default: 'Texto de exemplo'
  }
}

export default meta

type Story = StoryObj<typeof Text>

// Story básico
export const Default: Story = {
  args: {}
}

// Texto extra pequeno
export const ExtraSmall: Story = {
  args: {
    size: TextSize.EXTRA_SMALL,
    default: 'Texto extra pequeno'
  }
}

// Texto pequeno
export const Small: Story = {
  args: {
    size: TextSize.SMALL,
    default: 'Texto pequeno'
  }
}

// Texto médio (default)
export const Medium: Story = {
  args: {
    size: TextSize.MEDIUM,
    default: 'Texto médio (tamanho padrão)'
  }
}

// Texto grande
export const Large: Story = {
  args: {
    size: TextSize.LARGE,
    default: 'Texto grande'
  }
}

// Texto extra grande
export const ExtraLarge: Story = {
  args: {
    size: TextSize.EXTRA_LARGE,
    default: 'Texto extra grande'
  }
}

// Texto extra extra grande
export const ExtraExtraLarge: Story = {
  args: {
    size: TextSize.EXTRA_EXTRA_LARGE,
    default: 'Texto extra extra grande'
  }
}

// Texto com cor personalizada
export const CustomColor: Story = {
  args: {
    color: '#FF5733',
    default: 'Texto com cor personalizada'
  }
}

// Texto longo
export const LongText: Story = {
  args: {
    default:
      'Este é um exemplo de texto mais longo que demonstra como o componente lida com conteúdo extenso. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  }
}
