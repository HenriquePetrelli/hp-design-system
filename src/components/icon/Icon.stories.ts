import type { Meta, StoryObj } from '@storybook/vue3'
import HpIcon from '@components/icon/Icon.vue'
import AllIcons from '@assets/icons/icons.json'

const meta: Meta = {
  title: 'Components/Icon',
  component: HpIcon,
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'select',
      options: AllIcons,
      description: 'Identificador do ícone'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Tamanho do ícone'
    },
    color: {
      control: 'color',
      description: 'Cor em formato hexadecimal, rgb ou nome da cor'
    }
  }
}

export default meta

type Story = StoryObj<typeof HpIcon>

// Story básico
export const Default: Story = {
  args: {
    name: 'AA0010',
    size: 'md',
    color: '#ccc'
  }
}
