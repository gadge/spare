import { test }                                     from 'node:test'
import { Basics, Matrices, Misc, Objects, Vectors } from '../../deco/test/assets/candidates.js'
import { decoFlat }                                 from '../index.js'

const candidates = {
  a: 100,
  ...Basics,
  ...Vectors,
  ...Matrices,
  ...Objects,
  ...Misc
}

test('decoFlat', () => {
  console.log(decoFlat(candidates))
})


