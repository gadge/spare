import { bracket, parenth } from '@spare/bracket'
import { CO }               from '@spare/enum-chars'
import { DEF, NUM, STR }    from '@typen/enum-data-types'
import * as Major           from '../../resources/majorSet'
import * as Minor           from '../../resources/minorSet'
import { render }           from '../render'
import { enqueue }          from './enqueue'
import { initQueue }        from './initQueue'

class Callable extends Function {
  constructor(f) {
    super()
    Reflect.setPrototypeOf(f, new.target.prototype)
    return f
  }
}


export const clearQueue = function (word) {
  return Object.assign(this, initQueue(word)), this
}

/**
 * @typedef {Array<string>} ArrayWithIndent
 * @typedef {string} ArrayWithIndent.indent
 */

/**
 * @type {Object<string,string>}
 */
export class XrStream extends Callable {
  /** @type {ArrayWithIndent} */ queue
  /** @type {number} */ indent
  /** @type {{br:{major:Function,minor:Function},pa:{major:Function,minor:Function}} */ #conf = {}
  constructor(word, pretty = true) {
    super(word => render.call(this.queue, word))
    Object.assign(this, initQueue(word))
    this.#conf.bracket = pretty ? { major: Major.bracket, minor: Minor.bracket } : { major: bracket, minor: bracket }
    this.#conf.parenth = pretty ? { major: Major.parenth, minor: Minor.parenth } : { major: parenth, minor: parenth }
    return new Proxy(this, {
      get(target, name, receiver) {
        return name in target
          ? target[name] // `[proxy.get] (${ String(name) }) (${ target?.name })` |> logger,
          : (...items) => (enqueue.call(target, name, ...items), receiver)
      }
    })
  }

  get conf() { return this.#conf }

  asc() { return this.queue.indent++, this }
  desc() { return this.queue.indent--, this }

  p(...items) { return this.queue.push(...items), this }
  br(...items) { return this.queue.push(items.map(parenth).join(CO)), this }

  toString() { return render.call(this.queue) }

  [Symbol.toPrimitive](h) {
    switch (h) {
      case STR:
      case DEF:
        return render.call(this.queue)
      case NUM:
        return this.queue.indent
      default:
        throw new Error('XrStream Symbol.toPrimitive error')
    }
  }
}






