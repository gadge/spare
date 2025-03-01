import { logger, Xr } from '@spare/logger'
import { pair }       from '@vect/object-init'
import { deco }       from '../index.js'
import { test }       from 'node:test'

const MERGE = -1
const ACCUM = 0
const INCRE = 1
const COUNT = 2
const FOO = 'foo', BAR = 'bar', KHA = 'kha', MIA = 'mia'
const candidates = {
  simpleCell: pair(BAR, COUNT),
  emptyArrayed: [],
  string: FOO,
  sparseArray: [ FOO, null ],
  stringArray: [ FOO, KHA, MIA ],
  oneRowed: [ { foo: INCRE } ],
  fieldOnly: { foo: null },
  mixedObject: [ { foo: INCRE }, FOO, { kha: ACCUM } ],
  mixedArray: [ [ FOO, MERGE ], KHA, [ MIA, ACCUM ] ]
}

test('deco simpler unit', () => {
  for (const [ key, value ] of Object.entries(candidates)) {
    logger(Xr(key).parsed(deco(value)))
  }
})