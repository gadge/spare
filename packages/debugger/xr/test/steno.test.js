import { logger } from '@spare/logger'
import { Steno }  from '../src/Steno'

const x = Steno.build('>> what')
x.foo('yeal').bar('bus').br('anything').zen('3')|> logger