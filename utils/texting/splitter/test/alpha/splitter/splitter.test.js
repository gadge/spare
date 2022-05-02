import { deco }         from '@spare/deco'
import { says }         from '@spare/logger'
import { splitLiteral } from '../../../src/splitLiteral'
import { candidates }   from '../candidates'

for (let [key, word] of Object.entries(candidates)) {
  splitLiteral(word) |> deco |> says[key]
}



