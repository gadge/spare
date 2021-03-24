import { LITERAL_PRESET, NUMERIC_PRESET } from '../resources/dyePresets'
import { DecoConfig }                     from '../src/DecoConfig'

export const CONF_DECO_FLAT = { mutate: true }

export const presetDecoFlat = p => DecoConfig
  .build(p)
  .replenishConfigs(CONF_DECO_FLAT)
  .defaultPresets(NUMERIC_PRESET, LITERAL_PRESET)