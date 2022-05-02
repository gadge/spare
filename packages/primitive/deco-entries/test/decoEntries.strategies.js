import { EntriesCollection }         from '@foba/entries'
import { makeEmbedded }              from '@foba/util'
import { decoCrostab, logger, says } from '@spare/logger'
import { strategies }                from '@valjoux/strategies'
import { dateTime }                  from '@valjoux/timestamp-pretty'
import { deco }                      from '../index'

const test = () => {
  const { lapse, result } = strategies({
    repeat: 1E+4,
    candidates: {
      alpha: EntriesCollection.ArmSales.slice(0, 10),
      beta: EntriesCollection.CarPlants,
      gamma: EntriesCollection.MortalityRates
    } |> makeEmbedded,
    methods: {
      arch: x => x,
      dev: deco,
      edge: x => x
    }
  })
  lapse |> decoCrostab |> says['lapse'].p(dateTime())
  '' |> logger
  // result |> decoCrostab |> says['result'].p(dateTime())
  '' |> logger
  const BANNER = 'dev'
  for (let side of result.side)
    result.cell(side, BANNER) |> says[side].br(BANNER)
}
test()