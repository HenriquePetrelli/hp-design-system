import type { App } from 'vue'
import * as components from './components'

import './styles/style.scss'
import 'virtual:svg-icons-register'

const install = (app: App): void => {
  Object.entries(components).forEach(([name, component]) => {
    if (component) {
      app.component(name, component)
    }
  })
}

export { install }
export * from './components'

export default { install }
