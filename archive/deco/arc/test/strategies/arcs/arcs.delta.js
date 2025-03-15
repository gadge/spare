import { Bound }               from '@aryth/bound'
import { length }              from '@texting/lange'
import { Padder }              from '@texting/padder'
import { value }               from '@texting/string-value'
import { isLiteral }           from '@typen/literal'
import { isNumeric, parseNum } from '@typen/num-strict'
import { parseStr }            from '../../../src/ArcFab.js'
import { Cate }                from '../../../src/Cate.js'
import { StringBound }         from '../../../src/StringBound.js'


export class TypoFab {
  num = {
    to: parseNum,
    by: isNumeric,
  }
  str = {
    wd: length,
    to: parseStr,
    ev: value,
    by: isLiteral,
  }
  mut
  constructor(str, num, mut) {
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
  stringify(vec) {
    const size = vec.length
    const strs = this.mut ? vec : Array(size)
    const { wd } = this.str
    let width = 0
    for (let i = 0, x, s, w; i < size; i++) {
      x = vec[i], strs[i] = s = parseStr(x)
      if ((w = wd(s)) > width) { width = w }
    }
    strs.width = width
    return strs
  }
  evaluate(strs, pad) {
    const size = strs.length
    if (!size) return []
    const nums = Array(size), cats = new Uint16Array(size)
    const tbd = new StringBound(), nbd = new Bound()
    const { by: numBy, to: numTo } = this.num
    const { by: strBy, ev: strEv } = this.str
    const padder = pad ? new Padder(strs.width, pad.fill, pad.ansi) : null
    for (let i = 0, x, n, c; i < size; i++) {
      x = strs[i], n = numTo(x)
      c = numBy(n) ? Cate.Num : strBy(x) ? Cate.Str : Cate.NaN
      cats[i] |= c << 8
      if (c === Cate.Str) {
        x = padder.rpad(x)
        strs[i] = tbd.note(x)
      }
      else if (c === Cate.Num) {
        strs[i] = padder.lpad(x)
        nums[i] = nbd.note(n)
      }
    }
    const wd = strs.width
    const slo = tbd.lo ? strEv(tbd.lo, wd) : 0, shi = tbd.hi ? strEv(tbd.hi, wd) : 0, sdf = shi - slo
    const nlo = nbd.lo, nhi = nbd.hi, ndf = nhi - nlo
    for (let i = 0, t, x; i < size; i++) {
      t = cats[i] >> 8, x = strs[i]
      if (t === Cate.Str) { cats[i] |= (255 * (strEv(x, wd) - slo) / sdf) }
      else if (t === Cate.Num) { cats[i] |= (255 * (nums[i] - nlo) / ndf) }
    }
    return cats
  }
}