import { totx } from '@spare/util'
import { Mx } from 'veho'
import { copyMargin, mapMargin } from '@vect/matrix'
import { mapMargin as mapArrayMargin } from '@vect/vector'

export class Matrigin {
  constructor (mx, top, bottom, left, right, height, width, dashX, dashY) {
    this.mx = mx
    this.top = top
    this.bottom = bottom
    this.left = left
    this.right = right
    this.height = height
    this.width = width
    this.dashX = dashX
    this.dashY = dashY
  }

  /**
   *
   * @param {*[][]} mx
   * @returns {Matrigin}
   */
  reboot (mx) {
    this.mx = mx
    return this
  }

  /**
   *
   * @param {*[][]} mx
   * @returns {Matrigin}
   */
  clone (mx) {
    return new Matrigin(mx, this.top, this.bottom, this.left, this.right, this.marginHeight, this.marginWidth, this.dashX, this.dashY)
  }

  static build (mx, t, b, l, r, h, w) {
    // ({ top, bottom, left, right, height, width }) |> console.log
    let dashX = true, dashY = true
    if (!h || !w) [h, w] = Mx.size(mx)
    if (!h || !w) [t, b, dashX, dashY] = [0, 0, false, false]
    if (!t && !b || t >= h) [t, b, dashX] = [h, 0, false]
    if (!l && !r || l >= w) [l, r, dashY] = [w, 0, false]
    mx = copyMargin(mx, t, b, l, r, h, w)
    return new Matrigin(mx, t, b, l, r, h, w, dashX, dashY)
  }

  static fromMx (mx, [top = 0, bottom = 0], [left = 0, right = 0], size) {
    return Matrigin.build(mx, top, bottom, left, right)
  }

  get marginHeight () {
    return this.top + this.bottom
  }

  get marginWidth () {
    return this.left + this.right
  }

  get nullHeight () {
    return this.height - this.marginHeight
  }

  get nullWidth () {
    return this.width - this.marginWidth
  }

  emptyRow (el) {
    const { width, left, right } = this
    return mapArrayMargin(Array(width), () => el, left, right, width)
  }

  map (fn, mutate = true) {
    return mutate
      ? this.reboot(mapMargin(this.mx, fn, this.top, this.bottom, this.left, this.right, this.height, this.width))
      : this.clone(mapMargin(this.mx, fn, this.top, this.bottom, this.left, this.right, this.height, this.width))
  }

  toMatrix (el) {
    const { mx, top, left, dashX, dashY, nullHeight, nullWidth } = this,
      x = Mx.copy(mx)
    dashX && el
      ? x.splice(top, nullHeight, this.emptyRow(el))
      : x.splice(top, nullHeight)
    dashY && el
      ? x.forEach(row => row.splice(left, nullWidth, el))
      : x.forEach(row => row.splice(left, nullWidth))
    return x
  }

  stringify (abstract, mutate = true) {
    const brief = abstract ? (_ => String(abstract(_))) : totx
    return this.map(brief, mutate)
  }
}
