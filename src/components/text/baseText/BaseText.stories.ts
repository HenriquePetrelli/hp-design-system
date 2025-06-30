import type { Meta, StoryObj } from '@storybook/vue3'
import BaseText from './BaseText.vue'
import { BaseTextSize } from '../TextTypes'

const meta: Meta<typeof BaseText> = {
  title: 'Components/Text/BaseText',
  component: BaseText,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: Object.values(BaseTextSize),
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

type Story = StoryObj<typeof BaseText>

// Story básico
export const Default: Story = {
  args: {}
}

// Texto extra pequeno
export const ExtraSmall: Story = {
  args: {
    size: BaseTextSize.EXTRA_SMALL,
    default: 'Texto extra pequeno'
  }
}

// Texto pequeno
export const Small: Story = {
  args: {
    size: BaseTextSize.SMALL,
    default: 'Texto pequeno'
  }
}

// Texto médio (default)
export const Medium: Story = {
  args: {
    size: BaseTextSize.MEDIUM,
    default: 'Texto médio (tamanho padrão)'
  }
}

// Texto grande
export const Large: Story = {
  args: {
    size: BaseTextSize.LARGE,
    default: 'Texto grande'
  }
}

// Texto extra grande
export const ExtraLarge: Story = {
  args: {
    size: BaseTextSize.EXTRA_LARGE,
    default: 'Texto extra grande'
  }
}

// Texto extra extra grande
export const ExtraExtraLarge: Story = {
  args: {
    size: BaseTextSize.EXTRA_EXTRA_LARGE,
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
