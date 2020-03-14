import { randMatrix } from '@foba/foo'
import { FobaNum, FobaStr } from '@foba/vector'
import { logger } from '@spare/logger'
import { Verse } from '../src/Verse'

const randRows = randMatrix({ h: 8, w: 12 })

const miscRows = [
  FobaStr.flop({ size: 8 }),
  FobaNum.flop({ size: 8 }),
  FobaNum.flop({ size: 8 }),
  FobaStr.flop({ size: 8 }),
  FobaStr.flop({ size: 8 }),
]
randRows |> Verse.matrix |> logger

miscRows |> Verse.matrix|> logger
