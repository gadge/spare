import { Cards }    from '@palett/cards'
import { hexToRgb } from '@palett/convert'
import { Dye }      from '@palett/dye'


const orange = Dye(Cards.orange.lighten_3 |> hexToRgb)
const indigo = Dye(Cards.indigo.lighten_1 |> hexToRgb)

export const bracket = tx => orange('[') + tx + orange(']')
export const parenth = tx => indigo('(') + tx + indigo(')')
