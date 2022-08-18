import { flop, flopValue }                          from '@aryth/rand'
import { Quotes }                                   from '@foba/quotes-creativity'
import { BESQUE, OCEAN, SUBTLE }                    from '@palett/presets'
import { deco }                                     from '../index.js'
import { Basics, Matrices, Misc, Objects, Vectors } from './assets/candidates'

const CANDIDATES = {
  ...Basics,
  ...Vectors,
  ...Matrices,
  ...Objects,
  ...Misc,
  ...(Quotes|> flopValue |> flop)
}

const WD = 54
const LINE = '+'.repeat(WD) + WD
const CONF = {
  pres: { pos: BESQUE, neg: OCEAN, str: SUBTLE },
  vert: 6,
  depth: 18,
  width: WD,
  broad: true
}

LINE |> console.log
deco(CANDIDATES, CONF) |> console.log
LINE |> console.log

null |> deco |> console.log;
({ some: null }) |> deco |> console.log
