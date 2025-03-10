import { oneself }             from '@ject/oneself'
import { Projec }              from '@palett/projector'
import { hasAnsi }             from '@texting/charset-ansi'
import { lange, length }       from '@texting/lange'
import { value }               from '@texting/string-value'
import { NUM, OBJ, STR, SYM }  from '@typen/enum-data-types'
import { isLiteral }           from '@typen/literal'
import { isNumeric, parseNum } from '@typen/num-strict'
import { height, width }       from '@vect/matrix-index'
import { draft }               from '@vect/matrix-init'
import { wind }                from '@vect/object-init'
import { max }                 from '@vect/vector-indicator'
import { init, iso }           from '@vect/vector-init'
import { Cate }                from '../../../deco/target/Cate.js'
import { Die }                 from '../../../deco/target/Die.js'
import { padAnsi, padTypo }    from '../../../deco/target/utils/padTypo.js'


export function parseStr(x) {
  const p = typeof x
  return x === null ? '' + x : p === OBJ || p === SYM ? x.toString() : p === STR ? x : '' + x
}

const { Str: S, Num: N, NaN: E } = Cate

export class Node {
  str = parseStr // parseStr
  num = parseNum // parseNum
  len = length
  pad = oneself
  val = value
  tpr = null
  npr = null
  ppr = null

  constructor(conf) {
    if (conf.#str) this.str = conf.#str
    if (conf.#num) this.num = conf.#num
    if (conf.ansi) this.len = lange
    if (conf.fill) this.pad = conf.ansi ? padTypo.bind(conf) : padAnsi.bind(conf)
    if (conf.value) this.val = value
    if (conf.pres) {
      if (conf.pres.#str) this.tpr = new Projec(conf.pres.#str)
      if (conf.pres.#num) this.npr = new Projec(conf.pres.#num)
      if (conf.pres.neg) this.npr = new Projec(conf.pres.neg)
      if (conf.pres.pos) this.ppr = new Projec(conf.pres.pos)
    }
  }

  get uns() { return !this.ppr }

  loadProj(bd, wd) {
    if (bd.sx !== void 0) { this.tpr.load(this.val(bd.sx, wd), this.val(bd.tx, wd)) }
    if (bd.n !== void 0) { this.npr.load(bd.m, bd.n) }
    if (bd.p !== void 0) { this.ppr.load(bd.p, bd.q) }
    return true
  }

  decode(x, i, on) {
    let t, n, c
    typeof x === NUM
      ? (n = x, t = '' + n, c = N)
      : (t = this.str(x), n = this.num(x), c = isNumeric(n) ? N : isLiteral(t) ? S : E)
    const w = this.len(t)
    on(t, n, c, w, i)
  }

  cast(x, i, ts, ns, cs, bd, wd) {
    let t, n, c
    typeof x === NUM
      ? (n = x, t = '' + n, c = N)
      : (t = this.str(x), n = this.num(x), c = isNumeric(n) ? N : isLiteral(t) ? S : E)
    cs[i] = c
    ts[i] = c === S ? bd.noteStr(t) : t
    ns[i] = c === N ? bd.noteNum(n) : void 0
    const w = this.len(t)
    if (w > wd) wd = w
    return wd
  }

  render(t, n, c, w) {
    if (hasAnsi(t)) return t
    if (c === N) {
      return this.ppr
        ? n > 0 ? this.ppr.render(n, t) : n < 0 ? this.npr.render(n, t) : this.ppr.render(NaN, t)
        : this.npr.render(n, t)
    }
    if (c === S) {
      return this.tpr.render(this.val(t, w), t)
    }
    return this.tpr.render(NaN, t)
  }

  vector(vec) {
    const hi = vec.length, bd = new Die(this.uns), ts = Array(hi), ns = Array(hi), cs = Array(hi)
    let wd = 0
    for (let i = 0; i < hi; i++) {
      wd = this.cast(vec[i], i, ts, ns, cs, bd, wd)
    }
    if (this.tpr && this.loadProj(bd, wd)) {
      for (let i = 0; i < hi; i++) ts[i] = this.render(ts[i], ns[i], cs[i], wd)
    }
    return ts
  }

  object(obj) {
    const kbd = new Die(this.uns), vbd = new Die(this.uns)
    const kts = [], kns = [], kcs = [], vts = [], vns = [], vcs = []
    let kwd = 0, vwd = 0, lo = 0
    for (let key in obj) {
      kwd = this.cast(key, lo, kts, kns, kcs, kbd, kwd)
      vwd = this.cast(obj[key], lo, vts, vns, vcs, vbd, vwd)
      lo++
    }
    if (this.tpr) {
      const target = Array(lo)
      this.loadProj(kbd, kwd)
      for (let i = 0; i < lo; i++) target[i] = [ this.render(kts[i], kns[i], kcs[i], kwd), void 0 ]
      this.loadProj(vbd, vwd)
      for (let i = 0; i < lo; i++) target[i][1] = this.render(vts[i], vns[i], vcs[i], vwd)
      return target
    }
    return wind(kts, vts)
  }

  entries(ent) {
    const hi = ent.length, kbd = new Die(this.uns), vbd = new Die(this.uns)
    const kts = Array(hi), kns = Array(hi), kcs = Array(hi), vts = Array(hi), vns = Array(hi), vcs = Array(hi)
    let kwd = 0, vwd = 0
    for (let i = 0, key, val; i < hi; i++) {
      [ key, val ] = ent[i]
      kwd = this.cast(key, i, kts, kns, kcs, kbd, kwd)
      vwd = this.cast(val, i, vts, vns, vcs, vbd, vwd)
    }
    if (this.tpr) {
      const target = Array(hi)
      this.loadProj(kbd, kwd)
      for (let i = 0; i < hi; i++) target[i] = [ this.render(kts[i], kns[i], kcs[i], kwd), void 0 ]
      this.loadProj(vbd, vwd)
      for (let i = 0; i < hi; i++) target[i][1] = this.render(vts[i], vns[i], vcs[i], vwd)
      return target
    }
    return wind(kts, vts)
  }


  matrix(mat) {
    const ht = height(mat), wd = width(mat)
    const bd = new Die(this.uns), ws = iso(wd, 0)
    const tx = draft(ht, wd), nx = draft(ht, wd), cx = draft(ht, wd)

    for (let i = 0, row, tr, nr, cr; i < ht; i++) {
      row = mat[i], tr = tx[i], nr = nx[i], cr = cx[i]
      for (let j = 0; j < wd; j++) {
        ws[j] = this.cast(row[j], j, tr, nr, cr, bd, ws[j])
      }
    }
    if (this.tpr && this.loadProj(bd, max(ws))) {
      for (let i = 0, ts, ns, cs; i < ht; i++) {
        ts = tx[i], ns = nx[i], cs = cx[i]
        for (let j = 0, t, n, w; j < wd; j++) {
          t = ts[j], n = ns[j], w = ws[j]
          ts[j] = this.render(this.pad(t, n, w), n, cs[j], w)
        }
      }
    }
    return tx
  }

  rows(mat) {
    const ht = height(mat), wd = width(mat), uns = this.uns
    const bs = init(ht, () => new Die(uns)), ws = iso(wd, 0)
    const tx = draft(ht, wd), nx = draft(ht, wd), cx = draft(ht, wd)
    for (let i = 0, row, tr, nr, cr, bd; i < ht; i++) {
      row = mat[i], tr = tx[i], nr = nx[i], cr = cx[i], bd = bs[i]
      for (let j = 0; j < wd; j++) {
        ws[j] = this.cast(row[j], j, tr, nr, cr, bd, ws[j])
      }
    }
    if (this.tpr) {
      for (let i = 0, ts, ns, cs, w = max(ws); i < ht; i++) {
        this.loadProj(bs[i], w), ts = tx[i], ns = nx[i], cs = cx[i]
        for (let j = 0, t, n, w; j < wd; j++) {
          t = ts[j], n = ns[j], w = ws[j]
          ts[j] = this.render(this.pad(t, n, w), n, cs[j], w)
        }
      }
    }
    return tx
  }

  columns(mat) {
    const ht = height(mat), wd = width(mat), uns = this.uns
    const bs = init(wd, () => new Die(uns)), ws = iso(wd, 0)
    const tcx = draft(wd, ht), ncx = draft(wd, ht), ccx = draft(wd, ht)
    for (let j = 0, tc, nc, cc, bd; j < wd; j++) {
      tc = tcx[j], nc = ncx[j], cc = ccx[j], bd = bs[j]
      for (let i = 0; i < ht; i++) {
        ws[j] = this.cast(mat[i][j], i, tc, nc, cc, bd, ws[j])
      }
    }
    const tmx = draft(ht, wd)
    if (this.tpr) {
      for (let j = 0, tc, nc, cc; j < wd; j++) {
        this.loadProj(bs[j], ws[j]), tc = tcx[j], nc = ncx[j], cc = ccx[j]
        for (let i = 0, t, n, w; i < ht; i++) {
          t = tc[i], n = nc[i], w = ws[j]
          tmx[i][j] = this.render(this.pad(t, n, w), n, cc[i], w)
        }
      }
    }
    return tmx
  }
}