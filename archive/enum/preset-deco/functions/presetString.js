import { ATLAS, SUBTLE } from '@palett/presets'
import { splitLiteral } from '@texting/splitter'
import { DecoConfig } from '@spare/deco-config'

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
