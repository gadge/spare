import { totx } from '@spare/util'

export class Preci {
  constructor (ar, head, tail, dash) {
    this.ar = ar
    this.head = head
    this.tail = tail
    this.dash = dash
  }

  reboot (ar) {
    this.ar = ar
    return this
  }

  copy (ar) {
    return new Preci(ar, this.head, this.tail, this.dash)
  }

  static fromArr (ar, head = 0, tail = 0) {
    let dash = true
    if (!ar?.length) [head, tail, dash] = [0, 0, false]
    const length = ar.length
    if (!head || head >= length) [head, tail, dash] = [length, 0, false]
    // if (!tail || tail >= length) [head, tail, dash] = [head, 0, true]
    // if (head + tail >= length) [head, tail, dash] = [head, -1, true]
    const len = ar?.length, vec = Array(len)
    for (let i = 0; i < head; i++) vec[i] = ar[i]
    for (let i = len - tail; i < len; i++) vec[i] = ar[i]
    return new Preci(vec, head, tail, dash)
  }

  map (fn, mutate = false) {
    return mutate
      ? this.reboot(this.ar.map(fn))
      : this.copy(this.ar.map(fn))
  }

  toList (el) {
    const
      { ar, head, tail } = this,
      len = ar.length,
      diff = len - (head + tail),
      list = ar.slice()
    this.dash && el
      ? list.splice(head, diff, el)
      : list.splice(head, diff)
    return list
  }

  /**
   *
   * @param {function} [read]
   * @param {boolean} [mutate]
   * @return { Preci }
   */
  stringify (read, mutate = true) {
    const brief = read ? (_ => String(read(_))) : totx
    return this.map(brief, mutate)
  }
}
