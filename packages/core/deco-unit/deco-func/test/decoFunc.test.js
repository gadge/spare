import { FunctionCollection } from './assets/FunctionCollection'
import { says } from '@palett/says'
import { logger } from '@spare/logger'
import { LF } from '@spare/enum-chars'
import { decoFunc } from '../index'

for (const [key, func] of Object.entries(FunctionCollection)) {
  decoFunc(func) |> says[key].br(func.name).p(LF)
  '' |> logger
}
