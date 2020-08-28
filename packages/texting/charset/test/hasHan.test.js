import { says } from '@palett/says'
import { Xr }   from '@spare/logger'
import { HAN }  from '../resources/oneoffRegexes'

const candidates = [
  'Taco青年',
  '秦时明月',
  'Rome',
  '...'
]

for (let w of candidates) {
  Xr().hanHan(HAN.test(w)) |> says[w]
}