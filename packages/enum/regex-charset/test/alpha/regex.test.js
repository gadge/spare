import { says } from '@spare/xr'
import { Xr }   from '@spare/logger'
import { test } from 'node:test'

const ARC = /[a-cx-z]/
const EDGE = /[a-c|x-z]/
const DEV = /[a-c]|[x-z]/
const candidates = [
  'abc', 'efg', 'rst', 'wxy', 'xyz'
]

for (let w of candidates) {
  Xr().arc(ARC.test(w)).edge(EDGE.test(w)).dev(DEV.test(w)) |> says[w]
}
