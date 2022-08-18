import { flop, flopValue }                          from '@aryth/rand'
import { Quotes }                                   from '@foba/quotes-creativity'
import { BESQUE, OCEAN, SUBTLE }                    from '@palett/presets'
import { Deco }                                     from '../target/Deco.js'
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
const deco = new Deco({ fill: ' ', ansi: true, pres: { pos: BESQUE, neg: OCEAN, str: SUBTLE }, vt: 6, dp: 18, th: WD, br: true })

LINE |> console.log
deco.node(CANDIDATES, 0) |> console.log
LINE |> console.log

null |> deco.node |> console.log;
({ some: null }) |> deco.node |> console.log
