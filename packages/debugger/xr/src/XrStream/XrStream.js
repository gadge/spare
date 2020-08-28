import { bracket, parenth }   from '@spare/bracket'
import { CO }                 from '@spare/enum-chars'
import { render }             from '../render'
import { enqueue, initQueue } from './initQueue'
import * as Major             from '../../resources/majorSet'
import * as Minor             from '../../resources/minorSet'

class Callable extends Function {
  constructor(f) {
    super()
    Reflect.setPrototypeOf(f, new.target.prototype)
    return f
  }
}



/**
 * @type {Object<string,string>}
 */
export class XrStream extends Callable {
  /** @type {number} */ indent
  /** @type {string[]} */ queue
  /** @type {{br:{major:Function,minor:Function},pa:{major:Function,minor:Function}} */ #set = {}
  constructor(word, pretty = true) {
    super(word => render(word, this))
    Object.assign(this, word|> initQueue)
    this.#set.br = pretty ? { major: Major.bracket, minor: Minor.bracket } : { major: bracket, minor: bracket }
    this.#set.pa = pretty ? { major: Major.parenth, minor: Minor.parenth } : { major: parenth, minor: parenth }
    return new Proxy(this, {
      get(t, p, receiver) {
        return p in t
          ? t[p]
          : (...items) => (enqueue.call(t.#set, t.queue, p, items), receiver)
      }
    })
  }

  cr(word) { return Object.assign(this, word|> initQueue), this }

  asc() { return this.indent++, this }
  desc() { return this.indent--, this }

  p(...items) { return this.queue.push(...items), this }
  br(...items) { return this.queue.push(items.map(parenth).join(CO)), this }

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






