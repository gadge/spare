import { EntriesCollection } from '@foba/entries'
import { OCEAN }             from '@palett/presets'
import { says }              from '@spare/says'
import { inferType }         from '@typen/num-strict'
import { Deco }              from '../index'


const entriesCollection = Object.assign({},
  EntriesCollection.flopShuffle({ keyed: true, size: 5 }),
  EntriesCollection.flopShuffle({ keyed: true }),
  EntriesCollection.flopShuffle({ keyed: true, size: 7 })
)


for (const [key, entries] of Object.entries(entriesCollection)) {
  let words = entries |> Deco({
    head: 5,
    tail: 2,
    stringPreset: OCEAN,
    bracket: false,
    discrete: false,
    level: 0,
    // delim: ', ',
  })
  // words = key + ': ' + words
  words |> says[key].p(inferType(words))
}
