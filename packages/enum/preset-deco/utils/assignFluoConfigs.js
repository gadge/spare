import { LITERAL_PRESET, NUMERIC_PRESET }           from '../resources/dyePresets'
import { NUM_BOUND_CONF_FULL, STR_BOUND_CONF_FULL } from './fullWidthConfigs'

export const assignPresetCollection = (p, ...presets) => {
  if (presets.length === 0) presets = p.presets ?? [NUMERIC_PRESET, LITERAL_PRESET]
  if (presets.length === 1) {
    if (!p.fluos) p.fluos = presets.map(preset => ({ preset }))
    if (p.full) {
      const [confNum = {}] = p.fluos
      if (!confNum.by && !confNum.to) Object.assign(confNum, NUM_BOUND_CONF_FULL)
    }
    return p
  }
  if (presets.length === 2) {
    if (!p.fluos) p.fluos = presets.map(preset => ({ preset }))
    if (p.full) {
      const [confNum = {}, confStr = {}] = p.fluos
      if (!confNum.by && !confNum.to) Object.assign(confNum, NUM_BOUND_CONF_FULL)
      if (!confStr.by && !confStr.to) Object.assign(confStr, STR_BOUND_CONF_FULL)
    }
    return p
  }
  if (presets.length >= 3) {
    if (!p.fluos) p.fluos = presets.map(preset => ({ preset }))
    if (p.full) {
      const [confNum = {}, confStr = {}, confLab = {}] = p.fluos
      if (!confNum.by && !confNum.to) Object.assign(confNum, NUM_BOUND_CONF_FULL)
      if (!confStr.by && !confStr.to) Object.assign(confStr, STR_BOUND_CONF_FULL)
      if (!confLab.by && !confLab.to) Object.assign(confLab, STR_BOUND_CONF_FULL)
    }
    return p
  }
}