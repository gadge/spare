import { Bound }               from '@aryth/bound'
import { length }              from '@texting/lange'
import { value }               from '@texting/string-value'
import { NUM, OBJ, STR, SYM }  from '@typen/enum-data-types'
import { isLiteral }           from '@typen/literal'
import { isNumeric, parseNum } from '@typen/num-strict'
import { Arc }                 from './Arc.js'
import { Cate }                from './Cate.js'
import { StringBound }         from './StringBound.js'

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