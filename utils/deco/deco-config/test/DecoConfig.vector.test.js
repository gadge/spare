import { METRO, SUBTLE } from '@palett/presets'
import { BRK }           from '@spare/enum-brackets'
import { deco, logger }  from '@spare/logger'
import { presetVector }  from '@spare/preset-deco/functions/presetVector.js'

const p = {
  head: 4,
  tail: 4,
  indexed: false,
  bracket: BRK,
  presets: [SUBTLE, METRO],
  // delim: ', ',
  discrete: false,
  full: true,
  label: 1,
}
// presetVector(p) |> JSON.stringify |> logger
presetVector(p) |> deco|> logger