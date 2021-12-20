import { logger, logNeL } from '@spare/logger'
import { GP }             from 'elprimero'
import { Xr }             from '../src/xr.js'

logger('ink')
const ink = Xr('  ', true).p('what')['title']('some').content('chapter').note(undefined)
logNeL(ink)

logger('ink()')
logNeL(ink.asc().br(1, 2, 3)('further content'))

logNeL(Xr(GP.now(), 'NewsWsj', 'headlines')
  .p('channel').br('world')
  .p('fetched.').br(5).toString())


