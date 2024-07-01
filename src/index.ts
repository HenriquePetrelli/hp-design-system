import { App } from 'vue'
import * as components from './components'

function install (app: App) {
  Object.keys(components).forEach((key) => {
    app.component(key, components[key as keyof typeof components])
  })
}

// import '../assets/main.scss';

export default { install }

export * from './components'
