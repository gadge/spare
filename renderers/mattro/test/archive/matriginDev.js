import { totx } from '@spare/util'
import { Mx } from 'veho'
import { copyMargin, mapMargin } from '@vect/matrix'
import { mapMargin as mapArrayMargin } from '@vect/vector'
import { decoLog } from '@spare/deco'

const noopEntry = [undefined, undefined]

export class MatriginDev {
  constructor (mx, top, bottom, left, right, height, width, dashX, dashY) {
    this.mx = mx
    this.tb = [top, bottom]
    this.lr = [left, right]
    this.hw = [height, width]
    this.dash = [dashX, dashY]
  }

  /**
   *
   * @param {*[][]} mx
   * @returns {MatriginDev}
   */
  reboot (mx) {
    this.mx = mx
    return this
  }

  /**
   *
   * @param {*[][]} mx
   * @returns {MatriginDev}
   */
  copy (mx) {
    return new MatriginDev(mx, this.tb, this.lr, this.hw, this.dash)
  }

  get marginHeight () {
    return this.tb[0] + this.tb[1]
  }

  get marginWidth () {
    return this.lr[0] + this.lr[1]
  }

  xHeight (elCn) {
    return Math.min(this.hw[0], this.marginHeight + (this.dash[0] && elCn ? elCn : 0))
  }

  xWidth (elCn) {
    return Math.min(this.hw[1], this.marginWidth + (this.dash[1] && elCn ? elCn : 0))
  }

  emptyRow (el) {
    const { hw: [, w], lr: [l, r] } = this
    return mapArrayMargin(Array(w), () => el, l, w - r, w)
  }

  get voidSize () {
    const [height, width] = this.hw
    return [height - this.marginHeight, width - this.marginWidth]
  }

  static build (mx, {
    vMargin: [top, bottom] = noopEntry,
    hMargin: [left, right] = noopEntry,
    area: [height, width] = noopEntry,
  } = {}) {
    // ({ top, bottom, left, right, size }) |> console.log
    // size = size || Mx.size(mx)
    let dashX = true, dashY = true
    if (!height || !width) [top, bottom, dashX, dashY] = [0, 0, false, false]
    if (!top || top >= height) [top, bottom, dashX] = [height, 0, false]
    if (!left || left >= width) [left, right, dashY] = [width, 0, false]
    const x = copyMargin(mx, [top, bottom], [left, right], [height, width])
    return new MatriginDev(x, top, bottom, left, right, height, width, dashX, dashY)
  }

  static fromMx (mx, [top = 0, bottom = 0], [left = 0, right = 0], size) {
    ({ top, bottom, left, right, size }) |> console.log
    size = size || Mx.size(mx)
    let [height, width] = size, [dashX, dashY] = [true, true]
    if (!height || !width) [top, bottom, dashX, dashY] = [0, 0, false, false]
    if (!top || top >= height) [top, bottom, dashX] = [height, 0, false]
    if (!left || left >= width) [left, right, dashY] = [width, 0, false]
    const x = copyMargin(mx, top, bottom, left, right, height, width)
    x |> decoLog
    return new MatriginDev(x, top, bottom, left, right, height, width, dashX, dashY)
  }

  map (fn, mutate = true) {
    return mutate
      ? this.reboot(mapMargin(this.mx, fn, this.tb, this.lr, this.hw))
      : this.copy(mapMargin(this.mx, fn, this.tb, this.lr, this.hw))
    // return mutate
    //   ? this.reboot(this.mx.map((r, i) => r.map((x, j) => fn(x, i, j))))
    //   : this.clone(this.mx.map((r, i) => r.map((x, j) => fn(x, i, j))))
  }

  toMx (el) {
    const {
        mx,
        tb: [top], lr: [left],
        dash: [xDash, yDash], voidSize: [dx, dy]
      } = this,
      x = Mx.copy(mx)
    xDash && el
      ? x.splice(top, dx, this.emptyRow(el))
      : x.splice(top, dx)
    if (yDash && el) {
      for (let row of x) row.splice(left, dy, el)
    } else {
      for (let row of x) row.splice(left, dy)
    }
    return x
  }

  stringify (abstract, mutate = true) {
    const brief = abstract ? (_ => String(abstract(_))) : totx
    return this.map(brief, mutate)
  }
}
