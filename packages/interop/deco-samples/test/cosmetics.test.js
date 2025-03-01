import { tableToSamples }       from '@analys/convert'
import { TableCollection }      from '@foba/table'
import { FRESH, METRO, SUBTLE } from '@palett/presets'
import { BRACKET }              from '@spare/enum-brackets'
import { logger }               from '@spare/logger'
import { test }                 from 'node:test'
import { decoSamples }          from '../src/decoSamples.js'

const samples = tableToSamples(TableCollection.AeroEngineSpecs)
test('cosmetics', () => {
  logger(decoSamples.call({
    top: 4,
    bottom: 4,
    left: 3,
    right: 1,
    indexed: true,
    presets: [ FRESH, METRO, SUBTLE ],
    bracket: BRACKET
  }, samples))
})
