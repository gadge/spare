import { simpleEntries } from '@foba/foo'
import { OCEAN } from '@palett/presets'
import { says } from '@palett/says'
import { Deco } from '../index'
import { inferType } from '@typen/num-strict'

let SimpleEntries = simpleEntries({ h: 12 })

for (const [key, entries] of Object.entries(SimpleEntries)) {
  let words = entries |> Deco({
    head: 5,
    tail: 2,
    stringPreset: OCEAN,
    bracket: true,
    discrete: false,
    level: 2,
    // delim: ', ',
  })
  // words = key + ': ' + words
  words |> says[key].p(inferType(words))
}
