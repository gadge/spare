import { logger, says } from '@spare/logger'
import { xr } from '@spare/xr'
import { simpleVectors } from '@foba/foo'
import { NumberVectorCollection } from '@foba/vector'
import { rand } from '@aryth/rand'
import { BRK } from '@spare/enum-brackets'
import { Deco } from '../index'
import { APOS } from '@spare/enum-quotes'

const Strangers = {
  empty: [],
  arithmetic: NumberVectorCollection.flopShuffle({}),
  soleElement: [rand(256)],
  textNum: NumberVectorCollection.flopShuffle({}).map(String),
  misc: [null, undefined, NaN, 'Infinity', '+', 1.2E+1, 1.2E+2, 1.2E+3, 1.2E+4]
}

const SimpleVectors = simpleVectors({ h: 16 })

const candidates = { ...Strangers, ...SimpleVectors }

export class VectorDecoTest {
  static test () {
    for (const [key, vector] of Object.entries(candidates)) {
      xr(key) |> logger
      vector |> Deco({
        head: 4,
        tail: 4,
        indexed: false,
        bracket: BRK,
        // delim: ', ',
        quote: APOS,
        discrete: false,
        label: 1,
      }) |> says[key]
    }
  }
}

VectorDecoTest.test()
