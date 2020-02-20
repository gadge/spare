import { delogger } from '@spare/deco'
import { mapper as vectorMapper } from '@vect/vector'
import { logger } from '@spare/logger'
import { fluoVector } from '@palett/fluo-vector'
import { padVector } from '../src/padVector'
import { SimpleVectors } from '@foba/foo'

delete SimpleVectors.empty

SimpleVectors |> delogger

for (const [key, vector] of Object.entries(SimpleVectors)) {
  key |> logger
  const text = vectorMapper(vector, String)
  const dye = fluoVector(text, { colorant: true })
  padVector(text, { raw: vector, dye, ansi: true })
    .map(x => `  [${x}]`).join('\n')
    |> logger
}


