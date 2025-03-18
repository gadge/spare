import { modHsiTo } from '@palett/pres';
import { hasAnsi } from '@texting/charset-ansi';
import { lange } from '@texting/lange';
import { value } from '@texting/string-value';
import { OBJ, SYM, STR, NUM } from '@typen/enum-data-types';
import { hasFull } from '@texting/charset-fullwidth';
import { isLiteral } from '@typen/literal';
import { isNumeric } from '@typen/num-strict';
import { render } from '@palett/dye';
import { SP } from '@texting/enum-chars';
import { rpad, lpad, fix } from '@texting/padder';
import { splitLiteral } from '@texting/splitter';
import { POINTWISE, ROWWISE, COLUMNWISE } from '@vect/enum-matrix-directions';
import { height, width } from '@vect/matrix-index';
import { iso, init } from '@vect/vector-init';

/** @type {function} */
const compare = Function.prototype.call.bind(String.prototype.localeCompare);

function onto(i, x, y, z) {
  this[i++] = x;
  this[i++] = y;
  this[i++] = z;
  return this
}

// export class Sub {
//   static Num = 0b0
//   static Str = 0b1
//   static Han = 0b10
//   static NaN = 0b11
// }

class Sub {
  static NaN = 0b00  // 0
  static Num = 0b01  // 1
  static Str = 0b10  // 2
  static Han = 0b11  // 3
}

function id(n, t) {
  return isNumeric(n) ? 1 : isLiteral(t) ? 2 : hasFull(t) ? 3 : 0
}

function str(x) {
  const p = typeof x;
  if (x === null) return '' + x
  if (p === OBJ || p === SYM) return x.toString()
  if (p === STR) return x
  return '' + x
}

function num(x) {
  const y = parseFloat(x);
  return isNaN(x - y) ? NaN : y
}

const { Num: N} = Sub;

class Grad {
  /** @type {number} dimension info   */ dm
  /** @type {number} max width of str */ wd
  /** @type {number} min x-axis value */ xb
  /** @type {number} max x-axis value */ xp
  /** @type {number} min y-axis value */ yb
  /** @type {number} max y-axis value */ yp
  /** @type {number} min z-axis value */ zb
  /** @type {number} max z-axis value */ zp
  constructor(dm) {
    this.dm = dm;
    this.wd = 0;
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
    this.wd = width;
    if (!presm) return this
    if (presm.hasX && this.xb !== undefined) {
      this.xb = value(this.xb, width), this.xp = value(this.xp, width);
      const df = this.xdf, [ dh, ds, dl ] = presm.xdf;
      df ? onto.call(this, 0, dh / df, ds / df, dl / df) : onto.call(this, 0, 0, 0, 0);
    }
    if (presm.hasY && this.yb !== undefined) {
      const df = this.ydf, [ dh, ds, dl ] = presm.ydf;
      df ? onto.call(this, 3, dh / df, ds / df, dl / df) : onto.call(this, 3, 0, 0, 0);
    }
    if (presm.hasZ && this.zb !== undefined) {
      const df = this.zdf, [ dh, ds, dl ] = presm.zdf;
      df ? onto.call(this, 6, dh / df, ds / df, dl / df) : onto.call(this, 6, 0, 0, 0);
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
    let st, tx, nv, an;
    typeof x === NUM ? (tx = '' + x, nv = x, st = N) : (tx = str(x), nv = num(x), st = id(nv, tx), an = hasAnsi(tx));
    tvs[i] = (st >> 1) && !an ? this.recStr(tx) : tx;
    nvs[i] = (st >> 1) ? (!an ? undefined : null) : st === N ? this.recNum(nv) : NaN;
    return lange(tx) // console.log('calling rec', 'subtype', st, st >> 1, 'tx', tvs[i], 'nv', nvs[i], 'an', an)
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
    const df = val - (this.xb ?? 0); // console.log(val, 'df', df, 'dh', df * this[0], 'ds', df * this[1], 'dl', df * this[2])
    return modHsiTo(presm[0], df * this[0], df * this[1], df * this[2])
  }
  rgiNum(presm, val) {
    if (isNaN(val)) return presm.nan
    if (!presm.hasZ || val > 0) {
      const df = val - (this.yb ?? 0);
      return modHsiTo(presm[2], df * this[3], df * this[4], df * this[5])
    }
    if (val < 0) {
      const df = val - (this.zb ?? 0);
      return modHsiTo(presm[4], df * this[6], df * this[7], df * this[8])
    }
    return presm.nan
  }
}

/**
 * Pads a string containing ANSI escape codes with a specified fill character to a given width, either on the left or right.
 *
 * @param {string} t - The string to pad, potentially containing ANSI escape codes.
 * @param {number} n - A number that determines the padding direction. If NaN, pads on the right; otherwise, pads on the left.
 * @param {number} w - The desired width of the padded string.
 * @returns {string} The padded string.
 * @example
 * padAnsi('\u001b[31mhello\u001b[39m', NaN, 10) // returns '\u001b[31mhello\u001b[39m     '
 * padAnsi('\u001b[31mhello\u001b[39m', 1, 10) // returns '     \u001b[31mhello\u001b[39m'
 */
function padAnsi(t, n, w) {
  const fill = this?.fill ?? SP;
  return isNaN(n) ? rpad(t, fix(t, w), fill) : lpad(t, fix(t, w), fill)
}

/** @type {(t:string,n:number,w:number)=>string} */ const pad = padAnsi;

function rend(grad, tv, nv, wd) {
  const presm = this;
  if (wd) tv = pad(tv, nv, wd); // console.log('calling render', 'tv', tv, 'nv', nv, 'grad.wd', grad.wd)
  if (!presm || nv === null) return tv // nv === null → is string && has ansi
  if (nv === undefined) return presm.hasX ? render.call(this, grad.rgiStr(presm, value(tv, grad.wd)), tv) : tv
  if (!isNaN(nv)) return presm.hasY ? render.call(this, grad.rgiNum(presm, nv), tv) : tv
  return presm.hasX ? render.call(this, presm.nan, tv) : tv
}

function entries(ent, pad) {
  const presm = this;
  let ht = ent.length, cn = ht << 1, kw = 0, vw = 0, i = -1;
  const series = Array(cn), values = Array(cn), widths = series.wds = Array(cn);
  if (!ht) return series
  const kgr = new Grad(presm?.dim), vgr = new Grad(presm?.dim);
  for (let [ key, val ] of ent) {
    if ((widths[++i] = kgr.rec(series, values, key, i)) > kw) kw = widths[i];
    if ((widths[++i] = vgr.rec(series, values, val, i)) > vw) vw = widths[i];
  }
  kgr.lever(presm, kw);
  vgr.lever(presm, vw);
  for (cn--, i = -1, kw = pad ? kw : 0, vw = pad ? vw : 0; i < cn;) {
    series[++i] = rend.call(presm, kgr, series[i], values[i], kw);
    series[++i] = rend.call(presm, vgr, series[i], values[i], vw);
  }
  return series
}

function object(obj) {
  const presm = this;
  const series = [], values = [], widths = series.wds = [];
  const kgr = new Grad(presm?.dim), vgr = new Grad(presm?.dim);
  let kw = 0, vw = 0, i = -1, hi;
  for (let k in obj) {
    if ((widths[++i] = kgr.rec(series, values, k, i)) > kw) kw = widths[i];
    if ((widths[++i] = vgr.rec(series, values, obj[k], i)) > vw) vw = widths[i];
  }
  if (i <= 0) return series
  kgr.lever(presm, kw);
  vgr.lever(presm, vw);
  for (hi = i, i = -1; i < hi;) {
    series[++i] = rend.call(presm, kgr, series[i], values[i]);
    series[++i] = rend.call(presm, vgr, series[i], values[i]);
  }
  return series
}

function vector(vec) {
  /** @type {Presm} */
  const presm = this;
  const len = vec.length, series = Array(len), widths = series.wds = Array(len);
  if (!len) return series
  const values = Array(len), grad = new Grad(presm?.dim);
  let wd = 0, i;
  for (i = 0; i < len; i++) if ((widths[i] = grad.rec(series, values, vec[i], i)) > wd) wd = widths[i];
  grad.lever(presm, wd);
  for (i = 0; i < len; i++) series[i] = rend.call(presm, grad, series[i], values[i]);
  return series //console.log('tvs', tvs, 'nvs', nvs, 'wds', wds)
}

function string(str) {
  const arr = splitLiteral(str);
  return vector.call(this, arr)
}

function matrix(mat, direct) {
  if (direct === POINTWISE) return points.call(this, mat)
  if (direct === ROWWISE) return rows.call(this, mat)
  if (direct === COLUMNWISE) return columns.call(this, mat)
  return points.call(this, mat)
}

function points(mat) {
  const presm = this;
  const ht = height(mat), wd = width(mat), cn = ht * wd;
  const series = Array(cn), values = Array(cn), xs = iso(ht, 0), ys = iso(wd, 0);
  const grad = new Grad(presm?.dim);
  let wp = 0;
  for (let i = 0, p = 0; i < ht; i++) {
    for (let j = 0, r = mat[i], w; j < wd; j++) {
      w = grad.rec(series, values, r[j], p++);
      if (w > xs[i]) xs[i] = w;
      if (w > ys[j]) ys[j] = w;
      if (w > wp) wp = w;
    }
  }
  grad.lever(presm, wp); // console.log('series', series, 'values', values, 'rowwise widths', xs, 'columnwise widths', ys)
  for (let i = 0, p = 0; i < ht; i++)
    for (let j = 0; j < wd; j++, p++)
      series[p] = rend.call(presm, grad, series[p], values[p], ys[j]);
  return series
}

function rows(mat) {
  const presm = this;
  const ht = height(mat), wd = width(mat), cn = ht * wd;
  const series = Array(cn), values = Array(cn), xs = iso(ht, 0), ys = iso(wd, 0);
  const grads = init(ht, () => new Grad(presm?.dim));
  for (let i = 0, p = 0; i < ht; i++) {
    for (let j = 0, r = mat[i], w; j < wd; j++) {
      w = grads[i].rec(series, values, r[j], p++);
      if (w > xs[i]) xs[i] = w;
      if (w > ys[j]) ys[j] = w;
    }
  }
  for (let i = 0, p = 0; i < ht; i++) {
    grads[i].lever(presm, xs[i]);
    for (let j = 0; j < wd; j++, p++)
      series[p] = rend.call(presm, grads[i], series[p], values[p], ys[j]);
  }
  return series
}

function columns(mat) {
  const presm = this;
  const ht = height(mat), wd = width(mat), cn = ht * wd;
  const series = Array(cn), values = Array(cn), xs = iso(ht, 0), ys = iso(wd, 0);
  const grads = init(wd, () => new Grad(presm?.dim));
  for (let i = 0, p = 0; i < ht; i++) {
    for (let j = 0, r = mat[i], w; j < wd; j++) {
      w = grads[j].rec(series, values, r[j], p++);
      if (w > xs[i]) xs[i] = w;
      if (w > ys[j]) ys[j] = w;
    }
  }
  for (let j = 0; j < wd; j++) grads[j].lever(presm, ys[j]);
  for (let i = 0, p = 0; i < ht; i++)
    for (let j = 0; j < wd; j++, p++)
      series[p] = rend.call(presm, grads[j], series[p], values[p], ys[j]);
  return series
}

export { Grad, columns, entries, matrix, object, points, rend, rows, columns as serialColumns, entries as serialEntries, matrix as serialMatrix, object as serialObject, points as serialPoints, rows as serialRows, string as serialString, vector as serialVector, string, vector };
