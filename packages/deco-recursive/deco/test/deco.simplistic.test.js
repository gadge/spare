import { logger } from '@spare/logger'
import { deco }   from '../index'

const candidates = [
  {
    name: 'foo',
    x: 3,
    y: 4,
    // date: new Date()
  },
  [1, 1, 2, 3, 5, 8]
]

for (let candidate of candidates) {
  candidate |> deco |> logger
}
