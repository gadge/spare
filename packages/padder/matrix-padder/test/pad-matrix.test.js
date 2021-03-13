import { NumberVectorCollection, StringVectorCollection } from '@foba/vector'
import { fluoMatrix }                                     from '@palett/fluo-matrix'
import { OCEAN, SUBTLE }                                  from '@palett/presets'
import { delogger }                                       from '@spare/deco'
import { logger }                                         from '@spare/logger'
import { COLUMNWISE, mapper as matrixMapper }             from '@vect/matrix'
import { matrixPadder }                                   from '../src/matrixPadder'

const matrix = [
  StringVectorCollection.flopShuffle({ size: 6 }),
  StringVectorCollection.flopShuffle({ size: 6 }),
  NumberVectorCollection.flopShuffle({ size: 6 }),
  NumberVectorCollection.flopShuffle({ size: 6 }),
  NumberVectorCollection.flopShuffle({ size: 6 }),
  NumberVectorCollection.flopShuffle({ size: 6 }),
]

matrix |> delogger
const word = matrixMapper(matrix, String)
const dye = fluoMatrix.call({ colorant: true }, word, { presets: [SUBTLE, OCEAN], direct: COLUMNWISE })

matrixPadder(word, { raw: matrix, dye, ansi: true })
  .map(row => row.join(' | ')).join('\n')
  |> logger
