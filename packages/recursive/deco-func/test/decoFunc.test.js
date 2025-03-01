import { LF }                 from '@texting/enum-chars'
import { logger, says }       from '@spare/logger'
import { decoFunc }           from '../index.js'
import { FunctionCollection } from './assets/FunctionCollection.js'
import { test } from 'node:test'

for (const [ key, func ] of Object.entries(FunctionCollection)) {
  says[key].br(func.name).p(LF)(decoFunc(func))
  logger('')
}

// for (const [key, func] of Object.entries(FunctionCollection)) {
//   key |> console.log
//   decoFunc(func) |> console.log
//   '' |> console.log
// }
