import { Bound }         from '@aryth/bound'
import { value }         from '@texting/string-value'
import { OBJ, STR, SYM } from '@typen/enum-data-types'
import { isLiteral }     from '@typen/literal'
import { mutate }        from '@vect/vector-mapper'

export class Type {
  static Num = 0
  static Str = 1
  static NaN = 3
}


export function stringify(vec, pad = true) {
  const size = vec.length
  const texts = Array(size)
  let width = 0
  for (let i = 0, x, t; i < size; i++) {
    x = vec[i], t = typeof x
    x = x === null ? '' + x : t === OBJ || t === SYM ? x.toString() : t === STR ? x : '' + x
    texts[i] = x
    if (x.length > width) width = x.length
  }
  texts.width = width
  if (pad) mutate(texts, x => x.padStart(width))
  return texts
}

export function beta(texts) {
  const size = texts.length
  const rates = new Uint16Array(size)
  const nums = Array(size)
  const width = texts.width
  const nbd = new Bound(), tbd = new Bound()
  for (let i = 0, x, n; i < size; i++) {
    x = texts[i], n = parseFloat(x)
    if (!isNaN(x - n)) {
      rates[i] |= Type.Num << 8
      nums[i] = nbd.note(n)
    }
    else if (isLiteral(x)) {
      rates[i] |= Type.Str << 8
      nums[i] = tbd.note(value(x, width))
    }
    else {
      rates[i] |= Type.NaN << 8
    }
  }
  for (let i = 0, t; i < size; i++) {
    t = rates[i] >> 8
    if (t === Type.Num) {
      rates[i] |= 255 * (nums[i] - nbd.lo) / nbd.dif
    }
    else if (t === Type.Str) {
      rates[i] |= 255 * (nums[i] - tbd.lo) / tbd.dif
    }
    else {
    }
  }
  return rates
}