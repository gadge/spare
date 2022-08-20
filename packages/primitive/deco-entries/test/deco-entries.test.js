import { EntriesCollection } from '@foba/entries'
import { OCEAN }             from '@palett/presets'
import { says }              from '@spare/xr'
import { inferType }         from '@typen/num-strict'
import { indexedTo }         from '@vect/object-mapper'
import { DecoEntries }       from '../index.js'


const entriesCollection = Object.assign({},
  EntriesCollection.flopShuffle({ keyed: true, size: 5 }),
  EntriesCollection.flopShuffle({ keyed: true }),
  EntriesCollection.flopShuffle({ keyed: true, size: 7 })
)

// entriesCollection |> console.log

for (const [ key, entries ] of indexedTo(entriesCollection, (k, v) => [ k, Object.values(v) ])) {
  let words = entries |> DecoEntries({
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

// for (const [ key, entries ] of Object.entries(entriesCollection)) {
//   let words = deco(entries, {
//     head: 5,
//     tail: 2,
//     stringPreset: OCEAN,
//     bracket: false,
//     discrete: false,
//     level: 0,
//     // delim: ', ',
//   })
//   // words = key + ': ' + words
//   words |> says[key].p(inferType(words))
// }
