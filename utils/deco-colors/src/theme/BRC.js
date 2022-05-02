import { Dye }    from '@palett/dye'
import { mapper } from '@vect/object-mapper'

const Dyes = {
  0: Dye.hsl([ 45, 100, 53 ]),
  1: Dye.hsl([ 44, 100, 59 ]),
  2: Dye.hsl([ 43, 100, 64 ]),
  3: Dye.hsl([ 42, 100, 70 ]),
  4: Dye.hsl([ 41, 100, 74 ]),
  5: Dye.hsl([ 40, 100, 78 ]),
  6: Dye.hsl([ 39, 100, 82 ]),
  7: Dye.hsl([ 37, 100, 86 ]),
}

const L = '{ ', R = ' }'

export const BRC = mapper(Dyes, dye => {
  const l = L |> dye, r = R |> dye
  return content => l + content + r
})


