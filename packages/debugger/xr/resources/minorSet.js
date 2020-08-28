import { Cards }    from '@palett/cards'
import { hexToRgb } from '@palett/convert'
import { Dye }      from '@palett/dye'

const blueGrey = Dye(Cards.blueGrey.base |> hexToRgb)
const grey = Dye(Cards.grey.darken_1 |> hexToRgb)
export const bracket = (tx = '') => blueGrey('[') + grey(tx) + blueGrey(']')
export const parenth = (tx = '') => blueGrey('(') + grey(tx) + blueGrey(')')
