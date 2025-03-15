import {
  HEADING_PRESET,
  LITERAL_PRESET,
  NUMERIC_PRESET
} from './resources/dyePresets.js'

// export { DecoConfig }                       from './src/DecoConfig.js'
// export { CONF_DECO_ENTRIES, presetEntries } from './functions/presetEntries.js'
// export { CONF_DECO_OBJECT, presetObject }   from './functions/presetObject.js'
// export { CONF_DECO_VECTOR, presetVector }   from './functions/presetVector.js'
// export { CONF_DECO_MATRIX, presetMatrix }   from './functions/presetMatrix.js'
// export { CONF_DECO_CROSTAB, presetCrostab } from './functions/presetCrostab.js'
// export { CONF_DECO_TABLE, presetTable }     from './functions/presetTable.js'
// export { CONF_DECO_SAMPLES, presetSamples } from './functions/presetSamples.js'
// export { CONF_DECO_STRING, presetString }   from './functions/presetString.js'
// export { CONF_DECO_FLAT, presetDecoFlat }   from './functions/presetDecoFlat.js'
// export { CONF_DECO, presetDeco }            from './functions/presetDeco.js'
export {
  NUMERIC_PRESET,
  LITERAL_PRESET,
  HEADING_PRESET
} from './resources/dyePresets.js'

export const DUAL_PRESET_COLLECTION = [NUMERIC_PRESET, LITERAL_PRESET]
export const TRI_PRESET_COLLECTION = [NUMERIC_PRESET, LITERAL_PRESET, HEADING_PRESET]
