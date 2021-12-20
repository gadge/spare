import { deco, logger, says } from '@spare/logger'
import { xr }                 from '../src/xr.js'

says['historian'](xr('william shakespeare')
  .tragedies('Macbeth', 'King Lear', 'Hamlet', 'Romeo and Juliet')
  .comedies(null))

says['el primero'](xr().timestamp(new Date()).todo(deco([ 1, 2, 3 ])))

logger(xr('leo').br('tolstoy'))
