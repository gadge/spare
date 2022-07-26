import { ObjectCollection }        from '@foba/object-string'
import { BOLD }                    from '@palett/enum-font-effects'
import { DECANTE, SUBTLE, SUMMER } from '@palett/presets'
import { delogger }                from '@spare/deco'
import { says }                    from '@spare/says'
import { deco as decoString }      from '../index'

const items = Object.assign({},
  ObjectCollection.flopShuffle({ keyed: true }),
  ObjectCollection.flopShuffle({ keyed: true }),
  ObjectCollection.flopShuffle({ keyed: true }),
)

for (const [ title, o ] of Object.entries(items)) {
  title |> delogger
  for (const [ key, text ] of Object.entries(o)) {
    const colored = decoString(text, { presets: { pos: SUMMER, neg: DECANTE, str: SUBTLE }, effects: [ BOLD ] })
    // const embeddedColored = fluoString(colored, { effects: [BOLD] })
    colored |>  says[key].asc
    // embeddedColored |> says[key]
  }
  '' |> delogger
}


