import { decoFlat }                                 from '../index.js'
import { Basics, Matrices, Misc, Objects, Vectors } from '../../deco/test/assets/candidates'

const candidates = {
  a: 100,
  ...Basics,
  ...Vectors,
  ...Matrices,
  ...Objects,
  ...Misc
}

candidates |> decoFlat |> console.log

