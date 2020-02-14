import { totx } from '@spare/util'
import { copyMargin } from '@vect/vector'

// Vectogin
// Matrigin
// Vettro
// Mattro

export class Vectogin {
  constructor (ar, head, tail, dash) {
    this.ar = ar
    this.head = head
    this.tail = tail
    this.dash = dash
  }

  reboot (ar) {
    return this.ar = ar , this
  }

  clone (ar) {
    return new Vectogin(ar, this.head, this.tail, this.dash)
  }

  static build (ar, h = 0, t = 0) {
    let d = true, l
    if (!(l = ar?.length)) [ar, h, t, d] = [[], 0, 0, false]
    if (!h && !t || h >= l) [h, t, d] = [l, 0, false]
    return new Vectogin(copyMargin(ar, h, t, l), h, t, d)
  }

  map (fn, mutate = false) {
    return mutate
      ? this.reboot(this.ar.map(fn))
      : this.clone(this.ar.map(fn))
  }

  /**
   *
   * @param {function} [fn]
   * @param {boolean} [mutate]
   * @return { Vectogin }
   */
  stringify (fn, mutate = true) {
    return this.map(fn ? (_ => String(fn(_))) : totx, mutate)
  }

  toList (el) {
    const { ar, head, tail } = this,
      diff = ar.length - (head + tail),
      list = ar.slice()
    this.dash && el
      ? list.splice(head, diff, el)
      : list.splice(head, diff)
    return list
  }
}
