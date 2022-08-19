import { oneself }                                          from '@ject/oneself'
import { CSI, FORE_DEF, FORE_INI, SGR }                     from '@palett/enum-ansi-codes'
import { BESQUE, SUBTLE }                                   from '@palett/presets'
import { SC }                                               from '@palett/util-ansi'
import { hasAnsi }                                          from '@texting/charset-ansi'
import { BRACKET, NONE }                                    from '@texting/enum-brackets'
import { COLF, COSP, LF, RTSP }                             from '@texting/enum-chars'
import { lange, length }                                    from '@texting/lange'
import { splitLiteral }                                     from '@texting/splitter'
import { value }                                            from '@texting/string-value'
import { NUM, OBJ, STR, SYM }                               from '@typen/enum-data-types'
import { parseNum }                                         from '@typen/num-strict'
import { height, width }                                    from '@vect/matrix-index'
import { init, iso }                                        from '@vect/vector-init'
import { cate, Cate }                                       from './Cate.js'
import { Die }                                              from './Die.js'
import { Re, tabs }                                         from './Joins.js'
import { hslToInt, limFF, presToUCA, render, scale, style } from './utils/colors.js'
import { fixPad, priPad }                                   from './utils/padder.js'

export function parseStr(x) {
  const p = typeof x
  return x === null ? '' + x : p === OBJ || p === SYM ? x.toString() : p === STR ? x : '' + x
}

const { Str: S, Num: N, NaN: E } = Cate

export class Typo {
  /** @type {function} */ str = parseStr
  /** @type {function} */ num = parseNum
  /** @type {function} */ len = length
  /** @type {function} */ pad = oneself
  /** @type {Uint8ClampedArray} */ tbd = null
  /** @type {Uint8ClampedArray} */ nbd = null
  /** @type {Uint8ClampedArray} */ pbd = null
  head = ''
  tail = ''
  constructor(conf) {
    if (conf.str) this.str = conf.str
    if (conf.num) this.num = conf.num
    if (conf.ansi) this.len = lange
    if (conf.fill) this.pad = conf.ansi ? fixPad.bind(conf) : priPad.bind(conf)
    const pres = conf.pres
    if (pres) {
      if (pres.effects) style.call(this, pres.effects)
      this.head = CSI + this.head + FORE_INI + SC
      this.tail = CSI + this.tail + FORE_DEF + SGR
      if (pres.str) this.tbd = presToUCA(pres.str ?? SUBTLE)
      if (pres.num) this.nbd = presToUCA(pres.num ?? BESQUE)
      if (pres.neg) this.nbd = presToUCA(pres.neg)
      if (pres.pos) this.pbd = presToUCA(pres.pos)
    }
  }

  get mono() { return !this.tbd }
  get uns() { return !this.pbd }
  get tNaN() { return this.tbd[6] << 16 | this.tbd[7] << 8 | this.tbd[8] }
  get nNaN() { return this.nbd[6] << 16 | this.nbd[7] << 8 | this.nbd[8] }
  preStr(bd, v) {
    const lo = bd.s, [ h, s, l ] = this.tbd
    return hslToInt(scale(v, lo, bd[0], h), limFF(v, lo, bd[1], s), limFF(v, lo, bd[2], l))
  }
  preNum(bd, v) {
    if (isNaN(v)) return this.tNaN
    if (this.uns || v < 0) {
      const lo = bd.m, [ h, s, l ] = this.nbd
      return hslToInt(scale(v, lo, bd[3], h), limFF(v, lo, bd[4], s), limFF(v, lo, bd[5], l))
    }
    if (v > 0) {
      const lo = bd.p, [ h, s, la ] = this.pbd
      return hslToInt(scale(v, lo, bd[6], h), limFF(v, lo, bd[7], s), limFF(v, lo, bd[8], la))
    }
    return this.nNaN
  }

  store(ts, ns, bd, x, i) {
    let c, t, n, g
    typeof x === NUM ? (t = '' + x, n = x, c = N) : (t = this.str(x), n = this.num(x), c = cate(n, t), g = hasAnsi(t))
    ts[i] = c === S && !(g = hasAnsi(t)) ? bd.noteStr(t) : t
    ns[i] = c === S ? (g ? null : void 0) : c === N ? bd.noteNum(n) : NaN
    return this.len(t)
  }
  render(bd, t, n, w) {
    if (w) t = this.pad(t, n, w)
    if (this.mono || n === null) return t
    n = n === void 0 ? this.preStr(bd, value(t, bd.w)) : !isNaN(n) ? this.preNum(bd, n) : this.tNaN
    return render.call(this, n, t)
  }

  flatVector(vec) {
    const cn = vec.length, ts = Array(cn), ns = Array(cn), ws = ts.ws = Array(cn)
    const bd = new Die(this.uns)
    let wd = 0, i
    for (i = 0; i < cn; i++) if ((ws[i] = this.store(ts, ns, bd, vec[i], i)) > wd) wd = ws[i]
    for (i = 0, bd.lever(this, wd); i < cn; i++) ts[i] = this.render(bd, ts[i], ns[i])
    return ts
  }
  flatEntries(ent, pad) {
    let ht = ent.length, cn = ht << 1, kw = 0, vw = 0, i = -1
    const ts = Array(cn), ns = Array(cn), ws = ts.ws = Array(cn)
    const kd = new Die(this.uns), vd = new Die(this.uns)
    for (let [ key, val ] of ent) {
      if ((ws[++i] = this.store(ts, ns, kd, key, i)) > kw) kw = ws[i]
      if ((ws[++i] = this.store(ts, ns, vd, val, i)) > vw) vw = ws[i]
    }
    for (cn--, i = -1, kd.lever(this, kw), vd.lever(this, vw), kw = pad ? kw : 0, vw = pad ? vw : 0; i < cn;) {
      ts[++i] = this.render(kd, ts[i], ns[i], kw)
      ts[++i] = this.render(vd, ts[i], ns[i], vw)
    }
    return ts
  }
  flatObject(obj) {
    const ts = [], ns = [], ws = ts.ws = []
    const kd = new Die(this.uns), vd = new Die(this.uns)
    let kw = 0, vw = 0, i = -1, hi
    for (let k in obj) {
      if ((ws[++i] = this.store(ts, ns, kd, k, i)) > kw) kw = ws[i]
      if ((ws[++i] = this.store(ts, ns, vd, obj[k], i)) > vw) vw = ws[i]
    }
    for (hi = i, i = -1, kd.lever(this, kw), vd.lever(this, vw); i < hi;) {
      ts[++i] = this.render(kd, ts[i], ns[i])
      ts[++i] = this.render(vd, ts[i], ns[i])
    }
    return ts
  }
  flatMatrix(mat) {
    const ht = height(mat), wd = width(mat), cn = ht * wd
    const ts = Array(cn), ns = Array(cn), xs = iso(ht, 0), ys = iso(wd, 0), bd = new Die(this.uns)
    for (let i = 0, p = 0; i < ht; i++) {
      for (let j = 0, r = mat[i], w; j < wd; j++) {
        w = this.store(ts, ns, bd, r[j], p++)
        if (w > xs[i]) xs[i] = w
        if (w > ys[j]) ys[j] = w
      }
    }
    for (let i = 0, p = 0; i < ht; i++) {
      bd.lever(this, xs[i])
      for (let j = 0; j < wd; j++, p++) ts[p] = this.render(bd, ts[p], ns[p], ys[j])
    }
    return ts
  }
  flatRows(mat) {
    const ht = height(mat), wd = width(mat), cn = ht * wd
    const ts = Array(cn), ns = Array(cn), xs = iso(ht, 0), ys = iso(wd, 0), bds = init(ht, () => new Die(this.uns))
    for (let i = 0, p = 0; i < ht; i++) {
      for (let j = 0, r = mat[i], w; j < wd; j++) {
        w = this.store(ts, ns, bds[i], r[j], p++)
        if (w > xs[i]) xs[i] = w
        if (w > ys[j]) ys[j] = w
      }
    }
    for (let i = 0, p = 0; i < ht; i++) {
      lever.call(bds[i], this, xs[i])
      for (let j = 0; j < wd; j++, p++) ts[p] = this.render(bds[i], ts[p], ns[p], ys[j])
    }
    return ts
  }
  flatColumns(mat) {
    const ht = height(mat), wd = width(mat), cn = ht * wd
    const ts = Array(cn), ns = Array(cn), xs = iso(ht, 0), ys = iso(wd, 0), bds = init(wd, () => new Die(this.uns))
    for (let i = 0, p = 0; i < ht; i++) {
      for (let j = 0, r = mat[i], w; j < wd; j++) {
        w = this.store(ts, ns, bds[j], r[j], p++)
        if (w > xs[i]) xs[i] = w
        if (w > ys[j]) ys[j] = w
      }
    }
    for (let j = 0; j < wd; j++) lever.call(bds[j], this, ys[j])
    for (let i = 0, p = 0; i < ht; i++) {
      for (let j = 0; j < wd; j++, p++) ts[p] = this.render(bds[j], ts[p], ns[p], ys[j])
    }
    return ts
  }

  string(str, th, id, sr) {
    const vec = splitLiteral(str)
    return Re.string(this.flatVector(vec), '', th, id, sr)
  }
  vector(vec, th, id = 0, sr = 0) {
    const cn = vec?.length ?? 0
    if (cn === 0) { return '[]' }
    const ts = this.flatVector(vec)
    // if (cn === 1) { return '[ ' + ts[0] + ' ]' }
    if (th > 0) { return '[' + Re.vector(ts, COSP, th, id, sr) + ']' }
    if (th === 0 && cn > 1) { return '[' + LF + Re.stand(ts, COLF, id + 2) + LF + tabs(id) + ']' }
    else { return '[ ' + Re.chain(ts, COSP) + ' ]' }
  }
  object(obj, th, id = 0, sr = 0) {
    let ts = this.flatObject(obj), cn = ts.length
    if (cn === 0) { return '{}' }
    // if (cn <= 2) { return '{ ' + ts[0] + RTSP + ts[1] + ' }' }
    if (th > 0) { return '{' + Re.object(ts, COSP, th, id, sr + 2) + '}' }
    if (th === 0 && cn > 2) { return '{' + LF + Re.shape(ts, RTSP, COLF, NONE, 2, id + 2) + LF + tabs(id) + '}' }
    else { return '{ ' + Re.group(ts, RTSP, COSP, NONE, 2) + ' }' }
  }
  entries(ent, hr, id = 0) {
    const cn = ent?.length ?? 0
    if (cn === 0) return '[]'
    const ts = this.flatEntries(ent, !(hr ||= cn <= 1))
    return hr ? '[' + Re.group(ts, COSP, COSP, BRACKET, 2) + ']' : '[' + LF + Re.shape(ts, COSP, LF, BRACKET, 2, id + 1) + LF + tabs(id) + ']'
  }
  matrix(mat, id = 0, sr = 0) {
    const ts = this.flatMatrix(mat), cn = ts.length, wd = width(mat)
    return cn <= wd ? '[[ ' + Re.chain(ts, COSP) + ' ]]' : '[' + LF + Re.shape(ts, COSP, COLF, BRACKET, wd, id + 2) + LF + tabs(id) + ']'
  }
  rows(mat, id = 0) {
    const ts = this.flatRows(mat), cn = ts.length, wd = width(mat)
    return cn <= wd ? '[[ ' + Re.chain(ts, COSP) + ' ]]' : '[' + LF + Re.shape(ts, COSP, COLF, BRACKET, wd, id + 2) + LF + tabs(id) + ']'
  }
  columns(mat, id = 0) {
    const ts = this.flatColumns(mat), cn = ts.length, wd = width(mat)
    return cn <= wd ? '[[ ' + Re.chain(ts, COSP) + ' ]]' : '[' + LF + Re.shape(ts, COSP, COLF, BRACKET, wd, id + 2) + LF + tabs(id) + ']'
  }
}

// matrix2(mat, id = 0, sr = 0) {
//   const ts = this.flatMatrix(mat), cn = ts.length, wd = width(mat)
//   return cn <= wd
//     ? '[' + Re.chain(ts, COSP) + ']'
//     : '[' + Re.matrix(ts, COSP, wd, id, sr) + ']'
// }

