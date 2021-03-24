import {
  HEADING_PRESET,
  LITERAL_PRESET,
  NUMERIC_PRESET
} from './resources/dyePresets'

// export { DecoConfig }                       from './src/DecoConfig'
// export { CONF_DECO_ENTRIES, presetEntries } from './functions/presetEntries'
// export { CONF_DECO_OBJECT, presetObject }   from './functions/presetObject'
// export { CONF_DECO_VECTOR, presetVector }   from './functions/presetVector'
// export { CONF_DECO_MATRIX, presetMatrix }   from './functions/presetMatrix'
// export { CONF_DECO_CROSTAB, presetCrostab } from './functions/presetCrostab'
// export { CONF_DECO_TABLE, presetTable }     from './functions/presetTable'
// export { CONF_DECO_SAMPLES, presetSamples } from './functions/presetSamples'
// export { CONF_DECO_STRING, presetString }   from './functions/presetString'
// export { CONF_DECO_FLAT, presetDecoFlat }   from './functions/presetDecoFlat'
// export { CONF_DECO, presetDeco }            from './functions/presetDeco'
export {
  NUMERIC_PRESET,
  LITERAL_PRESET,
  HEADING_PRESET
} from './resources/dyePresets'

export const DUAL_PRESET_COLLECTION = [NUMERIC_PRESET, LITERAL_PRESET]
export const TRI_PRESET_COLLECTION = [NUMERIC_PRESET, LITERAL_PRESET, HEADING_PRESET]
