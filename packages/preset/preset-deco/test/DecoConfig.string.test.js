import { METRO, SUBTLE } from '@palett/presets'
import { logger }        from '@spare/logger'
import { presetString } from '../dist/index.esm'

const p = {
  // presets: [SUBTLE, METRO],
}
presetString(p) |> JSON.stringify |> logger