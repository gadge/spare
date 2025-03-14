import { modHsiTo, Presm } from '@palett/pres'
import { value }           from '@texting/string-value'
import { compare }         from './utils/compare.js'

function onto(i, x, y, z) {
  this[i++] = x
  this[i++] = y
  this[i++] = z
  return this
}

export class Grad {
  /** @type {boolean} unsigned mode: ignore pos/neg diff */ u
  /** @type {number} min x-axis value */ xb
  /** @type {number} max x-axis value */ xp
  /** @type {number} min y-axis value */ yb
  /** @type {number} max y-axis value */ yp
  /** @type {number} min z-axis value */ zb
  /** @type {number} max z-axis value */ zp
  /** @type {number} max width of ref str */ wd
  constructor(uns) { this.u = uns }
  static build(uns) {
    const vec = Array(9)
    vec.u = !!uns
    return vec
  }
  get xdf() { return this.xp - this.xb}
  get ydf() { return this.yp - this.yb }
  get zdf() { return this.zp - this.zb}

  /**
   * @param {Presm} presm preset(xb) to render string, negative and positive number values
   * @param {number} width width of string format of the value referenced
   * @returns {Grad}
   */
  lever(presm, width) {
    this.wd = width
    if (!presm) return this
    if (presm.hasX && this.xb !== void 0) {
      this.xb = value(this.xb, width), this.xp = value(this.xp, width)
      const df = this.xdf, [ dh, ds, dl ] = presm.xdf
      df ? onto.call(this, 0, dh / df, ds / df, dl / df) : onto.call(this, 0, 0, 0, 0)
    }
    if (presm.hasY && this.yb !== void 0) {
      const df = this.ydf, [ dh, ds, dl ] = presm.ydf
      df ? onto.call(this, 3, dh / df, ds / df, dl / df) : onto.call(this, 3, 0, 0, 0)
    }
    if (presm.hasZ && this.zb !== void 0) {
      const df = this.zdf, [ dh, ds, dl ] = presm.zdf
      df ? onto.call(this, 6, dh / df, ds / df, dl / df) : onto.call(this, 6, 0, 0, 0)
    }
    // console.log('presm', `x(${presm.hasX})`, presm.xdf, `y(${presm.hasY})`, presm.ydf, `z(${presm.hasZ})`, presm.zdf)
    // console.log(`grad(${this.wd})`, `x(${this.xdf})`, [ this[0], this[1], this[2] ], `y(${this.ydf})`, [ this[3], this[4], this[5] ], `z(${this.zdf})`, [ this[6], this[7], this[8] ])
    return this
  }
  recStr(t) {
    return this.xp === void 0
      ? (this.xp = t, this.xb = t)
      : compare(t, this.xb) < 0 ? (this.xb = t) : compare(t, this.xp) > 0 ? (this.xp = t) : t
  }
  recNum(v) {
    if (this.u) {
      return this.yp === void 0
        ? (this.yp = v, this.yb = v)
        : v < this.yb ? (this.yb = v) : v > this.yp ? (this.yp = v) : v
    } else {
      if (v < 0) return this.zb === void 0
        ? (this.zb = this.zp = v)
        : v < this.zb ? (this.zb = v) : v > this.zp ? (this.zp = v) : v
      if (v > 0) return this.yb === void 0
        ? (this.yb = this.yp = v)
        : v < this.yb ? (this.yb = v) : v > this.yp ? (this.yp = v) : v
      return v
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
