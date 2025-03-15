import { tenseQuote as quote } from '@spare/quote'
import { NUM, STR }            from '@typen/enum-data-types'
import { isNumeric }           from '@typen/num-loose'

const TextParsers = {
  loose: (x, t) => {
    if (t === NUM) return x
    if (t === STR) return isNumeric(x) ? x : quote(x)
    return quote(x.toString())
  },
  standard: (x, t) => {
    if (t === NUM) return x
    if (t === STR) return quote(x)
    return quote(x.toString())
  },
  strict: (x, t) => {
    if (t === NUM) return quote(x)
    if (t === STR) return quote(x)
    return quote(x.toString())
  },
}
