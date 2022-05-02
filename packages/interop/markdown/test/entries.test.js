import { simpleEntriesCollection } from '@foba/foo'
import { says }     from '@palett/says'
import { delogger } from '@spare/deco'
import { Markdown } from '../src/Markdown'

let SimpleEntries = simpleEntriesCollection({ h: 12 })
SimpleEntries |> delogger

for (const [key, entries] of Object.entries(SimpleEntries)) {
  Markdown.entries(entries, { prefix: '- ' }) |> says[key]
}

for (const [key, entries] of Object.entries(SimpleEntries)) {
  Markdown.entries(entries) |> says[key]
}
