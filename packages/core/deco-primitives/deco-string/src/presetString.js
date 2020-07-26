import { ATLAS, SUBTLE } from '@palett/presets'
import { splitLiteral }  from '@spare/splitter'

export const NUMERIC_PRESET = ATLAS
export const LITERAL_PRESET = SUBTLE
export const PRESETS = [NUMERIC_PRESET, LITERAL_PRESET]

export const presetString = p => {
  if (!p.presets) p.presets = PRESETS
  if (!p.vectify) p.vectify = splitLiteral
  if (!p.width) p.width = 80
  return p
}
