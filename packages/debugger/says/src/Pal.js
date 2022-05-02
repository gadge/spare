import { Callable }         from '@ject/callable'
import { bracket, parenth } from '@spare/bracket'
import { deco }             from '@spare/deco-string'
import { SP }               from '@spare/enum-chars'
import { FUN, STR }         from '@typen/enum-data-types'
// import { Callable }         from '../util/Callable'
import { logBy }            from './logBy'

const NAME = 'name'
// const WRITABLE = { writable: true }

/** @type {function} */
export class Pal extends Callable {
  // /** @type {string}   */ name
  /** @type {string}   */ des = ''
  /** @type {number}   */ ind = 0
  /** @type {Function} */ log = console.log
  /** @type {Function} */ att = void 0
  /** @type {{max:*,min:*,na:*}} */ decoConf
  constructor(name, { indent = 0, logger, attach, decoConf } = {}) {
    // const f = text => logBy(text, this)
    // Object.defineProperty(f, NAME, WRITABLE)
    // super(f)
    super(text => logBy(text, this))
    Object.defineProperty(this, NAME, { value: name ?? '', writable: true })
    if (indent) this.ind = indent
    if (logger) this.log = logger
    if (attach) this.attach(attach)
    if (decoConf) this.decoConf = decoConf
  }

  /**
   * @param {string} title
   * @param {Object} [options]
   * @returns {Pal|function}
   */
  static build(title, options) { return new Pal(title, options) }
  get asc() { return this.ind++, this }
  get desc() { return (this.ind && this.ind--), this }

  render(message) { return deco(String(message), this.decoConf) }
  p(words) { return this.des += SP + words, this }
  br(words) { return this.des += SP + bracket(words), this }
  pr(words) { return this.des += SP + parenth(words), this }
  to(someone) {
    if (someone instanceof Pal) someone = someone.name
    this.des += ' -> ' + bracket(someone)
    return this
  }

  attach(func) {
    if (typeof func === FUN) { this.att = func }
    return this
  }
  detach() { return this.att = null, this }

  level(logger) {
    if (typeof logger === STR && logger in console) { return this.log = console[logger], this }
    if (typeof logger === FUN) { return this.log = logger, this }
    return this
  }
}
