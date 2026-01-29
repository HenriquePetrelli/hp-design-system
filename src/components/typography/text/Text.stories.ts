import type { Meta, StoryObj } from '@storybook/vue3'
import Text from './Text.vue'

const meta: Meta<typeof Text> = {
  title: 'Components/Typography/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
      description: 'Tamanho do texto'
    },
    weight: {
      control: 'select',
      options: ['light', 'regular', 'medium', 'semibold', 'bold'],
      description: 'Peso da fonte'
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
        'disabled',
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
type Story = StoryObj<typeof Text>

export const ExtraSmall: Story = {
  args: {
    size: 'xs'
  }
}

export const Small: Story = {
  args: {
    size: 'sm'
  }
}

export const Medium: Story = {
  args: {
    size: 'md'
  }
}

export const Large: Story = {
  args: {
    size: 'lg'
  }
}

export const ExtraLarge: Story = {
  args: {
    size: 'xl'
  }
}

export const ExtraExtraLarge: Story = {
  args: {
    size: 'xxl'
  }
}

export const FontWeights: Story = {
  render: () => ({
    components: { Text },
    template: `
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <Text size="md" weight="light">Light Weight (300)</Text>
        <Text size="md" weight="regular">Regular Weight (400)</Text>
        <Text size="md" weight="medium">Medium Weight (500)</Text>
        <Text size="md" weight="semibold">Semibold Weight (600)</Text>
        <Text size="md" weight="bold">Bold Weight (700)</Text>
      </div>
    `
  }),
  name: 'Font Weights'
}

export const ColorVariants: Story = {
  render: () => ({
    components: { Text },
    template: `
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <Text size="md" colorVariant="default">Default Text</Text>
        <Text size="md" colorVariant="secondary">Secondary Text</Text>
        <Text size="md" colorVariant="muted">Muted Text</Text>
        <Text size="md" colorVariant="disabled">Disabled Text</Text>
        <div style="background: #333; padding: 16px; border-radius: 8px;">
          <Text size="md" colorVariant="inverse">Inverse Text</Text>
        </div>
        <Text size="md" colorVariant="success">Success Text</Text>
        <Text size="md" colorVariant="warning">Warning Text</Text>
        <Text size="md" colorVariant="error">Error Text</Text>
        <Text size="md" colorVariant="info">Info Text</Text>
        <Text size="md" colorVariant="brand">Brand Text</Text>
      </div>
    `
  }),
  name: 'Color Variants'
}

export const CustomColor: Story = {
  args: {
    size: 'md',
    color: '#9C27B0'
  }
}

export const Truncated: Story = {
  args: {
    size: 'md',
    truncate: true
  },
  render: (args) => ({
    components: { Text },
    setup() {
      return { args }
    },
    template: `
      <div style="width: 200px; border: 1px dashed #ccc; padding: 16px;">
        <Text v-bind="args" />
      </div>
    `
  })
}

export const TextUtilities: Story = {
  render: () => ({
    components: { Text },
    template: `
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <Text size="md" uppercase>Texto em Maiúsculas</Text>
        <Text size="md" lowercase>TEXTO EM MINÚSCULAS</Text>
        <Text size="md" capitalize>texto capitalizado</Text>
        <Text size="md" italic>Texto Itálico</Text>
        <Text size="md" underline>Texto Sublinhado</Text>
        <Text size="md" lineThrough>Texto Tachado</Text>
        <Text size="md" breakWord style="max-width: 200px;">
          Texto com quebra de palavra muitolongapalavraparatestar
        </Text>
      </div>
    `
  }),
  name: 'Text Utilities'
}

export const ParagraphExample: Story = {
  render: () => ({
    components: { Text },
    template: `
      <div style="max-width: 600px;">
        <Text size="xl" weight="bold" style="margin-bottom: 16px;">
          Artigo de Exemplo
        </Text>
        
        <Text size="md" style="margin-bottom: 12px;">
          Este é um parágrafo de exemplo que demonstra como o componente Text pode ser usado para criar conteúdo legível e bem estruturado.
        </Text>
        
        <Text size="md" colorVariant="secondary" style="margin-bottom: 12px;">
          Parágrafos secundários podem usar cores diferentes para hierarquia visual, mantendo a consistência tipográfica.
        </Text>
        
        <Text size="md" weight="semibold" colorVariant="brand" style="margin-bottom: 12px;">
          Textos em destaque podem usar pesos diferentes e cores da marca para chamar atenção.
        </Text>
        
        <Text size="sm" colorVariant="muted" italic>
          Notas de rodapé ou textos explicativos podem usar tamanhos menores e estilo itálico.
        </Text>
      </div>
    `
  }),
  name: 'Paragraph Example'
}
