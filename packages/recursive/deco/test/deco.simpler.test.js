import { logger, Xr } from '@spare/logger'
import { pair }       from '@vect/object-init'
import { deco }       from '../index'

const MERGE = -1
const ACCUM = 0
const INCRE = 1
const COUNT = 2
const FOO = 'foo', BAR = 'bar', KHA = 'kha', MIA = 'mia'
const candidates = {
  simpleCell: pair(BAR, COUNT),
  emptyArrayed: [],
  string: FOO,
  sparseArray: [FOO, null],
  stringArray: [FOO, KHA, MIA],
  oneRowed: [{ foo: INCRE }],
  fieldOnly: { foo: null },
  mixedObject: [{ foo: INCRE }, FOO, { kha: ACCUM }],
  mixedArray: [[FOO, MERGE], KHA, [MIA, ACCUM]],
}

for (const [key, value] of Object.entries(candidates)) {
  // ({ key, value }) |> decoFlat |> logger
  Xr(key).parsed(value |> deco) |> logger
}