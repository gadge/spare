import { bracket as palebr, parenth as palepa }         from '@spare/bracket'
import { CO, COSP }                                     from '@spare/enum-chars'
import { render }                                       from '../render'
import { bracket as prettybr, parenthesis as prettypa } from './themeAnsi'
import { toQueue }                                      from './toQueue'

class Callable extends Function {
  constructor(f) {
    super()
    Reflect.setPrototypeOf(f, new.target.prototype)
    return f
  }
}

const HAS_BR = /^[(\[{].*[)\]}]$/

/**
 * @type {Object<string,string>}
 */
export class Inka extends Callable {
  /** @type {number} */ indent
  /** @type {string[]} */ queue
  /** @type {Function} */ #br
  /** @type {Function} */ #pa
  constructor(word, pretty = true) {
    super(word => render(word, this))
    Object.assign(this, word|> toQueue);
    [this.#br, this.#pa] = pretty ? [prettybr, prettypa] : [palebr, palepa]
    return new Proxy(this, {
      get(target, p, receiver) {
        if (p in target) { return target[p] }
        const { queue } = target
        queue.push(String(p) |> target.#br)
        return (...items) => (queue.push(items.map(String).join(COSP) |> target.#pa), receiver)
      }
    })
  }

  cr(word) { return Object.assign(this, word|> toQueue), this }

  asc() { return this.indent++, this }
  desc() { return this.indent--, this }

  p(...items) { return this.queue.push(...items), this }
  br(...items) { return this.queue.push(items.map(palepa).join(CO)), this }

  toString() { return render(null, this) }

  [Symbol.toPrimitive](h) {
    switch (h) {
      case 'string':
      case 'default':
        return render(null, this)
      case 'number':
        return this.indent
      default:
        throw new Error('inka Symbol.toPrimitive error')
    }
  }
}






