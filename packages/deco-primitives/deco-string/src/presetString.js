import { ATLAS, SUBTLE }     from '@palett/presets'
import { assignFluoConfigs } from '@spare/preset-deco'
import { splitLiteral }      from '@spare/splitter'
import { nullish }           from '@typen/nullish'


export const NUMERIC_PRESET = ATLAS
export const LITERAL_PRESET = SUBTLE
export const PRESETS = [NUMERIC_PRESET, LITERAL_PRESET]

export const presetString = p => {
  // if (nullish(p.presets)) p.presets = PRESETS
  assignFluoConfigs(p)
  // p |> JSON.stringify |> console.log
  if (nullish(p.vectify)) p.vectify = splitLiteral
  if (nullish(p.width)) p.width = 0
  return p
}
