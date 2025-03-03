import { LF, SP }               from '@texting/enum-chars'
import { DEF, NUM, STR, SYM }   from '@typen/enum-data-types'
import { inspect }              from 'node:util'
import { getInd, retBr, retPr } from '../util/string.js'

// export function record(key, value) {
//
// }

export class Plot extends Function {
  /** @type {Proxy<Plot>} */ proxy
  /** @type {string}       */ #intro = ''
  /** @type {Array}        */ #queue = []
  /** @type {(key:*)=>string} */ #keyFn = retBr
  /** @type {(val:*)=>string} */ #valFn = retPr
  /** @type {()=>string}  */ #stamp

  constructor(title, keyFn, valFn) {
    super()
    this.init(title)
    if (keyFn) this.#keyFn = keyFn
    if (valFn) this.#valFn = valFn
    return new Proxy(this, {
      get(tar, key, proxy) {
        // console.log('>> [trap].index', '[key]', `(${typeof key === SYM ? key.description : key})`, '[tar]', tar, '[proxy]', proxy)
        if (!tar.proxy) tar.proxy = proxy
        if (key in tar) { return tar[key].bind(tar) }
        return tar.recKey(key), tar.recVal.bind(tar)
        // return scan.call(tar, key) ?? tar.rec.bind(tar, typeof key === SYM ? key.description : key)
      },
      apply(tar, ctx, args) {
        // console.log('>> [trap].apply', '[args]', `(${args})`, '[ctx]', ctx, '[tar]', tar + '',tar.name)
        if (ctx) { console.log(String(tar), ...args.map(tar.render, tar)) } else { tar.recVal(args[0]) }
        // console.log(String(tar), ...args.map(tar.render, tar))
        return tar.proxy
      }
    })
  }

  static build(text, keyFn, valFn) { return new Plot(text, keyFn, valFn) }

  init(value) {
    let intro
    if (Array.isArray(value)) { [ intro, value ] = value }
    // console.log(`>> [init].call [intro] (${intro ?? ''}) [value] (${value})`)
    this.flush()
    if (intro) this.#intro = intro
    if (value) this.#queue.push(this.#keyFn(value))
    return this.proxy
  }

  flush() { this.#queue.length = 0 }
  attach(info) { return this.#stamp = info, this.proxy }
  detach() { return this.#stamp = null, this.proxy }

  log(...args) {
    console.log(this.toString(), ...args.map(this.render, this))
    this.flush()
    return this.proxy
  }
  recKey(k) { return this.#queue.push(this.#keyFn(k)), this.proxy }
  recVal(...vs) { return this.#queue.push(...vs.map(this.#valFn, this)), this.proxy }
  rec(k, v) { return this.#queue.push(this.#keyFn(k), this.#valFn(v)), this.proxy }
  br(x) { return this.#queue.push(this.#keyFn(x)), this.proxy }
  pr(x) { return this.#queue.push(this.#valFn(x)), this.proxy }
  p(...x) { return this.#queue.push(...x), this.proxy }

  render(x) {
    const tx = typeof x === STR ? x : typeof x === SYM ? x.description : x + ''
    return tx.includes(LF)
      ? (LF + tx).replace(/\n/g, LF + getInd(this.#intro))
      : tx
  }

  toString() {
    const queue = this.#queue.map(this.render, this)
    let intro = this.#intro ?? ''
    if (this.#stamp) intro += (/\s$/.test(intro) ? '' : SP) + this.#stamp()
    return intro + (/\s$/.test(intro) ? '' : SP) + queue.join(SP)
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
    this.flush()
    return this.toString()
  }
}






