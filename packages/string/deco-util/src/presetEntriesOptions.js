import { FRESH, OCEAN } from '@palett/presets'
import { BRK, NONE } from '@spare/enum-brackets'
import { LF } from '@spare/enum-chars'

export const presetEntriesOptions = o => {
  o.preset = o.preset || FRESH
  o.stringPreset = o.stringPreset || OCEAN
  o.dash = o.dash || ' > '
  o.delim = o.delim || LF
  o.bracket = !o.bracket ? NONE : BRK
  return o
}
