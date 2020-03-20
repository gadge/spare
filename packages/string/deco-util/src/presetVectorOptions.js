import { FRESH, JUNGLE } from '@palett/presets'
import { BRK, NONE } from '@spare/enum-brackets'
import { LF } from '@spare/enum-chars'

export const presetVectorOptions = o => {
  o.indexed = o.indexed ?? true
  o.preset = o.preset || FRESH
  o.stringPreset = o.stringPreset || JUNGLE
  o.dash = o.dash || ') '
  o.delim = o.delim || (',' + LF)
  o.bracket = !o.bracket ? NONE : BRK
  return o
}
