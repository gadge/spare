import { FRESH, METRO, OCEAN } from '@palett/presets'
import { logger }              from '@spare/logger'
import { Deco }                from '../target/Deco.js'

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
      [ 1, 1, 2, 3, 5, 8 ],
      // [ 1, 1, 2, 3, 5, 8 ]

    ],
  }
]


const deco = new Deco({ fill: ' ', ansi: true, pres: { pos: FRESH, neg: OCEAN, str: METRO }, vt: 4 })
deco.node(candidates) |> logger
