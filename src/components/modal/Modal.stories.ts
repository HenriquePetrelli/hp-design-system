import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Modal from './Modal.vue'

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg']
    },
    isOpen: {
      control: 'boolean',
      defaultValue: true
    },
    title: {
      control: 'text'
    },
    showBackButton: {
      control: 'boolean'
    },
    showCloseButton: {
      control: 'boolean'
    },
    hasPrimaryButton: {
      control: 'boolean'
    },
    hasSecondaryButton: {
      control: 'boolean'
    },
    primaryButtonLabel: {
      control: 'text'
    },
    secondaryButtonLabel: {
      control: 'text'
    },
    primaryButtonColor: {
      control: 'color'
    },
    secondaryButtonColor: {
      control: 'color'
    }
  }
}

export default meta

type Story = StoryObj<typeof Modal>

const Template: Story = {
  render: (args) => ({
    components: { Modal },
    setup() {
      const isModalOpen = ref(args.isOpen)

      return { args, isModalOpen }
    },
    template: `
      <div style="height: 300px">

        <Modal
          v-bind="args"
          :isOpen="isModalOpen"
        >
          <div style="padding: 20px;">
            <h3>Conteúdo do Modal</h3>
            <p>Este é um exemplo de conteúdo dentro do modal.</p>
            <p>O modal agora deve aparecer em seu tamanho completo.</p>
          </div>

        </Modal>
      </div>
    `
  }),
  args: {
    isOpen: true,
    title: 'Modal básica',
    size: 'md'
  }
}

// Story básico
export const Default: Story = {
  ...Template
}

// Story Modal com botões de ação
export const WithActions: Story = {
  ...Template,
  args: {
    ...Template.args,
    title: 'Modal com ações',
    hasPrimaryButton: true,
    hasSecondaryButton: true,
    primaryButtonLabel: 'Confirmar',
    secondaryButtonLabel: 'Cancelar'
  }
}

// Story Modal com botões customizados
export const WithCustomButtons: Story = {
  ...Template,
  args: {
    ...Template.args,
    title: 'Modal com botões customizados',
    hasPrimaryButton: true,
    hasSecondaryButton: true,
    primaryButtonLabel: 'Prosseguir',
    secondaryButtonLabel: 'Voltar',
    primaryButtonColor: '#43165c',
    secondaryButtonColor: '#131258ff'
  }
}

// Story Modal com botão de voltar
export const WithHeaderButtons: Story = {
  ...Template,
  args: {
    ...Template.args,
    size: 'sm',
    title: 'Modal com botão de voltar',
    showBackButton: true,
    showCloseButton: true
  }
}
