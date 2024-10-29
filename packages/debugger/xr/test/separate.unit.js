import { logger }   from '@spare/logger'
import { identify } from '../src/TextUtil.js'

const candidates = [
  undefined,
  '',
  'shakes',
  '  shakes',
  '.shakes',
  '>> shakes'
]

for (let candidate of candidates) {
  const [ a, b ] = identify(candidate)
  logger(`[candidate] (${candidate}) [a] (${a}) [b] (${b})`)
}

