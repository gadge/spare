import { test }     from 'node:test'
import { decoFlat } from '../index.js'

const candidates = {
  empty: '',
  space: ' ',
  misc: [ null, undefined, NaN, Infinity ],
  number: 1,
  boolean: true,
  string: 'foo',
  array: [ 1, 2, 3 ],
  object: { a: 1, b: 2, c: 3 },
  matrix: [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ],
  entries: [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ],
  set: new Set([ 1, 2, 3 ]),
  map: new Map([ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]),
  date: new Date(),
  buffer: Buffer.from('hello'),
  error: new Error('something went wrong'),
  symbol: Symbol('foo'),
  function: function (x) { return x * x },
  class: class Foo {constructor(x) { this.x = x }},
  regexp: /foo/g,
}

test('decoFlat', () => {
  for (let [ key, value ] of Object.entries(candidates)) {
    // says[key](decoFlat(value))
    console.log(key, decoFlat(value))
  }
})
