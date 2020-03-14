import { simpleEntries } from '@foba/foo'
import { logger } from '@spare/logger'
import { OCEAN } from '@palett/presets'
import { delogger } from '@spare/deco'
import { Deco } from '../index'

let SimpleEntries = simpleEntries({ h: 12 })
// SimpleEntries = { numeric: SimpleEntries.numeric }
SimpleEntries |> delogger

for (const [key, entries] of Object.entries(SimpleEntries)) {
  key |> logger
  entries |> Deco({ head: 5, tail: 2, stringPreset: OCEAN }) |> logger
  // entries |> Deco({ dash: ',', delimiter: ',\n', bracket: true, quote: '\'' }) |> logger
}
