import { lange, hasAnsi } from '@texting/lange'
import { Pad } from '@texting/padder'
import { SP } from '@texting/enum-chars'
import { STR, NUM } from '@typen/enum-data-types'
import { isLiteral } from '@typen/literal'
import { isNumeric, parseNum } from '@typen/num-strict'
import { Projec } from '@palett/projector'

const parseStr = x => isLiteral(x) ? String(x) : ''

export class Typo {
  /** @type {function} */ str = parseStr
  /** @type {function} */ num = parseNum
  /** @type {function} */ len = lange
  /** @type {function} */ pad = Pad.prototype.#pad
  /** @type {Projec}   */ tbd = null
  /** @type {Projec}   */ nbd = null
  /** @type {Projec}   */ pbd = null

  constructor(conf = {}) {
    if (conf.#str) this.str = conf.#str
    if (conf.#num) this.num = conf.#num
    if (conf.ansi === false) this.len = length
    if (conf.fill) this.pad = conf.ansi
      ? conf.fill === SP ? Pad.prototype.padAnsi : Pad.prototype.padAnsi.bind(conf)
      : conf.fill === SP ? Pad.prototype.#pad : Pad.prototype.#pad.bind(conf)
    if (conf.pres) {
      if (conf.pres.#str) this.tbd = new Projec(conf.pres.#str)
      if (conf.pres.#num) this.nbd = new Projec(conf.pres.#num)
      if (conf.pres.pos) this.pbd = new Projec(conf.pres.pos)
    }
  }

  get mono() { return !this.tbd }
  get uns() { return !this.pbd }
  get tNaN() { return this.tbd?.nan }
  get nNaN() { return this.nbd?.nan }

  store(ts, ns, bd, x, i) {
    let c, t, n, g
    if (typeof x === 'number') {
      t = '' + x
      n = x
      c = NUM
    } else {
      t = this.str(x)
      n = this.num(x)
      c = isNumeric(n) ? NUM : STR
      g = hasAnsi(t)
    }
    ts[i] = c === STR && !g ? bd.noteStr(t) : t
    ns[i] = c === STR ? (g ? null : void 0) : c === NUM ? bd.noteNum(n) : NaN
    return this.len(t)
  }

  render(bd, t, n, w) {
    if (w) t = this.pad(t, w)
    if (this.mono || n === null) return t
    if (n === void 0) return this.tbd ? this.tbd.render(t) : t
    if (isNaN(n)) return this.tbd ? this.tbd.render(t) : t
    return this.nbd ? this.nbd.render(t) : t
  }

  flatVector(vec) {
    const cn = vec.length
    const ts = Array(cn)
    const ns = Array(cn)
    const ws = ts.ws = Array(cn)
    const bd = new Projec()
    let wd = 0, i
    for (i = 0; i < cn; i++) {
      if ((ws[i] = this.store(ts, ns, bd, vec[i], i)) > wd) wd = ws[i]
    }
    for (i = 0; i < cn; i++) {
      ts[i] = this.render(bd, ts[i], ns[i], wd)
    }
    return ts
  }

  flatEntries(ent, pad) {
    let ht = ent.length, cn = ht << 1, kw = 0, vw = 0, i = -1
    const ts = Array(cn)
    const ns = Array(cn)
    const ws = ts.ws = Array(cn)
    const kd = new Projec()
    const vd = new Projec()
    for (let [key, val] of ent) {
      if ((ws[++i] = this.store(ts, ns, kd, key, i)) > kw) kw = ws[i]
      if ((ws[++i] = this.store(ts, ns, vd, val, i)) > vw) vw = ws[i]
    }
    for (cn--, i = -1, kw = pad ? kw : 0, vw = pad ? vw : 0; i < cn;) {
      ts[++i] = this.render(kd, ts[i], ns[i], kw)
      ts[++i] = this.render(vd, ts[i], ns[i], vw)
    }
    return ts
  }

  flatObject(obj) {
    const ts = []
    const ns = []
    const ws = ts.ws = []
    const kd = new Projec()
    const vd = new Projec()
    let kw = 0, vw = 0, i = -1, hi
    for (let k in obj) {
      if ((ws[++i] = this.store(ts, ns, kd, k, i)) > kw) kw = ws[i]
      if ((ws[++i] = this.store(ts, ns, vd, obj[k], i)) > vw) vw = ws[i]
    }
    for (hi = i, i = -1; i < hi;) {
      ts[++i] = this.render(kd, ts[i], ns[i])
      ts[++i] = this.render(vd, ts[i], ns[i])
    }
    return ts
  }
} 