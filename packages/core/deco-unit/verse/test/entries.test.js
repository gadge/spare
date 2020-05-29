import { simpleEntries } from '@foba/foo'
import { says }          from '@palett/says'
import { delogger }      from '@spare/deco'
import { Verse }         from '../src/Verse'

let SimpleEntries = simpleEntries({ h: 12 })
SimpleEntries |> delogger

for (const [key, entries] of Object.entries(SimpleEntries)) {
  Verse.entries(entries, { objectify: true }) |> says[key]
}

for (const [key, entries] of Object.entries(SimpleEntries)) {
  Verse.entries(entries, { objectify: false }) |> says[key]
}
