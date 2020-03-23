import { isNumeric } from '@typen/num-strict'
import { quote } from '@spare/quote'
import { BOO, NUM, STR } from '@typen/enum-data-types'

export const smartValueRead = x => {
  const t = typeof x
  if (x === void 0 || x === null || t === NUM || t === BOO) return x
  if (t === STR) return !isNumeric(x) ? quote(x) : x
  return x.toString()
}
