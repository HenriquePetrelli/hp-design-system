import type { Meta, StoryObj } from '@storybook/vue3'
import ToggleSwitch from './ToggleSwitch.vue'

const meta: Meta<typeof ToggleSwitch> = {
  title: 'Components/Selection/ToggleSwitch',
  component: ToggleSwitch,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'boolean',
      description: 'Estado ativo/inativo'
    },
    label: {
      control: 'text',
      description: 'Label do switch'
    },
    disabled: {
      control: 'boolean',
      description: 'Estado desabilitado'
    }
  }
}

export default meta
type Story = StoryObj<typeof ToggleSwitch>

export const Off: Story = {
  args: {
    modelValue: false,
    label: 'Notificações'
  }
}

export const On: Story = {
  args: {
    modelValue: true,
    label: 'Notificações'
  }
}

export const DisabledOff: Story = {
  args: {
    modelValue: false,
    label: 'Funcionalidade Desabilitada',
    disabled: true
  }
}

export const DisabledOn: Story = {
  args: {
    modelValue: true,
    label: 'Funcionalidade Desabilitada',
    disabled: true
  }
}

export const WithoutLabel: Story = {
  args: {
    modelValue: true
  }
}

export const CustomColors: Story = {
  args: {
    modelValue: true,
    label: 'Modo Noturno',
    trackOnColor: '#9C27B0',
    thumbOnColor: '#FFFFFF',
    trackOffColor: '#E1BEE7',
    thumbOffColor: '#FFFFFF'
  }
}

export const ToggleGroupExample: Story = {
  render: () => ({
    components: { ToggleSwitch },
    data() {
      return {
        settings: {
          notifications: true,
          darkMode: false,
          autoSave: true,
          sync: false
        }
      }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; padding: 20px;">
        <h3 style="margin: 0 0 16px 0;">Configurações</h3>
        
        <ToggleSwitch
          v-model="settings.notifications"
          label="Notificações por e-mail"
        />
        
        <ToggleSwitch
          v-model="settings.darkMode"
          label="Modo escuro"
        />
        
        <ToggleSwitch
          v-model="settings.autoSave"
          label="Salvamento automático"
        />
        
        <ToggleSwitch
          v-model="settings.sync"
          label="Sincronização em nuvem"
          :disabled="!settings.notifications"
        />
        
        <div style="margin-top: 24px; padding: 16px; background: #f5f5f5; border-radius: 8px;">
          <h4 style="margin: 0 0 8px 0;">Configurações Ativas:</h4>
          <pre style="margin: 0; font-size: 14px;">{{ JSON.stringify(settings, null, 2) }}</pre>
        </div>
      </div>
    `
  }),
  name: 'Toggle Group Example'
}
