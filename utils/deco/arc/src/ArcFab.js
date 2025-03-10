import { Bound, SignedBound }  from '@aryth/bound'
import { length }              from '@texting/lange'
import { Padder }              from '@texting/padder'
import { value }               from '@texting/string-value'
import { NUM, OBJ, STR, SYM }  from '@typen/enum-data-types'
import { isLiteral }           from '@typen/literal'
import { isNumeric, parseNum } from '@typen/num-strict'
import { Arc }                 from './Arc.js'
import { Cate }                from './Cate.js'
import { StringBound }         from './StringBound.js'

const MIN = Number.NEGATIVE_INFINITY
const MAX = Number.POSITIVE_INFINITY

export function parseStr(x) {
  const p = typeof x
  return x === null ? '' + x : p === OBJ || p === SYM ? x.toString() : p === STR ? x : '' + x
}

export function noteStr(x) {
  const { lo, hi, pad } = this
  if (pad === void 0) {
    this.lo = x
    this.hi = x
    this.#pad = this.wd(x)
  }
  else {
    const w = this.wd(x)
    if (x < lo) this.lo = x
    else if (x > hi) this.hi = x
    if (w > pad) this.#pad = w
  }
  return x
}

// if (sg) {
//   const { pos, neg } = this
//   if (!pos) {
//     this.pos = new Bound(n > 0 ? n : MAX, n > 0 ? n : MIN)
//     this.neg = new Bound(n < 0 ? n : MAX, n < 0 ? n : MIN)
//   }
//   else {
//     if (n > 0) pos.note(n)
//     if (n < 0) neg.note(n)
//   }
//   return n
// }
// else {
export function noteNum(n) {
  const { lo, hi } = this
  if (lo === void 0) {
    this.lo = n
    this.hi = n
  }
  else {
    if (n < lo) this.lo = n
    else if (n > hi) this.hi = n
  }
  return n
}

export class ArcFab {
  num = {
    by: isNumeric,
    to: parseNum,
    sg: false,
  }
  str = {
    by: isLiteral,
    to: parseStr,
    ev: value,
    wd: length,
    sp: ' ',
    gr: true,
  }
  mut = false
  constructor(num, str, mut) {
    if (num) {
      if (num.by) this.num.by = num.by
      if (num.to) this.num.to = num.to
      if (num.sg !== void 0) this.num.sg = num.sg
    }
    if (str) {
      if (str.by) this.str.by = str.by
      if (str.to) this.str.to = str.to
      if (str.ev) this.str.ev = str.ev
      if (str.wd) this.str.wd = str.wd
    }
    if (mut !== void 0) {
      this.mut = mut
    }
  }
  static create(vec, conf) { return (new ArcFab(conf?.#num, conf?.#str, conf?.mut)).vector(vec) }
  noteValTo(x, vec) {
    const { lo, hi } = vec
    if (lo === void 0) return vec.lo = x, vec.hi = x
    return x < lo ? (vec.lo = x) : x > hi ? (vec.hi = x) : x
  }
  noteNumTo(n, nums) {
    if (!this.num.sg) { return this.noteValTo(n, nums) }
    const { pos, neg } = nums
    if (!pos) {
      nums.pos = new Bound(n > 0 ? n : MAX, n > 0 ? n : MIN)
      nums.neg = new Bound(n < 0 ? n : MAX, n < 0 ? n : MIN)
    }
    else {
      if (n > 0) pos.note(n)
      else if (n < 0) neg.note(n)
    }
    return n
  }
  vector(vec) {
    const size = vec.length
    if (!size) return new Arc([], null, null)
    const strs = Array(size), nums = Array(size), cats = Array(size)
    const { num: { by: nby, to: nto }, str: { by: sby, to: sto, wd: swd } } = this
    for (let i = 0, x, s, n, c, w; i < size; i++) {
      typeof (x = vec[i]) === NUM
        ? (n = x, s = ('' + n), c = Cate.Num)
        : (s = sto(x), n = nto(x), c = nby(n) ? Cate.Num : sby(s) ? Cate.Str : Cate.NaN)
      cats[i] = c
      strs[i] = c === Cate.Str ? this.noteValTo(s, strs) : s
      nums[i] = c === Cate.Num ? this.noteNumTo(n, nums) : void 0
      if (swd && (w = swd(s)) > (vec.wd ?? 0)) vec.wd = w
    }

    return new Arc(strs, nums, cats)
  }
  entries(matrix) {

  }
  columns(matrix) {
    const h = height(matrix), w = width(matrix)
    const strs = this.mut ? matrix : Array(h), nums = Array(h), cats = Array(h)
    if (!size) return new Arc(strs, nums, cats)
    const { by: nby, to: nto, sg: nsg } = this.num,
          { by: sby, to: sto, wd: swd } = this.str
    const { Num: C_NUM, Str: C_STR, NaN: C_NAN } = Cate
    const tbd = new StringBound(), nbd = nsg ? new SignedBound() : new Bound()
    let pad = 0
    for (let i = 0, x, s, n, c, w; i < size; i++) {
      typeof (x = matrix[i]) === NUM
        ? (n = x, s = ('' + n), c = C_NUM)
        : (s = sto(x), n = nto(x), c = nby(n) ? C_NUM : sby(s) ? C_STR : C_NAN)
      cats[i] = c
      strs[i] = c === C_STR ? tbd.note(s) : s
      if ((w = swd(s)) > pad) { pad = w }
      if (c === C_NUM) { nums[i] = nbd.note(n) }
    }
    strs.lo = tbd.lo, strs.hi = tbd.hi, strs.width = pad
    nsg ? (nums.pos = nbd.pos, nums.neg = nbd.neg) : (nums.lo = nbd.lo, nums.hi = nbd.hi)
    return new Arc(strs, nums, cats)
  }
  * rows(matrix) {

  }

}

// noteStrTo(x, strs) {
//   const { lo, hi, pad } = strs
//   if (pad === void 0) {
//     strs.lo = x
//     strs.hi = x
//     strs.pad = x.length
//   }
//   else {
//     const w = this.str.wd(x)
//     if (x < lo) strs.lo = x
//     if (x > hi) strs.hi = x
//     if (w > pad) strs.pad = w
//   }
//   return x
// }
// noteNumTo(n, nums) {
//   if (this.num.sg) {
//     const { pos, neg } = nums
//     if (!pos) {
//       nums.pos = new Bound(n > 0 ? n : MAX, n > 0 ? n : MIN)
//       nums.neg = new Bound(n < 0 ? n : MAX, n < 0 ? n : MIN)
//     }
//     else {
//       if (n > 0) pos.note(n)
//       if (n < 0) neg.note(n)
//     }
//     return n
//   }
//   else {
//     const { lo, hi } = nums
//     if (lo === void 0) {
//       nums.lo = n
//       nums.hi = n
//     }
//     else {
//       if (n < lo) nums.lo = n
//       if (n > hi) nums.hi = n
//     }
//     return n
//   }
// }