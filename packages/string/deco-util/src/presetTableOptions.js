import { COLUMNWISE } from '@vect/matrix'
import { FRESH, JUNGLE, SUBTLE } from '@palett/presets'
import { LF } from '@spare/enum-chars'

export const presetTableOptions = o => {
  o.direct = o.direct ?? COLUMNWISE
  o.preset = o.preset || FRESH
  o.stringPreset = o.stringPreset || JUNGLE
  o.labelPreset = o.labelPreset || SUBTLE
  o.delim = o.delim || LF
  o.ansi = o.ansi ?? true
  return o
}
