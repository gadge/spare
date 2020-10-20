import { says }               from '@palett/says'
import { LF }                 from '@spare/enum-chars'
import { logger }             from '@spare/logger'
import { decoFunc }           from '../index'
import { FunctionCollection } from './assets/FunctionCollection'

for (const [key, func] of Object.entries(FunctionCollection)) {
  decoFunc(func) |> says[key].br(func.name).p(LF)
  '' |> logger
}
