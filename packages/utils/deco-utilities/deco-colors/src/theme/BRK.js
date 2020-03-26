import { hslToRgb } from '@palett/convert'
import { Dye } from '@palett/dye'
import { mapper } from '@vect/object-mapper'

const Dyes = {
  0: Dye([199, 100, 63] |> hslToRgb),
  1: Dye([201, 100, 68] |> hslToRgb),
  2: Dye([203, 100, 72] |> hslToRgb),
  3: Dye([205, 100, 76] |> hslToRgb),
  4: Dye([207, 100, 84] |> hslToRgb),
  5: Dye([209, 100, 80] |> hslToRgb),
  6: Dye([211, 100, 88] |> hslToRgb),
  7: Dye([214, 100, 90] |> hslToRgb),
}

const L = '[ ', R = ' ]'

export const BRK = mapper(Dyes, (dye) => {
  const l = L |> dye, r = R |> dye
  return content => l + content + r
})



