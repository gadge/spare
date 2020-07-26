import { flop, flopValue } from '@aryth/rand'
import { Quotes }          from '@foba/quotes-creativity'
import { says }            from '@spare/logger'
import { deco }            from '../index'


for (const [key, string] of Object.entries(Quotes |> flopValue |> flop)) {
  deco(string, {
    width: 80,
    firstLineIndent: 20
  }) |> says[key]
}