import { ATLAS, SUBTLE } from '@palett/presets'
import { DecoConfig }    from '@spare/preset-deco'
import { splitLiteral }  from '@spare/splitter'
import { nullish }       from '@typen/nullish'

export const presetString = p => {
  DecoConfig.prototype.assignPresets.call(p, ATLAS, SUBTLE)
  if (nullish(p.vectify)) p.vectify = splitLiteral
  if (nullish(p.width)) p.width = 0
  return p
}
