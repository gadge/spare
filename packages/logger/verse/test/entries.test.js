import { simpleEntries } from '@foba/foo'
import { delogger } from '@spare/deco'
import { says } from '@palett/says'
import { Verse } from '../src/Verse'

let SimpleEntries = simpleEntries({ h: 12 })
SimpleEntries |> delogger

for (const [key, entries] of Object.entries(SimpleEntries)) {
  entries |> Verse.entriesAsObject |> says[key]
}
