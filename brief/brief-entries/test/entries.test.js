import { simpleEntries } from '@foba/foo'
import { logger } from '@spare/logger'
import { brief } from '../src/brief'
import { AQUA, OCEAN, PLANET } from '@palett/presets'
import { deco } from '@spare/deco'

let SimpleEntries = simpleEntries({ h: 12 })
// SimpleEntries = { numeric: SimpleEntries.numeric }
SimpleEntries |> deco |> logger

for (const [key, entries] of Object.entries(SimpleEntries)) {
  key |> logger
  brief(entries, { head: 5, tail: 2, stringPreset: OCEAN }) |> logger
}
