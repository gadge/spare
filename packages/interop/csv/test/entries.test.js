import { simpleEntriesCollection } from '@foba/foo'
import { deco }                    from '@spare/deco'
import { logger }                  from '@spare/logger'
import { says }                    from '@spare/xr'
import { test }                    from 'node:test'
import { Csv }                     from '../src/Csv.js'

let SimpleEntries = simpleEntriesCollection({ h: 12 })

test('entries', () => {
  logger(deco(SimpleEntries))

  for (const [ key, entries ] of Object.entries(SimpleEntries)) {
    says[key](Csv.entries(entries, { prefix: '- ' }))
  }

  for (const [ key, entries ] of Object.entries(SimpleEntries)) {
    says[key](Csv.entries(entries))
  }

})
