import {
  BLI_OFF, BLI_ON, BOL_OFF, BOL_ON, CRO_OFF, CRO_ON, CSI, DIM_OFF, DIM_ON, FORE_DEF, FORE_INI, HID_OFF, HID_ON, INV_OFF, INV_ON, ITA_OFF,
  ITA_ON, SGR, UND_OFF, UND_ON
}                                                    from '@palett/enum-ansi-codes'
import { Preset }                                    from '@palett/presets'
import { SC }                                        from '@palett/util-ansi'
import { hasAnsi }                                   from '@texting/charset-ansi'
import { BRACKET, NONE }                             from '@texting/enum-brackets'
import { COLF, COSP, LF, RTSP, SP }                  from '@texting/enum-chars'
import { lange, length }                             from '@texting/lange'
import { splitLiteral }                              from '@texting/splitter'
import { value }                                     from '@texting/string-value'
import { NUM, OBJ, STR, SYM }                        from '@typen/enum-data-types'
import { parseNum }                                  from '@typen/num-strict'
import { COLUMNWISE, POINTWISE, ROWWISE }            from '@vect/matrix'
import { height, width }                             from '@vect/matrix-index'
import { init, iso }                                 from '@vect/vector-init'
import { cate, Cate }                                from './Cate.js'
import { Die }                                       from './Die.js'
import { Re, tabs }                                  from './Joins.js'
import { hslToInt, limFF, presToUCA, render, scale } from './utils/colors.js'
import { padAnsi, padTypo }                          from './utils/padTypo.js'

export function parseStr(x) {
  const p = typeof x
  return x === null ? '' + x : p === OBJ || p === SYM ? x.toString() : p === STR ? x : '' + x
}
export function initialize(effects) {
  let head = '', tail = ''
  if (effects) for (let t of effects) {
    t === 'bold' ? (head += BOL_ON + SC, tail += BOL_OFF + SC) // BOLD
      : t === 'dim' ? (head += DIM_ON + SC, tail += DIM_OFF + SC) // DIM
        : t === 'italic' ? (head += ITA_ON + SC, tail += ITA_OFF + SC) // ITALIC
          : t === 'underline' ? (head += UND_ON + SC, tail += UND_OFF + SC) // UNDERLINE
            : t === 'blink' ? (head += BLI_ON + SC, tail += BLI_OFF + SC) // BLINK
              : t === 'inverse' ? (head += INV_ON + SC, tail += INV_OFF + SC) // INVERSE
                : t === 'hide' ? (head += HID_ON + SC, tail += HID_OFF + SC) // HIDE
                  : t === 'strike' ? (head += CRO_ON + SC, tail += CRO_OFF + SC) // STRIKE
                    : void 0
  }
  this.head = CSI + head + FORE_INI + SC
  this.tail = CSI + tail + FORE_DEF + SGR
}
const { Str: S, Num: N, NaN: E } = Cate

export class Typo {
  /** @type {function} */ str = parseStr
  /** @type {function} */ num = parseNum
  /** @type {function} */ len = length
  /** @type {function} */ pad = padAnsi
  /** @type {Uint8ClampedArray} */ tbd = null
  /** @type {Uint8ClampedArray} */ nbd = null
  /** @type {Uint8ClampedArray} */ pbd = null

  constructor(conf, pres) {
    if (conf.str) this.str = conf.str
    if (conf.num) this.num = conf.num
    if (conf.ansi) this.len = lange
    if (conf.fill) this.pad = conf.ansi
      ? conf.fill === SP ? padAnsi : padAnsi.bind(conf)
      : conf.fill === SP ? padTypo : padTypo.bind(conf)
    if (pres ?? (pres = conf.pres)) this.pres = pres
  }

  set pres(value) {
    initialize.call(this, value.effects)
    if (value instanceof Preset) return (this.tbd = presToUCA(value), this.nbd = presToUCA(value))
    if (value.str) this.tbd = presToUCA(value.str)
    if (value.num) this.nbd = presToUCA(value.num)
    if (value.neg) this.nbd = presToUCA(value.neg)
    if (value.pos) this.pbd = presToUCA(value.pos)
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
    if (n === void 0) return this.tbd ? render.call(this, this.preStr(bd, value(t, bd.w)), t) : t
    if (isNaN(n)) return this.tbd ? render.call(this, this.tNaN, t) : t
    return this.nbd ? render.call(this, this.preNum(bd, n), t) : t
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
      bds[i].lever(this, xs[i])
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
    for (let j = 0; j < wd; j++) bds[j].lever(this, ys[j])
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
    if (th > 0) { return '[' + Re.vector(ts, COSP, th, id, sr) + ']' }
    if (th === 0 && cn > 1) { return '[' + LF + Re.stand(ts, COLF, id + 2) + LF + tabs(id) + ']' }
    else { return '[ ' + Re.chain(ts, COSP) + ' ]' }
  }
  object(obj, th, id = 0, sr = 0) {
    let ts = this.flatObject(obj), cn = ts.length
    if (cn === 0) { return '{}' }
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
  matrix(mat, dr, id = 0) {
    const ts =
            dr === POINTWISE ? this.flatMatrix(mat) :
              dr === ROWWISE ? this.flatRows(mat) :
                dr === COLUMNWISE ? this.flatColumns(mat) :
                  this.flatMatrix(mat)
    const cn = ts.length, wd = width(mat)
    return cn <= wd
      ? '[[ ' + Re.chain(ts, COSP) + ' ]]'
      : '[' + LF + Re.shape(ts, COSP, COLF, BRACKET, wd, id + 2) + LF + tabs(id) + ']'
  }
}

// matrix2(mat, id = 0, sr = 0) {
//   const ts = this.flatMatrix(mat), cn = ts.length, wd = width(mat)
//   return cn <= wd
//     ? '[' + Re.chain(ts, COSP) + ']'
//     : '[' + Re.matrix(ts, COSP, wd, id, sr) + ']'
// }

