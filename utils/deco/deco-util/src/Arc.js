import { Bound }               from '@aryth/bound'
import { lange, length }       from '@texting/lange'
import { Padder }              from '@texting/padder'
import { value }               from '@texting/string-value'
import { NUM, OBJ, STR, SYM }  from '@typen/enum-data-types'
import { isLiteral }           from '@typen/literal'
import { isNumeric, parseNum } from '@typen/num-strict'
import { maxBy }               from '@vect/vector-indicator'

export class Cate {
  static Num = 0
  static Str = 1
  static NaN = 3
}

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


export class ArcFab {
  num = {
    to: parseNum,
    by: isNumeric,
  }
  str = {
    wd: length,
    to: value,
    by: isLiteral,
  }
  constructor(num, str) {
    if (num) {
      if (num.to) this.num.to = num.to
      if (num.by) this.num.by = num.by
    }
    if (str) {
      if (str.to) this.str.to = str.to
      if (str.by) this.str.by = str.by
      if (str.wd) this.str.wd = str.wd
    }
  }

  toArc(vec) {
    const size = vec.length
    const strs = Array(size), nums = Array(size), cats = new Uint8Array(size)
    if (!size) return new Arc(strs, nums, cats)
    const tbd = new StringBound(), nbd = new Bound()
    const { by: numBy, to: numTo } = this.num
    const { by: strBy, wd: strWd } = this.str
    let width = 0
    for (let i = 0, x, s, n, c, p, w; i < size; i++) {
      x = vec[i], p = typeof x
      if (p === NUM) {
        n = x
        s = '' + n
        c = Cate.Num
      }
      else {
        s = x === null ? '' + x : p === OBJ || p === SYM ? x.toString() : p === STR ? x : '' + x
        n = numTo(x)
        c = numBy(n) ? Cate.Num : strBy(s) ? Cate.Str : Cate.NaN
      }
      cats[i] |= c
      if ((w = strWd(s)) > width) width = w
      if (c === Cate.Str) { strs[i] = tbd.note(s) }
      else if (c === Cate.Num) { strs[i] = s, nums[i] = nbd.note(n) }
      else { strs[i] = s }
    }
    strs.lo = tbd.lo, strs.hi = tbd.hi, strs.width = width
    nums.lo = nbd.lo, nums.hi = nbd.hi
    return new Arc(strs, nums, cats)
  }
}

export class Arc {
  strs
  nums
  cats
  constructor(strs, nums, cats) {
    this.strs = strs
    this.nums = nums
    this.cats = cats
  }
  get width() { return this.strs.width ?? (this.strs.width = this.size ? maxBy(this.strs, lange) : 0)}
  get size() { return this.strs.length }
  pad(fill = ' ', ansi = false) {
    const { strs, nums, size, width } = this
    const padder = new Padder(width, fill, ansi)
    for (let i = 0; i < size; i++) { strs[i] = padder.render(strs[i], nums[i]) }
    return this
  }
  rates(strTo) {
    const { strs, nums, cats, size, width: wd } = this
    const rates = new Uint16Array(size)
    if (!size) return rates
    const { Str: STR, Num: NUM } = Cate
    const { lo: slo = 0, hi: shi = 0 } = strs, sdf = shi - slo
    const { lo: nlo = 0, hi: nhi = 0 } = nums, ndf = nhi - nlo
    for (let i = 0, t, s; i < size; i++) {
      t = cats[i], s = strs[i]
      rates[i] |= t << 8
      if (t === STR) { rates[i] |= (255 * (strTo(s, wd) - slo) / sdf) }
      else if (t === NUM) { rates[i] |= (255 * (nums[i] - nlo) / ndf) }
    }
    return rates
  }
}