import { NumberVectorCollection as NumVecs, StringVectorCollection as StrVecs } from '@foba/vector'
import { deco, delogger }                                                       from '@spare/deco'
import { logger }                                                               from '@spare/logger'
import { mapper as matrixMapper }                                               from '@vect/matrix'
import { init }                                                                 from '@vect/vector-init'
import { crostabPadder }                                                        from '../src/crostabPadder'

const samples = Object.assign({},
  StrVecs.flopShuffle({ size: 6, keyed: true }),
  StrVecs.flopShuffle({ size: 6, keyed: true }),
  NumVecs.flopShuffle({ size: 6, keyed: true }),
  NumVecs.flopShuffle({ size: 6, keyed: true }),
  NumVecs.flopShuffle({ size: 6, keyed: true }),
  NumVecs.flopShuffle({ size: 6, keyed: true }),
)

'' |> logger
samples |> delogger
const side = Object.keys(samples)
const rows = Object.values(samples)
const head = init(6, i => String(i + 1))
const word = matrixMapper(rows, String)
crostabPadder(
  { side, head, rows: word },
  { raw: rows, ansi: true }
) |> deco |> logger
// .map(row => row.join(' | ')).join('\n')
// |> logger
