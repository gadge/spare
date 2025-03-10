import { $ }         from '@spare/logger'
import { tenseQuote } from '@spare/quote'
import { says }       from '@spare/xr'
import { test }       from 'node:test'
import { decoKey }    from '../index.js'

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
    says[word]($.tenseQuote(tenseQuote(word)).decoKey(decoKey(word)))
  }
})