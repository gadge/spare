import { Basics, Vectors } from '../../deco/test/assets/candidates.js'
import { APOS }            from '@texting/enum-quotes'
import { says }            from '@spare/logger'
import { decoPale }        from '../index.js'
import { test }            from 'node:test'

test('decoPale', async () => {
  for (const [ key, value ] of Object.entries({
    // ...Basics,
    ...Vectors,
    o: { 'mc\'q': 1, date: new Date(), vec: [ [ 1 ], [ 2, 3 ] ], ob: { a: '1.41', b: '3.14' } }
  })) {
    says[key](decoPale(value, { loose: true })) // quote: APOS
  }
})

