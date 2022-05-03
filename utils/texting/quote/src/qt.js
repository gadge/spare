import { DT, QT }      from '@spare/enum-chars'
import { APOS, DITTO } from '@spare/enum-quotes'
import { isString }    from '@typen/literal'
import { nullish }     from '@typen/nullish'

export const quote = x => QT + x + QT
export const ditto = x => DT + x + DT

export const qt = (x, mode) => {
  if (mode === APOS || mode === QT) return quote(x)
  if (mode === DITTO || mode === DT) return ditto(x)
  if (!nullish(mode) && isString(mode)) return mode + x + mode
  return x
}

export const Qt = (mode) => {
  if (mode === APOS || mode === QT) return quote
  if (mode === DITTO || mode === DT) return ditto
  return null
}