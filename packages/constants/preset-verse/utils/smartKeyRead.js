import { isNumeric } from '@typen/num-strict'
import { quote } from '@spare/quote'

export const smartKeyRead = x => (/\W/.test(x) || isNumeric(x)) ? quote(x) : x


