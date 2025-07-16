import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import RadioButton from './RadioButton.vue'

interface RadioButtonProps {
  modelValue?: string | number | boolean
  value?: string | number | boolean
  checked?: boolean
  disabled?: boolean
  rounded?: boolean
  hasAnimation?: boolean
  dotColor?: string
  backgroundColor?: string
  borderColor?: string
}

const meta: Meta<typeof RadioButton> = {
  title: 'Components/RadioButton',
  component: RadioButton,
  tags: ['autodocs'],
  argTypes: {
    modelValue: { control: 'text' },
    value: { control: 'text' },
    disabled: { control: 'boolean' },
    rounded: { control: 'boolean' },
    hasAnimation: { control: 'boolean' },
    dotColor: { control: 'color' },
    backgroundColor: { control: 'color' },
    borderColor: { control: 'color' }
  }
}

export default meta

type Story = StoryObj<typeof RadioButton>

const Template: Story = {
  render: (args: RadioButtonProps) => ({
    components: { RadioButton },
    setup() {
      const argsTyped = args as any
      const modelValue = ref(
        argsTyped.modelValue ?? argsTyped.value ?? 'option1'
      )
      return { args, modelValue }
    },
    template:
      '<RadioButton v-bind="args" v-model="modelValue">Radio Button</RadioButton>'
  }),
  args: {
    modelValue: 'option1',
    value: 'option1'
  }
}

export const Default: Story = {
  ...Template,
  args: {
    modelValue: '',
    value: 'option1'
  }
}

export const Checked: Story = {
  ...Template,
  args: {
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
    disabled: true
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
    dotColor: 'black'
  }
}
