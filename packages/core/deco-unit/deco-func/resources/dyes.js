import { Blue, BlueGrey, Brown, DeepPurple, Grey, LightBlue, Lime, Purple } from '@palett/cards'
import { hexToRgb }                                                         from '@palett/convert'
import { Dye }                                                              from '@palett/dye'
import { makeReplaceable }                                                  from '@spare/translator'

export const nameDye = Dye(Blue.lighten_2 |> hexToRgb)
export const argsDye = Dye(LightBlue.accent_2 |> hexToRgb)
export const bodyDye = Dye(LightBlue.lighten_3 |> hexToRgb)
export const arrowDye = Dye(Lime.lighten_1 |> hexToRgb)

export const PresetDye = [
  [/function/gi, 'function'|> Dye(Grey.base |> hexToRgb)],
  [/return/gi, 'return'|> Dye(Brown.lighten_3 |> hexToRgb)],
  [/\bthis\b/gi, x => x|> Dye(BlueGrey.accent_2 |> hexToRgb)],
  [/\b(if|else|while|do|switch|for)\b/gi, x => x|> Dye(Purple.lighten_3 |> hexToRgb)],
  [/\b(var|let|const)\b/gi, x => x|> Dye(DeepPurple.lighten_3 |> hexToRgb)],
] |> makeReplaceable
