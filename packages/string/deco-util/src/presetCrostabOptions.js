import { POINTWISE } from '@vect/matrix'
import { FRESH, JUNGLE, SUBTLE } from '@palett/presets'

export const presetCrostabOptions = o => {
  o.direct = o.direct || POINTWISE
  o.preset = o.preset || FRESH
  o.stringPreset = o.stringPreset || JUNGLE
  o.labelPreset = o.labelPreset || SUBTLE
  o.ansi = o.ansi || true
  return o
}
