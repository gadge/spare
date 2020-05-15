import { STR_DESC }         from '@aryth/comparer'
import { DecoMatrix, says } from '@spare/logger'
import { splitter }         from '../../..'
import { candidates }       from '../candidates'
import { NAIVEREG }         from '../splitter/regexps'
import { rank }             from '@aryth/rank-vector'
import { isNumeric }        from '@typen/num-loose'
import { fluoVector }       from '@palett/fluo-vector'

for (let [key, value] of Object.entries(candidates)) {
  const vec = splitter(value, NAIVEREG)
  const rankStr = rank(vec, STR_DESC, x => /[A-Za-z0-9]+/.test(x)).map(x => x === -1 ? NaN : x)
  const rankNum = rank(vec, STR_DESC, isNumeric).map(x => x === -1 ? NaN : x)
  const rows = [
    vec,
    rankStr,
    rankNum,
    fluoVector(rankStr),
    fluoVector(rankNum)
  ]
  rows |> DecoMatrix({ delim: ' | ' }) |> says[key]
}