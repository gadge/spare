import { oneself }        from '@ject/oneself'
import { MUTATE_PIGMENT } from '@palett/enum-colorant-modes'
import { fluoMatrix }     from '@palett/fluo-matrix'
import { Br }             from '@texting/bracket'
import { COLF }           from '@spare/enum-chars'
import { liner }          from '@texting/liner'
import { matrixMargin }   from '@spare/matrix-margin'
import { matrixPadder }   from '@spare/matrix-padder'
import { height, width }  from '@vect/matrix-index'

const fluo = fluoMatrix.bind(MUTATE_PIGMENT)

export function decoMatrix(rows = []) {
  const config = this, ht = height(rows), wd = width(rows)
  if (!ht || !wd) return liner([], config)
  let { discrete, delim, bracket, level } = config
  rows = matrixMargin(rows, config) // use: top, bottom, left, right, read, rule
  rows = matrixPadder(rows, config) // use: ansi
  if (config.presets) rows = fluo(rows, config.direct, config.presets) // use: direct, presets, effects
  const br = Br(bracket) ?? oneself
  return liner(rows.map(row => br(row.join(delim))), { discrete, delim: COLF, bracket, level })
}
