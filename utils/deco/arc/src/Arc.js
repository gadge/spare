import { lange }  from '@texting/lange'
import { Padder } from '@texting/padder'
import { maxBy }  from '@vect/vector-indicator'
import { Cate }   from './Cate.js'

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