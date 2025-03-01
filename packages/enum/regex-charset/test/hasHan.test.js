import { says } from '@spare/xr'
import { Xr }   from '@spare/logger'
import { HAN }  from '../resources/oneoffRegexes'
import { test } from 'node:test'

const candidates = [
  'Taco青年',
  '秦时明月',
  'Rome',
  '...'
]

for (let w of candidates) {
  Xr().hasHan(HAN.test(w)) |> says[w]
}