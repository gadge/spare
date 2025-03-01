import { isLiteral } from '@typen/literal'
import { isNumeric } from '@typen/num-strict'

export class Sub {
  static Num = 0
  static Str = 1
  static NaN = 3
}

export function checkSub(n, t) {
  return isNumeric(n) ? 0 : isLiteral(t) ? 1 : 3
}