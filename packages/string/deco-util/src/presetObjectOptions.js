import { FRESH, PLANET } from '@palett/presets'
import { BRC, NONE } from '@spare/enum-brackets'
import { LF } from '@spare/enum-chars'

export const presetObjectOptions = o => {
  o.preset = o.preset || FRESH
  o.stringPreset = o.stringPreset || PLANET
  o.dash = o.dash || ': '
  o.delim = o.delim || ',' + LF
  o.bracket = !o.bracket ? NONE : BRC
  return o
}
