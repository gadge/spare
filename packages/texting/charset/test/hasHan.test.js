import { says } from '@palett/says'
import { Xr }   from '@spare/logger'
import { HAN }  from '@spare/regex-charset'

const candidates = [
  'Taco青年',
  '秦时明月',
  'Rome',
  '...',
  '-1,234,567.890',
  '－１，２３４，５６７．８９０',
  '+-',
  '＋－',
]

const tester = RegExp.prototype.test.bind(HAN)

for (let w of candidates) {
  Xr()['hanHan'](tester(w)) |> says[w]
}