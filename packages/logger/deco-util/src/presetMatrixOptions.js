import { FRESH, OCEAN } from '@palett/presets'
import { ROWWISE } from '@vect/matrix'

export const presetMatrixOptions = o => {
  o.direct = o.direct || ROWWISE
  o.preset = o.preset || FRESH
  o.preset = o.preset || OCEAN
  o.delimiter = o.delimiter || ', '
  return o
}
