import { deca } from '../index'
import { Basics, Matrices, Misc, Objects, Vectors } from './candidates'
import { logger } from '@spare/logger'

const candidates = {
  ...Basics,
  ...Vectors,
  ...Matrices,
  ...Objects,
  ...Misc
}

candidates |> deca({ hi: 6, va: 0, vo: 0, wa: 32, wo: 48, wf: 64, color: false }) |> logger
