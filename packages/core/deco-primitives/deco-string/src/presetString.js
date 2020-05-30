import { ATLAS, SUBTLE } from '@palett/presets'
import { splitLiteral }  from '@spare/splitter'

export const NUMERIC_PRESET = { preset: ATLAS }
export const LITERAL_PRESET = { preset: SUBTLE }
export const PRESETS = [NUMERIC_PRESET, LITERAL_PRESET]

export const presetString = p => {
  p.delim = p?.delim ?? ''
  p.presets = p?.presets ?? PRESETS
  p.vectify = p?.vectify ?? splitLiteral
  return p
}
