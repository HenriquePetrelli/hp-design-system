import type { Preview } from '@storybook/vue3'
import 'virtual:svg-icons-register'
import './preview.scss'
import '@styles/style.scss'
import * as components from '../src/components/index'

// Extrai os nomes dos componentes removendo o prefixo "Hp"
const componentNames = Object.keys(components).map((comp) =>
  comp.replace(/^Hp/, '')
)

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    docs: {
      source: {
        transform: (code: string) => {
          let transformed = code
            .replace(/^<template>\s*|\s*<\/template>$/g, '')
            .trim()

          // Aplica o replace para cada componente
          componentNames.forEach((comp) => {
            transformed = transformed
              .replace(new RegExp(`<${comp}`, 'g'), `<Hp${comp}`)
              .replace(new RegExp(`<\/${comp}`, 'g'), `<\/Hp${comp}`)
          })

          return transformed
        }
      }
    },
    options: {
      storySort: {
        method: 'alphabetical'
      }
    }
  }
}

export default preview
