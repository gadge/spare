import { hslToInt, limFF, Preset, render, scale } from '@palett/presets'
import { hasAnsi }                                from '@texting/charset-ansi'
import { BRACKET, NONE }                          from '@texting/enum-brackets'
import { COLF, COSP, LF, RTSP, SP }               from '@texting/enum-chars'
import { lange, length }                          from '@texting/lange'
import { splitLiteral }                           from '@texting/splitter'
import { value }                                  from '@texting/string-value'
import { NUM, OBJ, STR, SYM }                     from '@typen/enum-data-types'
import { parseNum }                               from '@typen/num-strict'
import { COLUMNWISE, POINTWISE, ROWWISE }         from '@vect/enum-matrix-directions'
import { height, width }                          from '@vect/matrix-index'
import { init, iso }                              from '@vect/vector-init'
import { initialize }                             from '../utils/initialize.js'
import { padAnsi, padTypo }                       from '../utils/padTypo.js'
import { Concat, tabs }                           from './Concat.js'
import { Grad }                                   from './Grad.js'
import { checkSub, Sub }                          from './Sub.js'

export function parseStr(x) {
  const p = typeof x
  return x === null ? '' + x : p === OBJ || p === SYM ? x.toString() : p === STR ? x : '' + x
}

const { Str: S, Num: N, NaN: E } = Sub

export class Node {
  /** @type {function} */ str = parseStr
  /** @type {function} */ num = parseNum
  /** @type {function} */ len = lange
  /** @type {function} */ pad = padAnsi
  /** @type {Preset} string preset   */ tbd = null
  /** @type {Preset} number preset   */ nbd = null
  /** @type {Preset} positive preset */ pbd = null

  constructor(conf, pres) {
    if (conf.str) this.str = conf.str
    if (conf.num) this.num = conf.num
    if (conf.ansi === false) this.len = length
    if (conf.fill) this.pad = conf.ansi
      ? conf.fill === SP ? padAnsi : padAnsi.bind(conf)
      : conf.fill === SP ? padTypo : padTypo.bind(conf)
    if (pres ||= conf.pres) this.pres = pres
  }

  set pres(value) {
    initialize.call(this, value.effects)
    if (value instanceof Preset) return (this.tbd = value, this.nbd = value)
    if (value.str) this.tbd = value.str
    if (value.num) this.nbd = value.num
    if (value.neg) this.nbd = value.neg
    if (value.pos) this.pbd = value.pos
  }

  get mono() { return !this.tbd }
  get uns() { return !this.pbd }
  get tNaN() { return this.tbd.nan }
  get nNaN() { return this.nbd.nan }
  preStr(die, val) {
    const vdf = val - (die.s ?? 0), { tbd } = this
    return hslToInt(scale(vdf, die[0], tbd[0]), limFF(vdf, die[1], tbd[1]), limFF(vdf, die[2], tbd[2]))
  }
  preNum(die, val) {
    if (isNaN(val)) return this.tNaN
    if (this.uns || val < 0) {
      const vdf = val - (die.m ?? 0), { nbd } = this
      return hslToInt(scale(vdf, die[3], nbd[0]), limFF(vdf, die[4], nbd[1]), limFF(vdf, die[5], nbd[2]))
    }
    if (val > 0) {
      const vdf = val - (die.p ?? 0), { pbd } = this
      return hslToInt(scale(vdf, die[6], pbd[0]), limFF(vdf, die[7], pbd[1]), limFF(vdf, die[8], pbd[2]))
    }
    return this.nNaN
  }

  store(ts, ns, bd, x, i) {
    let c, t, n, g
    typeof x === NUM ? (t = '' + x, n = x, c = N) : (t = this.str(x), n = this.num(x), c = checkSub(n, t), g = hasAnsi(t))
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
    const bd = new Grad(this.uns)
    let wd = 0, i
    for (i = 0; i < cn; i++) if ((ws[i] = this.store(ts, ns, bd, vec[i], i)) > wd) wd = ws[i]
    for (i = 0, bd.lever(this, wd); i < cn; i++) ts[i] = this.render(bd, ts[i], ns[i])
    return ts
  }
  flatEntries(ent, pad) {
    let ht = ent.length, cn = ht << 1, kw = 0, vw = 0, i = -1
    const ts = Array(cn), ns = Array(cn), ws = ts.ws = Array(cn)
    const kd = new Grad(this.uns), vd = new Grad(this.uns)
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
    const kd = new Grad(this.uns), vd = new Grad(this.uns)
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
  flatMatrix(mat, dr) {
    if (dr === POINTWISE) return this.flatPoints(mat)
    if (dr === ROWWISE) return this.flatRows(mat)
    if (dr === COLUMNWISE) return this.flatColumns(mat)
    return this.flatPoints(mat)
  }
  flatPoints(mat) {
    const ht = height(mat), wd = width(mat), cn = ht * wd
    const ts = Array(cn), ns = Array(cn), xs = iso(ht, 0), ys = iso(wd, 0), bd = new Grad(this.uns)
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
    const ts = Array(cn), ns = Array(cn), xs = iso(ht, 0), ys = iso(wd, 0), bds = init(ht, () => new Grad(this.uns))
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
    const ts = Array(cn), ns = Array(cn), xs = iso(ht, 0), ys = iso(wd, 0), bds = init(wd, () => new Grad(this.uns))
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

  string(thres, str, id, sr) {
    const vec = splitLiteral(str)
    return Concat.string(this.flatVector(vec), '', thres, id, sr)
  }
  vector(thres, vec, id = 0, sr = 0) {
    const ts = this.flatVector(vec), count = vec?.length ?? 0
    if (count === 0) return '[]'
    if (thres > 0) return '[' + Concat.vector(ts, COSP, thres, id, sr) + ']'
    if (count === 1) return '[ ' + Concat.chain(ts, COSP) + ' ]'
    if (thres === 0) return '[' + LF + Concat.stand(ts, COLF, id + 2) + LF + tabs(id) + ']'
    return '[ ' + Concat.chain(ts, COSP) + ' ]'
  }
  object(thres, obj, id = 0, sr = 0) {
    let ts = this.flatObject(obj), count = ts.length
    if (count === 0) return '{}'
    if (thres > 0) return '{' + Concat.entries(ts, RTSP, COLF, thres, id, sr + 2) + '}'
    if (count === 2) return '{ ' + Concat.group(ts, RTSP, COSP, NONE, 2) + ' }'
    if (thres === 0) return '{' + LF + Concat.shape(ts, RTSP, COLF, NONE, 2, id + 2) + LF + tabs(id) + '}'
    return '{ ' + Concat.group(ts, RTSP, COSP, NONE, 2) + ' }'
  }
  entries(thres, ent, id = 0, sr = 0) {
    const count = ent?.length ?? 0, ts = this.flatEntries(ent, thres === 0 && count > 1)
    if (count === 0) return '[]'
    if (thres > 0) return '[' + Concat.entries(ts, COSP, COLF, thres, id, sr + 2) + ']'
    if (count === 2) return '[ ' + Concat.group(ts, COSP, COSP, BRACKET, 2) + ' ]'
    if (thres === 0) return '[' + LF + Concat.shape(ts, COSP, COLF, BRACKET, 2, id + 2) + LF + tabs(id) + ']'
    return '[ ' + Concat.group(ts, COSP, COSP, BRACKET, 2) + ' ]'
  }
  matrix(mat, direct, id = 0) {
    const ts = this.flatMatrix(mat, direct), count = ts?.length ?? 0, wd = width(mat)
    if (count <= wd) return '[[ ' + Concat.chain(ts, COSP) + ' ]]'
    return '[' + LF + Concat.shape(ts, COSP, COLF, BRACKET, wd, id + 2) + LF + tabs(id) + ']'
  }
}

