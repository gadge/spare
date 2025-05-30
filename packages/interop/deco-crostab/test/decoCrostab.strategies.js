import { CrostabCollection } from '@foba/crostab'
import { makeEmbedded }      from '@foba/util'
import { says }              from '@spare/logger'
import { strategies }        from '@valjoux/strategies'
import { dateTime }          from '@valjoux/timestamp-pretty'
import { decoCrostab }       from '../index.js'
// import { test } from 'node:test'

const test = () => {
  const { lapse, result } = strategies({
    repeat: 1E+4,
    candidates: makeEmbedded({
      AoEIIUnitsAttackByStages: CrostabCollection.AoEIIUnitsAttackByStages,
      AreaByCountry: CrostabCollection.AreaByCountry,
      MilitaryByCountry2019: CrostabCollection.MilitaryByCountry2019
    }),
    methods: {
      arch: x => x,
      dev: decoCrostab
      // bench: (mx) => mapper(mx, x => typeof x === STR ? x.trim() : x)
    }
  })
  says['lapse'](dateTime())
  says['lapse'](decoCrostab(lapse))
  console.log('')
  const FUNCTION_TAG = 'dev'
  for (let member of result.side) {
    says[member](FUNCTION_TAG)
    says[member](result.cell(member, FUNCTION_TAG))
  }
}
test()