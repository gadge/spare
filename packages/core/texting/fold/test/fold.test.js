import { parenth }          from '@spare/bracket'
import { decoString, says } from '@spare/logger'
import { Fold }             from '../src/fold'
import { candidates }       from './candidates'

const fold = Fold({ width: 80, firstLineIndent: 10 })
for (let [key, candidate] of Object.entries(candidates)) {
  candidate |> fold|> decoString|> parenth |> says[key]
}