import { isNumeric } from '@typen/num-strict'
import { decoString } from './decoString'

export const decoKey = x => (/\W/.test(x) || isNumeric(x)) ? decoString(x) : x

