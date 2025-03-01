import { flop, flopValue } from '@aryth/rand'
import { Quotes }          from '@foba/quotes-creativity'
import { says }            from '@spare/logger'
import { decoString }            from '../index.js'
import { test } from 'node:test'


for (const [key, string] of Object.entries(Quotes |> flopValue |> flop)) {
  decoString(string, {
    width: 80,
    firstLineIndent: 2,
    // presets: false
  }) |> says[key]
}