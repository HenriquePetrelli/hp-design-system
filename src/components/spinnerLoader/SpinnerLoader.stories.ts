import type { Meta, StoryObj } from '@storybook/vue3'
import SpinnerLoader from './SpinnerLoader.vue'

const meta: Meta<typeof SpinnerLoader> = {
  title: 'Components/Feedback/SpinnerLoader',
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
      description: 'Tipo de spinner'
    },
    size: {
      control: 'select',
      options: ['small', 'regular', 'large', 'xlarge'],
      description: 'Tamanho do spinner'
    },
    speed: {
      control: 'select',
      options: ['fast', 'normal', 'slow'],
      description: 'Velocidade da animação'
    }
  }
}

export default meta
type Story = StoryObj<typeof SpinnerLoader>

export const Circle1: Story = {
  args: {
    type: 'circle1',
    size: 'regular'
  }
}

export const Circle2: Story = {
  args: {
    type: 'circle2',
    size: 'large'
  }
}

export const Dot1: Story = {
  args: {
    type: 'dot1',
    size: 'regular'
  }
}

export const Ring1: Story = {
  args: {
    type: 'ring1',
    size: 'regular'
  }
}

export const Clock: Story = {
  args: {
    type: 'clock',
    size: 'large'
  }
}

export const Small: Story = {
  args: {
    type: 'circle1',
    size: 'small'
  }
}

export const Large: Story = {
  args: {
    type: 'circle1',
    size: 'large'
  }
}

export const XLarge: Story = {
  args: {
    type: 'circle1',
    size: 'xlarge'
  }
}

export const Fast: Story = {
  args: {
    type: 'circle1',
    speed: 'fast'
  }
}

export const Slow: Story = {
  args: {
    type: 'circle1',
    speed: 'slow'
  }
}

export const SuccessVariant: Story = {
  args: {
    type: 'circle1'
  }
}

export const ErrorVariant: Story = {
  args: {
    type: 'circle1'
  }
}

export const WarningVariant: Story = {
  args: {
    type: 'circle1'
  }
}

export const InfoVariant: Story = {
  args: {
    type: 'circle1'
  }
}

export const CustomColors: Story = {
  args: {
    type: 'circle1',
    color: '#9C27B0',
    secondaryColor: '#F3E5F5'
  }
}

export const AllTypesGrid: Story = {
  render: () => ({
    components: { SpinnerLoader },
    data() {
      const types = [
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
      ]
      return { types }
    },
    template: `
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; padding: 20px;">
        <div v-for="type in types" :key="type" style="text-align: center;">
          <SpinnerLoader :type="type" size="small" />
          <div style="margin-top: 8px; font-size: 12px; color: #666;">{{ type }}</div>
        </div>
      </div>
    `
  }),
  name: 'All Types Grid'
}
