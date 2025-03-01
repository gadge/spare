import { flop, flopValue }                          from '@aryth/rand'
import { Quotes }                                   from '@foba/quotes-creativity'
import { logger }                                   from '@spare/logger'
import { Deco }                                     from '../index.js'
import { Basics, Matrices, Misc, Objects, Vectors } from './assets/candidates.js'
import { describe, it, test }                       from 'node:test'
import assert                                       from 'node:assert'

const candidates = {
  ...Basics,
  ...Vectors,
  ...Matrices,
  ...Objects,
  ...Misc,
  ...(flop(flopValue(Quotes)))
}

test('deco plain', () => {
  logger(Deco({
    // pres: false,
    depth: 6,
    width: 64
  })(candidates))
})

describe('A thing', () => {
  it('should work', () => {
    assert.strictEqual(1, 1)
  })

  it('should be ok', () => {
    assert.strictEqual(2, 2)
  })

  describe('a nested thing', () => {
    it('should work', () => {
      assert.strictEqual(3, 3)
    })
  })
})

