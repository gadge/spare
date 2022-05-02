import { duoRank }       from '@aryth/rank-vector'
import { METRO, PLANET } from '@palett/presets'
import { delogger }      from '@spare/deco'
import { says }          from '@spare/logger'
import { splitLiteral }  from '@spare/splitter'
import { candidates }    from '@spare/splitter/test/alpha/candidates'

export const decoWords = (text, { preset = METRO, stringPreset = PLANET } = {}) => {
  const words = splitLiteral(text)
  const ranks = duoRank(words)
  ranks |> delogger
}

for (let [key, text] of Object.entries(candidates)) {
  decoWords(text) |> says[key]
}