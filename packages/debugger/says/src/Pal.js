import { Callable }         from '@ject/callable'
import { bracket, parenth } from '@spare/bracket'
import { deco }             from '@spare/deco-string'
import { LF, SP }           from '@spare/enum-chars'
import { FUN, STR }         from '@typen/enum-data-types'

const NAME = 'name'
// const WRITABLE = { writable: true }

export const tab = ind => SP.repeat(ind << 1)


/** @type {function} */
export class Pal extends Callable {
  // /** @type {string}   */ name
  /** @type {string}   */ des = ''
  /** @type {string}   */ prefix = ''
  /** @type {Function} */ logger = console.log
  /** @type {Function} */ att = void 0
  /** @type {{max:*,min:*,na:*}} */ decoConf
  constructor(value = '', { prefix, logger, attach, decoConf } = {}) {
    super(text => Pal.prototype.sentence.call(this, text))
    Reflect.defineProperty(this, NAME, { value, writable: true })
    if (prefix) this.prefix = prefix
    if (logger) this.logger = logger
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

  sentence(text) {
    let { name, des, ind, logger, att } = this
    let signature = `${tab(ind)}[${name}]`
    if (att) signature += SP + att()
    if (des?.length) signature += des, this.des = ''
    if (typeof text !== STR) text += ''
    return void logger(
      signature,
      text.includes(LF)
        ? (LF + text).replace(/\n/g, LF + tab(++ind))
        : text
    )
  }

  render(message) { return deco(String(message), this.decoConf) }
  p(words) { return this.des += SP + words, this }
  br(words) { return this.des += SP + bracket(words), this }
  pr(words) { return this.des += SP + parenth(words), this }
  to(tar) {
    if (tar instanceof Pal) tar = tar.name
    this.des += ' -> ' + bracket(tar)
    return this
  }

  attach(func) {
    if (typeof func === FUN) { this.att = func }
    return this
  }
  detach() { return this.att = null, this }

  level(logger) {
    if (typeof logger === STR && logger in console) { return this.logger = console[logger], this }
    if (typeof logger === FUN) { return this.logger = logger, this }
    return this
  }
}
