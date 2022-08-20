import { rand }                   from '@aryth/rand'
import { simpleVectorCollection } from '@foba/foo'
import { NumberVectorCollection } from '@foba/vector'
import { DECANTE, METRO, SUMMER } from '@palett/presets'
import { BRK }                    from '@spare/enum-brackets'
import { mapVal }                 from '@vect/object-mapper'
import { DecoVector }             from '../index.js'

const Strangers = {
  empty: [],
  arithmetic: NumberVectorCollection.flopShuffle(),
  soleElement: [ rand(256) ],
  textNum: NumberVectorCollection.flopShuffle().map(String),
  misc: [ null, undefined, NaN, 'Infinity', '+', 1.2E+1, 1.2E+2, 1.2E+3, 1.2E+4 ]
}

const SimpleVectors = mapVal(simpleVectorCollection({ h: 16 }), Object.values)

const candidates = { ...Strangers, ...SimpleVectors }

candidates |> console.log

export class VectorDecoTest {
  static test() {
    for (const [ key, vector ] of Object.entries(candidates)) {
      vector
        |> DecoVector({
        // head: 4,
        // tail: 4,
        indexed: false,
        bracket: BRK,
        presets: [ SUMMER, DECANTE, METRO ],
        delim: ', ',
        discrete: false,
        label: 1,
      })
        |> console.log
    }
  }
}

VectorDecoTest.test()
