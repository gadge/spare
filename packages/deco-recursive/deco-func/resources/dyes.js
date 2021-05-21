import { Blue, BlueGrey, Brown, DeepPurple, Grey, LightBlue, Lime, Purple } from '@palett/cards'
import { Dye }                                                              from '@palett/dye'
import { makeReplaceable }                                                  from '@spare/translator'

export const nameDye = Dye.hex(Blue.lighten_2)
export const argsDye = Dye.hex(LightBlue.accent_2)
export const bodyDye = Dye.hex(LightBlue.lighten_3)
export const arrowDye = Dye.hex(Lime.lighten_1)

export const PresetDye = [
  [ /function/gi, 'function' |> Dye.hex(Grey.base) ],
  [ /return/gi, 'return' |> Dye.hex(Brown.lighten_3) ],
  [ /\bthis\b/gi, Dye.hex(BlueGrey.accent_2) ],
  [ /\b(if|else|while|do|switch|for)\b/gi, Dye.hex(Purple.lighten_3) ],
  [ /\b(var|let|const)\b/gi, Dye.hex(DeepPurple.lighten_3) ],
] |> makeReplaceable
