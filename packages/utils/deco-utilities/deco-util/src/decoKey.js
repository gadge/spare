import { isNumeric } from '@typen/num-strict'
import { tenseQuote } from '@spare/quote'

export const decoKey = x => (/\W/.test(x) || isNumeric(x)) ? tenseQuote(x) : x

