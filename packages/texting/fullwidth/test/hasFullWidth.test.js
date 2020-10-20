import { delogger }     from '@spare/deco'
import { hasFullWidth } from '../src/hasFullWidth'

const vec = [
  'foo',
  'A',
  '已',
  'C',
]

for (let x of vec) {
  hasFullWidth(x) |> delogger
}
