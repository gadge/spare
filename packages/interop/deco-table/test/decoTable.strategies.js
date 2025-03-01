import { Table }                     from '@analys/table'
import { TableCollection }           from '@foba/table'
import { makeEmbedded }              from '@foba/util'
import { decoCrostab, logger, says } from '@spare/logger'
import { strategies }                from '@valjoux/strategies'
import { dateTime }                  from '@valjoux/timestamp-pretty'
import { deco }                      from '../index'
import { test } from 'node:test'

const test = () => {
  const { lapse, result } = strategies({
    repeat: 1E+4,
    candidates: makeEmbedded({
      BistroDutyRoster: TableCollection.BistroDutyRoster,
      AeroEngineSpecs: Table.from(TableCollection.AeroEngineSpecs).find({ country: x => x === 'US' }),
      AgeOfEmpiresIIUnits: Table.from(TableCollection.AgeOfEmpiresIIUnits).find({ building: x => x === 'Archery Range' })
    }),
    methods: {
      arch: x => x,
      dev: (mx) => deco(mx),
      // bench: (mx) => mapper(mx, x => typeof x === STR ? x.trim() : x)
    }
  })
  says['lapse'].p(dateTime())(decoCrostab(lapse))
  logger('')
  const FUNCTION_TAG = 'dev'
  for (let member of result.side)
    says[member].br(FUNCTION_TAG)(result.cell(member, FUNCTION_TAG))
}
test()