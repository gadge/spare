import { DecoObject, logger }                       from '@spare/logger'
import { deflat }                                   from '../../index.js'
import { Basics, Matrices, Misc, Objects, Vectors } from '../assets/candidates.js'

const candidates = {
  a: 100,
  ...Basics,
  ...Vectors,
  ...Matrices,
  ...Objects,
  ...Misc
}

candidates |> DecoObject({ read: deflat })|> logger

