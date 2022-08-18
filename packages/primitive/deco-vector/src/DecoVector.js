import { Typo }               from '@spare/arc/src/Typo.js'
import { COSP }               from '@texting/enum-chars'
import { NUM, OBJ, STR, SYM } from '@typen/enum-data-types'
import { isLiteral }          from '@typen/literal'

function toStr(x) {
  if (typeof x !== STR) { x = String(x) }
  if (x.length > (this.width ?? (this.width = 0))) this.width = x.length
  return x
}

export class Type {
  static Num = 1
  static Str = 0
  static NaN = -1
}

// switch (typeof x) {
//   case 'bigint':
//   case 'boolean':
//   case 'function':
//   case 'number':
//   case 'object':
//   case 'string':
//   case 'symbol':
//   case 'undefined':
// }


export class DecoVector {
  join = true


  delim = COSP
  read = toStr
  pres = null
  padd = true
  ansi = false
  full = false
  level = 0

  typo


  constructor(conf) {
    if (conf.pres) this.pres = new Typo(conf)
  }
  static deco(vec, config) {
    const d = new DecoVector(config)

  }
  project(vec) {
    vec = this.load(vec)
    if (this.pres) vec = this.pres.vector(vec)
    if (this.join) vec = this.join(vec)
    return vec
  }

  reset() {
    this.types.length = 0
    this.rates.length = 0
    this.texts.length = 0
    this.width = 0
  }
  writeNum(n, i) {
    const x = '' + n, w = this.measure(x)
    this.types[i] = Type.Num
    this.texts[i] = x
    if (w > this.width) this.width = w
  }
  writeStr(x, i) {
    const n = this.parseNum(x), t = !isNaN(x - n) ? Type.Num : isLiteral(x) ? Type.Str : Type.NaN, w = this.measure(x)
    this.types[i] = t
    this.texts[i] = x
    if (w > this.width) this.width = w
    if (t === Type.Num) this.rates[i] = this.num.note(n)
  }
  write(x, i) {
    const t = typeof x
    t === NUM ? this.writeNum(x, i) :
      t === SYM || t === OBJ ? this.writeStr(x.toString(), i) :
        t === STR ? this.writeStr(x, i) :
          this.writeStr('' + x, i)
  }
  load(vec) {
    for (let i = 0; i < vec.length; i++) {
      this.write(vec[i], i)
    }
    return this
  }
  padder(vec) {
    const hi = this.types.length
    for (let i = 0; i < hi; i++) {

    }

    // const padder = isNumeric(va ?? (thousand ? clean(tx) : tx)) ? lpad : rpad
    // return ansi ? padder(tx, ansiPadLength(tx, wd), fill) : padder(tx, wd, fill)
    //
    // const padder = Pad({ ansi, fill })
    // const width = maxBy(vec, Lange(ansi))
    // return mapper(vec, tx => padder(tx, width, tx))
    // return vec

  }
  pretty(vec) {

    return vec
  }
  joiner(vec) {

    return vec
  }
}
