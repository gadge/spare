import { Table }                     from '@analys/table'
import { TableCollection }           from '@foba/table'
import { makeEmbedded }              from '@foba/util'
import { decoCrostab, logger, says } from '@spare/logger'
import { strategies }                from '@valjoux/strategies'
import { dateTime }                  from '@valjoux/timestamp-pretty'
import { deco }                      from '../index'

const test = () => {
  const { lapse, result } = strategies({
    repeat: 1E+4,
    candidates: {
      BistroDutyRoster: TableCollection.BistroDutyRoster,
      AeroEngineSpecs: Table.from(TableCollection.AeroEngineSpecs).find({ country: x => x === 'US' }),
      AgeOfEmpiresIIUnits: Table.from(TableCollection.AgeOfEmpiresIIUnits).find({ building: x => x === 'Archery Range' })
    } |> makeEmbedded,
    methods: {
      arch: x => x,
      dev: (mx) => deco(mx),
      // bench: (mx) => mapper(mx, x => typeof x === STR ? x.trim() : x)
    }
  })
  lapse |> decoCrostab |> says['lapse'].p(dateTime())
  '' |> logger
  const FUNCTION_TAG = 'dev'
  for (let member of result.side)
    result.cell(member, FUNCTION_TAG)  |> says[member].br(FUNCTION_TAG)
}
test()