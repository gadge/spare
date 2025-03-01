import { simpleEntriesCollection } from '@foba/foo'
import { says }     from '@spare/xr'
import { delogger } from '@spare/deco'
import { Markdown } from '../src/Markdown.js'
import { test } from 'node:test'

let SimpleEntries = simpleEntriesCollection({ h: 12 })
delogger(SimpleEntries)

for (const [key, entries] of Object.entries(SimpleEntries)) {
  says[key](Markdown.entries(entries, { prefix: '- ' }))
}

for (const [key, entries] of Object.entries(SimpleEntries)) {
  says[key](Markdown.entries(entries))
}
