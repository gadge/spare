import { Bound } from '@aryth/bound'

export class StringBound {
  lo
  hi
  constructor(lo, hi) {
    if (lo) { this.lo = lo, this.hi = hi }
    if (hi) { this.hi = hi }
  }
  note(x) {
    const { lo, hi } = this
    if (!this.lo || !this.hi) { this.lo = x, this.hi = x }
    if (x < lo) this.lo = x
    if (x > hi) this.hi = x
    return x
  }
  toBound(strTo, width) {
    return new Bound(strTo(this.lo ?? '', width), strTo(this.hi ?? '', width))
  }
}