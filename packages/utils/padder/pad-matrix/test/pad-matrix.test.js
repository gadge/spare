import { FobaNum as NumVecs, FobaStr as StrVecs } from '@foba/vector'
import { delogger } from '@spare/deco'
import { COLUMNWISE, mapper as matrixMapper } from '@vect/matrix'
import { logger } from '@spare/logger'
import { fluoMatrix } from '@palett/fluo-matrix'
import { padMatrix } from '../src/padMatrix'

const matrix = [
  StrVecs.flop({ size: 6 }),
  StrVecs.flop({ size: 6 }),
  NumVecs.flop({ size: 6 }),
  NumVecs.flop({ size: 6 }),
  NumVecs.flop({ size: 6 }),
  NumVecs.flop({ size: 6 }),
]

matrix |> delogger
const word = matrixMapper(matrix, x => String(x))
const dye = fluoMatrix(word, { direct: COLUMNWISE, colorant: true })
padMatrix(word, { raw: matrix, dye, ansi: true })
  .map(row => row.join(' | ')).join('\n')
  |> logger
