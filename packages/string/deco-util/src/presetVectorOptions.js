import { FRESH, JUNGLE } from '@palett/presets'

export const presetVectorOptions = o => {
  o.indexed = o.indexed || true
  o.preset = o.preset || FRESH
  o.stringPreset = o.stringPreset || JUNGLE
  o.dash = o.dash || ') '
  o.delimiter = o.delimiter || ',\n'
  return o
}
