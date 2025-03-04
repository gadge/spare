import { deco, logger } from '@spare/logger'
import { $, says, xr }  from '../index.js'
import { test }         from 'node:test'

test('xr', () => {
  says['historian'](xr('william shakespeare')['tragedies']('Macbeth', 'King Lear', 'Hamlet', 'Romeo and Juliet')['comedies'](null))

  says['el primero'](xr().timestamp(new Date()).todo(deco([ 1, 2, 3 ])))

  logger(xr('>> leo').br('tolstoy').p(1, 2, 3))

  logger($['>> LeoTolstoy']('Well, Prince, so Genoa and Lucca are now just family estates of the Buonapartes'))

  logger($.earth(90).saturn(90).neptune(90).br('a').br('b'))

  $['foo']('bar').br('a').br('b').log('what if')

// ('what if 2') |> $['foo']('bar').br('a').br('b')
// cr('key')('what if')

})
