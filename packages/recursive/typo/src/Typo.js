import { oneself }             from '@ject/oneself'
import { Projec }              from '@palett/projector'
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
import { Bound }               from './Bound.js'
import { Cate }                from './Cate.js'
import { fixPad, priPad }      from './padder.js'

export function parseStr(x) {
  const p = typeof x
  return x === null ? '' + x : p === OBJ || p === SYM ? x.toString() : p === STR ? x : '' + x
}

export class Typo {
  len = length
  pad = oneself
  val = value
  tpr = null
  npr = null
  ppr = null

  constructor(cfg) {
    this.len = cfg.ansi ? lange : length
    if (cfg.value) this.val = value
    if (cfg.fill) this.pad = cfg.ansi ? priPad.bind(cfg) : fixPad.bind(cfg)
    if (cfg.pres) {
      if (cfg.pres.str) this.tpr = new Projec(cfg.pres.str)
      if (cfg.pres.num) this.npr = new Projec(cfg.pres.num)
      if (cfg.pres.neg) this.npr = new Projec(cfg.pres.neg)
      if (cfg.pres.pos) this.ppr = new Projec(cfg.pres.pos)
    }
  }

  get signed() { return !!this.ppr }

  loadProj(bd, wd) {
    if (bd.tlo !== void 0 && bd.thi !== void 0) { this.tpr.load(this.val(bd.tlo, wd), this.val(bd.thi, wd)) }
    if (bd.nlo !== void 0 && bd.nhi !== void 0) { this.npr.load(bd.nlo, bd.nhi) }
    if (bd.plo !== void 0 && bd.phi !== void 0) { this.ppr.load(bd.plo, bd.phi) }
  }

  adv(x, on, i, j) {
    let t, n, c
    typeof x === NUM
      ? (n = x, t = '' + n, c = Cate.Num)
      : (t = parseStr(x), n = parseNum(x), c = isNumeric(n) ? Cate.Num : isLiteral(t) ? Cate.Str : Cate.NaN)
    const w = this.len(i)
    on(t, n, c, w, i, j)
  }

  render(t, n, c, w) {
    if (c === Cate.Num) {
      return this.ppr
        ? n > 0 ? this.ppr.render(n, t) : n < 0 ? this.npr.render(n, t) : this.ppr.render(NaN, t)
        : this.npr.render(n, t)
    }
    if (c === Cate.Str) {
      return this.tpr.render(this.val(t, w), t)
    }
    return this.tpr.render(NaN, t)
  }

  readVector(vec, action, size) {
    size = size ?? vec.length
    for (let i = 0; i < size; i++) {
      this.adv(vec[i], action, i)
    }
  }
  readMatrix(mat, action, ht, wd) {
    ht = ht ?? height(mat), wd = wd ?? width(mat)
    let x, t, n, c, w
    for (let i = 0; i < ht; i++) {
      const row = mat[i]
      for (let j = 0; j < wd; j++) {
        typeof (x = row[j]) === NUM
          ? (n = x, t = ('' + n), c = Cate.Num)
          : (t = parseStr(x), n = parseNum(x), c = isNumeric(n) ? Cate.Num : isLiteral(t) ? Cate.Str : Cate.NaN)
        w = this.len(t)
        action(t, n, c, w, i, j)
      }
    }
  }

  readEntries(ent, y, action, h) {
    h = h ?? ent.length
    for (let i = 0, kt, x, vt, vn, vc, kw, vw; i < h; i++) { // const lo = 0, hi = size, st = 0
      [ kt, x ] = ent[i]
      typeof (x) === NUM
        ? (vn = x, vt = ('' + vn), vc = Cate.Num)
        : (vt = parseStr(x), vn = parseNum(x), vc = isNumeric(vn) ? Cate.Num : isLiteral(vt) ? Cate.Str : Cate.NaN)
      kw = this.len(kt)
      vw = this.len(vt)
      this.adv(x, action, i)
      action(kt, vt, vn, vc, kw, vw, i)
    }
  }


  renderVector(vec) {
    const cn = vec.length, bd = new Bound(this.signed), ts = Array(cn), ns = Array(cn), cs = Array(cn)
    let wd = 0
    for (let i = 0; i < size; i++) {
      this.adv(vec[i], (t, n, c, w, i) => {
        cs[i] = c
        ts[i] = c === Cate.Str ? bd.noteStr(t) : t
        ns[i] = c === Cate.Num ? bd.noteNum(n) : void 0
        if (w > wd) wd = w
      }, i)
    }
    if (this.tpr) {
      this.loadProj(bd, wd)
      // if (this.pad) t = this.pad(t, n, w)
      for (let i = 0; i < cn; i++) ts[i] = this.render(ts[i], ns[i], cs[i], wd)
    }
    return ts
  }

  renderEntries(ent) {
    const cn = ent.length, kbd = new Bound(this.signed), vbd = new Bound(this.signed)
    const kts = Array(cn), vts = Array(cn), vns = Array(cn), vcs = Array(cn)
    let kwd = 0, vwd = 0
    this.readEntries(ent, (kt, vt, vn, vc, kw, vw, i) => {
      kts[i] = kbd.noteStr(kt)
      vcs[i] = vc
      vts[i] = vc === Cate.Str ? vbd.noteStr(vt) : vt
      vns[i] = vc === Cate.Num ? vbd.noteNum(vn) : void 0
      if (kw > kwd) kwd = kw
      if (vw > vwd) vwd = vw
    })
    if (this.tpr) {
      const tar = Array(cn)
      this.loadProj(kbd, kwd)
      for (let i = 0; i < cn; i++) tar[i] = [ this.render(kts[i], void 0, Cate.Str, kwd), void 0 ]
      this.loadProj(vbd, vwd)
      for (let i = 0; i < cn; i++) tar[i][1] = this.render(vts[i], vns[i], vcs[i], vwd)
      return
    }
    return wind(kts, vts)
  }

  renderMatrix(mat) {
    const ht = height(mat), wd = width(mat)
    const bd = new Bound(this.signed), ws = iso(wd, 0)
    const tx = draft(ht, wd), nx = draft(ht, wd), cx = draft(ht, wd)
    this.readMatrix(mat, (t, n, c, w, i, j) => {
      cx[i][j] = c
      tx[i][j] = c === Cate.Str ? bd.noteStr(t) : t
      nx[i][j] = c === Cate.Num ? bd.noteNum(n) : void 0
      if (w > ws[j]) ws[j] = w
    })
    if (this.tpr) {
      this.loadProj(bd, max(ws))
      for (let i = 0, j, ts, ns, cs; i < ht; i++) {
        for (j = 0, ts = tx[i], ns = nx[i], cs = cx[i]; j < wd; j++) {
          ts[j] = this.render(ts[j], ns[j], cs[j], ws[j])
        }
      }
    }
    return tx
  }

  renderRows(mat) {
    const ht = height(mat), wd = width(mat), sg = this.signed
    const bs = init(ht, () => new Bound(sg)), ws = iso(wd, 0)
    const tx = draft(ht, wd), nx = draft(ht, wd), cx = draft(ht, wd)
    this.readMatrix(mat, (t, n, c, w, i, j) => {
      cx[i][j] = c
      tx[i][j] = c === Cate.Str ? bs[i].noteStr(t) : t
      nx[i][j] = c === Cate.Num ? bs[i].noteNum(n) : void 0
      if (w > ws[j]) ws[j] = w
    })
    if (this.tpr) {
      for (let i = 0, j, ts, ns, cs, w = max(ws); i < ht; i++) {
        this.loadProj(bs[i], w)
        for (j = 0, ts = tx[i], ns = nx[i], cs = cx[i]; j < wd; j++) {
          ts[j] = this.render(ts[j], ns[j], cs[j], ws[j])
        }
      }
    }
    return tx
  }

  renderColumns(mat) {
    const ht = height(mat), wd = width(mat), sg = this.signed
    const bs = init(wd, () => new Bound(sg)), ws = iso(wd, 0)
    const tx = draft(wd, ht), nx = draft(wd, ht), cx = draft(wd, ht)
    this.readMatrix(mat, (t, n, c, w, i, j) => {
      cx[j][i] = c
      tx[j][i] = c === Cate.Str ? bs[j].noteStr(t) : t
      nx[j][i] = c === Cate.Num ? bs[j].noteNum(n) : void 0
      if (w > ws[j]) ws[j] = w
    })
    const tar = draft(ht, wd)
    if (this.tpr) {
      for (let j = 0, i, ts, ns, cs; j < wd; j++) {
        this.loadProj(bs[j], ws[j])
        for (i = 0, ts = tx[j], ns = nx[j], cs = cx[j]; i < ht; i++) {
          tar[i][j] = this.render(ts[i], ns[i], cs[i], ws[j])
        }
      }
    }
    return tar
  }
}