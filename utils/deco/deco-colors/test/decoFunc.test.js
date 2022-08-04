import { says }               from '@palett/says'
import { logger }             from '@spare/logger'
import { protoType }          from '@typen/typ'
import { deco }               from '../index.js'
import { FunctionCollection } from './alpha/assets/FunctionCollection.js'

for (const [key, func] of Object.entries(FunctionCollection)) {
  deco(func) |> says[key]
  '' |> logger
  func.name |> logger
  protoType(func)|> logger
  // func.toString() |> logger
  '' |> logger
  '-----------------------------------------------------------------------' |> logger
}
