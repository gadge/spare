import { FRESH, JUNGLE, SUBTLE } from '@palett/presets'
import { COLUMNWISE } from '@vect/matrix'
import { BRK, NONE } from '@spare/enum-brackets'

export const presetSamplesOptions = o => {
  o.indexed = o.indexed || true
  o.direct = o.direct || COLUMNWISE
  o.preset = o.preset || FRESH
  o.keyPreset = o.keyPreset || SUBTLE
  o.stringPreset = o.stringPreset || JUNGLE
  o.delim = o.delim || ', '
  o.bracket = !o.bracket ? NONE : BRK
  return o
}
