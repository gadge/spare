import { SP }                 from '@spare/enum-chars'
import { logger }             from '@spare/logger'
import { tapBy }              from '@texting/tap'
import { DEF, FUN, NUM, STR } from '@typen/enum-data-types'
import { Record }             from './Record'
import { Keep, separate }     from './TextUtil'

/**
 * @type {Object<string,string>}
 */
export class Steno extends Array {
  /** @type {string}       */ prefix
  /** @type {Proxy<Steno>} */ proxy
  /** @type {function(*):string} */ keyFn = Keep.bracket
  /** @type {function(*):string} */ valFn = Keep.parenth
  constructor(title, prefix, keyFn, valFn) {
    super()
    this.reset(title, prefix, keyFn, valFn)
    return new Proxy(this, {
      get(steno, key, proxy) {
        steno.proxy = proxy
        let item
        if (key in steno && (item = steno[key])) return typeof item === FUN ? item.bind(steno) : item
        // `[target] (${steno}) [key] (${String(key)}) [proxy] (${proxy})` |> logger
        return Steno.prototype.rec.bind(steno, key)
      }
    })
  }

  static build(text, keyFn, valFn) {
    const [ prefix, title ] = separate(text)
    return new Steno(title, prefix, keyFn, valFn)
  }

  rebuild(text, keyFn, valFn) {
    const [ prefix, title ] = separate(text)
    return this.reset(title, prefix, keyFn, valFn)
  }

  reset(title, prefix, keyFn, valFn) {
    if (keyFn) this.keyFn = keyFn
    if (valFn) this.valFn = valFn
    if (this.length) this.length = 0
    if (title?.length) this.push(this.keyFn(title))
    this.prefix = prefix ?? ''
    return this.proxy
  }

  asc() { return this.prefix = SP + SP + this.prefix, this.proxy }
  desc() { return this.prefix = this.prefix.replace(/^\s\s/, ''), this.proxy }

  rec(key, value) { return this.push(new Record(key, value, this.keyFn, this.valFn)), this.proxy }

  p(...x) { return this.push.apply(this, x), this.proxy }
  br(x) { return this.push(Record.ofKey(x, this.keyFn)), this.proxy }
  pr(x) { return this.push(Record.ofVal(x, this.valFn)), this.proxy }

  toString() {
    const list = this.map(x => {
      if (x instanceof Record && (x = x.toObject())) return tapBy(SP, this.keyFn(x.key), this.valFn(x.val))
      if (typeof x === STR) return x
      return x.toString()
    }, this)
    return (this.prefix ?? '') + list.join(SP)
  }

  [Symbol.toPrimitive](type) {
    switch (type) {
      case STR:
      case DEF:
        return this.toString()
      case NUM:
        return this.length
      default:
        throw new Error('Steno Symbol.toPrimitive error')
    }
  }
}






