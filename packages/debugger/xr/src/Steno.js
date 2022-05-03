import { SP }             from '@texting/enum-chars'
import { DEF, NUM, STR }  from '@typen/enum-data-types'
import { valid }          from '@typen/nullish'
import { ProxyUtil }      from './ProxyUtil'
import { Record }         from './Record'
import { Keep, separate } from './TextUtil'


/**
 * @type {Object<string,string>}
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
        return steno.proxy = proxy, ProxyUtil.getMethodOrNull(steno, key) ?? Steno.prototype.rec.bind(steno, key)
      },
      apply(steno, thisArg, args) {
        return console.log(steno.toString(), ...args), steno.proxy
      },
    })
  }

  static build(text, keyFn, valFn) {
    const [ prefix, title ] = separate(text)
    return new Steno(title, prefix, keyFn, valFn)
  }

  iso(text, keyFn, valFn) {
    const [ prefix, title ] = separate(text)
    this.init(title, prefix, keyFn, valFn)
    return this.proxy
  }

  init(title, prefix, keyFn, valFn) {
    if (keyFn) this.keyFn = keyFn
    if (valFn) this.valFn = valFn
    if (this.list.length) this.list.length = 0
    if (title?.length) this.list.push(this.keyFn(title))
    this.prefix = prefix ?? ''
    return this.proxy
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

  log(message) {
    return console.log(this.toString() + SP + message), this.proxy
  }

  toString() {
    const list = this.list.map(x => {
      if (x instanceof Record) return this.renderRecord(x)
      if (typeof x === STR) return x
      return x.toString()
    }, this)
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






