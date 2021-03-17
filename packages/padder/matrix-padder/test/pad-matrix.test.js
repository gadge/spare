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

// matrix |> delogger
matrix[0][5] = '赛博朋克'
matrix[1][5] = '-'
const word = matrixMapper(matrix, String)
matrixPadder(word, { full: true })
  .map(row => row.join(' | ')).join('\n')
  |> logger
