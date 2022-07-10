import { parenth }               from '@texting/bracket'
import { DecoString, ros, says } from '@spare/logger'
import { Fold }                  from '../src/fold'
import { candidates }            from './candidates'

const codes = word => Array.from(word).map(x => ros(String(x.charCodeAt(0)))).join('')

const fold = Fold({ width: 80, firstLineIndent: 25 })
const decoString = DecoString()
for (let [key, candidate] of Object.entries(candidates)) {
  candidate |> fold|> decoString|> parenth |> says[key]
}