import { delogger } from '@spare/deco'
import { hasFull }  from '../src/hasFull'

const vec = [
  'foo',
  'A',
  '已',
  'C',
]

for (let x of vec) {
  hasFull(x) |> delogger
}
