import { deco }       from '@spare/deco'
import { says }       from '@spare/logger'
import { splitter }   from '../../..'
import { candidates } from '../candidates'
import { WORDREG }    from './regexps'

for (let [key, word] of Object.entries(candidates)) {
  splitter(word, WORDREG) |> deco |> says[key]
}



