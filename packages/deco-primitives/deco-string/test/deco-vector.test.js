import { flopEntry }        from '@aryth/rand'
import { ObjectCollection } from '@foba/object-string'
import { INSTA }            from '@palett/presets'
import { says }             from '@palett/says'
import { init }             from '@vect/object-init'
import { Deco }             from '../index'

const Texts = init([
  ['empty', ''],
  ObjectCollection.MovieQuotes |> flopEntry,
  ObjectCollection.ShakesQuote |> flopEntry
])

for (const [key, text] of Object.entries(Texts)) {
  text |> says[key]
  text |> Deco({ presets: [INSTA] }) |> says[key]
}
