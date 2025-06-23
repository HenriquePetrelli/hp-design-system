import type { Preview } from '@storybook/vue3'
import 'virtual:svg-icons-register'
import './preview.scss'
import '@styles/style.scss'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
}

export default preview
