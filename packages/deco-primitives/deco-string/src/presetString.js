import { ATLAS, SUBTLE } from '@palett/presets'
import { splitLiteral }  from '@spare/splitter'
import { nullish }       from '@typen/nullish'

export const NUMERIC_PRESET = ATLAS
export const LITERAL_PRESET = SUBTLE
export const PRESETS = [NUMERIC_PRESET, LITERAL_PRESET]

export const presetString = p => {
  if (nullish(p.presets)) p.presets = PRESETS
  if (nullish(p.vectify)) p.vectify = splitLiteral
  if (nullish(p.width)) p.width = 0
  return p
}
