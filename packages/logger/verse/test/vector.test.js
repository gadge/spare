import { says } from '@spare/logger'
import { simpleVectors } from '@foba/foo'
import { FobaNum } from '@foba/vector'
import { rand } from '@aryth/rand'
import { Verse } from '../src/Verse'

const candidates = {
  empty: [],
  arithmetic: FobaNum.flop(),
  soleElement: [rand(256)],
  textNum: FobaNum.flop().map(String),
  misc: [null, undefined, NaN, 'Infinity', '+', 1.2E+1, 1.2E+2, 1.2E+3, 1.2E+4],
  ...simpleVectors({ h: 12 })
}

for (const [key, vector] of Object.entries(candidates))
  Verse.vector(vector) |> says[key]
