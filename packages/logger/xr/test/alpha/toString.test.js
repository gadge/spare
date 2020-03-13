import { logger } from '@spare/logger'

const candidates = {
  null: null,
  undefined: undefined,
  string: 'foo',
  number: 1024,
  bigint: BigInt(1024),
  array: [1, 2, 3],
  object: { foo: 1, bar: 2 },
  map: new Map(),
  set: new Set([1, 2, 3]),
  weakMap: new WeakMap(),
  weakSet: new WeakSet(),
  symbol: Symbol('foo'),
  func: () => {}
}

for (const [key, value] of Object.entries(candidates)) {
  `[${key}] (${String(value)})` |> logger
}
