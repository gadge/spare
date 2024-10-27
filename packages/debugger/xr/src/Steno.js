import { LF } from '@spare/enum-chars'
import { SP } from '@texting/enum-chars'
import { DEF, NUM, OBJ, STR, SYM } from '@typen/enum-data-types'
import { nullish, valid } from '@typen/nullish'
import { ProxyUtil } from './ProxyUtil.js'
import { Record } from './Record.js'
import { identify, Keep } from './TextUtil.js'

/**
 * @type {function}
 */
export class Steno extends Function {
  /** @type {Proxy<Steno>} */ proxy
  /** @type {string}       */ prefix = ''
  /** @type {Array}        */ list = []
  /** @type {function(*):string} */ keyFn = Keep.bracket
  /** @type {function(*):string} */ valFn = Keep.parenth
  /** @type {function():string}  */ info

  constructor(title, prefix, keyFn, valFn) {
    super()
    this.init(title, prefix, keyFn, valFn)
    return new Proxy(this, {
      get(steno, key, proxy) {
        // `>> [proxy] .get (${typeof key === SYM ? key.description : key}) (${+steno})`  |> console.log
        return steno.proxy = proxy, ProxyUtil.methodOrNull(steno, key) ?? Steno.prototype.rec.bind(steno, key)
      },
      apply(steno, thisArg, args) {
        // `>> [proxy].call (${args}) (${+steno})`  |> console.log
        return console.log(steno.toString(), steno.renderMany(args).replace(/^ +/, '')), steno.proxy
      }
    })
  }

  static build(text, keyFn, valFn) {
    const [ prefix, title ] = identify(text)
    return new Steno(title, prefix, keyFn, valFn)
  }

  iso(text, keyFn, valFn) {
    const [ prefix, title ] = identify(text)
    this.init(title, prefix, keyFn, valFn)
    return this.proxy
  }

  init(title, prefix, keyFn, valFn) {
    if (keyFn) this.keyFn = keyFn
    if (valFn) this.valFn = valFn
    if (this.list.length) this.list.length = 0
    if (title?.length) this.list.push(this.keyFn(identify.body(title)))
    this.prefix = prefix ?? ''
    return this.proxy
  }

  get indent() {
    let ms, ph
    if ((ms = this.prefix?.match(/\s+/)) && ([ ph ] = ms)) return ph
    return ''
  }

  asc() { return this.prefix = SP + SP + this.prefix, this.proxy }
  desc() { return this.prefix = this.prefix.replace(/^\s\s/, ''), this.proxy }
  attach(info) { return this.info = info, this.proxy }
  detach() { return this.info = null, this.proxy }

  rec(key, value) { return this.list.push(Record.build(key, value)), this.proxy }

  p(...x) { return this.list.push.apply(this.list, x), this.proxy }
  br(x) { return this.list.push(Record.ofKey(x)), this.proxy }
  pr(x) { return this.list.push(Record.ofVal(x)), this.proxy }

  /**
   * @param {Record} record
   * @returns {string}
   */
  renderRecord(record) {
    let { key, val } = record
    return valid(key)
      ? valid(val)
        ? this.keyFn(key) + SP + this.valFn(val) : this.keyFn(key)
      : valid(val)
        ? this.valFn(val) : ''
  }

  renderMany(list) {
    return !list?.length
      ? ''
      : list.length === 1
        ? Steno.prototype.render.call(this, list[0])
        : list.map(Steno.prototype.render.bind(this)).join(SP)
  }
  render(x) {
    const { indent } = this
    function prep(x) { return (x += '').includes(LF) ? (LF + x).replace(/\n/g, LF + indent) : x }
    if (nullish(x)) return x
    if (typeof x === STR) return prep(x)
    if (typeof x === OBJ) return prep(x instanceof Record ? this.renderRecord(x) : x)
    if (typeof x === SYM) return x.description // BOO / FUN / NUM / BIG
    return prep(x)
  }

  log(message) { return console.log(this.toString() + SP + this.render(message)), this.proxy }

  toString() {
    const list = this.list.map(x => this.render(x), this)
    let prefix = this.prefix ?? ''
    if (this.info instanceof Function) prefix += (/\s$/.test(prefix) ? '' : SP) + this.info()
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






