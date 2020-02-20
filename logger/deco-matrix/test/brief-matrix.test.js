import { randMatrix } from '@foba/foo'
import { deco } from '../src/deco'
import { logger } from '@spare/logger'
import { FobaStr, FobaNum } from '@foba/vector'

const mx = randMatrix({ h: 8, w: 12 })

const mx2 = [
  FobaStr.flop({ size: 8 }),
  FobaNum.flop({ size: 8 }),
  FobaNum.flop({ size: 8 }),
  FobaStr.flop({ size: 8 }),
  FobaStr.flop({ size: 8 }),
]
deco(mx, { top: 3, bottom: 2, left: 3, right: 2 }) |> logger

deco(mx2, { left: 4, right: 2 }) |> logger
