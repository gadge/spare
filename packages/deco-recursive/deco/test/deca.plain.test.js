import { flop, flopValue }                          from '@aryth/rand'
import { Quotes }                                   from '@foba/quotes-creativity'
import { logger }                                   from '@spare/logger'
import { Deco }                                     from '../index'
import { Basics, Matrices, Misc, Objects, Vectors } from './assets/candidates'

const candidates = {
  ...Basics,
  ...Vectors,
  ...Matrices,
  ...Objects,
  ...Misc,
  ...(Quotes |> flopValue |> flop)
}

candidates |> Deco({
  pr: false,
  hi: 6,
  va: 0,
  vo: 0,
  wa: 32,
  wo: 48,
  wf: 64,
  qm: '\''
}) |> logger
