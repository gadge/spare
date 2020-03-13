import { deca} from '../index'
import { Basics, Matrices, Misc, Objects, Vectors } from './candidates'
import { logger } from '@spare/logger'

const candidates = {
  ...Basics,
  ...Vectors,
  ...Matrices,
  ...Objects,
  ...Misc
}

candidates |> deca({ hi: 10 }) |> logger
