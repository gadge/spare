import { simpleEntries } from '@foba/foo'
import { OCEAN } from '@palett/presets'
import { delogger } from '@spare/deco'
import { says } from '@palett/says'
import { Deco } from '../index'
import { inferType } from '@typen/num-strict'

let SimpleEntries = simpleEntries({ h: 12 })
// SimpleEntries = { numeric: SimpleEntries.numeric }
SimpleEntries |> delogger

for (const [key, entries] of Object.entries(SimpleEntries)) {
  const words = entries |> Deco({
    head: 5,
    tail: 2,
    stringPreset: OCEAN,
    bracket: false,
    discrete: false,
  })
  words |> says[key].p(inferType(words))
  // entries |> Deco({ dash: ',', delimiter: ',\n', bracket: true, quote: '\'' }) |> logger
}
