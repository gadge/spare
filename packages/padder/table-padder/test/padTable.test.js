import { rand }              from '@aryth/rand'
import { delogger }          from '@spare/deco'
import { mapper }            from '@vect/matrix'
import { tablePadder }          from '../src/tablePadder'
import { tablePadderFullAngle } from '../src/tablePadderFullAngle'

const table = {
  head: ['foo', 'bar', '金额', 'Revenue'],
  rows: [
    ['A', rand(100) * 100, '...', rand(100) * 100,],
    ['已', rand(100) * 100, '...', rand(100) * 100,],
    ['C', rand(100) * 100, '...', rand(100) * 100,]
  ]
}

const { rows, head } = table
const text = mapper(rows, String)
table |> delogger

tablePadder(text, head, { raw: rows }) |> console.log
tablePadderFullAngle(text, head, { raw: rows, }) |> console.log
