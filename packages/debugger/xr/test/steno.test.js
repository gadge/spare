import { logger } from '@spare/logger'
import { test }   from 'node:test'
import { Steno }  from '../src/Steno.js'

test('steno', { skip: true }, () => {
  const x = Steno.build('>> what')
  logger(x.foo('yeal').bar('bus').br('anything').zen('3'))
})
