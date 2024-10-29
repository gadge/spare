import { simpleEntriesCollection } from '@foba/foo'
import { says }     from '@spare/xr'
import { delogger } from '@spare/deco'
import { Csv }      from '../src/Csv'

let SimpleEntries = simpleEntriesCollection({ h: 12 })
SimpleEntries |> delogger

for (const [ key, entries ] of Object.entries(SimpleEntries)) {
  Csv.entries(entries, { prefix: '- ' }) |> says[key]
}

for (const [ key, entries ] of Object.entries(SimpleEntries)) {
  Csv.entries(entries) |> says[key]
}
