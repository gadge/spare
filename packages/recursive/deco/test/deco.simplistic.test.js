import { FRESH, METRO, OCEAN } from '@palett/presets'
import { test }                from 'node:test'
import { Denode }              from '../src/Denode.js'

const candidates = [
  {
    name: 'foo',
    x: 3,
    y: 4,
    some: null,
    date: new Date(),
    obj: { foo: null }
  },
  {
    vec: [
      [ 1, 1, 2, 3, 5, 8 ]
      // [ 1, 1, 2, 3, 5, 8 ]
    ]
  }
]

test('deco simplistic', () => {
  const deco = new Denode({ fill: ' ', ansi: true, pres: { pos: FRESH, neg: OCEAN, str: METRO }, vert: 4, thres: NaN })

  console.log(deco.node(candidates))
  console.log(deco.node({ foo: 1, date: new Date(), vec: [ 1, 2, 3 ], symbol: Symbol.for('shake') }))
  console.log(deco.node('shake'))
  console.log(deco.node(123))
})
