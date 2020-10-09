import { says } from '@palett/says'
import { Xr }   from '@spare/logger'
import { HAN }  from '@spare/regex-charset'

const candidates = [
  'Taco青年',
  '秦时明月',
  'Rome',
  '...'
]


const tester = HAN.test.bind(HAN)

for (let w of candidates) {
  Xr().hanHan(tester(w)) |> says[w]
}