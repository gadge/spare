import { Cards }    from '@palett/cards'
import { hexToRgb } from '@palett/convert'
import { Dye }      from '@palett/dye'

export const bm = Dye(Cards.blueGrey.base |> hexToRgb)
export const br = Dye(Cards.orange.lighten_3 |> hexToRgb)
export const pr = Dye(Cards.indigo.lighten_1 |> hexToRgb)

export const bracketMain = tx => bm('[') + tx + bm(']')
export const bracket = tx => br('[') + tx + br(']')
export const parenthesis = tx => pr('(') + tx + pr(')')
