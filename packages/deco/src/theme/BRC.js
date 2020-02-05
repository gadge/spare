import { Hatsu } from 'hatsu'
import { Ob } from 'veho'

const { hsl } = Hatsu

const L = '{ ', R = ' }'

const Tubes = {
  0: hsl([45, 100, 53]),
  1: hsl([44, 100, 59]),
  2: hsl([43, 100, 64]),
  3: hsl([42, 100, 70]),
  4: hsl([41, 100, 74]),
  5: hsl([40, 100, 78]),
  6: hsl([39, 100, 82]),
}

const Puncs = Ob.mapValues(Tubes, hsl => [L|>hsl, R|>hsl])

export const BRC = Ob.mapValues(Puncs, ([L, R]) => content => L + content + R)



