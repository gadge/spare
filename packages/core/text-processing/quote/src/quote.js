import { APOS, DITTO } from '@spare/enum-quotes'
import { DT, QT } from '@spare/enum-chars'

export const quote = x => QT + x + QT
export const ditto = x => DT + x + DT

export const qt = (x, mode) => {
  if (mode === APOS) return quote(x)
  if (mode === DITTO) return ditto(x)
  return x
}

