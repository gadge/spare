import { mapper } from '@vect/object-mapper'
import { hslFab } from '../dye'


const Dyes = {
  0: hslFab.make([199, 100, 63]),
  1: hslFab.make([201, 100, 68]),
  2: hslFab.make([203, 100, 72]),
  3: hslFab.make([205, 100, 76]),
  4: hslFab.make([207, 100, 84]),
  5: hslFab.make([209, 100, 80]),
  6: hslFab.make([211, 100, 88]),
  7: hslFab.make([214, 100, 90]),
}

const L = '[ ', R = ' ]'

export const BRK = mapper(Dyes, (dye) => {
  return tx => dye(L) + tx + dye(R)
})



