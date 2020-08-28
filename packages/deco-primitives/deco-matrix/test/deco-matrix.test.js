import { randMatrix }                                     from '@foba/foo'
import { NumberVectorCollection, StringVectorCollection } from '@foba/vector'
import { FRESH, METRO }                                   from '@palett/presets'
import { says }                                           from '@spare/logger'
import { COLUMNWISE } from '@vect/enum-matrix-directions'
import { Deco }       from '../index'

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

unVec |> Deco() |> says['unVec']
emptyVec |> Deco() |> says['emptyVec']
emptyRow |> Deco() |> says['emptyRow']

randRows |> Deco({ top: 3, bottom: 2, left: 3, right: 2, direct: COLUMNWISE }) |> says['randRows']

miscRows |> Deco({
  left: 4,
  right: 2,
  // preset: FRESH,
  // stringPreset: METRO,
  presets: [FRESH, METRO],
  discrete: false,
  bracket: true,
})  |> says['miscRows']
