import { hslToRgb } from '@palett/convert'
import { Dye } from '@palett/dye'
import { mapper } from '@vect/object-mapper'

const L = '{ ', R = ' }'

const Tubes = {
  0: Dye([45, 100, 53] |> hslToRgb),
  1: Dye([44, 100, 59] |> hslToRgb),
  2: Dye([43, 100, 64] |> hslToRgb),
  3: Dye([42, 100, 70] |> hslToRgb),
  4: Dye([41, 100, 74] |> hslToRgb),
  5: Dye([40, 100, 78] |> hslToRgb),
  6: Dye([39, 100, 82] |> hslToRgb),
  7: Dye([37, 100, 86] |> hslToRgb),
}

const Puncs = mapper(Tubes, hsl => [L|>hsl, R|>hsl])

export const BRC = mapper(Puncs, ([L, R]) => content => L + content + R)



