import { NumberMatrixCollection, StringMatrixCollection } from '@foba/matrix'
import { makeEmbedded }                                   from '@foba/util'
import { decoCrostab, logger, says }                      from '@spare/logger'
import { STR }                                            from '@typen/enum-data-types'
import { strategies }                                     from '@valjoux/strategies'
import { dateTime }                                       from '@valjoux/timestamp-pretty'
import { mapper }                                         from '@vect/matrix'
import { deco }                                           from '../index.js'
import { test } from 'node:test'

const test = () => {
  const { lapse, result } = strategies({
    repeat: 2E+4,
    candidates: {
      marketingMovement: StringMatrixCollection['marketingMovement'],
      integratedCultureFramework: StringMatrixCollection['integratedCultureFramework'],
      zigZagMatrix: NumberMatrixCollection['zigZagMatrix'](6)
    } |> makeEmbedded,
    methods: {
      arch: x => x,
      dev: (mx) => deco(mx),
      bench: (mx) => mapper(mx, x => typeof x === STR ? x.trim() : x)
    }
  })
  lapse |> decoCrostab |> says['lapse'].p(dateTime())
  '' |> logger
  result |> decoCrostab |> says['result'].p(dateTime())
  '' |> logger
  const FUNCTION_TAG = 'dev'
  for (let member of result.side)
    result.cell(member, FUNCTION_TAG)  |> says[member].br(FUNCTION_TAG)
}
test()