import type { Meta, StoryObj } from '@storybook/vue3'
import Sidebar from './Sidebar.vue'
import ButtonPrimary from '../buttons/ButtonPrimary.vue'

const meta: Meta<typeof Sidebar> = {
  title: 'Components/Navigation/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Estado aberto/fechado'
    }
  }
}

export default meta
type Story = StoryObj<typeof Sidebar>

export const Closed: Story = {
  args: {
    open: false
  },
  render: (args) => ({
    components: { Sidebar },
    setup() {
      return { args }
    },
    template: `
      <div style="height: 400px; position: relative; border: 1px dashed #ccc;">
        <p style="padding: 20px;">Sidebar fechada (visível apenas em desktop)</p>
        <Sidebar v-bind="args">
          <template #sidebar-header>
            <div style="padding: 16px; background: #f5f5f5; border-radius: 8px;">
              <h3 style="margin: 0;">Logo/Header</h3>
            </div>
          </template>
          
          <template #menu>
            <ul>
              <li><a href="#" style="display: block; padding: 12px;">Dashboard</a></li>
              <li><a href="#" style="display: block; padding: 12px;">Usuários</a></li>
              <li><a href="#" style="display: block; padding: 12px;">Configurações</a></li>
            </ul>
          </template>
          
          <template #sidebar-footer>
            <div style="padding: 16px;">
              <button style="width: 100%; padding: 12px; background: #f0f0f0; border: none; border-radius: 8px;">
                Logout
              </button>
            </div>
          </template>
        </Sidebar>
      </div>
    `
  })
}

export const Open: Story = {
  args: {
    open: true
  },
  render: (args) => ({
    components: { Sidebar },
    setup() {
      return { args }
    },
    template: `
      <div style="height: 400px; position: relative; border: 1px dashed #ccc;">
        <p style="padding: 20px;">Sidebar aberta</p>
        <Sidebar v-bind="args">
          <template #sidebar-header>
            <div style="padding: 16px; background: #f5f5f5; border-radius: 8px; text-align: center;">
              <h3 style="margin: 0 0 8px 0;">Meu App</h3>
              <small>v1.0.0</small>
            </div>
          </template>
          
          <template #menu>
            <nav>
              <ul style="list-style: none; padding: 0; margin: 0;">
                <li style="margin-bottom: 4px;">
                  <a href="#" style="display: flex; align-items: center; padding: 12px 16px; text-decoration: none; color: #333; background: #e3f2fd; border-radius: 8px;">
                    <span style="margin-right: 8px;">📊</span>
                    Dashboard
                  </a>
                </li>
                <li style="margin-bottom: 4px;">
                  <a href="#" style="display: flex; align-items: center; padding: 12px 16px; text-decoration: none; color: #333;">
                    <span style="margin-right: 8px;">👥</span>
                    Usuários
                  </a>
                </li>
                <li style="margin-bottom: 4px;">
                  <a href="#" style="display: flex; align-items: center; padding: 12px 16px; text-decoration: none; color: #333;">
                    <span style="margin-right: 8px;">⚙️</span>
                    Configurações
                  </a>
                </li>
                <li style="margin-bottom: 4px;">
                  <a href="#" style="display: flex; align-items: center; padding: 12px 16px; text-decoration: none; color: #333;">
                    <span style="margin-right: 8px;">📈</span>
                    Relatórios
                  </a>
                </li>
              </ul>
            </nav>
          </template>
          
          <template #sidebar-footer>
            <div style="padding: 16px; border-top: 1px solid #eee;">
              <button style="width: 100%; padding: 12px; background: #f44336; color: white; border: none; border-radius: 8px; cursor: pointer;">
                Sair do Sistema
              </button>
            </div>
          </template>
        </Sidebar>
      </div>
    `
  })
}
