import type { Meta, StoryFn } from '@storybook/vue3'
import HpIcon from '@components/icons/icon/Icon.vue'
import AllIcons from '@assets/icons/icons.json'

const meta: Meta = {
  title: 'Assets/Icons/HpIcon',
  component: HpIcon,
  argTypes: {
    name: {
      control: 'select',
      options: AllIcons,
      description: 'Identificador do ícone',
      table: {
        category: 'Propriedades',
        disable: false,
        sortOrder: 1
      }
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Tamanho do ícone',
      table: {
        category: 'Propriedades',
        type: {
          summary: 'string',
          detail: "sm(small): '1rem'\nmd(medium): '2rem'\nlg(large): '3rem'"
        },
        defaultValue: { summary: 'md' },
        disable: false,
        sortOrder: 2
      }
    },
    color: {
      control: 'color',
      description: 'Cor em formato hexadecimal, rgb ou nome da cor',
      table: {
        category: 'Propriedades',
        type: {
          summary: 'string',
          detail: "hex: '#ccc'\nrgb: 'rgb(204, 204, 204)'\nnome: 'grey'"
        },
        defaultValue: { summary: '#000000' },
        disable: false,
        sortOrder: 3
      }
    }
  }
}

export default meta

const Template: StoryFn<{ name: string; size: string; color: string }> = (
  args
) => ({
  components: { HpIcon },
  setup() {
    return { args }
  },
  template: '<HpIcon :name="args.name" :size="args.size" :color="args.color" />'
})

export const Default = Template.bind({})
Default.args = {
  name: 'AA0010',
  size: 'md',
  color: '#ccc'
}
