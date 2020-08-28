import { logger, logNeL } from '@spare/logger'
import { GP }             from 'elprimero'
import { Xr }             from '../src/Xr'

'ink' |> logger
const ink = Xr('  ', true).p('what')['title']('some').content('chapter')
ink |> logNeL

'ink()' |> logger
ink.asc().br(1, 2, 3)('further content') |> logNeL

Xr(GP.now(), 'NewsWsj', 'headlines')
  .p('channel').br('world')
  .p('fetched.').br(5).toString() |> logNeL


