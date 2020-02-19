import { totx, AEU, RN } from '@spare/util';
import { padMx } from '@spare/preci';
import { FRESH } from '@palett/presets';
import { ROWWISE, size as size$1 } from '@vect/matrix';
import { Max } from '@vect/columns-indicator';
import '@vect/columns-zipper';
import '@vect/vector';
import { fluo } from '@palett/fluo-matrix';

const size = mx => {
  let h, r;
  return mx && (h = mx.length) && (r = mx[0]) ? [h, r.length] : [h, r];
};

/**
 *
 * @param {*[]} ar
 * @param {number} [h] - head margin length
 * @param {number} [t] - tail margin length
 * @param {number} [l] - array length
 * @returns {*[]}
 */
const marginCopy = (ar, h, t, l) => {
  const ve = Array(l = l || ar.length),
        s = l - t;

  for (--h; h >= 0; h--) ve[h] = ar[h];

  for (--l; l >= s; l--) ve[l] = ar[l];

  return ve;
};
/**
 *
 * @param {*[]} ar
 * @param {function(*)|function(*,number)} fn
 * @param {number} [h] - head margin length
 * @param {number} [t] - tail margin length
 * @param {number} [l] - array length
 * @returns {*[]}
 */


const marginMapper = (ar, fn, h, t, l) => {
  const ve = Array(l = l || ar.length),
        s = l - t;

  for (--h; h >= 0; h--) ve[h] = fn(ar[h], h);

  for (--l; l >= s; l--) ve[l] = fn(ar[l], l);

  return ve;
};

const marginCopy$1 = (mx, t, b, l, r, h, w) => {
  const x = Array(h || (h = mx && mx.length)),
        bs = h - b;

  for (let i = 0; i < t; i++) x[i] = marginCopy(mx[i], l, r, w);

  for (let i = bs; i < h; i++) x[i] = marginCopy(mx[i], l, r, w);

  return x;
};

const rowMaMapper = (row, i, fn, l, r, w) => {
  const ve = Array(w || (w = row && row.length)),
        s = w - r;

  for (--l; l >= 0; l--) ve[l] = fn(row[l], i, l);

  for (--w; w >= s; w--) ve[w] = fn(row[w], i, w);

  return ve;
};

const marginMapper$1 = (mx, fn, t, b, l, r, h, w) => {
  const x = Array(h || (h = mx && mx.length)),
        bs = h - b;

  for (let i = 0; i < t; i++) x[i] = rowMaMapper(mx[i], i, fn, l, r, w);

  for (let i = bs; i < h; i++) x[i] = rowMaMapper(mx[i], i, fn, l, r, w);

  return x;
};

const rowMaMutate = (row, i, fn, l, r, w) => {
  w = w || row && row.length;
  const s = w - r;

  for (--l; l >= 0; l--) row[l] = fn(row[l], i, l);

  for (--w; w >= s; w--) row[w] = fn(row[w], i, w);

  return row;
};

const marginMutate = (mx, fn, t, b, l, r, h, w) => {
  h = h || mx && mx.length;
  const s = h - b;

  for (let i = 0; i < t; i++) rowMaMutate(mx[i], i, fn, l, r, w);

  for (let i = s; i < h; i++) rowMaMutate(mx[i], i, fn, l, r, w);

  return mx;
};

class Matrigin {
  constructor(matrix, top, bottom, left, right, height, width, dashX, dashY) {
    this.matrix = matrix;
    this.top = top;
    this.bottom = bottom;
    this.left = left;
    this.right = right;
    this.height = height;
    this.width = width;
    this.dashX = dashX;
    this.dashY = dashY;
  }

  static build(mx, t, b, l, r, h, w) {
    let dashX = true,
        dashY = true;
    if (!h || !w) [h, w] = size(mx);
    if (!h || !w) [t, b, dashX, dashY] = [0, 0, false, false];
    if (!t && !b || t >= h) [t, b, dashX] = [h, 0, false];
    if (!l && !r || l >= w) [l, r, dashY] = [w, 0, false];
    mx = marginCopy$1(mx, t, b, l, r, h, w);
    return new Matrigin(mx, t, b, l, r, h, w, dashX, dashY);
  }

  get marginHeight() {
    return this.top + this.bottom;
  }

  get marginWidth() {
    return this.left + this.right;
  }

  get nullHeight() {
    return this.height - this.marginHeight;
  }

  get nullWidth() {
    return this.width - this.marginWidth;
  }

  emptyRow(el) {
    const {
      width,
      left,
      right
    } = this;
    return marginMapper(Array(width), () => el, left, right, width);
  }

  map(fn, mutate = false) {
    const {
      matrix,
      top,
      bottom,
      left,
      right,
      height,
      width
    } = this;
    return mutate ? this.reboot(marginMapper$1(matrix, fn, top, bottom, left, right, height, width)) : this.clone(marginMutate(matrix, fn, top, bottom, left, right, height, width));
  }

  toMatrix(el, mutate = false) {
    const {
      matrix,
      top,
      left,
      dashX,
      dashY,
      nullHeight,
      nullWidth
    } = this,
          mx = mutate ? matrix : matrix.map(row => row.slice());
    dashX && el ? mx.splice(top, nullHeight, this.emptyRow(el)) : mx.splice(top, nullHeight);
    dashY && el ? mx.forEach(row => row.splice(left, nullWidth, el)) : mx.forEach(row => row.splice(left, nullWidth));
    return mx;
  }

  stringify(abstract, mutate = true) {
    const brief = abstract ? _ => String(abstract(_)) : totx;
    return this.map(brief, mutate);
  }
  /**
   *
   * @param {*[][]} mx
   * @returns {Matrigin}
   */


  reboot(mx) {
    if (mx) this.matrix = mx;
    return this;
  }
  /**
   *
   * @param {*[][]} mx
   * @returns {Matrigin}
   */


  clone(mx) {
    const {
      top,
      bottom,
      left,
      right,
      height,
      width,
      dashX,
      dashY
    } = this;
    return new Matrigin(mx, top, bottom, left, right, height, width, dashX, dashY);
  }

}
/**
 *
 * @param mx
 * @param {number} [top]
 * @param {number} [bottom]
 * @param {number} [left]
 * @param {number} [right]
 * @param {number} [height]
 * @param {number} [width]
 * @param {function(*):*} [abstract]
 * @param {boolean} [pad]
 * @returns {{raw:*[][],text:*[][]}}
 */


const mattro = (mx, {
  top,
  bottom,
  left,
  right,
  height,
  width,
  abstract
} = {}) => {
  const mn = Matrigin.build(mx, top, bottom, left, right, height, width),
        raw = mn.toMatrix('..'),
        text = mn.stringify(abstract).toMatrix('..');
  return {
    raw,
    text
  };
};

const ansi = ['[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:[a-zA-Z\\d]*(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)', '(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))'];
const astral = ['[\uD800-\uDBFF][\uDC00-\uDFFF]'];
const ansiReg = new RegExp(ansi.join('|'), 'g');
const astralReg = new RegExp(astral.join('|'), 'g');
/**
 *
 * @param {string} tx
 * @returns {number}
 */

const lange = tx => tx.replace(ansiReg, '').replace(astralReg, '_').length;

const len = ansi => ansi ? x => x ? lange(x) : 0 : x => {
  var _ref;

  return (_ref = x === null || x === void 0 ? void 0 : x.length) !== null && _ref !== void 0 ? _ref : 0;
};
/**
 * direct: point-wise=0, row-wise=1, column-wise=2
 * @param {*[][]} matrix
 * @param {function(*):string} [abstract]
 * @param {string} [delimiter=',']
 * @param {number} [top]
 * @param {number} [left]
 * @param {number} [bottom]
 * @param {number} [right]
 * @param {{max:string|number[],min:string|number[],na:string|number[]}} [preset]
 * @param {number} [direct]
 * @param ansi
 * @returns {string}
 */


const brief = (matrix, {
  abstract,
  delimiter = ', ',
  top = 0,
  left = 0,
  bottom = 0,
  right = 0,
  preset = FRESH,
  direct = ROWWISE,
  ansi = false
} = {}) => {
  var _matrix;

  const [h, w] = (_matrix = matrix, size$1(_matrix));
  if (!h || !w) return AEU;
  const {
    raw,
    text
  } = mattro(matrix, {
    top,
    bottom,
    left,
    right,
    height: h,
    width: w,
    abstract
  });
  const pads = Max(len(preset || ansi))(text);
  const dyes = preset && fluo(raw, {
    direct,
    preset,
    colorant: true
  }); // const columns = zipperBand(text, pads, (col, pad) =>mapper(col,x=>npad(x,)))

  const lines = padMx(text, raw, dyes, pads, ansi).map(line => `[${line}]`);
  return '[' + lines.join(`,${RN} `) + ']';
};

export { brief };
