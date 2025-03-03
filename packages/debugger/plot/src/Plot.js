import { COSP, LF, SP }         from '@texting/enum-chars'
import { DEF, NUM, STR, SYM }   from '@typen/enum-data-types'
import { inspect }              from 'node:util'
import { Handlers }             from './ProxyHandlers.js'
import { getInd, retBr, retPr } from './string-util.js'

export class Plot {
  /** @type {Proxy<Object|Plot>}                */ #proxy
  /** @type {Proxy<Object|((xs: *) => string)>} */ #logProxy
  /** @type {Proxy<Object|((xs: *) => string)>} */ #noteProxy
  /** @type {string}          */ #intro = ''
  /** @type {Array<string>}   */ #queue = []
  /** @type {(key:*)=>string} */ #keyFn = retBr
  /** @type {(val:*)=>string} */ #valFn = retPr
  /** @type {()=>string}  */ #stamp = null

  constructor(title, keyFn, valFn) {
    this.init(title)
    if (keyFn) this.#keyFn = keyFn
    if (valFn) this.#valFn = valFn
  }

  static build(text, keyFn, valFn) { return new Plot(text, keyFn, valFn) }

  get proxy() { return this.#proxy ||= new Proxy(this, Handlers.index(this.note)) }
  get logProxy() { return this.#logProxy ||= new Proxy(this.log.bind(this), Handlers.index(this.log, this)) }
  get noteProxy() { return this.#noteProxy ||= new Proxy(this.note.bind(this), Handlers.index(this.note, this)) }

  init(value) {
    this.flush()
    let intro
    if (Array.isArray(value)) { [ intro, value ] = value }
    // console.log(`>> [init].call [intro] (${intro}) [value] (${value})`)
    if (intro) this.#intro = intro
    if (value) this.sign(value)
    return this.noteProxy
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
  sign(k) { return this.#queue.push(this.#keyFn(k)), this.proxy }
  note(...xs) { return this.#queue.push(this.#valFn(xs.join(COSP))), this.proxy }
  br(x) { return this.#queue.push(this.#keyFn(x)), this.proxy }
  pr(...xs) { return this.#queue.push(xs.map(this.#valFn, this).join(COSP)), this.proxy }
  p(...xs) { return this.#queue.push(this.#valFn(xs.join(COSP))), this.proxy }

  render(x) {
    const tx = typeof x === STR ? x : typeof x === SYM ? x.description : x + ''
    return tx.includes(LF)
      ? (LF + tx).replace(/\n/g, LF + getInd(this.#intro))
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






