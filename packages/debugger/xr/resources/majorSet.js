import { Cards } from '@palett/cards'
import { Dye }   from '@palett/dye'

const orange = Dye.hex(Cards.orange.lighten_3)
const indigo = Dye.hex(Cards.indigo.lighten_1)

export const bracket = tx => orange('[') + tx + orange(']')
export const parenth = tx => indigo('(') + tx + indigo(')')
