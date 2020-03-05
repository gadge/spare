import { hslToRgb } from '@palett/convert'
import { Dye } from '@palett/dye'
import { mapper } from '@vect/object-mapper'

const L = '[ ', R = ' ]'

const Tubes = {
  0: Dye([199, 100, 63] |> hslToRgb),
  1: Dye([201, 100, 68] |> hslToRgb),
  2: Dye([203, 100, 72] |> hslToRgb),
  3: Dye([205, 100, 76] |> hslToRgb),
  5: Dye([207, 100, 84] |> hslToRgb),
  4: Dye([209, 100, 80] |> hslToRgb),
  6: Dye([211, 100, 88] |> hslToRgb),
  7: Dye([214, 100, 90] |> hslToRgb),
}

const Puncs = mapper(Tubes, dye => [L |> dye, R |> dye])

export const BRK = mapper(Puncs, ([L, R]) => content => L + content + R)

export const brk = content => L + content + R



