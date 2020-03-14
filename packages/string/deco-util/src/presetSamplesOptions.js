import { FRESH, JUNGLE, SUBTLE } from '@palett/presets'
import { COLUMNWISE } from '@vect/matrix'

export const presetSamplesOptions = o => {
  o.indexed = o.indexed || true
  o.direct = o.direct || COLUMNWISE
  o.preset = o.preset || FRESH
  o.keyPreset = o.keyPreset || SUBTLE
  o.stringPreset = o.stringPreset || JUNGLE
  o.delimiter = o.delimiter || ', '
  o.bracket = o.bracket || true
  return o
}
