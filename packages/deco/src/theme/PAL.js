import { Cards } from '@palett/cards'
import { hexToRgb } from '@palett/convert'
import { Dye } from '@palett/dye'

/**
 *
 * @type {Object<string,function>}
 */
export const PAL = {
  IDX: Dye(Cards.brown.lighten_5 |> hexToRgb),
  STR: Dye(Cards.lightGreen.accent_2 |> hexToRgb),
  NUM: Dye(Cards.deepOrange.accent_2 |> hexToRgb),
  BOO: Dye(Cards.teal.lighten_2 |> hexToRgb),
  UDF: Dye(Cards.brown.lighten_3 |> hexToRgb),
  BRK: Dye(Cards.blue.accent_2 |> hexToRgb),
  BRC: Dye(Cards.amber.base |> hexToRgb),
  FNC: Dye(Cards.green.accent_4 |> hexToRgb),
}
