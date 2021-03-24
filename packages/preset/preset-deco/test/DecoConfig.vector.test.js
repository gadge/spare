import { METRO, SUBTLE } from '@palett/presets'
import { BRK }           from '@spare/enum-brackets'
import { logger }        from '@spare/logger'
import { presetVector }  from '../functions/presetVector'

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
presetVector(p) |> JSON.stringify |> logger