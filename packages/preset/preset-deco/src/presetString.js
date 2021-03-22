import { ATLAS, SUBTLE } from '@palett/presets'
import { DecoConfig }    from '@spare/preset-deco'
import { splitLiteral }  from '@spare/splitter'

export const CONF_DECO_STRING = {
  vectify: splitLiteral,
  width: 0,
}
export const presetString = p => {
  return DecoConfig
    .build(p)
    .assignConfigs(CONF_DECO_STRING)
    .assignPresets(ATLAS, SUBTLE)
}

// DecoConfig.prototype.assignPresets.call(p, ATLAS, SUBTLE)
// if (nullish(p.vectify)) p.vectify = splitLiteral
// if (nullish(p.width)) p.width = 0
// return p
