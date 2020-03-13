import { totx } from '@spare/util'

export class PreciDev {
  /**
   *
   * @param {*[]|null} head
   * @param {*[]|null} tail
   * @param {boolean|null}  dash
   */
  constructor (head, tail, dash = true) {
    this.head = head
    this.tail = tail
    this.dash = dash
  }

  reboot (head, tail) {
    if (head) this.head = head
    if (tail) this.tail = tail
    return this
  }

  /**
   *
   * @param {*[]} arr
   * @param {number} head
   * @param {number} tail
   * @param {number} [length]
   * @return {PreciDev}
   */
  static fromArr (arr, head, tail, length) {
    if (!length) {
      if (!arr || !arr.length) return new PreciDev(null, null, false)
      length = arr.length
    }
    if (!head || head >= length) return new PreciDev(arr.slice(), null, false)
    if (!tail || tail >= length) return new PreciDev(arr.slice(0, head), null, true)
    if (head + tail >= length) return new PreciDev(arr.slice(0, head), arr.slice(-1), true)
    return new PreciDev(arr.slice(0, head), arr.slice(-tail), true)
  }

  first () {
    if (this.head) return this.head[0]
    if (this.tail) return this.tail[0]
    return undefined
  }

  get length () {
    return (this.head?.length || 0) + (this.tail?.length || 0)
  }

  /**
   *
   * @param {*} [el] - the element to be inserted between head and tail
   * @return {*[]}
   */
  toList (el) {
    // let arr = []
    // if (this.head) arr = arr.concat(this.head)
    // if (this.dash && !!el) arr.push(el)
    // if (this.tail) arr.push(...this.tail)
    return [].concat(
      this.head ? this.head : [],
      this.dash && el ? [el] : [],
      this.tail ? this.tail : []
    )
  }

  convHead (fn) {
    if (!fn || !this.head) return this
    this.head = fn(this.head)
    return this
  }

  convTail (fn) {
    if (!fn || !this.tail) return this
    this.tail = fn(this.tail)
    return this
  }

  conv (fn, tailFn = undefined) {
    return this.convHead(fn).convTail(tailFn || fn)
  }

  /**
   *
   * @param {function} fn
   * @param {boolean} [mutate]
   * @return {PreciDev}
   */
  map (fn, mutate = true) {
    if (!fn) return this
    const
      head = this.head?.map(fn),
      tail = this.tail?.map(fn)
    return mutate
      ? this.reboot(head, tail)
      : new PreciDev(head, tail, this.dash)
  }

  /**
   *
   * @param {function} abstract
   * @param {boolean} [mutate]
   * @return {PreciDev}
   */
  stringify (abstract, mutate = true) {
    const br = abstract ? (_ => String(abstract(_))) : totx
    return this.map(br)
  }
}
