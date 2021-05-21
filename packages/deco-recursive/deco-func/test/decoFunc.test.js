import { LF }                 from '@spare/enum-chars'
import { logger, says }       from '@spare/logger'
import { decoFunc }           from '../index'
import { FunctionCollection } from './assets/FunctionCollection'

for (const [key, func] of Object.entries(FunctionCollection)) {
  decoFunc(func) |> says[key].br(func.name).p(LF)
  '' |> logger
}

// for (const [key, func] of Object.entries(FunctionCollection)) {
//   key |> console.log
//   decoFunc(func) |> console.log
//   '' |> console.log
// }
