import { PARENTH }            from '@spare/enum-brackets'
import { COSP }               from '@spare/enum-chars'
import { DecoVector, says }   from '@spare/logger'
import { argnames }           from '../src/argnames'
import { FunctionCollection } from './assets/FunctionCollection'

const decoVector = DecoVector({ bracket: PARENTH, delim: COSP })
for (const [key, func] of Object.entries(FunctionCollection)) {
  argnames(func) |> decoVector |> says[key].br(func.name)
}