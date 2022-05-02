import { Table }                     from '@analys/table'
import { TableCollection }           from '@foba/table'
import { makeEmbedded }              from '@foba/util'
import { deco }                      from '@spare/deco'
import { decoCrostab, logger, says } from '@spare/logger'
import { strategies }                from '@valjoux/strategies'
import { dateTime }                  from '@valjoux/timestamp-pretty'
import { tablePadder }               from '../src/tablePadder'

const test = () => {
  const { lapse, result } = strategies({
    repeat: 1E+4,
    candidates: {
      BistroDutyRoster: Table.from(TableCollection.BistroDutyRoster).map(String),
      AeroEngineSpecs: Table.from(TableCollection.AeroEngineSpecs).find({ country: x => x === 'US' }).map(String),
      AgeOfEmpiresIIUnits: Table.from(TableCollection.AgeOfEmpiresIIUnits).find({ building: x => x === 'Archery Range' }).map(String)
    } |> makeEmbedded,
    methods: {
      arch: x => x,
      dev: (table) => tablePadder(table),
      // bench: (mx) => mapper(mx, x => typeof x === STR ? x.trim() : x)
    }
  })
  lapse |> decoCrostab |> says['lapse'].p(dateTime())
  '' |> logger
  const FUNCTION_TAG = 'dev'
  for (let member of result.side)
    result.cell(member, FUNCTION_TAG)  |> deco |> says[member].br(FUNCTION_TAG)
}
test()