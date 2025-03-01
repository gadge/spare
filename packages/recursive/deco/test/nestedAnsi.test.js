import { decoPale }           from '@spare/deco-pale'
import { decoString, logger } from '@spare/logger'
import { says }               from '@spare/xr'
import { hasAnsi }            from '@texting/lange'
import { iterate, mutate }    from '@vect/object-mapper'
import { Deco }               from '../index.js'
import { test }               from 'node:test'

const o = {
  chef: 'chef',
  worker: 'worker',
  tournant: 'tournant',
  aboyeur: 'aboyeur'
}

test('nested ansi', () => {
  mutate(o, decoString)
  logger(decoPale(o))

  iterate(o, x => {
    says[x](hasAnsi(x))
  })

  logger(Deco({ vert: 1 })(o))
})

