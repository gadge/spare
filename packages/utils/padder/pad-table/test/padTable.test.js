import { rand }              from '@aryth/rand'
import { delogger }          from '@spare/deco'
import { mapper }            from '@vect/matrix'
import { padTable }          from '../src/padTable'
import { padTableFullAngle } from '../src/padTableFullAngle'

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

padTable(text, head, { raw: rows }) |> console.log
padTableFullAngle(text, head, { raw: rows, }) |> console.log
