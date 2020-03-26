import { typ } from '@typen/typ'
import { COSP } from '@spare/enum-chars'
import { BOO, NUM, OBJ, STR } from '@typen/enum-data-types'
import { ARRAY, DATE, OBJECT } from '@typen/enum-object-types'
import { BRACE, BRACKET } from '@spare/enum-brackets'
import { tenseQuote } from '@spare/quote'
import { cosmetics as cosmeticsVector } from '@spare/deco-vector'
import { cosmetics as cosmeticsObject } from '@spare/deco-object'
import { decoKey } from './decoKey'
import { decoDate, decoDateTime } from '@spare/deco-date'

const PRESET_VE = {
  delim: COSP,
  read: decoValue,
  bracket: BRACKET
}

const PRESET_OB = {
  dash: ':',
  delim: COSP,
  keyRead: decoKey,
  read: decoValue,
  bracket: BRACE
}

export function decoValue (x) {
  if (x === void 0 || x === null) return x
  let t = typeof x
  if (t === NUM || t === BOO) return x
  if (t === STR) return tenseQuote(x)
  if (t === OBJ && (t = typ(x))) {
    if (t === ARRAY) return cosmeticsVector.call(PRESET_VE, x)
    if (t === OBJECT) return cosmeticsObject.call(PRESET_OB, x)
    if (t === DATE) return decoDateTime(x)
  }
  return tenseQuote(x.toString())
}








