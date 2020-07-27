import { flop, flopValue }                          from '@aryth/rand'
import { Quotes }                                   from '@foba/quotes-creativity'
import { AZURE, MOSS }                              from '@palett/presets'
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
  presets: null,
  depth: 10,
  string: { preset: false }
  // array: { vert: 1 },
  // object: { vert: 1 }
}) |> logger
