let count = 0

const readdir = require('recursive-readdir')
const fs = require('fs')

export default class AutoExport {
  constructor (options) {
    this.options = options
  }

  apply (compiler) {
    compiler.hooks.run.tap('AutoExport', compilation => this.handle(compilation))
    compiler.hooks.watchRun.tap('AutoExport', compilation => this.handle(compilation))
  }

  async handle (compilation) {
    const files = await readdir(this.options.folder)

    const names = files.map(file => file.replace(/\.(js|vue)/, ''))

    if (names.length === count) {
      console.error('No tasks amended.')
      return
    }

    count = names.length

    const imports = names
      .map(name => `export { default as ${this.options.nameFormatter(name)} } from '${this.options.importFormatter(name)}'`)

    let output = imports.join('\n')

    output += '\n'

    fs.writeFileSync(this.options.writeTo, output)
  }
}
