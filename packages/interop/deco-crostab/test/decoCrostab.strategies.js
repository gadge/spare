import { CrostabCollection } from '@foba/crostab'
import { makeEmbedded }      from '@foba/util'
import { says }              from '@spare/xr'
import { strategies }        from '@valjoux/strategies'
import { dateTime }          from '@valjoux/timestamp-pretty'
import { deco, decoCrostab } from '../index.js'

const test = () => {
  const { lapse, result } = strategies({
    repeat: 1E+4,
    candidates: {
      AoEIIUnitsAttackByStages: CrostabCollection.AoEIIUnitsAttackByStages,
      AreaByCountry: CrostabCollection.AreaByCountry,
      MilitaryByCountry2019: CrostabCollection.MilitaryByCountry2019
    } |> makeEmbedded,
    methods: {
      arch: x => x,
      dev: decoCrostab,
      // bench: (mx) => mapper(mx, x => typeof x === STR ? x.trim() : x)
    }
  })
  lapse |> decoCrostab |> says['lapse'].p(dateTime())
  '' |> console.log
  const FUNCTION_TAG = 'dev'
  for (let member of result.side)
    result.cell(member, FUNCTION_TAG)  |> says[member].br(FUNCTION_TAG)
}
test()