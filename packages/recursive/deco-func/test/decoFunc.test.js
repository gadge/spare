import { says }               from '@spare/logger'
import { test }               from 'node:test'
import { decoFunc }           from '../index.js'
import { FunctionCollection } from './assets/FunctionCollection.js'

test('decoFunc', t => {
  for (const [ key, func ] of Object.entries(FunctionCollection)) {
    says[key](func.name)
    says[key](decoFunc(func))
    // logger('')
  }
})


// for (const [key, func] of Object.entries(FunctionCollection)) {
//   key |> console.log
//   decoFunc(func) |> console.log
//   '' |> console.log
// }
