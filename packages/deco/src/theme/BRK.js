import { Hatsu } from 'hatsu'
import { Ob } from 'veho'

const { hsl } = Hatsu

const L = '[ ', R = ' ]'

const Tubes = {
  0: hsl([199, 100, 63]),
  1: hsl([201, 100, 68]),
  2: hsl([203, 100, 72]),
  3: hsl([205, 100, 76]),
  5: hsl([207, 100, 84]),
  4: hsl([209, 100, 80]),
  6: hsl([211, 100, 88]),
}

const Puncs = Ob.mapValues(Tubes, hsl => [L|>hsl, R|>hsl])

export const BRK = Ob.mapValues(Puncs, ([L, R]) => content => L + content + R)



