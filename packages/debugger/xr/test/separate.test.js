import { logger }   from '@spare/logger'
import { identify } from '../src/TextUtil.js'
import { test }     from 'node:test'

const candidates = [
  undefined,
  '',
  'shakes',
  '  shakes',
  '.shakes',
  '>> shakes'
]

test('separate test', () => {
  for (let candidate of candidates) {
    const [ a, b ] = identify(candidate)
    logger(`[candidate] (${candidate}) [a] (${a}) [b] (${b})`)
  }
})

