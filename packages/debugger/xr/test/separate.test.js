import { logger }     from '@spare/logger'
import { test }       from 'node:test'
import { sepPreBody } from '../src/text-utils.js'

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
    const [ a, b ] = sepPreBody(candidate)
    logger(`[candidate] (${candidate}) [a] (${a}) [b] (${b})`)
  }
})

