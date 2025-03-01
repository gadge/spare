import { simpleEntries } from '@foba/foo'
import { says }     from '@spare/xr'
import { delogger } from '@spare/deco'
import { Verse }    from '../src/Verse.js'
import { test } from 'node:test'

let SimpleEntries = simpleEntries({ h: 12 })
delogger(SimpleEntries)

for (const [key, entries] of Object.entries(SimpleEntries)) {
  says[key](Verse.entries(entries, { objectify: true }))
}

for (const [key, entries] of Object.entries(SimpleEntries)) {
  says[key](Verse.entries(entries, { objectify: false }))
}
