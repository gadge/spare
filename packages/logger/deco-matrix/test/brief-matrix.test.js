import { randMatrix } from '@foba/foo'
import { logger } from '@spare/logger'
import { NumberVectorCollection, StringVectorCollection } from '@foba/vector'
import { Deco } from '../index'
import { METRO } from '@palett/presets'

const unVec = null
const emptyVec = []
const emptyRow = [[]]
const randRows = randMatrix({ h: 8, w: 12 })
const miscRows = [
  StringVectorCollection.flopShuffle({ size: 8 }),
  NumberVectorCollection.flopShuffle({ size: 8 }),
  NumberVectorCollection.flopShuffle({ size: 8 }),
  StringVectorCollection.flopShuffle({ size: 8 }),
  StringVectorCollection.flopShuffle({ size: 8 }),
]

unVec |> Deco() |> logger
emptyVec |> Deco() |> logger
emptyRow |> Deco() |> logger

randRows |> Deco({ top: 3, bottom: 2, left: 3, right: 2 }) |> logger

miscRows |> Deco({
  left: 4,
  right: 2,
  stringPreset: METRO,
  quote: '\'',
  discrete: false,
  bracket: true,
})  |> logger
