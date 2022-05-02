import { logger }   from '@spare/logger'
import { separate } from '../src/TextUtil'

const candidates = [
  undefined,
  '',
  'shakes',
  '  shakes',
  '.shakes',
  '>> shakes'
]

for (let candidate of candidates) {
  const [ a, b ] = separate(candidate);
  `[candidate] (${candidate}) [a] (${a}) [b] (${b})` |> logger
}

