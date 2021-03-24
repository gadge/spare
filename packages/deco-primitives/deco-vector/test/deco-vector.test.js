import { rand }                   from '@aryth/rand'
import { simpleVectorCollection } from '@foba/foo'
import { NumberVectorCollection } from '@foba/vector'
import { METRO, SUBTLE }          from '@palett/presets'
import { BRK }                    from '@spare/enum-brackets'
import { says }                   from '@spare/logger'
import { Deco }                   from '../index'

const Strangers = {
  empty: [],
  arithmetic: NumberVectorCollection.flopShuffle(),
  soleElement: [rand(256)],
  textNum: NumberVectorCollection.flopShuffle().map(String),
  misc: [null, undefined, NaN, 'Infinity', '+', 1.2E+1, 1.2E+2, 1.2E+3, 1.2E+4]
}

const SimpleVectors = simpleVectorCollection({ h: 16 })

const candidates = { ...Strangers, ...SimpleVectors }

export class VectorDecoTest {
  static test() {
    for (const [key, vector] of Object.entries(candidates)) {
      vector
        |> Deco({
        head: 4,
        tail: 4,
        indexed: false,
        bracket: BRK,
        presets: [SUBTLE, METRO],
        // delim: ', ',
        discrete: false,
        label: 1,
      })
        |> says[key]
    }
  }
}

VectorDecoTest.test()
