import { simpleMatrices } from '@foba/foo'
import { Matrigin } from '../src/Matrigin'
import { xr } from '@spare/xr'
import { logNeL } from '@spare/logger'
import { deco } from '@spare/deco'

const Matrices = simpleMatrices({ h: 8, w: 6 })
const Params = {
  c0021: { t: 0, b: 0, l: 2, r: 1 },
  c0121: { t: 0, b: 1, l: 2, r: 1 },
  c1032: { t: 1, b: 0, l: 3, r: 2 },
  c1132: { t: 1, b: 1, l: 3, r: 2 },
  c3232: { t: 3, b: 2, l: 3, r: 2 },
  c9921: { t: 9, b: 9, l: 3, r: 2 },
  c3299: { t: 3, b: 2, l: 9, r: 9 },
}
const marginConfig = Params.c0121 |> (({ t, b, l, r }) => [t, b, l, r])

for (const [key, entries] of Object.entries(Matrices)) {
  xr(key).matrigin(Matrigin
    .build(entries, ...marginConfig)
    .map(k => `'${k}'`)
    |> deco
  ) |> logNeL
}



