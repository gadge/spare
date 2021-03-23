import { ATLAS, SUBTLE } from '@palett/presets'
import { DecoConfig }    from 'packages/preset/preset-deco/dist/index.esm'
import { splitLiteral }  from '@spare/splitter'

export const CONF_DECO_STRING = {
  vectify: splitLiteral,
  width: 0,
}
export const presetString = p => {
  return DecoConfig
    .build(p)
    .replenishConfigs(CONF_DECO_STRING)
    .defaultPresets(ATLAS, SUBTLE)
}

// DecoConfig.prototype.defaultPresets.call(p, ATLAS, SUBTLE)
// if (nullish(p.vectify)) p.vectify = splitLiteral
// if (nullish(p.width)) p.width = 0
// return p
