import { tableToSamples }       from '@analys/convert'
import { TableCollection }            from '@foba/table'
import { FRESH, METRO, PINE, SUBTLE } from '@palett/presets'
import { says }                       from '@spare/says'
import { test }                 from 'node:test'
import { decoSamples }          from '../index.js'

const samples = tableToSamples(TableCollection.AeroEngineSpecs)
test('cosmetics', () => {
  says['AeroEngineSpecs'](decoSamples(samples, {
    indexed: true,
    indent: 1,
    pres: { str: FRESH, pos: METRO, neg: SUBTLE },
    key: PINE,
  }))
})
