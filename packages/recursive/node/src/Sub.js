import { hasFull }   from '@texting/charset-fullwidth'
import { isLiteral } from '@typen/literal'
import { isNumeric } from '@typen/num-strict'

export class Sub {
  static Num = 0b0
  static Str = 0b1
  static Han = 0b10
  static NaN = 0b11
}

export function detSub(n, t) {
  return isNumeric(n) ? 0 : isLiteral(t) ? 1 : hasFull(t) ? 2 : 3
}