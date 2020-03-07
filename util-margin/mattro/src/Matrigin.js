import { totx } from '@spare/util'
import { size } from '@vect/matrix-size'
import { marginCopy, marginMapper, marginMutate } from '@vect/matrix-margin'
import { marginMapper as vectorMarginMapper } from '@vect/vector-margin'

export class Matrigin {
  constructor (matrix, top, bottom, left, right, height, width, dashX, dashY) {
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

  static build (mx, t, b, l, r, h, w) {
    let dashX = true, dashY = true
    if (!h || !w) [h, w] = size(mx)
    if (!h || !w) [t, b, dashX, dashY] = [0, 0, false, false]
    if (!t && !b || t >= h) [t, b, dashX] = [h, 0, false]
    if (!l && !r || l >= w) [l, r, dashY] = [w, 0, false]
    mx = marginCopy(mx, t, b, l, r, h, w)
    return new Matrigin(mx, t, b, l, r, h, w, dashX, dashY)
  }

  get marginHeight () { return this.top + this.bottom }
  get marginWidth () { return this.left + this.right }
  get nullHeight () { return this.height - this.marginHeight }
  get nullWidth () { return this.width - this.marginWidth }

  emptyRow (el) {
    const { width, left, right } = this
    return vectorMarginMapper(Array(width), () => el, left, right, width)
  }

  map (fn, mutate = false) {
    const { matrix, top, bottom, left, right, height, width } = this
    return mutate
      ? this.reboot(marginMapper(matrix, fn, top, bottom, left, right, height, width))
      : this.clone(marginMutate(matrix, fn, top, bottom, left, right, height, width))
  }

  toMatrix (el, mutate = false) {
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

  stringify (abstract, mutate = true) {
    const brief = abstract ? (_ => String(abstract(_))) : totx
    return this.map(brief, mutate)
  }

  /**
   *
   * @param {*[][]} mx
   * @returns {Matrigin}
   */
  reboot (mx) {
    if (mx) this.matrix = mx
    return this
  }

  /**
   *
   * @param {*[][]} mx
   * @returns {Matrigin}
   */
  clone (mx) {
    const { top, bottom, left, right, height, width, dashX, dashY } = this
    return new Matrigin(mx, top, bottom, left, right, height, width, dashX, dashY)
  }
}