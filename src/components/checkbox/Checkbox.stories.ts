import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Checkbox from './Checkbox.vue'

interface CheckboxProps {
  modelValue?: boolean
  checked?: boolean
  disabled?: boolean
  rounded?: boolean
  hasAnimation?: boolean
  iconColor?: string
  backgroundColor?: string
  borderColor?: string
}

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    modelValue: { control: 'boolean' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    rounded: { control: 'boolean' },
    hasAnimation: { control: 'boolean' },
    iconColor: { control: 'color' },
    backgroundColor: { control: 'color' },
    borderColor: { control: 'color' }
  }
}

export default meta

type Story = StoryObj<typeof Checkbox>

const Template: Story = {
  render: (args: CheckboxProps) => ({
    components: { Checkbox },
    setup() {
      const argsTyped = args as any
      const modelValue = ref(argsTyped.modelValue ?? argsTyped.checked ?? false)
      return { args, modelValue }
    },
    template: '<Checkbox v-bind="args" v-model="modelValue">Checkbox</Checkbox>'
  }),
  args: {
    modelValue: undefined
  }
}

export const Default: Story = {
  ...Template,
  args: {}
}

export const Checked: Story = {
  ...Template,
  args: {
    checked: true,
    modelValue: undefined
  }
}

export const Disabled: Story = {
  ...Template,
  args: {
    disabled: true
  }
}

export const DisabledChecked: Story = {
  ...Template,
  args: {
    disabled: true,
    checked: true
  }
}

export const Rounded: Story = {
  ...Template,
  args: {
    rounded: true
  }
}

export const HasAnimation: Story = {
  ...Template,
  args: {
    hasAnimation: true
  }
}

export const CustomColors: Story = {
  ...Template,
  args: {
    backgroundColor: 'black',
    borderColor: 'orange',
    iconColor: 'white'
  }
}
