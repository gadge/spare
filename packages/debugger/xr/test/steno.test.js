import { logger } from '@spare/logger'
import { Steno }  from '../src/Steno'

const x = new Steno('>> what')
x.foo('yeal').bar('bus').br('anything').zen('3')|> logger