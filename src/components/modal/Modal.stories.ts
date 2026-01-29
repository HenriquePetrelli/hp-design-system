import type { Meta, StoryObj } from '@storybook/vue3'
import Modal from './Modal.vue'

const meta: Meta<typeof Modal> = {
  title: 'Components/Overlay/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Título do modal'
    },
    isOpen: {
      control: 'boolean',
      description: 'Estado aberto/fechado'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Tamanho do modal'
    },
    showCloseButton: {
      control: 'boolean',
      description: 'Mostrar botão de fechar'
    },
    showBackButton: {
      control: 'boolean',
      description: 'Mostrar botão de voltar'
    }
  }
}

export default meta
type Story = StoryObj<typeof Modal>

export const Small: Story = {
  args: {
    title: 'Modal Pequeno',
    isOpen: true,
    size: 'sm',
    hasPrimaryButton: true,
    hasSecondaryButton: true,
    primaryButtonLabel: 'Confirmar',
    secondaryButtonLabel: 'Cancelar'
  },
  render: (args) => ({
    components: { Modal },
    setup() {
      return { args }
    },
    template: `
      <div style="height: 300px; position: relative;">
        <Modal v-bind="args">
          <p>Este é um modal de tamanho pequeno com conteúdo personalizado.</p>
        </Modal>
      </div>
    `
  })
}

export const Medium: Story = {
  args: {
    title: 'Modal Médio',
    isOpen: true,
    size: 'md',
    hasPrimaryButton: true,
    hasSecondaryButton: true
  },
  render: (args) => ({
    components: { Modal },
    setup() {
      return { args }
    },
    template: `
      <div style="height: 300px; position: relative;">
        <Modal v-bind="args">
          <p>Este é um modal de tamanho médio. Pode conter mais conteúdo.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Modal>
      </div>
    `
  })
}

export const Large: Story = {
  args: {
    title: 'Modal Grande',
    isOpen: true,
    size: 'lg',
    showCloseButton: true
  },
  render: (args) => ({
    components: { Modal },
    setup() {
      return { args }
    },
    template: `
      <div style="height: 400px; position: relative;">
        <Modal v-bind="args">
          <p>Este é um modal grande que pode conter muito conteúdo, formulários, tabelas, etc.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </Modal>
      </div>
    `
  })
}

export const WithBackButton: Story = {
  args: {
    title: 'Configurações',
    isOpen: true,
    showBackButton: true,
    showCloseButton: true
  },
  render: (args) => ({
    components: { Modal },
    setup() {
      return { args }
    },
    template: `
      <div style="height: 300px; position: relative;">
        <Modal v-bind="args">
          <p>Este modal tem botão de voltar e fechar.</p>
        </Modal>
      </div>
    `
  })
}

export const WithoutButtons: Story = {
  args: {
    title: 'Informação',
    isOpen: true
  },
  render: (args) => ({
    components: { Modal },
    setup() {
      return { args }
    },
    template: `
      <div style="height: 300px; position: relative;">
        <Modal v-bind="args">
          <p>Este modal não tem botões de ação no footer.</p>
        </Modal>
      </div>
    `
  })
}
