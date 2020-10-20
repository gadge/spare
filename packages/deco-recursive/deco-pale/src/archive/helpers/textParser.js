import { tenseQuote as quote } from '@spare/quote'
import { NUM, STR }            from '@typen/enum-data-types'
import { isNumeric }           from '@typen/num-loose'

const TextParsers = {
  loose: (x, t) => {
    if (t === NUM) return x
    if (t === STR) return isNumeric(x) ? x : quote(x)
    return x.toString() |> quote
  },
  standard: (x, t) => {
    if (t === NUM) return x
    if (t === STR) return x |> quote
    return x.toString() |> quote
  },
  strict: (x, t) => {
    if (t === NUM) return x|> quote
    if (t === STR) return x|> quote
    return x.toString() |> quote
  },
}
