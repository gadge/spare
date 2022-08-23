import { value }   from '@texting/string-value'
import { compare } from '../target/utils/compare.js'

function onto(x, y, z, at) {
  this[at++] = x
  this[at++] = y
  this[at++] = z
  return this
}

export class Die {
  u
  s
  t
  m
  n
  p
  q
  w
  constructor(uns) { this.u = uns }
  static iso(uns) {
    const vec = Array(9)
    vec.u = !!uns
    return vec
  }
  lever(pro, w) {
    this.w = w
    if (pro.tbd && this.sx !== void 0) {
      this.s = value(this.sx, w), this.t = value(this.tx, w)
      const df = this.t - this.s, [ hb, sb, lb, hp, sp, lp ] = pro.tbd
      df ? onto.call(this, (hp - hb) / df, (sp - sb) / df, (lp - lb) / df, 0) : onto.call(this, 0, 0, 0, 0)
    }
    if (pro.nbd && this.m !== void 0) {
      const df = this.n - this.m, [ hb, sb, lb, hp, sp, lp ] = pro.nbd
      df ? onto.call(this, (hp - hb) / df, (sp - sb) / df, (lp - lb) / df, 3) : onto.call(this, 0, 0, 0, 3)
    }
    if (pro.pbd && this.p !== void 0) {
      const df = this.q - this.p, [ hb, sb, lb, hp, sp, lp ] = pro.pbd
      df ? onto.call(this, (hp - hb) / df, (sp - sb) / df, (lp - lb) / df, 6) : onto.call(this, 0, 0, 0, 6)
    }
    return this
  }
  noteStr(t) {
    return this.tx === void 0
      ? (this.tx = t, this.sx = t)
      : compare(t, this.sx) < 0 ? (this.sx = t) : compare(t, this.tx) > 0 ? (this.tx = t) : t
  }
  noteNum(v) {
    if (this.u) {
      return this.n === void 0
        ? (this.n = v, this.m = v)
        : v < this.m ? (this.m = v) : v > this.n ? (this.n = v) : v
    }
    else {
      if (v > 0) return this.p === void 0
        ? (this.p = this.q = v)
        : v < this.p ? (this.p = v) : v > this.q ? (this.q = v) : v
      if (v < 0) return this.m === void 0
        ? (this.m = this.n = v)
        : v < this.m ? (this.m = v) : v > this.n ? (this.n = v) : v
      return v
    }
  }
}