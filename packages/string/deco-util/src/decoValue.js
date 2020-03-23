import { inferType } from '@typen/num-strict'
import { COSP } from '@spare/enum-chars'
import { BOO, NUM, STR } from '@typen/enum-data-types'
import { ARRAY, OBJECT } from '@typen/enum-object-types'
import { BRACE, BRACKET } from '@spare/enum-brackets'
import { cosmetics as cosmeticsVector } from '@spare/deco-vector'
import { cosmetics as cosmeticsObject } from '@spare/deco-object'
import { decoKey } from './decoKey'
import { decoString } from './decoString'

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
  const t = inferType(x)
  if (t === NUM || t === BOO) return x
  if (t === STR) return decoString(x)
  if (t === ARRAY) return cosmeticsVector.call(PRESET_VE, x)
  if (t === OBJECT) return cosmeticsObject.call(PRESET_OB, x)
  return decoString(x.toString())
}





