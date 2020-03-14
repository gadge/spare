import { randMatrix } from '@foba/foo'
import { logger } from '@spare/logger'
import { FobaNum, FobaStr } from '@foba/vector'
import { Deco } from '../index'
import { METRO } from '@palett/presets'

const randRows = randMatrix({ h: 8, w: 12 })

const miscRows = [
  FobaStr.flop({ size: 8 }),
  FobaNum.flop({ size: 8 }),
  FobaNum.flop({ size: 8 }),
  FobaStr.flop({ size: 8 }),
  FobaStr.flop({ size: 8 }),
]
randRows |> Deco({ top: 3, bottom: 2, left: 3, right: 2 }) |> logger

miscRows |> Deco({
  left: 4,
  right: 2,
  stringPreset: METRO,
  quote: '\'',
  discrete: false,
  bracket: true,
})  |> logger
