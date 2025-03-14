import { flopEntry }        from '@aryth/rand'
import { ObjectCollection } from '@foba/object-string'
import { INSTA }            from '@palett/presets'
import { says }             from '@spare/xr'
import { init }             from '@vect/object-init'
import { DecoString }       from '../index.js'
import { test }             from 'node:test'

const Texts = init([
  [ 'empty', '' ],
  flopEntry(ObjectCollection.MovieQuotes),
  flopEntry(ObjectCollection.ShakesQuote)
])

test('deco-vector', () => {
  for (const [ key, text ] of Object.entries(Texts)) {
    says[key](text)
    says[key](DecoString(INSTA)(text))
  }
})

