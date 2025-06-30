import type { Meta, StoryObj } from '@storybook/vue3'
import Heading from './Heading.vue'
import { HeadingLevel } from '../TextTypes'

const meta: Meta<typeof Heading> = {
  title: 'Components/Text/Heading',
  component: Heading,
  tags: ['autodocs'],
  argTypes: {
    level: {
      control: 'select',
      options: Array.from({ length: 6 }, (_, i) => i + 1),
      description: 'Tamanho do título'
    },
    color: {
      control: 'color',
      description: 'Cor do título'
    }
  },
  args: {
    default: 'Título de exemplo',
    level: HeadingLevel.H3
  }
}

export default meta

type Story = StoryObj<typeof Heading>

export const Default: Story = {
  args: {}
}

export const Heading1: Story = {
  args: {
    level: HeadingLevel.H1,
    default: 'Heading Level 1'
  }
}

export const Heading2: Story = {
  args: {
    level: HeadingLevel.H2,
    default: 'Heading Level 2'
  }
}

export const Heading3: Story = {
  args: {
    level: HeadingLevel.H3,
    default: 'Heading Level 3'
  }
}

export const Heading4: Story = {
  args: {
    level: HeadingLevel.H4,
    default: 'Heading Level 4'
  }
}

export const Heading5: Story = {
  args: {
    level: HeadingLevel.H5,
    default: 'Heading Level 5'
  }
}

export const Heading6: Story = {
  args: {
    level: HeadingLevel.H6,
    default: 'Heading Level 6'
  }
}
