import { isNumeric } from '@typen/num-strict'

export const keyRead = x => (/\W/.test(x) || isNumeric(x)) ? ('\'' + x + '\'') : x
