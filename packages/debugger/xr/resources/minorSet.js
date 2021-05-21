import { Cards } from '@palett/cards'
import { Dye }   from '@palett/dye'

const blueGrey = Dye.hex(Cards.blueGrey.base)
const grey = Dye.hex(Cards.grey.darken_1)

export const bracket = (tx = '') => blueGrey('[') + grey(tx) + blueGrey(']')
export const parenth = (tx = '') => blueGrey('(') + grey(tx) + blueGrey(')')
