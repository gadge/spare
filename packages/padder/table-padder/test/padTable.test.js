import { rand }                 from '@aryth/rand'
import { delogger }             from '@spare/deco'
import { ELLIP }                from '@spare/enum-chars'
import { mapper }               from '@vect/matrix'
import { tablePadder }          from '../src/tablePadder'
import { tablePadderFullAngle } from '../src/tablePadderFullAngle'

const genRand = () => rand(100) * 100 |> String

const table = {
  head: ['foo', 'bar', '金额', 'Revenue'],
  rows: [
    ['Acme', genRand(), ELLIP, genRand(),],
    ['已', genRand(), ELLIP, genRand(),],
    ['C', genRand(), ELLIP, genRand(),]
  ]
}

let { rows, head } = table
rows = mapper(rows, String)
table |> delogger

tablePadder({ head, rows },) |> console.log
tablePadderFullAngle({ head, rows },) |> console.log
