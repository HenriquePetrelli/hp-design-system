import type { Meta, StoryObj } from '@storybook/vue3'
import DataTable from './DataTable.vue'

const meta: Meta<typeof DataTable> = {
  title: 'Components/DataTable',
  component: DataTable,
  tags: ['autodocs'],
  argTypes: {
    searchable: {
      control: 'boolean',
      description: 'Exibe campo de busca'
    },
    hasDivider: {
      control: 'boolean',
      description: 'Exibe linha divisória entre as rows'
    }
  }
}

export default meta

type Story = StoryObj<typeof DataTable>

const columns = [
  { key: 'name', label: 'Nome' },
  { key: 'email', label: 'Email' },
  { key: 'role', label: 'Cargo' }
]

const items = [
  { name: 'Henrique', email: 'henrique@email.com', role: 'Frontend' },
  { name: 'Maria', email: 'maria@email.com', role: 'Designer' },
  { name: 'João', email: 'joao@email.com', role: 'Backend' }
]

export const Default: Story = {
  args: {
    columns,
    items
  }
}

export const WithDivider: Story = {
  args: {
    columns,
    items,
    hasDivider: true
  },
  name: 'With Divider'
}
