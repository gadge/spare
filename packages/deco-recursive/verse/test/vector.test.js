import { rand }                   from '@aryth/rand'
import { simpleVectors }          from '@foba/foo'
import { NumberVectorCollection } from '@foba/vector'
import { says }                   from '@spare/logger'
import { Verse }                  from '../src/Verse'

const candidates = {
  empty: [],
  arithmetic: NumberVectorCollection.flopShuffle({}),
  soleElement: [rand(256)],
  textNum: NumberVectorCollection.flopShuffle({}).map(String),
  misc: [null, undefined, NaN, 'Infinity', '+', 1.2E+1, 1.2E+2, 1.2E+3, 1.2E+4],
  ...simpleVectors({ h: 12 })
}

for (const [key, vector] of Object.entries(candidates))
  Verse.vector(vector) |> says[key]
