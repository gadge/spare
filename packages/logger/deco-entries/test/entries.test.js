import { simpleEntries } from '@foba/foo'
import { logger } from '@spare/logger'
import { AQUA, OCEAN, PLANET } from '@palett/presets'
import { delogger } from '@spare/deco'
import { Deco } from '../src/Deco'

let SimpleEntries = simpleEntries({ h: 12 })
// SimpleEntries = { numeric: SimpleEntries.numeric }
SimpleEntries |> delogger

for (const [key, entries] of Object.entries(SimpleEntries)) {
  key |> logger
  entries |> Deco({ head: 5, tail: 2, stringPreset: OCEAN }) |> logger
}
