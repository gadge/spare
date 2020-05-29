import { CO, COSP }                                   from '@spare/enum-chars'
import { render }                                     from '../render'
import { bracket as ansibr, parenthesis as ansipr }   from './themeAnsi'
import { bracket as plainbr, parenthesis as plainpr } from './themePlain'
import { toQueue }                                    from './toQueue'

class Callable extends Function {
  constructor (f) {
    super()
    Reflect.setPrototypeOf(f, new.target.prototype)
    return f
  }
}

/**
 * @type {Object<string,string>}
 */
export class Inka extends Callable {
  /** @type {number} */ indent
  /** @type {string[]} */ queue
  /** @type {Function} */ #brk
  /** @type {Function} */ #prn
  constructor (word, color = true) {
    super(word => render(word, this))
    Object.assign(this, word|> toQueue);
    [this.#brk, this.#prn] = color ? [ansibr, ansipr] : [plainbr, plainpr]
    return new Proxy(this, {
      get (target, p, receiver) {
        if (p in target) { return target[p] }
        const { queue } = target
        queue.push(String(p) |> target.#brk)
        return (...items) => (queue.push(items.map(String).join(COSP) |> target.#prn), receiver)
      }
    })
  }

  cr (word) { return Object.assign(this, word|> toQueue), this }

  asc () { return this.indent++, this }
  desc () { return this.indent--, this }

  p (...items) { return this.queue.push(...items), this }
  br (...items) { return this.queue.push(items.map(plainpr).join(CO)), this }

  toString () { return render(null, this) }

  [Symbol.toPrimitive] (h) {
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






