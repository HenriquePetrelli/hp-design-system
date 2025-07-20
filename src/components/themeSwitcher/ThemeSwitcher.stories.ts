import type { Meta, StoryObj } from '@storybook/vue3'
import ThemeSwitcher from './ThemeSwitcher.vue'

const meta: Meta<typeof ThemeSwitcher> = {
  title: 'Components/ThemeSwitcher',
  component: ThemeSwitcher,
  tags: ['autodocs'],
  argTypes: {
    modelValue: { control: 'boolean' },
    lightBorderColor: { control: 'color' },
    lightBackgroundColor: { control: 'color' },
    darkBorderColor: { control: 'color' },
    darkBackgroundColor: { control: 'color' }
  }
}

export default meta

type Story = StoryObj<typeof ThemeSwitcher>

// Story básico
export const Default: Story = {
  args: {}
}

// Story Toggle tema claro customizado
export const LightThemeCustom: Story = {
  args: {
    lightBorderColor: '#ff642cff',
    lightBackgroundColor: '#FF7F50'
  }
}

// Story Toggle tema escuro customizado
export const DarkThemeCustom: Story = {
  args: {
    darkBorderColor: '#2b0853ff',
    darkBackgroundColor: '#511b8fff'
  }
}
