import { rand }                   from '@aryth/rand'
import { simpleObjectCollection } from '@foba/foo'
import { OCEAN }                  from '@palett/presets'
import { says }                   from '@palett/says'
import { delogger }               from '@spare/deco'
import { logger }                 from '@spare/logger'
import { inferType }              from '@typen/num-strict'
import { Deco }                   from '../index'

let SimpleObjects = simpleObjectCollection({ h: 12 })

SimpleObjects |> delogger

for (const [key, entries] of Object.entries(SimpleObjects)) {
  const words = entries |> Deco({
    head: 5,
    tail: 2,
    stringPreset: OCEAN,
    bracket: true,
    discrete: false,
    level: rand(3)
  })
  words|> logger
  // |> says[key].p(inferType(words))
  // entries |> Deco({ dash: ',', delim: ',\n', quote: true, quote: '\'' }) |> logger
}
