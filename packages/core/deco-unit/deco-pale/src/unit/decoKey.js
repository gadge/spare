import { tenseQuote } from '@spare/quote'
import { isNumeric }  from '@typen/num-strict'

export const decoKey = x => (/\W/.test(x) || isNumeric(x)) ? tenseQuote(x) : x

