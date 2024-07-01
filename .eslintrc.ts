import { Linter } from 'eslint'

const config: Linter.Config = {
  extends: ['hp-eslint-vue3', 'plugin:storybook/recommended'],
  globals: {
    defineProps: 'readonly'
  }
}

export default config
