import { EntriesCollection }         from '@foba/entries'
import { makeEmbedded }              from '@foba/util'
import { decoCrostab, logger, says } from '@spare/logger'
import { strategies }                from '@valjoux/strategies'
import { dateTime }                  from '@valjoux/timestamp-pretty'
import { deco }                      from '../index.js'
import { test } from 'node:test'

const test = () => {
  const { lapse, result } = strategies({
    repeat: 1E+4,
    candidates: makeEmbedded({
      alpha: EntriesCollection.ArmSales.slice(0, 10),
      beta: EntriesCollection.CarPlants,
      gamma: EntriesCollection.MortalityRates
    }),
    methods: {
      arch: x => x,
      dev: deco,
      edge: x => x
    }
  })
  says['lapse'].p(dateTime())(decoCrostab(lapse))
  logger('')
  // says['result'].p(dateTime())(decoCrostab(result))
  logger('')
  const BANNER = 'dev'
  for (let side of result.side)
    says[side].br(BANNER)(result.cell(side, BANNER))
}
test()