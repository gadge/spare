import { makeEmbedded }                                   from '@foba/util'
import { NumberVectorCollection, StringVectorCollection } from '@foba/vector'
import { decoCrostab, logger, says }                      from '@spare/logger'
import { strategies }                                     from '@valjoux/strategies'
import { dateTime }                                       from '@valjoux/timestamp-pretty'
import { deco }                                           from '../index.js'
import { test } from 'node:test'

const Strangers = {
  empty: [],
  arithmetic: NumberVectorCollection.fibonacci(12),
  stringed: StringVectorCollection.megaCities.slice(0, 15),
  textNum: NumberVectorCollection.primes(7).map(String),
  misc: [null, undefined, NaN, 'Infinity', '+', 1.2E+1, 1.2E+2, 1.2E+3, 1.2E+4]
}

// const SimpleVectors = simpleVectors({ h: 16 })

const candidates = {
  ...Strangers,
  // ...SimpleVectors
}

const test = () => {
  const { lapse, result } = strategies({
    repeat: 2E+4,
    candidates: candidates|> makeEmbedded,
    methods: {
      arch: x => x,
      dev: deco,
      edge: x => x
    }
  })
  lapse |> decoCrostab |> says['lapse'].p(dateTime())
  '' |> logger
  const BANNER = 'dev'
  for (let side of result.side)
    result.cell(side, BANNER) |> says[side].br(BANNER)
}
test()
