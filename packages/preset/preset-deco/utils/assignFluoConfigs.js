import { HEADING_PRESET, LITERAL_PRESET, NUMERIC_PRESET } from '../resources/dyePresets'
import { NUM_BOUND_CONF_FULL, STR_BOUND_CONF_FULL }       from './fullWidthConfigs'

export const assignFluoConfigs = p => {
  if (!p.fluos) p.fluos = (p.presets ?? [NUMERIC_PRESET, LITERAL_PRESET]).map(preset => ({ preset }))
  if (p.full) {
    const [confNum, confStr] = p.fluos
    if (confNum && !confNum.filter && !confNum.mapper) Object.assign(confNum, NUM_BOUND_CONF_FULL)
    if (confStr && !confStr.filter && !confStr.mapper) Object.assign(confStr, STR_BOUND_CONF_FULL)
  }
  return p
}

export const assignFluoConfigsForTabular = p => {
  if (!p.fluos) p.fluos = (p.presets ?? [NUMERIC_PRESET, LITERAL_PRESET, HEADING_PRESET]).map(preset => ({ preset }))
  if (p.full) {
    const [confNum, confStr, confLab] = p.fluos
    if (confNum && !confNum.filter && !confNum.mapper) Object.assign(confNum, NUM_BOUND_CONF_FULL)
    if (confStr && !confStr.filter && !confStr.mapper) Object.assign(confStr, STR_BOUND_CONF_FULL)
    if (confLab && !confLab.filter && !confLab.mapper) Object.assign(confLab, STR_BOUND_CONF_FULL)
  }
  return p
}