import { modHsiTo }     from '@palett/pres'
import { hasAnsi }      from '@texting/charset-ansi'
import { lange as len } from '@texting/lange'
import { value }        from '@texting/string-value'
import { NUM }          from '@typen/enum-data-types'
import { compare }      from './utils/compare.js'
import { onto }         from './utils/onto.js'
import { id, Sub }      from './utils/Sub.js'
import { num, str }     from './utils/validate.js'

const { NaN: E, Num: N, Str: S, Han: H } = Sub

export class Grad {
  /** @type {number} dimension info   */ dm
  /** @type {number} max width of str */ wd
  /** @type {number} min x-axis value */ xb
  /** @type {number} max x-axis value */ xp
  /** @type {number} min y-axis value */ yb
  /** @type {number} max y-axis value */ yp
  /** @type {number} min z-axis value */ zb
  /** @type {number} max z-axis value */ zp
  constructor(dm) {
    this.dm = dm
    this.wd = 0
  }
  static build(dm) { return new Grad(dm) }

  get xdf() { return this.xp - this.xb}
  get ydf() { return this.yp - this.yb }
  get zdf() { return this.zp - this.zb}

  // get hasX() { return this.dm >> 0 & 0b1 }
  // get hasY() { return this.dm >> 1 & 0b1 }
  // get hasZ() { return this.dm >> 2 & 0b1 }

  /**
   * @param {Presm} presm preset(xb) to render string, negative and positive number values
   * @param {number} width width of string format of the value referenced
   * @returns {Grad}
   */
  lever(presm, width) {
    this.wd = width
    if (!presm) return this
    if (presm.hasX && this.xb !== undefined) {
      this.xb = value(this.xb, width), this.xp = value(this.xp, width)
      const df = this.xdf, [ dh, ds, dl ] = presm.xdf
      df ? onto.call(this, 0, dh / df, ds / df, dl / df) : onto.call(this, 0, 0, 0, 0)
    }
    if (presm.hasY && this.yb !== undefined) {
      const df = this.ydf, [ dh, ds, dl ] = presm.ydf
      df ? onto.call(this, 3, dh / df, ds / df, dl / df) : onto.call(this, 3, 0, 0, 0)
    }
    if (presm.hasZ && this.zb !== undefined) {
      const df = this.zdf, [ dh, ds, dl ] = presm.zdf
      df ? onto.call(this, 6, dh / df, ds / df, dl / df) : onto.call(this, 6, 0, 0, 0)
    }
    // console.log('presm', `x(${presm.hasX})`, presm.xdf, `y(${presm.hasY})`, presm.ydf, `z(${presm.hasZ})`, presm.zdf)
    // console.log(`grad(${this.wd})`, `x(${this.xdf})`, [ this[0], this[1], this[2] ], `y(${this.ydf})`, [ this[3], this[4], this[5] ], `z(${this.zdf})`, [ this[6], this[7], this[8] ])
    return this
  }

  /**
   * x is string:
   *  x w/o ansi → rec n as undefined
   *  x w   ansi → rec n = null
   * x is number → rec n as number
   * x is NaN    → rec n as NaN
   */
  rec(tvs, nvs, x, i) {
    let st, tx, nv, an
    typeof x === NUM ? (tx = '' + x, nv = x, st = N) : (tx = str(x), nv = num(x), st = id(nv, tx), an = hasAnsi(tx))
    tvs[i] = (st >> 1) && !an ? this.recStr(tx) : tx
    nvs[i] = (st >> 1) ? (!an ? undefined : null) : st === N ? this.recNum(nv) : NaN
    return len(tx) // console.log('calling rec', 'subtype', st, st >> 1, 'tx', tvs[i], 'nv', nvs[i], 'an', an)
  }
  recStr(t) {
    return this.xp === undefined
      ? (this.xp = t, this.xb = t)
      : compare(t, this.xb) < 0 ? (this.xb = t) : compare(t, this.xp) > 0 ? (this.xp = t) : t
  }
  recNum(v) {
    if (this.dm >> 2 & 0b1) {
      if (v < 0) return this.zb === undefined
        ? (this.zb = this.zp = v)
        : v < this.zb ? (this.zb = v) : v > this.zp ? (this.zp = v) : v
      if (v > 0) return this.yb === undefined
        ? (this.yb = this.yp = v)
        : v < this.yb ? (this.yb = v) : v > this.yp ? (this.yp = v) : v
      return v
    } else {
      return this.yp === undefined
        ? (this.yp = v, this.yb = v)
        : v < this.yb ? (this.yb = v) : v > this.yp ? (this.yp = v) : v
    }
  }
  rgiStr(presm, val) {
    const df = val - (this.xb ?? 0) // console.log(val, 'df', df, 'dh', df * this[0], 'ds', df * this[1], 'dl', df * this[2])
    return modHsiTo(presm[0], df * this[0], df * this[1], df * this[2])
  }
  rgiNum(presm, val) {
    if (isNaN(val)) return presm.nan
    if (!presm.hasZ || val > 0) {
      const df = val - (this.yb ?? 0)
      return modHsiTo(presm[2], df * this[3], df * this[4], df * this[5])
    }
    if (val < 0) {
      const df = val - (this.zb ?? 0)
      return modHsiTo(presm[4], df * this[6], df * this[7], df * this[8])
    }
    return presm.nan
  }
}
