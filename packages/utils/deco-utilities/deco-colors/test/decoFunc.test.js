import { FunctionCollection } from './alpha/assets/FunctionCollection'
import { says } from '@palett/says'
import { deco } from '../index'
import { logger } from '@spare/logger'
import { protoType } from '@typen/typ'

for (const [key, func] of Object.entries(FunctionCollection)) {
  deco(func) |> says[key]
  '' |> logger
  func.name |> logger
  protoType(func)|> logger
  // func.toString() |> logger
  '' |> logger
  '-----------------------------------------------------------------------' |> logger
}
