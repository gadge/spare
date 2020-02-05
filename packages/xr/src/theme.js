import { Hatsu } from 'hatsu'
import { Palett } from 'palett'

const { hex } = Hatsu

const Thm = {
  brm: hex(Palett.blueGrey.base),
  br: hex(Palett.orange.lighten_3),
  pr: hex(Palett.indigo.lighten_1),
}

export const bracketMain = tx => Thm.brm('[') + tx + Thm.brm(']')
export const bracket = tx => Thm.br('[') + tx + Thm.br(']')
export const parenthesis = tx => Thm.pr('(') + tx + Thm.pr(')')
