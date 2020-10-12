'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var matrixSize = require('@vect/matrix-size');
var util = require('@spare/util');
var matrixMargin$1 = require('@vect/matrix-margin');
var vectorMargin = require('@vect/vector-margin');
var oneself = require('@ject/oneself');

const marginSizing = (rows, top, bottom, left, right, height, width) => {
  let dashX = true,
      dashY = true;
  if (!height || !width) [height, width] = matrixSize.size(rows);
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
    const cutRows = matrixMargin$1.marginCopy(rows, top, bottom, left, right, height, width);
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
    return vectorMargin.marginMapper(Array(width), () => el, left, right, width);
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
    return mutate ? this.reboot(matrixMargin$1.marginMapper(matrix, fn, top, bottom, left, right, height, width)) : this.clone(matrixMargin$1.marginMutate(matrix, fn, top, bottom, left, right, height, width));
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
    const brief = read ? _ => String(read(_)) : util.totx;
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

/**
 *
 * @param mx
 * @param {number} [top]
 * @param {number} [bottom]
 * @param {number} [left]
 * @param {number} [right]
 * @param {number} [height]
 * @param {number} [width]
 * @param {boolean} [dashX]
 * @param {boolean} [dashY]
 * @param {function(*):*} [read]
 * @param {string} [rule='..']
 * @param {boolean} [validate=true]
 * @returns {{raw:*[][],alt:*[][]}}
 */

const mattro = (mx, {
  top,
  bottom,
  left,
  right,
  height,
  width,
  dashX,
  dashY,
  read,
  rule = '..',
  validate = true
} = {}) => {
  const mn = validate ? MatrixMargin.build(mx, top, bottom, left, right, height, width) : new MatrixMargin(mx, top, bottom, left, right, height, width, dashX, dashY),
        raw = mn.map(oneself.oneself).toMatrix(rule),
        alt = mn.stringify(read).toMatrix(rule);
  return {
    raw,
    alt
  };
};

exports.MatrixMargin = MatrixMargin;
exports.marginSizing = marginSizing;
exports.matrixMargin = matrixMargin;
exports.mattro = mattro;
