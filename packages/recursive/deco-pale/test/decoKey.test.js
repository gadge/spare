import { says }       from '@spare/xr'
import { Xr }         from '@spare/logger'
import { tenseQuote } from '@spare/quote'
import { decoKey }    from '../index.js'
import { test }       from 'node:test'
import { test } from 'node:test'

const candidates = [
  1,
  '_queen',
  'speak',
  '\'tis',
  'i\'ll'
]

test('decoKey', () => {
  for (let word of candidates) {
    word = word.toString()
    says[word](Xr().tenseQuote(tenseQuote(word)).decoKey(decoKey(word)))
  }
})