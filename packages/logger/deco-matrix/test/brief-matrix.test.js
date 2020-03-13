import { randMatrix } from '@foba/foo'
import { logger } from '@spare/logger'
import { FobaStr, FobaNum } from '@foba/vector'
import { Deco } from '../src/Deco'
import { METRO, SUBTLE } from '@palett/presets'

const mx = randMatrix({ h: 8, w: 12 })

const mx2 = [
  FobaStr.flop({ size: 8 }),
  FobaNum.flop({ size: 8 }),
  FobaNum.flop({ size: 8 }),
  FobaStr.flop({ size: 8 }),
  FobaStr.flop({ size: 8 }),
]
mx |> Deco({ top: 3, bottom: 2, left: 3, right: 2 }) |> logger

mx2 |> Deco({ left: 4, right: 2, stringPreset: METRO }) |> logger
