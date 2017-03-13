import { Module } from 'magnet-core/module'
import * as caporal from 'caporal'

import defaultConfig from './config/caporal'

export default class Caporal extends Module {
  async setup () {
    const config = this.prepareConfig('caporal', defaultConfig)

    this.app.caporal = caporal
    if (config.version) {
      this.app.caporal = caporal.version(config.version)
    }
    if (config.description) {
      this.app.caporal = caporal.description(config.description)
    }
  }
}
