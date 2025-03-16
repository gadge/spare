import { hasFull }   from '@texting/charset-fullwidth'
import { isLiteral } from '@typen/literal'
import { isNumeric } from '@typen/num-strict'

// export class Sub {
//   static Num = 0b0
//   static Str = 0b1
//   static Han = 0b10
//   static NaN = 0b11
// }

export class Sub {
  static NaN = 0b00  // 0
  static Num = 0b01  // 1
  static Str = 0b10  // 2
  static Han = 0b11  // 3
}

export function id(n, t) {
  return isNumeric(n) ? 1 : isLiteral(t) ? 2 : hasFull(t) ? 3 : 0
}