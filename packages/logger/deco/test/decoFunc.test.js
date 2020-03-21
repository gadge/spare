import { FunctionCollection } from './alpha/assets/FunctionCollection'
import { says } from '@palett/says'
import { deco } from '../src/deco'

for (const [key, func] of Object.entries(FunctionCollection)) {
  deco(func) |> says[key]
}
