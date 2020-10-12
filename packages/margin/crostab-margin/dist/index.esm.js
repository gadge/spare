import { size } from '@vect/matrix-size';
import { totx } from '@spare/util';
import { marginCopy as marginCopy$1, marginMapper as marginMapper$1, marginMutate as marginMutate$1 } from '@vect/vector-margin';
import '@ject/oneself';

const marginCopy = (mx, t, b, l, r, h, w) => {
  const x = Array(h || (h = mx === null || mx === void 0 ? void 0 : mx.length)),
        bs = h - b;

  for (let i = 0; i < t; i++) x[i] = marginCopy$1(mx[i], l, r, w);

  for (let i = bs; i < h; i++) x[i] = marginCopy$1(mx[i], l, r, w);

  return x;
};

const rowMarginMapper = (row, i, fn, l, r, w) => {
  const ve = Array(w || (w = row === null || row === void 0 ? void 0 : row.length)),
        s = w - r;

  for (--l; l >= 0; l--) ve[l] = fn(row[l], i, l);

  for (--w; w >= s; w--) ve[w] = fn(row[w], i, w);

  return ve;
};

const marginMapper = (mx, fn, t, b, l, r, h, w) => {
  const x = Array(h || (h = mx === null || mx === void 0 ? void 0 : mx.length)),
        bs = h - b;

  for (let i = 0; i < t; i++) x[i] = rowMarginMapper(mx[i], i, fn, l, r, w);

  for (let i = bs; i < h; i++) x[i] = rowMarginMapper(mx[i], i, fn, l, r, w);

  return x;
};

const rowMarginMutate = (row, i, fn, l, r, w) => {
  w = w || (row === null || row === void 0 ? void 0 : row.length);
  const s = w - r;

  for (--l; l >= 0; l--) row[l] = fn(row[l], i, l);

  for (--w; w >= s; w--) row[w] = fn(row[w], i, w);

  return row;
};

const marginMutate = (mx, fn, t, b, l, r, h, w) => {
  h = h || (mx === null || mx === void 0 ? void 0 : mx.length);
  const s = h - b;

  for (let i = 0; i < t; i++) rowMarginMutate(mx[i], i, fn, l, r, w);

  for (let i = s; i < h; i++) rowMarginMutate(mx[i], i, fn, l, r, w);

  return mx;
};

const marginSizing = (rows, top, bottom, left, right, height, width) => {
  let dashX = true,
      dashY = true;
  if (!height || !width) [height, width] = size(rows);
  if (!height || !width) [top, bottom, dashX, dashY] = [0, 0, false, false];
  if (!top && !bottom || top >= height) [top, bottom, dashX] = [height, 0, false];
  if (!left && !right || left >= width) [left, right, dashY] = [width, 0, false];
  return {
    top,
    bottom,
    left,
    right,
    height,
    width,
    dashX,
    dashY
  };
};
/**
 *
 * @param {*[][]} mx
 * @param {number} top
 * @param {number} bottom
 * @param {number} left
 * @param {number} right
 * @param {number} [height]
 * @param {number} [width]
 * @param {Function} [read]
 * @param {string} [rule='..']
 * @return {string[][]}
 */


const matrixMargin = (mx, {
  top,
  bottom,
  left,
  right,
  height,
  width,
  read,
  rule = '..'
} = {}) => MatrixMargin.build(mx, top, bottom, left, right, height, width).stringify(read).toMatrix(rule);

class MatrixMargin {
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

  static build(rows, t, b, l, r, h, w) {
    const {
      top,
      bottom,
      left,
      right,
      height,
      width,
      dashX,
      dashY
    } = marginSizing(rows, t, b, l, r, h, w);
    const cutRows = marginCopy(rows, top, bottom, left, right, height, width);
    return new MatrixMargin(cutRows, top, bottom, left, right, height, width, dashX, dashY);
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
    return marginMapper$1(Array(width), () => el, left, right, width);
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
    return mutate ? this.reboot(marginMapper(matrix, fn, top, bottom, left, right, height, width)) : this.clone(marginMutate(matrix, fn, top, bottom, left, right, height, width));
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
  /**
   *
   * @param {Function} read
   * @param {boolean} mutate
   * @return {MatrixMargin}
   */


  stringify(read, mutate = true) {
    const brief = read ? _ => String(read(_)) : totx;
    return this.map(brief, mutate);
  }
  /**
   *
   * @param {*[][]} mx
   * @returns {MatrixMargin}
   */


  reboot(mx) {
    if (mx) this.matrix = mx;
    return this;
  }
  /**
   *
   * @param {*[][]} mx
   * @returns {MatrixMargin}
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
    return new MatrixMargin(mx, top, bottom, left, right, height, width, dashX, dashY);
  }

}

const marginSizing$1 = (ar, head, tail) => {
  let l,
      dash = true;
  if (!(l = ar === null || ar === void 0 ? void 0 : ar.length)) [head, tail, dash] = [0, 0, false];
  if (!head && !tail || head >= l) [head, tail, dash] = [l, 0, false];
  return {
    head,
    tail,
    dash
  };
};
/**
 *
 * @param {*[]} vec
 * @param {number} [head]
 * @param {number} [tail]
 * @param {Function} [read]
 * @param {string} [rule='..']
 * @return {string[]}
 */


const vectorMargin = (vec, {
  head,
  tail,
  read,
  rule = '...'
} = {}) => VectorMargin.build(vec, head, tail).stringify(read).toVector(rule);

class VectorMargin {
  constructor(vec, head, tail, dash) {
    this.vec = vec;
    this.head = head;
    this.tail = tail;
    this.dash = dash;
  }

  static build(ar, h = 0, t = 0) {
    const {
      head,
      tail,
      dash
    } = marginSizing$1(ar, h, t);
    const cutVec = marginCopy$1(ar, head, tail);
    return new VectorMargin(cutVec, head, tail, dash);
  }

  map(fn, mutate = false) {
    const {
      vec,
      head,
      tail
    } = this;
    return mutate ? this.reboot(marginMutate$1(vec, fn, head, tail)) : this.clone(marginMapper$1(vec, fn, head, tail));
  }

  stringify(fn, mutate = true) {
    return this.map(fn ? _ => String(fn(_)) : totx, mutate);
  }
  /** @return {*[]} */


  toVector(el) {
    const {
      vec,
      head,
      tail
    } = this,
          dif = vec.length - (head + tail),
          ar = vec.slice();
    this.dash && el ? ar.splice(head, dif, el) : ar.splice(head, dif);
    return ar;
  }

  reboot(ar) {
    if (ar) this.vec = ar;
    return this;
  }

  clone(ar) {
    return new VectorMargin(ar, this.head, this.tail, this.dash);
  }

}

/**
 *
 * @param {*[]} head
 * @param {*[][]} rows
 * @param {*[]} title
 * @param {Object} config
 * @param {number} config.top
 * @param {number} config.bottom
 * @param {number} config.left
 * @param {number} config.right
 * @param {number} [config.height]
 * @param {number} [config.width]
 * @param {Function} [config.read]
 * @param {Function} [config.headRead]
 * @return {{head: string[], rows: string[][], title: string}}
 */

const tableMargin = ({
  head,
  rows,
  title
}, config) => {
  return {
    head: vectorMargin(head, {
      head: config.left,
      tail: config.right,
      read: config.headRead
    }),
    rows: matrixMargin(rows, config),
    // { top, bottom, left, right, height, width, read },
    title
  };
};

export { tableMargin };
