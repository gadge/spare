import { COSP, LF, SP }                                 from '@texting/enum-chars'
import { DEF, NUM, STR, SYM }                           from '@typen/enum-data-types'
import { inspect }                                      from 'node:util'
import { Interceptor }                                  from './Interceptor.js'
import { carveIndent, retBracket, retParenth, spinOff } from './string-util.js'

export class Plot {
  /** @type {Proxy<Object|Plot>}                */ #proxy
  /** @type {Proxy<Object|((xs: *) => string)>} */ #logProxy
  /** @type {Proxy<Object|((xs: *) => string)>} */ #recProxy
  /** @type {string}          */ #intro = ''
  /** @type {Array<string>}   */ #queue = []
  /** @type {(key:*)=>string} */ #keyFn = retBracket
  /** @type {(val:*)=>string} */ #valFn = retParenth
  /** @type {()=>string}  */ #stamp = null

  constructor(title, key, val) {
    this.init(title)
    if (key) this.#keyFn = key
    if (val) this.#valFn = val
  }

  static build(text, keyFn, valFn) { return new Plot(text, keyFn, valFn) }

  get proxy() { return this.#proxy ||= new Proxy(this, Interceptor.index(this.rec)) }
  get recProxy() { return this.#recProxy ||= new Proxy(this.rec.bind(this), Interceptor.index(this.rec, this)) }
  get logProxy() { return this.#logProxy ||= new Proxy(this.log.bind(this), Interceptor.index(this.log, this)) }

  init(key) {
    this.flush()
    const [ intro, name ] = spinOff(key) // console.log(`>> [ini].call [intro] (${intro}) [value] (${value})`)
    if (intro) this.#intro = intro
    if (name) this.reg(name)
    return this.recProxy
  }

  flush() { this.#queue.length = 0 }
  attach(info) { return this.#stamp = info, this.proxy }
  detach() { return this.#stamp = null, this.proxy }

  log(...xs) {
    // console.log('log', 'queue', this.#queue, 'xs', xs)
    if (xs) this.#queue.push(...xs)
    console.log(this.toString())
    return this.#logProxy
  }
  reg(k) { return this.#queue.push(this.#keyFn(k)), this.proxy }
  rec(...xs) { return this.#queue.push(this.#valFn(xs.join(COSP))), this.proxy }
  br(x) { return this.#queue.push(this.#keyFn(x)), this.proxy }
  pr(...xs) { return this.#queue.push(xs.map(this.#valFn, this).join(COSP)), this.proxy }
  p(...xs) { return this.#queue.push(this.#valFn(xs.join(COSP))), this.proxy }

  render(x) {
    const tx = typeof x === STR ? x : typeof x === SYM ? x.description : x + ''
    return tx.includes(LF)
      ? (LF + tx).replace(/\n/g, LF + carveIndent(this.#intro))
      : tx
  }

  toString() {
    // console.log('intro', `(${this.#intro})`, 'queue', `(${this.#queue})`)
    let intro = this.#intro ?? ''
    if (this.#stamp) intro += (/\s$/.test(intro) ? '' : SP) + this.#stamp()
    return intro + this.#queue.map(this.render, this).join(SP) // + (/\s$/.test(intro) ? '' : SP) +
  }

  [Symbol.toPrimitive](type) {
    switch (type) {
      case STR:
      case DEF:
        return this.toString()
      case NUM:
        return this.#queue.length
      default:
        throw new Error('Plot Symbol.toPrimitive error')
    }
  }
  [inspect.custom]() { return this.toString() }
}






