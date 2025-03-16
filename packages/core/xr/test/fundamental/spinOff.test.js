import { logger }  from '@spare/logger'
import { test }    from 'node:test'
import { spinOff } from '../../src/util/string.js'

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
    const [ a, b ] = spinOff(candidate)
    logger(`[candidate] (${candidate}) [a] (${a}) [b] (${b})`)
  }
})

