import { FRESH, OCEAN } from '@palett/presets'

export const presetEntriesOptions = o => {
  o.preset = o.preset || FRESH
  o.preset = o.preset || OCEAN
  o.dash = o.dash || ' > '
  o.delimiter = o.delimiter || '\n'
  return o
}
