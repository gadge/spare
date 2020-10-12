import { FobaNum as NumVecs, FobaStr as StrVecs } from '@foba/vector'
import { fluoMatrix }                             from '@palett/fluo-matrix'
import { delogger }                               from '@spare/deco'
import { logger }                                 from '@spare/logger'
import { COLUMNWISE, mapper as matrixMapper } from '@vect/matrix'
import { crostabPadder }                      from '../src/crostabPadder'

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
crostabPadder(word, { raw: matrix, dye, ansi: true })
  .map(row => row.join(' | ')).join('\n')
  |> logger
