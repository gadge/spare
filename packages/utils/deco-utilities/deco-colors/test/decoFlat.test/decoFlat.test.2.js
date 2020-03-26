import { Basics, Matrices, Misc, Objects, Vectors } from '../assets/candidates'
import { DecoObject, logger } from '@spare/logger'
import { deflat } from '../../index'

const candidates = {
  a: 100,
  ...Basics,
  ...Vectors,
  ...Matrices,
  ...Objects,
  ...Misc
}

candidates |> DecoObject({ read: deflat })|> logger

