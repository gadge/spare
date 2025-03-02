import { LF, SP }                           from '@texting/enum-chars'
import { DEF, NUM, OBJ, STR, SYM }          from '@typen/enum-data-types'
import { nullish, valid }                   from '@typen/nullish'
import { bid }                              from './ProxyUtil.js'
import { Record }                           from './Record.js'
import { getInd, retBr, retPr, sepPreBody } from './text-utils.js'

/**
 * @type {function}
 */
export class Steno extends Function {
  /** @type {Proxy<Steno>} */ proxy
  /** @type {string}       */ prefix = ''
  /** @type {Array}        */ list = []
  /** @type {(key:*)=>string} */ keyFn = retBr
  /** @type {(val:*)=>string} */ valFn = retPr
  /** @type {()=>string}  */ info

  constructor(title, keyFn, valFn) {
    super()
    this.init(title, keyFn, valFn)
    return new Proxy(this, {
      get(tar, key, proxy) {
        // console.log(`>> [proxy].get (${typeof key === SYM ? key.description : key}) (${+tar})`)
        tar.proxy = proxy
        return bid.call(tar, key) ?? Steno.prototype.rec.bind(tar, key)
      },
      apply(tar, ctx, args) {
        // console.log(`>> [proxy].call (${args}) ${tar} (${+tar})`)
        console.log(String(tar), args.map(tar.render, tar).join(SP))
        return tar.proxy
      }
    })
  }

  static build(text, keyFn, valFn) {
    return new Steno(text, keyFn, valFn)
  }

  init(text, keyFn, valFn) {
    const [ prefix, title ] = sepPreBody(text)
    if (keyFn) this.keyFn = keyFn
    if (valFn) this.valFn = valFn
    if (this.list.length) this.list.length = 0
    if (title?.length) this.list.push(this.keyFn(title))
    this.prefix = prefix ?? ''
    return this.proxy
  }

  boot() {
    if (this.list.length) this.list.length = 0
    return this.proxy
  }

  asc() { return this.prefix = SP + SP + this.prefix, this.proxy }
  desc() { return this.prefix = this.prefix.replace(/^\s\s/, ''), this.proxy }
  attach(info) { return this.info = info, this.proxy }
  detach() { return this.info = null, this.proxy }

  rec(key, value) { return this.list.push(Record.build(key, value)), this.proxy }

  p(...x) { return this.list.push(...x), this.proxy }
  br(x) { return this.list.push(Record.ofKey(x)), this.proxy }
  pr(x) { return this.list.push(Record.ofVal(x)), this.proxy }

  /**
   * @param {Record} record
   * @returns {string}
   */
  #renderRecord(record) {
    let { key, val } = record
    return valid(key)
      ? valid(val)
        ? this.keyFn(key) + SP + this.valFn(val) : this.keyFn(key)
      : valid(val)
        ? this.valFn(val) : ''
  }

  render(x) {
    const tx = this.#format(x)
    return tx.includes(LF) ? (LF + tx).replace(/\n/g, LF + getInd(this.prefix)) : tx
  }

  #format(x) {
    if (nullish(x)) return x + ''
    if (typeof x === STR) return x
    if (typeof x === OBJ) return x instanceof Record ? this.#renderRecord(x) : x + ''
    if (typeof x === SYM) return x.description // BOO / FUN / NUM / BIG
    return x + ''
  }

  log(message) { return console.log(this.toString() + SP + this.render(message)), this.proxy }

  toString() {
    const list = this.list.map(this.render, this)
    let prefix = this.prefix ?? ''
    if (this.info) prefix += (/\s$/.test(prefix) ? '' : SP) + this.info()
    return prefix + (/\s$/.test(prefix) ? '' : SP) + list.join(SP)
  }

  [Symbol.toPrimitive](type) {
    switch (type) {
      case STR:
      case DEF:
        return this.toString()
      case NUM:
        return this.list.length
      default:
        throw new Error('Steno Symbol.toPrimitive error')
    }
  }
}






