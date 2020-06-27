import { says }       from '@palett/says'
import { Xr }         from '@spare/logger'
import { tenseQuote } from '@spare/quote'
import { decoKey }    from '..'

const candidates = [
  1,
  '_queen',
  'speak',
  '\'tis',
  'i\'ll',
]

for (let word of candidates) {
  word = word.toString()
  Xr().tenseQuote(tenseQuote(word)).decoKey(decoKey(word))|> says[word]
}