import { Blue, BlueGrey, Brown, DeepPurple, Grey, LightBlue, Lime, Purple } from '@palett/cards'
import { DyeFab }                                                           from '@palett/dye'
import { makeReplaceable }                                                  from '@spare/translator'

const hexDye = DyeFab.hex()
export const nameDye = hexDye.make(Blue.lighten_2)
export const argsDye = hexDye.make(LightBlue.accent_2)
export const bodyDye = hexDye.make(LightBlue.lighten_3)
export const arrowDye = hexDye.make(Lime.lighten_1)

export const PresetDye = [
  [/function/gi, hexDye.render(Grey.base, 'function')],
  [/return/gi, hexDye.render(Brown.lighten_3, 'return')],
  [/\bthis\b/gi, hexDye.make(BlueGrey.accent_2)],
  [/\b(if|else|while|do|switch|for)\b/gi, hexDye.make(Purple.lighten_3)],
  [/\b(var|let|const)\b/gi, hexDye.make(DeepPurple.lighten_3)],
] |> makeReplaceable
