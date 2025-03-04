import { flop, flopValue }                          from '@aryth/rand'
import { Quotes }                                   from '@foba/quotes-creativity'
import { METRO, PAGODA, SUBTLE }                    from '@palett/presets'
import { deco }                                     from '../index.js'
import { Basics, Matrices, Misc, Objects, Vectors } from './assets/candidates.js'
import { test }                                     from 'node:test'

const CANDIDATES = {
  ...Basics,
  ...Vectors,
  ...Matrices,
  ...Objects,
  ...Misc,
  ...(flop(flopValue(Quotes)))
}

const WD = 54
const LINE = '+'.repeat(WD) + WD
const CONF = {
  pres: { pos: PAGODA, neg: METRO, str: SUBTLE },
  vert: 6,
  depth: 18,
  thres: NaN,
  broad: true
}

test('deco pretty unit', () => {
  console.log(LINE)
  console.log(deco(CANDIDATES, CONF))
  console.log(LINE)
  console.log(deco([ 'foo', 'bar' ]))

  console.log(deco(null))
  console.log(deco(({ some: null })))
})
