import { Basics, Vectors } from '@spare/decoPale/test/candidates'
import { says }            from '@spare/logger'
import { decoValue }       from '../src/decoValue'
// import { decoLoose } from '../src2/decoLoose'

for (const [key, value] of Object.entries({
  ...Basics,
  ...Vectors,
  o: { 'fo\'o': 1, bar: '2' }
})) {
  decoValue(value) |> says[key]
}
