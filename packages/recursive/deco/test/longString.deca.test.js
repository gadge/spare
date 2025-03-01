import { randLong } from '@aryth/rand'
import { logger }   from '@spare/logger'
import { test }     from 'node:test'
import { Deco }     from '../index.js'

const candidates = {
  d10: randLong(10),
  d20: randLong(20),
  d30: randLong(30),
  d40: randLong(40),
  d50: randLong(50),
  d60: randLong(60)
}

test('longString deca', () => {
  logger(Deco({ vo: 0, wo: 32 })(candidates))
})
