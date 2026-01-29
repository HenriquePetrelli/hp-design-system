import type { Meta, StoryObj } from '@storybook/vue3'
import ThemeSwitcher from './ThemeSwitcher.vue'

const meta: Meta<typeof ThemeSwitcher> = {
  title: 'Components/Theme/ThemeSwitcher',
  component: ThemeSwitcher,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'boolean',
      description: 'Tema escuro ativo'
    },
    hasAnimation: {
      control: 'boolean',
      description: 'Usar toggle animado'
    }
  }
}

export default meta
type Story = StoryObj<typeof ThemeSwitcher>

export const ButtonLight: Story = {
  args: {
    modelValue: false,
    hasAnimation: false
  }
}

export const ButtonDark: Story = {
  args: {
    modelValue: true,
    hasAnimation: false
  }
}

export const ToggleLight: Story = {
  args: {
    modelValue: false,
    hasAnimation: true
  }
}

export const ToggleDark: Story = {
  args: {
    modelValue: true,
    hasAnimation: true
  }
}

export const CustomColorsButton: Story = {
  args: {
    modelValue: false,
    hasAnimation: false,
    lightIconColor: '#FF9800',
    darkIconColor: '#FFEB3B',
    lightHoverBackgroundColor: 'rgba(255, 152, 0, 0.1)',
    darkHoverBackgroundColor: 'rgba(255, 235, 59, 0.1)'
  }
}

export const CustomColorsToggle: Story = {
  args: {
    modelValue: false,
    hasAnimation: true,
    lightBorderColor: '#4CAF50',
    lightBackgroundColor: '#C8E6C9',
    darkBorderColor: '#303F9F',
    darkBackgroundColor: '#7986CB'
  }
}

export const InteractiveToggle: Story = {
  render: () => ({
    components: { ThemeSwitcher },
    data() {
      return {
        isDark: false
      }
    },
    template: `
      <div style="padding: 20px;">
        <ThemeSwitcher 
          v-model="isDark" 
          :hasAnimation="true" 
        />
        <p style="margin-top: 20px;">
          Tema atual: {{ isDark ? '🌙 Escuro' : '☀️ Claro' }}
        </p>
        <button 
          @click="isDark = !isDark"
          style="margin-top: 10px; padding: 8px 16px; background: #f0f0f0; border: 1px solid #ccc; border-radius: 4px; cursor: pointer;"
        >
          Alternar Programaticamente
        </button>
      </div>
    `
  }),
  name: 'Interactive Toggle Example'
}
