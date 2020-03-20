import { randMatrix } from '@foba/foo'
import { FobaNum, FobaStr } from '@foba/vector'
import { logger } from '@spare/logger'
import { Verse } from '../src/Verse'

const randRows = randMatrix({ h: 8, w: 12 })

const miscRows = [
  FobaStr.flopShuffle({ size: 8 }),
  FobaNum.flopShuffle({ size: 8 }),
  FobaNum.flopShuffle({ size: 8 }),
  FobaStr.flopShuffle({ size: 8 }),
  FobaStr.flopShuffle({ size: 8 }),
]
randRows |> Verse.matrix.bind(Verse) |> logger

miscRows |> Verse.matrix.bind(Verse)|> logger
