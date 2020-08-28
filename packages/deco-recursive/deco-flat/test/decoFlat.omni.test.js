import { Basics, Matrices, Misc, Objects, Vectors } from '@spare/deco/test/assets/candidates'
import { DecoObject, logger } from '@spare/logger'
import { decoFlat }           from '..'

const candidates = {
  a: 100,
  ...Basics,
  ...Vectors,
  ...Matrices,
  ...Objects,
  ...Misc
}

candidates |> DecoObject({ read: decoFlat })|> logger

