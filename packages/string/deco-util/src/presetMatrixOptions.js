import { FRESH, OCEAN } from '@palett/presets'
import { ROWWISE } from '@vect/matrix'
import { BRK, NONE } from '@spare/enum-brackets'

export const presetMatrixOptions = o => {
  o.direct = o.direct || ROWWISE
  o.preset = o.preset || FRESH
  o.preset = o.preset || OCEAN
  o.delim = o.delim || ', '
  o.bracket = !o.bracket ? NONE : BRK
  return o
}
