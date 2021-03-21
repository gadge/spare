import { ObjectCollection }   from '@foba/object-string'
import { BOLD }               from '@palett/enum-font-effects'
import { says }               from '@palett/says'
import { delogger }           from '@spare/deco'
import { logger }             from '@spare/logger'
import { deco as decoString } from '../index'

const items = Object.assign({},
  ObjectCollection.flopShuffle({ keyed: true }),
  ObjectCollection.flopShuffle({ keyed: true }),
  ObjectCollection.flopShuffle({ keyed: true }),
)

for (const [title, o] of Object.entries(items)) {
  title |> delogger
  for (const [key, text] of Object.entries(o)) {
    const colored = decoString(text, { effects: [BOLD] })
    // const embeddedColored = fluoString(colored, { effects: [BOLD] })
    colored |> logger //says[key].asc
    // embeddedColored |> says[key]
  }
  '' |> delogger
}


