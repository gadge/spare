import { ObjectCollection } from '@foba/object-string'
import { says }             from '@palett/says'
import { delogger }         from '@spare/deco'
import { decoSnake }        from '../src/decoSpecials'

const items = Object.assign({},
  ObjectCollection.flopShuffle({ keyed: true }),
  ObjectCollection.flopShuffle({ keyed: true }),
  ObjectCollection.flopShuffle({ keyed: true }),
)

for (const [title, o] of Object.entries(items)) {
  title |> delogger
  for (const [key, text] of Object.entries(o)) {
    decoSnake(text) |> says[key].asc
  }
  '' |> delogger
}

decoSnake('bundle/min/gzip', { delim: '/' }) |> delogger

