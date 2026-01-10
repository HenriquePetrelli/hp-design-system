import type { Meta, StoryObj } from '@storybook/vue3'
import InputRange from '@components/input/inputRange/InputRange.vue'
import { ref } from 'vue'

const meta: Meta<typeof InputRange> = {
  title: 'Components/Input/InputRange',
  component: InputRange,
  tags: ['autodocs'],
  argTypes: {
    modelValue: { control: 'number' },
    label: { control: 'text' },
    min: { control: 'number' },
    max: { control: 'number' },
    step: { control: 'number' },
    unit: { control: 'text' },
    helperText: { control: 'text' },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    status: {
      control: 'select',
      options: ['default', 'error', 'success']
    },
    'update:modelValue': { action: 'update:modelValue' },
    change: { action: 'change' }
  }
}

export default meta

type Story = StoryObj<typeof InputRange>

const Template: Story = {
  render: (args) => ({
    components: { InputRange },
    setup() {
      // const value = ref(args.modelValue)
      // return { args, value }
    }
    // template: `
    //   <InputRange
    //     v-bind="args"
    //     v-model="value"
    //     @update:modelValue="args['update:modelValue']"
    //     @change="args['change']"
    //   />
    // `
  })
}

export const Default: Story = {
  // ...Template,
  args: {
    label: 'Volume',
    min: 0,
    max: 100,
    step: 1,
    modelValue: 50
  }
}

export const WithUnit: Story = {
  // ...Template,
  args: {
    label: 'Temperatura',
    min: 0,
    max: 100,
    step: 5,
    modelValue: 25,
    unit: '°C'
  }
}

export const WithHelperText: Story = {
  // ...Template,
  args: {
    label: 'Brilho',
    min: 0,
    max: 100,
    modelValue: 75,
    helperText: 'Ajuste o nível de brilho da tela'
  }
}

export const Disabled: Story = {
  // ...Template,
  args: {
    label: 'Volume desabilitado',
    min: 0,
    max: 100,
    modelValue: 30,
    disabled: true
  }
}

export const ErrorState: Story = {
  // ...Template,
  args: {
    label: 'Nível de risco',
    min: 0,
    max: 10,
    modelValue: 7,
    status: 'error',
    helperText: 'Nível de risco muito alto'
  }
}

export const SuccessState: Story = {
  // ...Template,
  args: {
    label: 'Progresso',
    min: 0,
    max: 100,
    modelValue: 85,
    status: 'success',
    helperText: 'Progresso excelente!'
  }
}

export const SmallRange: Story = {
  // ...Template,
  args: {
    label: 'Precisão',
    min: 0,
    max: 1,
    step: 0.01,
    modelValue: 0.5,
    unit: 'mm'
  }
}
