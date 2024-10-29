import { logger } from '@spare/logger'
import { Steno }  from '../src/Steno.js'

const x = Steno.build('>> what')
logger(x.foo('yeal').bar('bus').br('anything').zen('3'))