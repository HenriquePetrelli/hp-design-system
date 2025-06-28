import type { Meta, StoryObj } from '@storybook/vue3'
import Alert from './Alert.vue'
import { AlertType } from './AlertTypes'

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    message: {
      control: 'text',
      description: 'Mensagem exibida no alerta'
    },
    duration: {
      control: {
        type: 'number',
        min: 0,
        step: 500
      },
      description:
        'Duração em milissegundos antes do alerta fechar automaticamente'
    },
    hasDuration: {
      control: 'boolean',
      description:
        'Se verdadeiro, o alerta fecha automaticamente após a duração especificada'
    },
    type: {
      control: 'select',
      options: Object.values(AlertType),
      description: 'Tipo de alerta (define cores e estilo)'
    }
  }
}

export default meta

type Story = StoryObj<typeof Alert>

// Alert padrão (info)
export const Info: Story = {
  args: {
    message: 'Esta é uma mensagem informativa',
    type: AlertType.INFO
  }
}

// Alert de sucesso
export const Success: Story = {
  args: {
    message: 'Operação concluída com sucesso!',
    type: AlertType.SUCCESS
  }
}

// Alert de aviso
export const Warning: Story = {
  args: {
    message: 'Atenção: esta ação requer sua confirmação',
    type: AlertType.WARNING
  }
}

// Alert de erro
export const Error: Story = {
  args: {
    message: 'Ocorreu um erro ao processar sua solicitação',
    type: AlertType.ERROR
  }
}

// Alert sem duração automática
export const Persistent: Story = {
  args: {
    message: 'Esta mensagem permanecerá até ser fechada manualmente',
    hasDuration: false
  },
  name: 'Persistent Alert'
}

// Alert com duração curta
export const ShortDuration: Story = {
  args: {
    message: 'Esta mensagem desaparecerá rapidamente',
    duration: 1500
  },
  name: 'Short Duration Alert'
}

// Alert com duração longa
export const LongDuration: Story = {
  args: {
    message: 'Esta mensagem permanecerá por mais tempo',
    duration: 10000
  },
  name: 'Long Duration Alert'
}

// Alert com mensagem longa
export const LongMessage: Story = {
  args: {
    message:
      'Esta é uma mensagem mais longa que demonstra como o componente lida com textos extensos que podem ocupar múltiplas linhas no container do alerta.',
    type: AlertType.WARNING
  },
  name: 'Alert with Long Message'
}

// Exemplo com fechamento automático e console.log
export const AutoCloseExample: Story = {
  args: {
    message: 'Este alerta fechará em 3 segundos e logará no console',
    duration: 3000,
    type: AlertType.INFO
  },
  render: (args) => ({
    components: { Alert },
    setup() {
      const handleAutoClose = () => {
        console.log('Fechou automaticamente após a duração configurada')
      }

      const handleManualClose = () => {
        console.log('Fechado manualmente pelo usuário')
      }

      const handleClose = () => {
        console.log('Alerta fechado (genérico)')
      }

      return { args, handleAutoClose, handleManualClose, handleClose }
    },
    template: `
      <Alert
        v-bind="args"
        @action:alertAutoClose="handleAutoClose"
        @action:alertManualClose="handleManualClose"
        @action:alertClose="handleClose"
      />
    `
  }),
  name: 'Auto Close with Console Log'
}
