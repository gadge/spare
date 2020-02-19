import { deca, deco } from '../index'
import { Basics, Matrices, Misc, Objects, Vectors } from './candidates'
import { logger } from '@spare/logger'
import { delogger } from '..'

const candidates = {
  ...Basics,
  ...Vectors,
  ...Matrices,
  ...Objects,
  ...Misc
}

candidates |> delogger
