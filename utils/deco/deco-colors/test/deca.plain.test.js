import { logger }                                   from '@spare/logger'
import { deca }                                     from '../index.js'
import { Basics, Matrices, Misc, Objects, Vectors } from './assets/candidates.js'

const candidates = {
  ...Basics,
  ...Vectors,
  ...Matrices,
  ...Objects,
  ...Misc
}

candidates |> deca({
  pr: false,
  hi: 6,
  va: 0,
  vo: 0,
  wa: 32,
  wo: 48,
  wf: 64,
  qm: '\''
}) |> logger
