import { render }                         from '@palett/dye'
import { Presm }                          from '@palett/pres'
import { hasAnsi }                        from '@texting/charset-ansi'
import { BRACKET, NONE }                  from '@texting/enum-brackets'
import { COLF, COSP, LF, RTSP, SP }       from '@texting/enum-chars'
import { lange, length }                  from '@texting/lange'
import { splitLiteral }                   from '@texting/splitter'
import { value }                          from '@texting/string-value'
import { NUM }                            from '@typen/enum-data-types'
import { parseNum }                       from '@typen/num-strict'
import { COLUMNWISE, POINTWISE, ROWWISE } from '@vect/enum-matrix-directions'
import { height, width }                  from '@vect/matrix-index'
import { init, iso }                      from '@vect/vector-init'
import { Fold, tabs }                     from './Fold.js'
import { Grad }                           from './Grad.js'
import { detSub, Sub }                    from './Sub.js'
import { evalStr }                        from './utils/evalStr.js'
import { initAnsi }                       from './utils/initAnsi.js'
import { padAnsi, padTypo }               from './utils/padTypo.js'


const { Str: S, Num: N, Han: H, NaN: E } = Sub

export class Node {
  /** @type {(x:string)=>string} evaluate string   */ #tev = evalStr
  /** @type {(x:number)=>number} evaluate number   */ #nev = parseNum
  /** @type {(x:string)=>number} get string length */ #len = lange
  /** @type {(t:string,n:number,w:number)=>string} */ #pad = padAnsi
  /** @type {Presm} string preset                  */ #psm

  constructor(conf) {
    this.#tev = conf?.tev ?? evalStr
    this.#nev = conf?.nev ?? parseNum
    this.#len = conf?.ansi !== false ? lange : length
    this.#pad = conf?.fill
      ? conf.ansi ? conf.fill === SP ? padAnsi : padAnsi.bind(conf) : conf.fill === SP ? padTypo : padTypo.bind(conf)
      : padAnsi
    this.presm = conf?.pres !== false ? conf.pres : undefined // if (o.attr) initAnsi.call(this, o.attr)

  }

  get presm() { return this.#psm }
  set presm(o) {
    if (!o) return
    if (o.attr) initAnsi.call(this, o.attr)
    this.#psm = o
  }

  get mono() { return !this.presm?.hasX }
  get uns() { return !this.presm?.hasZ }

  /**
   * x is string:
   *  x w/o ansi → store n as undefined
   *  x w   ansi → store n = null
   * x is number → store n as number
   * x is NaN    → store n as NaN
   */
  store(grad, tvs, nvs, x, i) {
    let c, t, n, woAn
    typeof x === NUM ? (t = '' + x, n = x, c = N) : (t = this.#tev(x), n = this.#nev(x), c = detSub(n, t), woAn = !hasAnsi(t))
    tvs[i] = (c === S || c === H) && woAn ? grad.recStr(t) : t
    nvs[i] = (c === S || c === H) ? (woAn ? undefined : null) : c === N ? grad.recNum(n) : NaN
    return this.#len(t) // console.log('calling store', 'tv', tvs[i], 'nv', nvs[i], 'gv', g)
  }

  render(grad, tv, nv, wd) {
    // console.log('calling render', 'tv', tv, 'nv', nv, 'grad.wd', grad.wd)
    if (wd) tv = this.#pad(tv, nv, wd)
    if (this.mono || nv === null) return tv
    const presm = this.presm
    if (nv === void 0) { // console.log('calling rgistr', 'tv', tv, 'grad.wd', grad.wd)
      return presm.hasX ? render.call(this, grad.rgiStr(this.presm, value(tv, grad.wd)), tv) : tv
    }
    if (!isNaN(nv)) return presm.hasY ? render.call(this, grad.rgiNum(this.presm, nv), tv) : tv
    return presm.hasX ? render.call(this, this.presm.nan, tv) : tv
  }

  /**
   * @param {string} str input string
   * @param {number} thr width of each line
   * @param {number} ind indent
   * @param {number} sur surge
   * @return {string}
   */
  string(str, thr, ind, sur) {
    const vec = splitLiteral(str)
    if (!vec.length) return ''
    return Fold.string(this.flatVector(vec), '', thr, ind, sur)
  }

  vector(vec, thr, ind = 0, sur = 0) {
    const tvs = this.flatVector(vec), len = vec?.length ?? 0
    if (len === 0) return '[]'
    if (thr > 0) return '[' + Fold.vector(tvs, COSP, thr, ind, sur) + ']'
    if (len === 1) return '[ ' + Fold.chain(tvs, COSP) + ' ]'
    if (thr === 0) return '[' + LF + Fold.stand(tvs, COLF, ind + 2) + LF + tabs(ind) + ']'
    return '[ ' + Fold.chain(tvs, COSP) + ' ]'
  }

  object(obj, thr, ind = 0, sur = 0) {
    let tvs = this.flatObject(obj), len = tvs.length
    if (len === 0) return '{}'
    if (thr > 0) return '{' + Fold.entries(tvs, RTSP, COLF, thr, ind, sur + 2) + '}'
    if (len === 2) return '{ ' + Fold.group(tvs, RTSP, COSP, NONE, 2) + ' }'
    if (thr === 0) return '{' + LF + Fold.shape(tvs, RTSP, COLF, NONE, 2, ind + 2) + LF + tabs(ind) + '}'
    return '{ ' + Fold.group(tvs, RTSP, COSP, NONE, 2) + ' }'
  }

  entries(ent, thr, ind = 0, sur = 0) {
    const len = ent?.length ?? 0, tvs = this.flatEntries(ent, thr === 0 && len > 1)
    if (len === 0) return '[]'
    if (thr > 0) return '[' + Fold.entries(tvs, COSP, COLF, thr, ind, sur + 2) + ']'
    if (len === 2) return '[ ' + Fold.group(tvs, COSP, COSP, BRACKET, 2) + ' ]'
    if (thr === 0) return '[' + LF + Fold.shape(tvs, COSP, COLF, BRACKET, 2, ind + 2) + LF + tabs(ind) + ']'
    return '[ ' + Fold.group(tvs, COSP, COSP, BRACKET, 2) + ' ]'
  }

  matrix(mat, direct, ind = 0) {
    const tvs = this.flatMatrix(mat, direct), len = tvs?.length ?? 0, wd = width(mat)
    if (len <= wd) return '[[ ' + Fold.chain(tvs, COSP) + ' ]]'
    return '[' + LF + Fold.shape(tvs, COSP, COLF, BRACKET, wd, ind + 2) + LF + tabs(ind) + ']'
  }

  flatVector(vec) {
    const len = vec.length, tvs = Array(len), nvs = Array(len), wds = tvs.wds = Array(len)
    const grad = new Grad(this.uns)
    let wd = 0, i
    for (i = 0; i < len; i++) if ((wds[i] = this.store(grad, tvs, nvs, vec[i], i)) > wd) wd = wds[i]
    for (i = 0, grad.lever(this.presm, wd); i < len; i++) tvs[i] = this.render(grad, tvs[i], nvs[i])
    return tvs //console.log('tvs', tvs, 'nvs', nvs, 'wds', wds)
  }

  flatEntries(ent, pad) {
    let ht = ent.length, cn = ht << 1, kw = 0, vw = 0, i = -1
    const tvs = Array(cn), nvs = Array(cn), wds = tvs.wds = Array(cn)
    const kgr = new Grad(this.uns), vgr = new Grad(this.uns)
    for (let [ key, val ] of ent) {
      if ((wds[++i] = this.store(kgr, tvs, nvs, key, i)) > kw) kw = wds[i]
      if ((wds[++i] = this.store(vgr, tvs, nvs, val, i)) > vw) vw = wds[i]
    }
    for (cn--, i = -1, kgr.lever(this.presm, kw), vgr.lever(this.presm, vw), kw = pad ? kw : 0, vw = pad ? vw : 0; i < cn;) {
      tvs[++i] = this.render(kgr, tvs[i], nvs[i], kw)
      tvs[++i] = this.render(vgr, tvs[i], nvs[i], vw)
    }
    return tvs
  }

  flatObject(obj) {
    const tvs = [], nvs = [], wds = tvs.wds = []
    const kgr = new Grad(this.uns), vgr = new Grad(this.uns)
    let kw = 0, vw = 0, i = -1, hi
    for (let k in obj) {
      if ((wds[++i] = this.store(kgr, tvs, nvs, k, i)) > kw) kw = wds[i]
      if ((wds[++i] = this.store(vgr, tvs, nvs, obj[k], i)) > vw) vw = wds[i]
    }
    for (hi = i, i = -1, kgr.lever(this.presm, kw), vgr.lever(this.presm, vw); i < hi;) {
      tvs[++i] = this.render(kgr, tvs[i], nvs[i])
      tvs[++i] = this.render(vgr, tvs[i], nvs[i])
    }
    return tvs
  }

  flatMatrix(mat, direct) {
    if (direct === POINTWISE) return this.flatPoints(mat)
    if (direct === ROWWISE) return this.flatRows(mat)
    if (direct === COLUMNWISE) return this.flatColumns(mat)
    return this.flatPoints(mat)
  }

  flatPoints(mat) {
    const ht = height(mat), wd = width(mat), cn = ht * wd
    const tvs = Array(cn), nvs = Array(cn), xs = iso(ht, 0), ys = iso(wd, 0), grad = new Grad(this.uns)
    let wp = 0
    for (let i = 0, p = 0; i < ht; i++) {
      for (let j = 0, r = mat[i], w; j < wd; j++) {
        w = this.store(grad, tvs, nvs, r[j], p++)
        if (w > xs[i]) xs[i] = w
        if (w > ys[j]) ys[j] = w
        if (w > wp) wp = w
      }
    }
    grad.lever(this.presm, wp) // console.log('tvs', tvs, 'nvs', nvs, 'rowwise widths', xs, 'columnwise widths', ys)
    for (let i = 0, p = 0; i < ht; i++) {
      for (let j = 0; j < wd; j++, p++) tvs[p] = this.render(grad, tvs[p], nvs[p], ys[j])
    }
    return tvs
  }

  flatRows(mat) {
    const ht = height(mat), wd = width(mat), cn = ht * wd
    const tvs = Array(cn), nvs = Array(cn), xs = iso(ht, 0), ys = iso(wd, 0), grads = init(ht, () => new Grad(this.uns))
    for (let i = 0, p = 0; i < ht; i++) {
      for (let j = 0, r = mat[i], w; j < wd; j++) {
        w = this.store(grads[i], tvs, nvs, r[j], p++)
        if (w > xs[i]) xs[i] = w
        if (w > ys[j]) ys[j] = w
      }
    }
    for (let i = 0, p = 0; i < ht; i++) {
      grads[i].lever(this.presm, xs[i])
      for (let j = 0; j < wd; j++, p++) tvs[p] = this.render(grads[i], tvs[p], nvs[p], ys[j])
    }
    return tvs
  }

  flatColumns(mat) {
    const ht = height(mat), wd = width(mat), cn = ht * wd
    const tvs = Array(cn), nvs = Array(cn), xs = iso(ht, 0), ys = iso(wd, 0), grads = init(wd, () => new Grad(this.uns))
    for (let i = 0, p = 0; i < ht; i++) {
      for (let j = 0, r = mat[i], w; j < wd; j++) {
        w = this.store(grads[j], tvs, nvs, r[j], p++)
        if (w > xs[i]) xs[i] = w
        if (w > ys[j]) ys[j] = w
      }
    }
    for (let j = 0; j < wd; j++) grads[j].lever(this.presm, ys[j])
    for (let i = 0, p = 0; i < ht; i++) {
      for (let j = 0; j < wd; j++, p++) tvs[p] = this.render(grads[j], tvs[p], nvs[p], ys[j])
    }
    return tvs
  }
}

