import { rand }                   from '@aryth/rand'
import { NumberVectorCollection } from '@foba/vector'
import { DECANTE, METRO, SUMMER } from '@palett/presets'
import { SP }                     from '@texting/enum-chars'
import { indexed }                from '@vect/object-mapper'
import { DecoVector }             from '../index.js'
import { test } from 'node:test'

const VECTORS = {
  empty: [],
  arithmetic: NumberVectorCollection.flopShuffle(),
  soleElement: [ rand(256) ],
  textNum: NumberVectorCollection.flopShuffle().map(String),
  misc: [ null, undefined, NaN, 'Infinity', '+', 1.2E+1, 1.2E+2, 1.2E+3, 1.2E+4 ]
}

test('deco-vector', () => {
  const WD = 24
  const LINE = '+'.repeat(WD) + WD
  const decoVector = DecoVector({ thres: WD, pres: { str: METRO, pos: SUMMER, neg: DECANTE }, })
  for (const [ key, vector ] of indexed(VECTORS)) {
    console.log(key + SP + decoVector(vector, 0, key.length + 2))
    console.log(LINE)
  }

})
