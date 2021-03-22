import { oneself }        from '@ject/oneself'
import { MUTATE_PIGMENT } from '@palett/enum-colorant-modes'
import { fluoMatrix }     from '@palett/fluo-matrix'
import { Br }             from '@spare/bracket'
import { COLF }           from '@spare/enum-chars'
import { liner }          from '@spare/liner'
import { matrixMargin }   from '@spare/matrix-margin'
import { matrixPadder }   from '@spare/matrix-padder'
import { size }           from '@vect/matrix'

const fluo = fluoMatrix.bind(MUTATE_PIGMENT)

export const _decoMatrix = function (rows = []) {
  const
    config = this,
    [height, width] = size(rows)
  if (!height || !width) return liner([], config)
  let { discrete, delim, bracket, level } = config
  const br = Br(bracket) ?? oneself
  rows = matrixMargin(rows, config) // use: top, bottom, left, right, read, rule
  rows = matrixPadder(rows, config) // use: ansi
  if (config.fluos) rows = fluo(rows, config.direct, config.fluos) // use: direct, presets, effects
  return liner(
    rows.map(line => br(line.join(delim))),
    { discrete, delim: COLF, bracket, level }
  )
}
