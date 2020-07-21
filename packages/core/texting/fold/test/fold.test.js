import { parenth }          from '@spare/bracket'
import { decoString, says } from '@spare/logger'
import { Fold }             from '../src/fold'
import { candidates }       from './candidates'

const { LF } = require('@spare/enum-chars')

for (let [key, candidate] of Object.entries(candidates)) {
  candidate |> Fold({ width: 80, delim: LF, regex: /\s/ })|> decoString|> parenth|> says[key]
}