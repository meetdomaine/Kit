import select from 'dom-select'

class Init {
  constructor () {
    this.modules = []
    this.init = this.init.bind(this)
  }

  init () {
    const nodes = select.all('[data-module], [is]')

    for (let i = 0; i < nodes.length; i++) {
      const type = !!nodes[i].getAttribute('data-module')
        ? 'module'
        : 'vue'

      const name = type === 'module'
        ? nodes[i].getAttribute('data-module')
        : nodes[i].getAttribute('is')

      const request = enqueueModule(
        type === 'module' ? name : `${name}.vue`
      )

      request && request.then && request.then(mod => {
        this.modules.push(mod)
        mod && mod.default && mod.default(nodes[i])
      })
    }
  }
}

export default new Init()
