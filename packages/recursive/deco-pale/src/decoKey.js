import { tenseQuote } from '@texting/quote'
import { isNumeric }  from '@typen/num-strict'

export const decoKey = function (x) {
  return (/\W/.test(x) || isNumeric(x)) ? tenseQuote(x) : x
}

