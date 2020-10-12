import { totx }                                   from '@spare/util'
import { marginCopy, marginMapper, marginMutate } from '@vect/matrix-margin'
import { marginMapper as vectorMarginMapper }     from '@vect/vector-margin'
import { marginSizing }                           from './marginSizing'

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
export const matrixMargin = (
  mx,
  { top, bottom, left, right, height, width, read, rule = '..' } = {}
) => MatrixMargin
  .build(mx, top, bottom, left, right, height, width)
  .stringify(read)
  .toMatrix(rule)

export class MatrixMargin {
  constructor(matrix, top, bottom, left, right, height, width, dashX, dashY) {
    this.matrix = matrix
    this.top = top
    this.bottom = bottom
    this.left = left
    this.right = right
    this.height = height
    this.width = width
    this.dashX = dashX
    this.dashY = dashY
  }

  static build(rows, t, b, l, r, h, w) {
    const { top, bottom, left, right, height, width, dashX, dashY } = marginSizing(rows, t, b, l, r, h, w)
    const cutRows = marginCopy(rows, top, bottom, left, right, height, width,)
    return new MatrixMargin(cutRows, top, bottom, left, right, height, width, dashX, dashY)
  }

  get marginHeight() { return this.top + this.bottom }
  get marginWidth() { return this.left + this.right }
  get nullHeight() { return this.height - this.marginHeight }
  get nullWidth() { return this.width - this.marginWidth }

  emptyRow(el) {
    const { width, left, right } = this
    return vectorMarginMapper(Array(width), () => el, left, right, width)
  }

  map(fn, mutate = false) {
    const { matrix, top, bottom, left, right, height, width } = this
    return mutate
      ? this.reboot(marginMapper(matrix, fn, top, bottom, left, right, height, width))
      : this.clone(marginMutate(matrix, fn, top, bottom, left, right, height, width))
  }

  toMatrix(el, mutate = false) {
    const { matrix, top, left, dashX, dashY, nullHeight, nullWidth } = this,
      mx = mutate ? matrix : matrix.map(row => row.slice())
    dashX && el
      ? mx.splice(top, nullHeight, this.emptyRow(el))
      : mx.splice(top, nullHeight)
    dashY && el
      ? mx.forEach(row => row.splice(left, nullWidth, el))
      : mx.forEach(row => row.splice(left, nullWidth))
    return mx
  }

  /**
   *
   * @param {Function} read
   * @param {boolean} mutate
   * @return {MatrixMargin}
   */
  stringify(read, mutate = true) {
    const brief = read ? (_ => String(read(_))) : totx
    return this.map(brief, mutate)
  }

  /**
   *
   * @param {*[][]} mx
   * @returns {MatrixMargin}
   */
  reboot(mx) {
    if (mx) this.matrix = mx
    return this
  }

  /**
   *
   * @param {*[][]} mx
   * @returns {MatrixMargin}
   */
  clone(mx) {
    const { top, bottom, left, right, height, width, dashX, dashY } = this
    return new MatrixMargin(mx, top, bottom, left, right, height, width, dashX, dashY)
  }
}
