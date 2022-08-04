import { mapVal } from '@vect/object-mapper'
import { hslFab } from '../dye.js'

const Dyes = {
  0: hslFab.make([45, 100, 53]),
  1: hslFab.make([44, 100, 59]),
  2: hslFab.make([43, 100, 64]),
  3: hslFab.make([42, 100, 70]),
  4: hslFab.make([41, 100, 74]),
  5: hslFab.make([40, 100, 78]),
  6: hslFab.make([39, 100, 82]),
  7: hslFab.make([37, 100, 86]),
}

const L = '{ ', R = ' }'

export const BRC = mapVal(Dyes, dye => {
  return tx => dye(L) + tx + dye(R)
})