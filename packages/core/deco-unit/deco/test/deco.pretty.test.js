import { JUNGLE, MOSS }                             from '@palett/presets'
import { logger }                                   from '@spare/logger'
import { Deco }                                     from '../index'
import { Basics, Matrices, Misc, Objects, Vectors } from './assets/candidates'

const candidates = {
  ...Basics,
  ...Vectors,
  ...Matrices,
  ...Objects,
  ...Misc
}

candidates |> Deco({
  pr: [MOSS, JUNGLE],
  hi: 10,
  wa: 10
}) |> logger
