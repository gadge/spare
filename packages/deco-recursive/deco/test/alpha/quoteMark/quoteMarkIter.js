import { pipe }                         from '@ject/pipe'
import { parenth }                      from '@spare/bracket'
import { DecoPale }                     from '@spare/deco-pale'
import { decoString, decoVector, says } from '@spare/logger'
import { tenseQuote }                   from '@spare/quote'

const { quote } = require('@spare/quote')

const APOS = '\'', DITTO = '"', GRAV = '`'

const logStatus = (text, l, ms, rx) => {
  const r = ms.index, n = rx.lastIndex;
  (`${ text.slice(l, r) |> parenth|> decoString } ${ ms[0] |> parenth|> decoString }`) |> says['sp']
    .br(l).p('->').br(r + ':' + n)
}
export const parser = (text) => {
  const rx = /(?<!\\)['"`]/g
  const vec = []
  let ms, ch, qt = null, l = 0
  while ((ms = rx.exec(text)) && ([ch] = ms)) {
    if (ch === qt) {
      qt = null
      logStatus(text, l, ms, rx)
    } else if (!qt) {
      qt = ch
      l = rx.lastIndex
    }
  }
  return vec
}

const candidates = [
  { a: { b: { c: { d: { e: '\'a\'+\'b\'*\'c\'' }, D: '`super`' }, C: '\'best\'' }, B: '"better"' }, A: `'good'` },
]

const test = () => {
  const decoPale = DecoPale({ quote: quote })
  for (let candidate of candidates) {
    candidate |> decoPale|> parser |> decoVector |> says['test'].br(candidate |> decoPale|> decoString)
  }
}
test()
const result = [
  [1, 24],
  [1, []]
]
