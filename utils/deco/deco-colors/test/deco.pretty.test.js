import { deco, logger }                             from '@spare/logger'
import { Basics, Matrices, Misc, Objects, Vectors } from './assets/candidates.js'

const candidates = {
  ...Basics,
  ...Vectors,
  ...Matrices,
  ...Objects,
  ...Misc
}

candidates |> deco |> logger
