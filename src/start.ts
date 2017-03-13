import { Module } from 'magnet-core/module'
import * as caporal from 'caporal'

export default class Caporal extends Module {
  async setup () {
    this.app.caporal.parse(process.argv)
  }
}
