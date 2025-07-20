import type { Meta, StoryObj } from '@storybook/vue3'
import ToggleSwitch from './ToggleSwitch.vue'

const meta: Meta<typeof ToggleSwitch> = {
  title: 'Components/ToggleSwitch',
  component: ToggleSwitch,
  tags: ['autodocs'],
  argTypes: {
    modelValue: { control: 'boolean' },
    disabled: { control: 'boolean' },
    thumbColor: { control: 'color' },
    backgroundColor: { control: 'color' }
  }
}

export default meta

type Story = StoryObj<typeof ToggleSwitch>

// Story básico
export const Default: Story = {
  args: {}
}

// Story Toggle marcado
export const Checked: Story = {
  args: {
    modelValue: true
  }
}

// Story Toggle dasabilitado
export const Disabled: Story = {
  args: {
    disabled: true
  }
}

// Story Toggle dasabilitado
export const CustomThumbColor: Story = {
  args: {
    thumbColor: '#FF7F50'
  }
}

// Story Toggle dasabilitado
export const CustomBackgroundColor: Story = {
  args: {
    backgroundColor: 'green'
  }
}
