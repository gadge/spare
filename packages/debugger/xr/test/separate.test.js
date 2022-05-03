import { logger }   from '@spare/logger'
import { identify } from '../src/TextUtil'

const candidates = [
  undefined,
  '',
  'shakes',
  '  shakes',
  '.shakes',
  '>> shakes'
]

for (let candidate of candidates) {
  const [ a, b ] = identify(candidate);
  `[candidate] (${candidate}) [a] (${a}) [b] (${b})` |> logger
}

