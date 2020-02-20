import { logger } from '@spare/logger'
import { GP } from 'elprimero'
import { Xr } from '../src/Xr'

'ink' |> logger
const ink = Xr('  ', 'b', 'c').p('what')['title']('some').content('chapter')
ink |> logger

'ink()' |> logger
ink.asc()() |> logger

Xr(GP.now(), 'NewsWsj', 'headlines')
  .p('channel').br('world')
  .p('fetched.').br(5).toString() |> console.log


