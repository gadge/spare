import { FunctionCollection } from './alpha/assets/FunctionCollection'
import { says } from '@palett/says'
import { deco } from '../src/deco'
import { logger } from '@spare/logger'

for (const [key, func] of Object.entries(FunctionCollection)) {
  deco(func) |> says[key]
  '' |> logger
  func.toString() |> logger
  '' |> logger
  '-----------------------------------------------------------------------' |> logger
}
