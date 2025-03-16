import { render }                         from '@palett/dye'
import { Presm }                          from '@palett/pres'
import { hasAnsi }                        from '@texting/charset-ansi'
import { lange, length }                  from '@texting/lange'
import { value }                          from '@texting/string-value'
import { NUM }                            from '@typen/enum-data-types'
import { parseNum }                       from '@typen/num-strict'
import { COLUMNWISE, POINTWISE, ROWWISE } from '@vect/enum-matrix-directions'
import { height, width }                  from '@vect/matrix-index'
import { init, iso }                      from '@vect/vector-init'
import { Grad }                           from './Grad.js'
import { id, Sub }                        from './Sub.js'
import { padAnsi, padTypo }               from './utils/padTypo.js'
import { prepStr }                        from './utils/prepStr.js'


const { Str: S, Num: N, Han: H, NaN: E } = Sub

export class Serial {
  /** @type {(x:string)=>string} evaluate string   */ str = prepStr
  /** @type {(x:number)=>number} evaluate number   */ num = parseNum
  /** @type {(x:string)=>number} get string length */ len = lange
  /** @type {(t:string,n:number,w:number)=>string} */ pad = padAnsi
  /** @type {Presm} string preset                  */ pres

  constructor(conf) {
    this.str = conf?.str ?? prepStr
    this.num = conf?.num ?? parseNum
    this.len = conf?.ansi !== false ? lange : length
    this.pad = conf?.fill ? conf.ansi ? padAnsi.bind(conf) : padTypo.bind(conf) : padAnsi
    this.pres = conf?.pres !== false ? conf.pres : undefined // if (o.attr) initAnsi.call(this, o.attr)
  }
  
  get noNeg() { return !this.pres?.hasZ }

  /**
   * x is string:
   *  x w/o ansi → rec n as undefined
   *  x w   ansi → rec n = null
   * x is number → rec n as number
   * x is NaN    → rec n as NaN
   */
  store(grad, tvs, nvs, x, i) {
    let c, t, n, woAn
    typeof x === NUM ? (t = '' + x, n = x, c = N) : (t = this.str(x), n = this.num(x), c = id(n, t), woAn = !hasAnsi(t))
    tvs[i] = (c === S || c === H) && woAn ? grad.recStr(t) : t
    nvs[i] = (c === S || c === H) ? (woAn ? undefined : null) : c === N ? grad.recNum(n) : NaN
    return this.len(t) // console.log('calling rec', 'tv', tvs[i], 'nv', nvs[i], 'gv', g)
  }

  render(grad, tv, nv, wd) {
    if (wd) tv = this.pad(tv, nv, wd) // console.log('calling render', 'tv', tv, 'nv', nv, 'grad.wd', grad.wd)
    if (nv === null) return tv
    const pres = this.pres
    if (nv === void 0) { return pres.hasX ? render.call(this, grad.rgiStr(this.pres, value(tv, grad.wd)), tv) : tv }
    if (!isNaN(nv)) return pres.hasY ? render.call(this, grad.rgiNum(this.pres, nv), tv) : tv
    return pres.hasX ? render.call(this, this.pres.nan, tv) : tv
  }

  vector(vec) {
    const len = vec.length, tvs = Array(len), nvs = Array(len), wds = tvs.wds = Array(len)
    const grad = new Grad(!this.pres?.hasZ)
    let wd = 0, i
    for (i = 0; i < len; i++) if ((wds[i] = this.store(grad, tvs, nvs, vec[i], i)) > wd) wd = wds[i]
    for (i = 0, grad.lever(this.pres, wd); i < len; i++) tvs[i] = this.render(grad, tvs[i], nvs[i])
    return tvs //console.log('tvs', tvs, 'nvs', nvs, 'wds', wds)
  }

  entries(ent, pad) {
    let ht = ent.length, cn = ht << 1, kw = 0, vw = 0, i = -1
    const tvs = Array(cn), nvs = Array(cn), wds = tvs.wds = Array(cn)
    const kgr = new Grad(!this.pres?.hasZ), vgr = new Grad(!this.pres?.hasZ)
    for (let [ key, val ] of ent) {
      if ((wds[++i] = this.store(kgr, tvs, nvs, key, i)) > kw) kw = wds[i]
      if ((wds[++i] = this.store(vgr, tvs, nvs, val, i)) > vw) vw = wds[i]
    }
    for (cn--, i = -1, kgr.lever(this.pres, kw), vgr.lever(this.pres, vw), kw = pad ? kw : 0, vw = pad ? vw : 0; i < cn;) {
      tvs[++i] = this.render(kgr, tvs[i], nvs[i], kw)
      tvs[++i] = this.render(vgr, tvs[i], nvs[i], vw)
    }
    return tvs
  }

  object(obj) {
    const tvs = [], nvs = [], wds = tvs.wds = []
    const kgr = new Grad(!this.pres?.hasZ), vgr = new Grad(!this.pres?.hasZ)
    let kw = 0, vw = 0, i = -1, hi
    for (let k in obj) {
      if ((wds[++i] = this.store(kgr, tvs, nvs, k, i)) > kw) kw = wds[i]
      if ((wds[++i] = this.store(vgr, tvs, nvs, obj[k], i)) > vw) vw = wds[i]
    }
    for (hi = i, i = -1, kgr.lever(this.pres, kw), vgr.lever(this.pres, vw); i < hi;) {
      tvs[++i] = this.render(kgr, tvs[i], nvs[i])
      tvs[++i] = this.render(vgr, tvs[i], nvs[i])
    }
    return tvs
  }

  matrix(mat, direct) {
    if (direct === POINTWISE) return this.points(mat)
    if (direct === ROWWISE) return this.rows(mat)
    if (direct === COLUMNWISE) return this.columns(mat)
    return this.points(mat)
  }

  points(mat) {
    const ht = height(mat), wd = width(mat), cn = ht * wd
    const tvs = Array(cn), nvs = Array(cn), xs = iso(ht, 0), ys = iso(wd, 0), grad = new Grad(!this.pres?.hasZ)
    let wp = 0
    for (let i = 0, p = 0; i < ht; i++) {
      for (let j = 0, r = mat[i], w; j < wd; j++) {
        w = this.store(grad, tvs, nvs, r[j], p++)
        if (w > xs[i]) xs[i] = w
        if (w > ys[j]) ys[j] = w
        if (w > wp) wp = w
      }
    }
    grad.lever(this.pres, wp) // console.log('tvs', tvs, 'nvs', nvs, 'rowwise widths', xs, 'columnwise widths', ys)
    for (let i = 0, p = 0; i < ht; i++) {
      for (let j = 0; j < wd; j++, p++) tvs[p] = this.render(grad, tvs[p], nvs[p], ys[j])
    }
    return tvs
  }

  rows(mat) {
    const ht = height(mat), wd = width(mat), cn = ht * wd
    const tvs = Array(cn), nvs = Array(cn), xs = iso(ht, 0), ys = iso(wd, 0),
      grads = init(ht, () => new Grad(!this.pres?.hasZ))
    for (let i = 0, p = 0; i < ht; i++) {
      for (let j = 0, r = mat[i], w; j < wd; j++) {
        w = this.store(grads[i], tvs, nvs, r[j], p++)
        if (w > xs[i]) xs[i] = w
        if (w > ys[j]) ys[j] = w
      }
    }
    for (let i = 0, p = 0; i < ht; i++) {
      grads[i].lever(this.pres, xs[i])
      for (let j = 0; j < wd; j++, p++) tvs[p] = this.render(grads[i], tvs[p], nvs[p], ys[j])
    }
    return tvs
  }

  columns(mat) {
    const ht = height(mat), wd = width(mat), cn = ht * wd
    const tvs = Array(cn), nvs = Array(cn), xs = iso(ht, 0), ys = iso(wd, 0),
      grads = init(wd, () => new Grad(!this.pres?.hasZ))
    for (let i = 0, p = 0; i < ht; i++) {
      for (let j = 0, r = mat[i], w; j < wd; j++) {
        w = this.store(grads[j], tvs, nvs, r[j], p++)
        if (w > xs[i]) xs[i] = w
        if (w > ys[j]) ys[j] = w
      }
    }
    for (let j = 0; j < wd; j++) grads[j].lever(this.pres, ys[j])
    for (let i = 0, p = 0; i < ht; i++) {
      for (let j = 0; j < wd; j++, p++) tvs[p] = this.render(grads[j], tvs[p], nvs[p], ys[j])
    }
    return tvs
  }
}

