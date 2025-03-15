import { Bound }               from '@aryth/bound'
import { length }              from '@texting/lange'
import { Padder }              from '@texting/padder'
import { value }               from '@texting/string-value'
import { NUM, OBJ, STR, SYM }  from '@typen/enum-data-types'
import { isLiteral }           from '@typen/literal'
import { isNumeric, parseNum } from '@typen/num-strict'
import { Cate }                from '../../../src/Cate.js'
import { StringBound }         from '../../../src/StringBound.js'
import { Arc }                 from '../../../src/Arc.js'

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
  mut = false
  constructor(num, str, mut) {
    if (num) {
      if (num.to) this.num.to = num.to
      if (num.by) this.num.by = num.by
    }
    if (str) {
      if (str.to) this.str.to = str.to
      if (str.by) this.str.by = str.by
      if (str.wd) this.str.wd = str.wd
    }
    if (mut !== void 0) {
      this.mut = mut
    }
  }
  * iter(vec, pad) {
    const size = vec.length
    const strs = this.mut ? vec : Array(size), nums = Array(size), cats = new Uint8Array(size)
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
      if ((w = strWd(s)) > width) { width = w }
      if (c === Cate.Str) { strs[i] = tbd.note(s) }
      else { strs[i] = s }
      if (c === Cate.Num) { nums[i] = nbd.note(n) }
    }
    strs.lo = tbd.lo, strs.hi = tbd.hi, strs.width = width
    nums.lo = nbd.lo, nums.hi = nbd.hi
    if (pad) {
      const padder = new Padder(width, pad?.fill, pad?.ansi)
      for (let i = 0; i < size; i++) { yield { str: padder.render(strs[i], nums[i]), num: nums[i], cat: cats[i] } }
    }
    else {
      for (let i = 0; i < size; i++) { yield { str: strs[i], num: nums[i], cat: cats[i] } }
    }

  }
}