import { ObjectCollection } from '@foba/object-string'
import { says }             from '@palett/says'
import { delogger }         from '@spare/deco'
import { decoString }       from '@spare/logger'

const items = Object.assign({},
  ObjectCollection.flopShuffle({ keyed: true }),
  ObjectCollection.flopShuffle({ keyed: true }),
  ObjectCollection.flopShuffle({ keyed: true })
)

for (const [title, o] of Object.entries(items)) {
  title |> delogger
  for (const [key, text] of Object.entries(o)) {
    decoString(text) |> says[key].asc
  }
  '' |> delogger
}

