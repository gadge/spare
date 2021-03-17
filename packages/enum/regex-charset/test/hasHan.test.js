import { says }                   from '@palett/says'
import { decoString, logNeL, Xr } from '@spare/logger'
import { HAN }                    from '../resources/oneoffRegexes'

const candidates = [
  'Taco青年',
  '秦时明月',
  'Rome',
  '...',
  '．．．',
  '。。。'
];

[...HAN.source]
  .map(c => HAN.test(c) ? ('\\u' + c.charCodeAt(0).toString(16)) : c)
  .join('') |> decoString |> logNeL

for (let w of candidates) {
  Xr()['hasHan'](HAN.test(w)) |> says[w]
}