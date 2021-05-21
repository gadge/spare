import { Dye }    from '@palett/dye'
import { mapper } from '@vect/object-mapper'

const Dyes = {
  0: Dye.hsl([ 199, 100, 63 ]),
  1: Dye.hsl([ 201, 100, 68 ]),
  2: Dye.hsl([ 203, 100, 72 ]),
  3: Dye.hsl([ 205, 100, 76 ]),
  4: Dye.hsl([ 207, 100, 84 ]),
  5: Dye.hsl([ 209, 100, 80 ]),
  6: Dye.hsl([ 211, 100, 88 ]),
  7: Dye.hsl([ 214, 100, 90 ]),
}

const L = '[ ', R = ' ]'

export const BRK = mapper(Dyes, (dye) => {
  const l = L |> dye, r = R |> dye
  return content => l + content + r
})



