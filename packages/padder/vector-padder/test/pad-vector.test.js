import { SimpleVectors }          from '@foba/foo'
import { fluoVector }             from '@palett/fluo-vector'
import { delogger }               from '@spare/deco'
import { logger }                 from '@spare/logger'
import { mapper as vectorMapper } from '@vect/vector'
import { vectorPadder }              from '../src/vectorPadder'

delete SimpleVectors.empty

SimpleVectors |> delogger

for (const [key, vector] of Object.entries(SimpleVectors)) {
  key |> logger
  const text = vectorMapper(vector, String)
  const dye = fluoVector(text, { colorant: true })
  vectorPadder(text, { raw: vector, dye, ansi: true })
    .map(x => `  [${x}]`).join('\n')
    |> logger
}


