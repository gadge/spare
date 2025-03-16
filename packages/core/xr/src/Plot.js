import { LF, SP }                                       from '@texting/enum-chars'
import { DEF, NUM, STR, SYM }                           from '@typen/enum-data-types'
import { inspect }                                      from 'node:util'
import { carveIndent, retBracket, retParenth, spinOff } from './util/string.js'

export const altSp = (x) => (x.length === 0 || x.endsWith(SP)) ? '' : SP

//extends Function
export class Plot extends Function {
  /** @type {Proxy}           */ #indexer
  /** @type {string}          */ #intro = ''
  /** @type {Array}           */ #queue = []
  /** @type {(key:*)=>string} */ #key = retBracket
  /** @type {(val:*)=>string} */ #val = retParenth
  /** @type {()=>string}      */ #stamp

  constructor(key, val) {
    super()
    if (key) this.#key = key
    if (val) this.#val = val
  }

  static build(key, val) { return new Plot(key, val) }

  get indexer() { return this.#indexer }

  load(indexer) { return this.#indexer = indexer, this }
  get length() { return this.#queue.length }

  flush() {
    this.#intro = ''
    this.#queue.length = 0
  }

  att(info) { return this.#stamp = info, this.#indexer }
  det() { return this.#stamp = null, this.#indexer }

  log(...args) {
    console.log(this.toString(), ...args.map(this.render, this))
    this.flush()
  }
  ini(k) {
    // this.flush()
    const [ intro, name ] = spinOff(k)
    // console.log(`>> [ini].call [intro] (${intro ?? ''}) [name] (${name})`)
    if (intro?.length) this.#intro = intro
    if (name) this.#queue.push(this.#key(name))
    return this.#indexer
  }
  reg(k) { return this.#queue.push(this.#key(k)), this.#indexer }
  rec(...vs) { return this.#queue.push(...vs.map(this.#val, this)), this.#indexer }
  p(...x) { return this.#queue.push(...x), this.#indexer }
  br(x) { return this.#queue.push(this.#key(x)), this.#indexer }
  pr(x) { return this.#queue.push(this.#val(x)), this.#indexer }

  render(x) {
    const tx = typeof x === STR ? x : typeof x === SYM ? x.description : x + ''
    return tx.includes(LF)
      ? (LF + tx).replace(/\n/g, LF + carveIndent(this.#intro))
      : tx
  }
  toString() {
    const queue = this.#queue.map(this.render, this)
    let intro = this.#intro ?? ''
    if (this.#stamp) intro += altSp(intro) + this.#stamp()
    return intro + altSp(intro) + queue.join(SP)
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
  [inspect.custom]() {
    const output = this.toString()
    this.flush()
    return output
  }
}






