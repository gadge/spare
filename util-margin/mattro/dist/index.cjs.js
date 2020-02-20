'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var util = require('@spare/util');
var matrixSize = require('@vect/matrix-size');
var matrixMargin = require('@vect/matrix-margin');
var vectorMargin = require('@vect/vector-margin');

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
    if (!h || !w) [h, w] = matrixSize.size(mx);
    if (!h || !w) [t, b, dashX, dashY] = [0, 0, false, false];
    if (!t && !b || t >= h) [t, b, dashX] = [h, 0, false];
    if (!l && !r || l >= w) [l, r, dashY] = [w, 0, false];
    mx = matrixMargin.marginCopy(mx, t, b, l, r, h, w);
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
    return mutate ? this.reboot(matrixMargin.marginMapper(matrix, fn, top, bottom, left, right, height, width)) : this.clone(matrixMargin.marginMutate(matrix, fn, top, bottom, left, right, height, width));
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
    const brief = abstract ? _ => String(abstract(_)) : util.totx;
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

exports.Matrigin = Matrigin;
exports.mattro = mattro;
