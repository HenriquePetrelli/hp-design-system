import type { Meta, StoryObj } from '@storybook/vue3'
import InputSelect from '@components/input/inputSelect/InputSelect.vue'
import { ref } from 'vue'

interface InputSelectProps {
  modelValue?: string | number | boolean | null
  label: string
  options: Array<{ value: any; label: string; disabled?: boolean }>
  helperText?: string
  readonly?: boolean
  disabled?: boolean
  placeholder?: string
  required?: boolean
  status?: 'default' | 'error' | 'success'
  autocomplete?: boolean
}

const meta: Meta<typeof InputSelect> = {
  title: 'Components/Input/InputSelect',
  component: InputSelect,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'select',
      options: [null, 'option1', 'option2', 'option3']
    },
    label: {
      control: 'text',
      defaultValue: 'Selecione uma opção'
    },
    options: {
      control: 'object',
      defaultValue: [
        { value: 'option1', label: 'Opção 1' },
        { value: 'option2', label: 'Opção 2' },
        { value: 'option3', label: 'Opção 3', disabled: true }
      ]
    },
    helperText: { control: 'text' },
    readonly: { control: 'boolean' },
    disabled: { control: 'boolean' },
    placeholder: { control: 'text' },
    required: { control: 'boolean' },
    status: {
      control: 'select',
      options: ['default', 'error', 'success']
    },
    autocomplete: {
      control: 'boolean',
      description: 'Ativa o modo de autocomplete'
    }
  }
}

export default meta

type Story = StoryObj<InputSelectProps>

const Template: Story = {
  render: (args) => ({
    components: { InputSelect },
    setup() {
      const modelValue = ref(args.modelValue)
      return { args, modelValue }
    },
    template: `
        <InputSelect
          v-bind="args"
          v-model="modelValue"
        />
    `
  })
}

export const Default: Story = {
  ...Template,
  args: {
    label: 'Selecione uma opção',
    options: [
      { value: 'option1', label: 'Opção 1' },
      { value: 'option2', label: 'Opção 2' },
      { value: 'option3', label: 'Opção 3' }
    ]
  }
}

export const WithValue: Story = {
  ...Template,
  args: {
    label: 'Selecione uma opção',
    options: [
      { value: 'option1', label: 'Opção 1' },
      { value: 'option2', label: 'Opção 2' },
      { value: 'option3', label: 'Opção 3' }
    ],
    modelValue: 'option2'
  }
}

export const WithPlaceholder: Story = {
  ...Template,
  args: {
    label: 'Selecione uma opção',
    placeholder: 'Escolha uma das opções',
    options: [
      { value: 'option1', label: 'Opção 1' },
      { value: 'option2', label: 'Opção 2' },
      { value: 'option3', label: 'Opção 3' }
    ]
  }
}

export const Required: Story = {
  ...Template,
  args: {
    label: 'Selecione uma opção obrigatória',
    required: true,
    options: [
      { value: 'option1', label: 'Opção 1' },
      { value: 'option2', label: 'Opção 2' },
      { value: 'option3', label: 'Opção 3' }
    ]
  }
}

export const Disabled: Story = {
  ...Template,
  args: {
    label: 'Selecione uma opção desabilitada',
    disabled: true,
    modelValue: 'option2',
    options: [
      { value: 'option1', label: 'Opção 1' },
      { value: 'option2', label: 'Opção 2' },
      { value: 'option3', label: 'Opção 3' }
    ]
  }
}

export const Readonly: Story = {
  ...Template,
  args: {
    label: 'Selecione uma opção (somente leitura)',
    readonly: true,
    modelValue: 'option2',
    options: [
      { value: 'option1', label: 'Opção 1' },
      { value: 'option2', label: 'Opção 2' },
      { value: 'option3', label: 'Opção 3' }
    ]
  }
}

export const WithHelperText: Story = {
  ...Template,
  args: {
    label: 'Selecione uma opção',
    helperText: 'Escolha a melhor opção para você',
    options: [
      { value: 'option1', label: 'Opção 1' },
      { value: 'option2', label: 'Opção 2' },
      { value: 'option3', label: 'Opção 3' }
    ]
  }
}

export const ErrorState: Story = {
  ...Template,
  args: {
    label: 'Selecione uma opção',
    status: 'error',
    helperText: 'Campo obrigatório não preenchido',
    options: [
      { value: 'option1', label: 'Opção 1' },
      { value: 'option2', label: 'Opção 2' },
      { value: 'option3', label: 'Opção 3' }
    ]
  }
}

export const SuccessState: Story = {
  ...Template,
  args: {
    label: 'Selecione uma opção',
    status: 'success',
    helperText: 'Opção selecionada com sucesso',
    modelValue: 'option2',
    options: [
      { value: 'option1', label: 'Opção 1' },
      { value: 'option2', label: 'Opção 2' },
      { value: 'option3', label: 'Opção 3' }
    ]
  }
}

export const WithDisabledOptions: Story = {
  ...Template,
  args: {
    label: 'Selecione uma opção',
    options: [
      { value: 'option1', label: 'Opção 1' },
      { value: 'option2', label: 'Opção 2', disabled: true },
      { value: 'option3', label: 'Opção 3' }
    ]
  }
}

export const AutocompleteMode: Story = {
  ...Template,
  args: {
    label: 'Busque uma opção',
    autocomplete: true,
    placeholder: 'Digite para buscar opções',
    options: [
      { value: 'apple', label: 'Maçã' },
      { value: 'banana', label: 'Banana' },
      { value: 'orange', label: 'Laranja' },
      { value: 'grape', label: 'Uva' },
      { value: 'melon', label: 'Melão' }
    ]
  }
}

export const WithLongOptions: Story = {
  ...Template,
  args: {
    label: 'Selecione uma opção longa',
    options: [
      {
        value: 'opt1',
        label:
          'Esta é uma opção com um texto muito longo que deve ser truncado corretamente no componente'
      },
      {
        value: 'opt2',
        label:
          'Outra opção com texto extenso para testar o comportamento do dropdown'
      },
      { value: 'opt3', label: 'Opção normal' }
    ]
  }
}
