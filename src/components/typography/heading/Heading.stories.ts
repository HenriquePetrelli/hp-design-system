import type { Meta, StoryObj } from '@storybook/vue3'
import Heading from './Heading.vue'

const meta: Meta<typeof Heading> = {
  title: 'Components/Typography/Heading',
  component: Heading,
  tags: ['autodocs'],
  argTypes: {
    level: {
      control: 'select',
      options: [1, 2, 3, 4, 5, 6],
      description: 'Nível hierárquico (h1-h6)'
    },
    color: {
      control: 'color',
      description: 'Cor customizada'
    },
    colorVariant: {
      control: 'select',
      options: [
        'default',
        'secondary',
        'muted',
        'inverse',
        'success',
        'warning',
        'error',
        'info',
        'brand'
      ],
      description: 'Variante de cor'
    },
    truncate: {
      control: 'boolean',
      description: 'Truncar texto longo'
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right', 'justify'],
      description: 'Alinhamento do texto'
    }
  }
}

export default meta
type Story = StoryObj<typeof Heading>

export const H1: Story = {
  args: {
    level: 1
  }
}

export const H2: Story = {
  args: {
    level: 2
  }
}

export const H3: Story = {
  args: {
    level: 3
  }
}

export const H4: Story = {
  args: {
    level: 4
  }
}

export const H5: Story = {
  args: {
    level: 5
  }
}

export const H6: Story = {
  args: {
    level: 6
  }
}

export const ColorVariants: Story = {
  render: () => ({
    components: { Heading },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <Heading level="2" colorVariant="default">Default Heading</Heading>
        <Heading level="2" colorVariant="secondary">Secondary Heading</Heading>
        <Heading level="2" colorVariant="muted">Muted Heading</Heading>
        <div style="background: #333; padding: 16px; border-radius: 8px;">
          <Heading level="2" colorVariant="inverse">Inverse Heading</Heading>
        </div>
        <Heading level="2" colorVariant="success">Success Heading</Heading>
        <Heading level="2" colorVariant="warning">Warning Heading</Heading>
        <Heading level="2" colorVariant="error">Error Heading</Heading>
        <Heading level="2" colorVariant="info">Info Heading</Heading>
        <Heading level="2" colorVariant="brand">Brand Heading</Heading>
      </div>
    `
  }),
  name: 'Color Variants'
}

export const CustomColor: Story = {
  args: {
    level: 2,
    color: '#FF5722'
  }
}

export const Truncated: Story = {
  args: {
    level: 3,
    truncate: true
  },
  render: (args) => ({
    components: { Heading },
    setup() {
      return { args }
    },
    template: `
      <div style="width: 200px; border: 1px dashed #ccc; padding: 16px;">
        <Heading v-bind="args" />
      </div>
    `
  })
}

export const Alignments: Story = {
  render: () => ({
    components: { Heading },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <Heading level="2" align="left">Alinhado à Esquerda</Heading>
        <Heading level="2" align="center">Centralizado</Heading>
        <Heading level="2" align="right">Alinhado à Direita</Heading>
        <Heading level="2" align="justify" style="max-width: 300px;">
          Justificado - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Heading>
      </div>
    `
  }),
  name: 'Text Alignments'
}
