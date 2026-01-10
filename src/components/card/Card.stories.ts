import type { Meta, StoryObj } from '@storybook/vue3'
import HpCard from './Card.vue'

const meta: Meta<typeof HpCard> = {
  title: 'Components/Card',
  component: HpCard,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Título principal do card (usado em aria-labelledby)'
    },
    description: {
      control: 'text',
      description: 'Descrição do card (usado em aria-describedby)'
    },
    variant: {
      control: 'select',
      options: ['default', 'outlined', 'elevated'],
      description: 'Variação visual do card'
    },
    interactive: {
      control: 'boolean',
      description: 'Define se o card é interativo (hover, focus e cursor)'
    }
  }
}

export default meta

type Story = StoryObj<typeof HpCard>

/**
 * Card padrão
 */
export const Default: Story = {
  args: {
    title: 'Título do Card',
    description: 'Descrição simples do card'
  }
}

/**
 * Card outlined
 */
export const Outlined: Story = {
  args: {
    title: 'Card Outlined',
    description: 'Card com borda visível',
    variant: 'outlined'
  }
}

/**
 * Card elevado
 */
export const Elevated: Story = {
  args: {
    title: 'Card Elevado',
    description: 'Card com sombra (elevated)',
    variant: 'elevated'
  }
}

/**
 * Card interativo
 */
export const Interactive: Story = {
  args: {
    title: 'Card Interativo',
    description: 'Este card possui hover e foco acessível',
    interactive: true,
    variant: 'elevated'
  }
}

/**
 * Card com conteúdo customizado (slot default)
 */
export const WithContent: Story = {
  render: (args) => ({
    components: { HpCard },
    setup() {
      return { args }
    },
    template: `
      <HpCard v-bind="args">
        <p>Este conteúdo vem do slot default.</p>
      </HpCard>
    `
  }),
  args: {
    title: 'Card com Conteúdo',
    description: 'Exemplo usando slot default'
  }
}

/**
 * Card com header e footer (slots nomeados)
 */
export const WithHeaderAndFooter: Story = {
  render: (args) => ({
    components: { HpCard },
    setup() {
      return { args }
    },
    template: `
      <HpCard v-bind="args">
        <template #header>
          <strong>Header do Card</strong>
        </template>

        <p>Conteúdo principal do card.</p>

        <template #footer>
          <button>Action</button>
        </template>
      </HpCard>
    `
  }),
  args: {
    title: 'Card com Slots',
    description: 'Header e footer customizados',
    variant: 'outlined'
  }
}
