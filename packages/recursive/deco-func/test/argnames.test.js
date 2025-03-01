import { PARENTH }            from '@spare/enum-brackets'
import { COSP }               from '@texting/enum-chars'
import { DecoVector, says }   from '@spare/logger'
import { decoFunc }           from '../index.js'
import { argnames }           from '../src/argnames.js'
import { FunctionCollection } from './assets/FunctionCollection.js'
import { test } from 'node:test'

const decoVector = DecoVector({ bracket: PARENTH, delim: COSP })
for (const [key, func] of Object.entries(FunctionCollection)) {
  says[key].br(func.name)(decoVector(argnames(func)))
}